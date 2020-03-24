<template>
    <div>
        <PageTitle :titles="['“天行者”星座建设','&quot;Skywalker&quot; constellation construction','卫星大数据系统开发及应用服务']" />
        <p class="hdHead1 hdH1MB hdIconRect">空间物联网双向数据通信(DCS)</p>
        <p class="hdPara hdPMB">提供低成本、小型化、广域覆盖的终端产品，集信息广播、数据采集、报文传输等多种服务形式，可广泛应用于：</p>
        <p class="hdText hdIconTri">车辆及集装箱追踪</p>
        <p class="hdText hdIconTri">重型机械监测、控制</p>
        <p class="hdText hdIconTri">电力泛在物联网运行监测、控制</p>
        <p class="hdText hdIconTri">石油管线监控及数据采集</p>
        <p class="hdText hdIconTri">海洋浮标</p>
        <p class="hdText hdIconTri">科学仪器及气象采集</p>
        <div class="container hdPMB">
            <div class="row">
                <div class="col-sm-6">
                    <img class="illustration" src="assets/mainwork/skywalker/applicationservice/1.png" />
                </div>
                <div class="col-sm-6 text-right">
                    <img class="illustration" src="assets/mainwork/skywalker/applicationservice/2.png" />
                </div>
            </div>
        </div>
        <p class="hdHead1 hdH1MB hdIconRect">全球船舶自动识别系统(AIS/VDES)</p>
        <p class="hdPara hdPMB">采集全球海域的船舶AIS数据，完成海事和交通对重要航道、监管区域的近实时覆盖，快速形成VDES/AIS业务服务能力。</p>
        <p class="hdText hdIconTri">船舶、航路监控</p>
        <p class="hdText hdIconTri">应急救援</p>
        <p class="hdText hdIconTri">事故判定</p>
        <p class="hdText hdIconTri">港口管理及优化</p>
        <p class="hdText hdIconTri">监测非法捕捞</p>
        <p class="hdText hdIconTri">海洋金融，通过大数据分析全球航运、LNG、石油、大宗货物、集装箱运输来判断经济运行规律和分析市场形势</p>
        <div class="container hdPMB">
            <div class="row">
                <div class="col-sm-6">
                    <img class="illustration" src="assets/mainwork/skywalker/applicationservice/3.png" />
                </div>
                <div class="col-sm-6 text-right">
                    <img class="illustration" src="assets/mainwork/skywalker/applicationservice/4.png" />
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <img class="illustration" src="assets/mainwork/skywalker/applicationservice/5.png" />
                </div>
                <div class="col-sm-6 text-right">
                    <img class="illustration" src="assets/mainwork/skywalker/applicationservice/6.png" />
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <img class="illustration" src="assets/mainwork/skywalker/applicationservice/7.png" />
                </div>
                <div class="col-sm-6 text-right">
                    <img class="illustration" src="assets/mainwork/skywalker/applicationservice/8.png" />
                </div>
            </div>
        </div>
        <p class="hdHead1 hdH1MB hdIconRect">航空器广播式自动相关监视(ADS-B)</p>
        <p class="hdPara hdPMB">采集全球航班ADS-B的数据信息，优化航路，节约燃油和航程，对全球航班提供近实时的全航程监测。可应用于：</p>
        <p class="hdText hdIconTri">全球航班定位服务及ADS-B数据分发(成本是二雷达定位的1/9、精度10cm级别、高更新频率由30-40分钟/次变为每秒一次)</p>
        <p class="hdText hdIconTri">基于ADS-B的空事综合服务(航线优化、缩短班距离提高航线容量、节约燃油、空港管理、救援营救、预警等)</p>
        <p class="hdText hdIconTri">基于ADS-B数据的二次数据开发(面向政府、保险、金融业、航空公司、物流公司等)</p>
    </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
export default {
	components: {
		PageTitle,
	},
    mounted: function() {
    }
}
</script>

<style scoped lang="less">
    img.illustration {
        width: 100%;
    }
    div.container {
        width: 90%;
    }
    div.row {
        margin-top: 20px;
    }
</style>
