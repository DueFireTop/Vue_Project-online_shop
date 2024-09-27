<template>
    <div>
        <el-row :gutter="10">
            <el-col :span="6">
                <el-card>
                    <CardDetail cardTitle="总销售额" count="￥ 12650">
                        <template slot="charts">
                            <div style="display: flex; justify-content: space-between">
                                <div>
                                    <span>周同比&nbsp;&nbsp; 56.67%</span>
                                    <svg t="1726718206913" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2811" width="16" height="16"><path d="M752.64 376.32 546.56 202.88c-19.2-16-50.56-16-69.76 0L270.72 376.32C240 402.56 261.76 447.36 305.28 447.36L384 447.36C384 447.36 384 448 384 448l0 320c0 35.2 28.8 64 64 64l128 0c35.2 0 64-28.8 64-64L640 448c0 0 0-0.64 0-0.64l78.08 0C761.6 447.36 783.36 402.56 752.64 376.32z" p-id="2812" fill="#d81e06"></path></svg>
                                </div>
                                <div>
                                    <span>日同比&nbsp;&nbsp; 19.16%</span>
                                    <svg t="1726718237608" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3981" width="16" height="16"><path d="M258.048 568.832l253.952 279.04 253.952-279.04c22.016-24.064 13.312-43.52-18.944-43.52H629.76v-322.56c0-32.768-26.112-58.88-58.88-58.88h-117.76c-32.256 0-58.368 26.112-58.88 58.368v323.072H276.992c-31.744 0-40.448 19.456-18.944 43.52z" fill="#1afa29" p-id="3982"></path></svg>
                                </div>
                            </div>
                        </template>
                        <template slot="footer">
                            日销售额￥12423
                        </template>
                    </CardDetail>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card>
                    <CardDetail cardTitle="总访问量" count="88460">
                        <template slot="charts">
                            <LineChart></LineChart>
                        </template>
                        <template slot="footer">
                            日访问量 1234
                        </template>
                    </CardDetail>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card>
                    <CardDetail cardTitle="支付笔数" count="88460">
                        <template slot="charts">
                            <BarChart></BarChart>
                        </template>
                        <template slot="footer">
                            转化率 65%
                        </template>
                    </CardDetail>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card>
                    <CardDetail cardTitle="活动运营" count="78%">
                        <template slot="charts">

                        </template>
                        <template slot="footer">
                            <div style="display: flex; justify-content: space-between">
                                <div>
                                    <span>周同比&nbsp;&nbsp; 56.67%</span>
                                    <svg t="1726718206913" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2811" width="16" height="16"><path d="M752.64 376.32 546.56 202.88c-19.2-16-50.56-16-69.76 0L270.72 376.32C240 402.56 261.76 447.36 305.28 447.36L384 447.36C384 447.36 384 448 384 448l0 320c0 35.2 28.8 64 64 64l128 0c35.2 0 64-28.8 64-64L640 448c0 0 0-0.64 0-0.64l78.08 0C761.6 447.36 783.36 402.56 752.64 376.32z" p-id="2812" fill="#d81e06"></path></svg>
                                </div>
                                <div>
                                    <span>日同比&nbsp;&nbsp; 19.16%</span>
                                    <svg t="1726718237608" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3981" width="16" height="16"><path d="M258.048 568.832l253.952 279.04 253.952-279.04c22.016-24.064 13.312-43.52-18.944-43.52H629.76v-322.56c0-32.768-26.112-58.88-58.88-58.88h-117.76c-32.256 0-58.368 26.112-58.88 58.368v323.072H276.992c-31.744 0-40.448 19.456-18.944 43.52z" fill="#1afa29" p-id="3982"></path></svg>
                                </div>
                            </div>
                        </template>
                    </CardDetail>
                </el-card>
            </el-col>
        </el-row>        
    </div>
</template>

<script>
import CardDetail from './Detail';
import LineChart from './LineChart';
import BarChart from './BarChart';
import ElementUI from 'element-ui';

export default {
    name: 'TopCard',
    components: {
        CardDetail,
        LineChart,
        BarChart,
    }
}
</script>

<style>

</style>