<template>
    <div>
        <PageTitle :titles="['“天行者”规划建设','&quot;Skywalker&quot; planning and construction','“天行者”星座']" />
        <p class="hdSection">“天行者”星座是由北京和德宇航技术有限公司提出的先进的微小卫星星座，提供窄带空间物联网双向数据通信(DCS)和全球船舶位置监控(AIS)、全球航空器监控（ADS-B）等空间服务。“天行者”星座由48颗卫星组成，均匀分布在6个轨道面，每个轨道面8颗卫星，可为全球用户提供实时无缝覆盖的服务。卫星星座分布及通信示意图如下：</p>
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <video width="100%" controls autobuffer>
			        <source src="assets/strategy/skywalker/1.mp4" type="video/mp4;">
                </div>
            </div>
        </div>
        <p class="hdSection">卫星均基于50公斤级成熟卫星平台设计，搭载多个有效载荷，以提供先进的通信和数据采集服务，同时具备很好的扩展能力，可承载客户指定的额外有效载荷（无线电、光电类型）。</p>
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <img class="illustration" src="assets/strategy/skywalker/2.png" />
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <video width="100%" controls autobuffer>
			        <source src="assets/strategy/skywalker/3.mp4" type="video/mp4;">
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
