<template>
    <div class="charts" ref="charts"></div>
</template>

<script>
// 引入echarts
import * as echarts from 'echarts'

export default {
    name: 'LineChart',
    mounted(){
        if (this.$refs.charts) {
            // 初始化echarts实例
            let lineChart = echarts.init(this.$refs.charts);

            // 配置数据
            lineChart.setOption({
                xAxis: {
                    show: false,
                    type: 'category'
                },
                yAxis: {
                    show: false
                },
                // 系列
                series:[
                    {
                        type: 'line',
                        // 一组随机数，不要5的倍数
                        data: [20, 13, 50, 18, 14, 31, 85, 69, 43, 10, 72, 78, 55, 55, 61, 53],
                        // 拐点样式的设置
                        itemStyle: {
                            opacity: 0
                        },
                        // 线条的样式
                        lineStyle:{
                            color: 'purple'
                        },
                        // 填充颜色的设置
                        areaStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: 'purple' // 0% 处的颜色
                                }, 
                                {
                                    offset: 1, color: 'white' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            }
                        }
                    }
                ],
                grid:{
                    left: 0,
                    top: 0,
                    left: 0,
                    bottom: 0
                }
            })
        } else {
            console.error('DOM element not found');
        }
       
    }
}
</script>

<style>
    .charts{
        width: 100%;
        height: 100%;
    }
</style>