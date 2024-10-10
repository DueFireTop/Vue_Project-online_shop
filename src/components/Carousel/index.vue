<template>
    <div>
        <div class="swiper-container" ref="floor1Swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(carousel, index) in list" :key="carousel.id">
                    <img :src="carousel.imgUrl"/>
                </div>
                
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>

            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper';

    export default {
        name: 'CarouseIndex',
        props: ['list'],
        watch: {
            list: {
            // 立即监听，不管数据有没有发生变化，上来就监听一次
                immediate: true,
                handler(newValue, oldValue) {
                    this.$nextTick(() => {
                        var mySwiper = new Swiper (
                            this.$refs.floor1Swiper, // swiper的根元素 
                            {
                                loop: true, // 循环模式选项

                                // 如果需要分页器
                                pagination: {
                                    el: '.swiper-pagination',
                                    clickable : true, // 点击分页器可以切换到相应的slide
                                },

                                // 如果需要前进后退按钮
                                navigation: {
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev',
                                },
                            }
                        );
                    })
                }
            }
        }

    }
</script>

<style>

</style>