<template>
    <div>
        <PageTitle :titles="['“天行者”规划建设','&quot;Skywalker&quot; planning and construction','“天行者”星座']" />
        <p class="hdPara">“天行者”星座是北京和德宇航技术有限公司自行研制、规划建设的微小卫星星座，将为全球用户提供窄带空间物联网双向数据通信（DCS)和全球船舶位置监控（AIS/VDES）、全球航空器（ADS-B）监控等空间信息服务。“天行者”是一个先进的微小卫星星座，由48颗卫星组网，均匀分布在六个近地轨道面上，可为用户提供实时无缝对接、全覆盖的数据应用服务。卫星星座分布及通信示意图如下：</p>
        <div class="container hdPMTB">
            <div class="row">
                <div class="col-sm-12">
                    <video width="100%" controls autobuffer>
			        <source src="assets/common/video/skywalker.mp4" type="video/mp4;">
                </div>
            </div>
        </div>
        <p class="hdPara">窄带小卫星基于数十公斤级成熟卫星平台设计，主要搭载DCS、AIS、VDES、ADS-B等多种有效载荷，用于提供先进的通信和数据采集服务，具备较好的扩展能力，可承载客户需要或指定的特种有效载荷，如无线电、光电类型，空间观测及其他需求等。</p>
        <div class="container hdPMTB">
            <div class="row">
                <div class="col-sm-12">
                    <img class="illustration" src="assets/mainwork/skywalker/skywalker/2.png" />
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <video width="100%" controls autobuffer>
			        <source src="assets/common/video/rocket.mp4" type="video/mp4;">
                </div>
            </div>
        </div>
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
        width: 70%;
        text-align: Center;
    }
</style>
