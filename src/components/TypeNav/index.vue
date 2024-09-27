<template>
    <div>
        <!-- 商品分类导航 -->
        <div class="type-nav">
            <div class="container">
                <h2 class="all">全部商品分类</h2>
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
                <div class="sort">
                    <div class="all-sort-list2">
                        <!-- :class="{cur:currentIndex === index}" 如果当前鼠标移动到哪个一级分类，就给哪个分类添加一个cur样式 -->
                        <div class="item" v-for="(c1, index) in categoryList" :key="c1.categoryId" :class="{cur:currentIndex === index}">
                            <h3 @mouseenter="changeIndex(index)" @mouseleave="changeIndex(-1)">
                                <a href="">{{ c1.categoryName }}</a>
                            </h3>
                            <!-- :style="{display: currentIndex === index ? 'block' : 'none'}" 如果当前鼠标移动到哪个一级分类，就给哪个一级分类的display属性添加一个block -->
                            <div class="item-list clearfix" :style="{display: currentIndex === index ? 'block' : 'none'}">
                                <div class="subitem" v-for="(c2, index) in c1.categoryChild" :key="c2.categoryId">
                                    <dl class="fore">
                                        <dt>
                                            <a href="">{{ c2.categoryName }}</a>
                                        </dt>
                                        <dd>
                                            <em v-for="(c3, index) in c2.categoryChild" :key="c3.categoryId">
                                                <a href="">{{ c3.categoryName }}</a>
                                            </em>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// 用辅助函数，从仓库中获取数据
import { mapState } from 'vuex';

export default {
    name: 'TypeNav',
    data() {
        return {
        // 存储用户鼠标移动到哪个一级分类
        currentIndex: -1,
        
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
         * 鼠标进入修改响应式数据currentIndex属性
         * @param index 鼠标移动到哪个一级分类元素的索引值
         */
        changeIndex(index){
            this.currentIndex = index;
        }
    },
    // 组件挂载完毕，可以向服务器发请求
    mounted() {
        // 通知vuex发请求，获取数据，存储与仓库之中
        this.$store.dispatch('categoryList')
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
                height: 461px;
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
        }
    }
</style>