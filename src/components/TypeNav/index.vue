<template>
    <div>
        <!-- 商品分类导航 -->
        <div class="type-nav">
            <div class="container">
                <div @mouseleave="leaveShowSort" @mouseenter="enterShowSort">
                    <h2 class="all">全部商品分类</h2>
                    <transition name="sort">
                        <div class="sort" v-show="isShowSort">
                            <div class="all-sort-list2" @click="goSearch">
                                <!-- :class="{cur:currentIndex === index}" 如果当前鼠标移动到哪个一级分类，就给哪个分类添加一个cur样式 -->
                                <div class="item" v-for="(c1, index) in categoryList" :key="c1.categoryId" :class="{cur:currentIndex === index}">
                                    <h3 @mouseenter="changeIndex(index)" >
                                        <!-- 给a标签添加自定义属性 data-category-name -->
                                        <a :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId">{{ c1.categoryName }}</a>
                                    </h3>
                                    <!-- :style="{display: currentIndex === index ? 'block' : 'none'}" 如果当前鼠标移动到哪个一级分类，就给哪个一级分类的display属性添加一个block -->
                                    <div class="item-list clearfix" :style="{display: currentIndex === index ? 'block' : 'none'}">
                                        <div class="subitem" v-for="(c2, index) in c1.categoryChild" :key="c2.categoryId">
                                            <dl class="fore">
                                                <dt>
                                                    <a :data-categoryName="c2.categoryName" :data-category2Id="c2.categoryId">{{ c2.categoryName }}</a>
                                                </dt>
                                                <dd>
                                                    <em v-for="(c3, index) in c2.categoryChild" :key="c3.categoryId">
                                                        <a :data-categoryName="c3.categoryName" :data-category3Id="c3.categoryId">{{ c3.categoryName }}</a>
                                                    </em>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
                <nav class="nav">
                    <a href="###">服装城</a>
                    <a href="###">美妆馆</a>
                    <a href="###">尚品汇超市</a>
                    <a href="###">全球购</a>
                    <a href="###">闪购</a>
                    <a href="###">团购</a>
                    <a href="###">有趣</a>
                    <a href="###">秒杀</a>
                </nav>
            </div>
            
        </div>
    </div>
</template>

<script>
// 用辅助函数，从仓库中获取数据
import { mapState } from 'vuex';

// import _ from 'lodash'; // 这种引入方式是把lodash的全部功能函数引入
import {throttle} from 'lodash'; // 按需引入，引入节流函数


export default {
    name: 'TypeNav',
    data() {
        return {
        // 存储用户鼠标移动到哪个一级分类
        currentIndex: -1,
        isShowSort: true, // 控制商品分类的显示与隐藏
        }
    },
    computed: {
        // 辅助函数，从仓库中获取数据（数组写法）
        // ...mapState(['categoryList'])

        // 对象写法
        ...mapState({
            // 右侧需要的是一个函数，当使用这个计算属性时，右侧函数会立即执行一次
            // 注入一个参数state，其实是大仓库中的数据
            // categoryList:(state)=>{
            //     return state.home.categoryList
            // }
            
            categoryList:state=>state.home.categoryList //简写形式
        })
    },
    methods: {
        /**
         * 防抖函数
         * 鼠标进入修改响应式数据currentIndex属性
         * @param index 鼠标移动到哪个一级分类元素的索引值
         */
        changeIndex:throttle(function(index){
            this.currentIndex = index;
        }, 50),
        /**
         * 鼠标离开时，如果不在home页面，就隐藏商品分类
         */
        leaveShowSort(){
            this.currentIndex = -1;
            if (this.$route.path !== '/home') {
                this.isShowSort = false;
            }
        },
        goSearch(event){
            // 编程式导航 + 事件委派
            // 利用事件委派，会遇到的问题：1. 如何知道点击的一定是a标签；2. 如何获取参数（1、2、3级分类的name、id）
            // 针对第一个问题，给a标签加上自定义属性 data-category-name，然后通过自定义属性获取；

            let element = event.target; // 获取当前点击的元素，需要找到带有data-category-name属性的节点
            console.log(element);
            // 节点有一个属性 dataset，可以获取节点的自定义属性和属性值
            let {categoryname, category1id, category2id, category3id} = element.dataset; // 如果标签身上拥有 categoryname 属性，那么一定是 a 标签
            
            if (categoryname) {
                // 整理路由跳转的参数
                let location = {name: 'search'};
                let query = {categoryName: categoryname}
                if (category1id) {
                    query.category1Id = category1id
                }else if (category2id) {
                    query.category2Id = category2id
                }else if (category3id) {
                    query.category3Id = category3id
                }

                // 整理完参数
                // 路由跳转时，如果带有params参数，顺便传递过去
                if(this.$route.params) {
                    location.params = this.$route.params
                    location.query = query
                }

                // 路由跳转
                this.$router.push(location)
            }
        },
        /**
         * 当鼠标移入时，显示商品分类列表
         */
        enterShowSort(){
            this.isShowSort = true
        }
    },
    // 组件挂载完毕，可以向服务器发请求
    mounted() {
        

        // 当组件挂载完毕，如果不是Home组件，就让 isShowSort 属性变为 false
        if (this.$route.path !== '/home'){
            this.isShowSort = false;
        }
    },
}
</script>

<style lang="less" scoped>
.type-nav {
        border-bottom: 2px solid #e1251b;

        .container {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            position: relative;

            .all {
                width: 210px;
                height: 45px;
                background-color: #e1251b;
                line-height: 45px;
                text-align: center;
                color: #fff;
                font-size: 14px;
                font-weight: bold;
            }

            .nav {
                a {
                    height: 45px;
                    margin: 0 22px;
                    line-height: 45px;
                    font-size: 16px;
                    color: #333;
                }
            }

            .sort {
                position: absolute;
                left: 0;
                top: 45px;
                width: 210px;
                height: 510px;
                position: absolute;
                background: #fafafa;
                z-index: 999;

                .all-sort-list2 {
                    .item {
                        h3 {
                            line-height: 30px;
                            font-size: 14px;
                            font-weight: 400;
                            overflow: hidden;
                            padding: 0 20px;
                            margin: 0;

                            a {
                                color: #333;
                            }
                        }

                        .item-list {
                            display: none;
                            position: absolute;
                            width: 734px;
                            min-height: 460px;
                            background: #f7f7f7;
                            left: 210px;
                            border: 1px solid #ddd;
                            top: 0;
                            z-index: 9999 !important;

                            .subitem {
                                float: left;
                                width: 650px;
                                padding: 0 4px 0 8px;

                                dl {
                                    border-top: 1px solid #eee;
                                    padding: 6px 0;
                                    overflow: hidden;
                                    zoom: 1;

                                    &.fore {
                                        border-top: 0;
                                    }

                                    dt {
                                        float: left;
                                        width: 54px;
                                        line-height: 22px;
                                        text-align: right;
                                        padding: 3px 6px 0 0;
                                        font-weight: 700;
                                    }

                                    dd {
                                        float: left;
                                        width: 415px;
                                        padding: 3px 0 0;
                                        overflow: hidden;

                                        em {
                                            float: left;
                                            height: 14px;
                                            line-height: 14px;
                                            padding: 0 8px;
                                            margin-top: 5px;
                                            border-left: 1px solid #ccc;
                                        }
                                    }
                                }
                            }
                        }

                        
                    }
                    .cur {
                        background-color: skyblue;
                    }
                }
            }

            // 过渡动画的样式
            // 过渡动画进入状态
            .sort-enter {
                height: 0px;
            }
            // 过渡动画结束状态
            .sort-enter-to {
                height: 510px;
            }
            .sort-enter-active {
                transition: all 0.5s linear; // 过渡时间, 过渡方式
            }

        }
    }
</style>