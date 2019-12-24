<template>
    <div>
        <PageTitle :titles="['“天行者”规划建设','&quot;Skywalker&quot; planning and construction','“天行者”星座应用及服务']" />
        <div class="hdTitle1Icon">
            <img src="assets/components/rect.png" />
            <span>空间物联网双向数据通信(DCS)</span>
        </div>
        <p class="hdSection">可提供具有低成本、广域覆盖、终端小型化等点，可提供数据采集、信息广播、报文传输等种应用和服务，可应用于:</p>
        <div class="hdSentenceIcon">
			<img src="assets/components/triangle.png" />
			<span>车辆及集装箱追踪</span>
		</div>
        <div class="hdSentenceIcon">
			<img src="assets/components/triangle.png" />
			<span>重型机械监测、控制</span>
		</div>
        <div class="hdSentenceIcon">
			<img src="assets/components/triangle.png" />
			<span>电力泛在物联网运行监测、控制</span>
		</div>
        <div class="hdSentenceIcon">
			<img src="assets/components/triangle.png" />
			<span>石油管线监控及数据采集</span>
		</div>
        <div class="hdSentenceIcon">
			<img src="assets/components/triangle.png" />
			<span>海洋浮标</span>
		</div>
        <div class="hdSentenceIcon">
			<img src="assets/components/triangle.png" />
			<span>科学仪器及气象采集</span>
		</div>
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <img class="illustration" src="assets/strategy/application/1.png" />
                </div>
                <div class="col-sm-6 text-right">
                    <img class="illustration" src="assets/strategy/application/2.png" />
                </div>
            </div>
        </div>
        <div class="hdTitle1Icon">
            <img src="assets/components/rect.png" />
            <span>全球船舶自动识别系统(AIS/VDES)</span>
        </div>
        <p class="hdSection">天行者星座可采集全球船只AIS信息，完成对全球海域和重点河道的近实时覆盖，形成AIS座全业务运营，拓展“21世纪海上丝绸之路”市场。</p>
        <div class="hdSentenceIcon">
			<img src="assets/components/triangle.png" />
			<span>船只监控</span>
		</div>
        <div class="hdSentenceIcon">
			<img src="assets/components/triangle.png" />
			<span>非法活动监测，非法捕鱼</span>
		</div>
        <div class="hdSentenceIcon">
			<img src="assets/components/triangle.png" />
			<span>事故判定</span>
		</div>
        <div class="hdSentenceIcon">
			<img src="assets/components/triangle.png" />
			<span>应急救援</span>
		</div>
        <div class="hdSentenceIcon">
			<img src="assets/components/triangle.png" />
			<span>海洋金融，使用AIS海洋大数据分析全球航运、LNG、石油、集装箱运力分析经济走势分析</span>
		</div>
        <div class="hdSentenceIcon">
			<img src="assets/components/triangle.png" />
			<span>港口管理及优化</span>
		</div>
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <img class="illustration" src="assets/strategy/application/3.png" />
                </div>
                <div class="col-sm-6 text-right">
                    <img class="illustration" src="assets/strategy/application/4.png" />
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <img class="illustration" src="assets/strategy/application/5.png" />
                </div>
                <div class="col-sm-6 text-right">
                    <img class="illustration" src="assets/strategy/application/6.png" />
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <img class="illustration" src="assets/strategy/application/7.png" />
                </div>
                <div class="col-sm-6 text-right">
                    <img class="illustration" src="assets/strategy/application/8.png" />
                </div>
            </div>
        </div>
        <div class="hdTitle1Icon">
            <img src="assets/components/rect.png" />
            <span>航空器广播式自动相关监视(ADS-B)</span>
        </div>
        <p class="hdSection">天行者星座可采集全球航班ADS-B信息，完成对全球航班提供近实时监控。可应用于：</p>
        <div class="hdSentenceIcon">
			<img src="assets/components/triangle.png" />
			<span>全球航班定位服务及ADS-B数据分发(成本是二雷达定位的1/9、精度10cm级别、高更新频率由30-40分钟/次变为每秒一次)</span>
		</div>
        <div class="hdSentenceIcon">
			<img src="assets/components/triangle.png" />
			<span>基于ADS-B的空事综合服务(航线优化、缩短班距离提高航线容量、节约燃油、空港管理、救援营救、预警等)</span>
		</div>
        <div class="hdSentenceIcon">
			<img src="assets/components/triangle.png" />
			<span>基于ADS-B数据的二次数据开发(面向政府、保险、金融业、航空公司、物流公司等)</span>
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
        width: 90%;
    }
    div.row {
        margin-top: 20px;
    }
</style>
