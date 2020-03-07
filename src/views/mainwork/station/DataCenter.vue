<template>
    <div>
        <PageTitle :titles="['地面站系统建设','Satellite ground station system construction','数据服务中心']" />
        <p class="hdPara hdPMB">数据服务中心紧贴地方数字经济发展需求，以“天行者”星座数据处理、存储及应用为基础，在架构设计上突出扩展性，不断拓展数据种类与来源，瞄准数据规模化、产业化应用，配合政府建设规划，整合多行业、多领域大数据，逐步形成数据综合利用、智能利用新趋势。</p>
        <p class="hdHead1 hdH1MB hdIconRect">DCS物联网应用</p>
        <p class="hdPara">基于“天行者”星座、全球服务网络、空间大数据应用平台，发挥低成本、广域覆盖、终端小型化等特点，为电网、物流、工业、智慧城市等多个行业提供数据采集、信息广播、报文传输等多种应用和服务。</p>
        <div class="container hdPMB">
            <div class="row">
                <div class="col-sm-12">
                    <img class="illustration" src="assets/mainwork/station/datacenter/1.png" />
                </div>
            </div>
        </div>
        <p class="hdHead1 hdH1MB hdIconRect">ADS-B航空应用</p>
        <p class="hdPara">是一种基于全球卫星定位系统和利用空地、空空数据链实现交通监控和信息传递的空管监视新技术。它不需要飞行员干预以及地面询问，航空器或车辆自动广播由机载星基导航和定位系统生成的精确定位信息，地面设备和其他航空器通过航空数据链接收此信息，卫星系统、飞机、车辆以及地基系统通过高速数据链进行空天地一体化协同监视。</p>
        <div class="container hdPMB">
            <div class="row">
                <div class="col-sm-12">
                    <img class="illustration" src="assets/mainwork/station/datacenter/2.png" />
                </div>
            </div>
        </div>
        <p class="hdHead1 hdH1MB hdIconRect">AIS船舶跟踪</p>
        <p class="hdPara">基于“天行者”星座、全球服务网络、空间大数据应用平台，完成对全球海域和重点河道的近实时覆盖，针对远洋船舶、智慧港口、应急救援、海洋金融等海洋领域提供“智慧海事” 服务，拓展“21世纪海上丝绸之路”市场。</p>
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <img class="illustration" src="assets/mainwork/station/datacenter/3.png" />
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
    }
    div.row {
        margin-top: 20px;
    }
</style>
