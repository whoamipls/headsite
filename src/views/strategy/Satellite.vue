<template>
    <div>
        <PageTitle :titles="['宇航中心','Space Center','商业卫星配套']" />
        <p class="hdTitle1 hdIconRect">ASR x50 AIS星载接收机, Kongsberg</p>
        <div class="container hdSectionEnd">
            <div class="row">
                <div class="col-sm-12">
                    <img class="illustration" src="assets/strategy/satellite/1.png" />
                </div>
            </div>
        </div>
        <p class="hdSection">该款接收机基于可重构软件定义无线电（SDR）基准进行设计，主要用于AIS 接收、解码和数字采样同步。借助加强算法、多天线支持、出众的动态范围，该级手机拥有首屈一指的端到端性能。该接收机的设计工作寿命超过7年，通过AIS 将船只侦测能力提升到一个新高度。</p>
        <p class="hdSection">新一代的星载AIS 接收机拥有超高性能解码器、多天线支持、内置冗余、低耗能、尺寸小、存储量大和更长的使用寿命等特点。其端到端性能已超出了现有的其他星载AIS 接收机，其出色的敏感度使得接收机甚至能够侦测到AIS 级中的Ｂ类船体。可重构的软件定义无线电（SDR）技术的利用可在轨对软件算法和频率进行修改，适应未来更先进的算法及兼容AIS/VDES 新标准的修改。</p>
        <p class="hdSection">康斯伯格在二十年前开始致力于 AIS 领域，是AIS 接收机最富经验的设备制造商。ASRx50 是康斯伯格第四代AIS 星载接收机，该产品的设计和制造融合了多年的海事专业知识。2010年搭载在AISS-1发射上天。2017年在国内HEAD-1在轨验证。</p>
        <div class="hdTitle1">
            <span>应用</span>
        </div>
        <p class="hdText hdIconTri">在近地轨道可用于微纳卫星主载荷和次载荷</p>
        <p class="hdText hdIconTri hdSectionEnd">SAR 及大型地球观测卫星的次要载荷</p>
        <div class="row">
            <div class="col-sm-6">
                <img class="illustration" src="assets/strategy/satellite/2.png" />
            </div>
            <div class="col-sm-6 text-right">
                <img class="illustration" src="assets/strategy/satellite/3.png" />
            </div>
        </div>
        <p class="hdTitle1 hdIconRect">xSCAPE100系列相机，SIMERA</p>
        <p class="hdSection">xSCAPE100相机可获取更详细，更深入和更广泛的谱段，这将为我们的客户和合作伙伴提供比以往更深入，更宝贵的预测洞察力。</p>
        <div class="hdTitle1">
            <span>产品特点</span>
        </div>
		<div class="hdTitle2">
			<span>1、更精确的空间细节</span>
        </div>
		<p class="hdSection">全高清功能，轨道高度500km处可达到5m分辨率</p>
		<div class="hdTitle2">
			<span>2、更广的谱段范围</span>
        </div>
		<p class="hdSection">相机配备有高级传感器，用户可在7波段的多光谱或154波段高光谱探测器中做选择。</p>
		<div class="hdTitle2">
			<span>3、更高的像素</span>
        </div>
		<p class="hdSection">采用最新的延时和集成技术，已改善信噪比特性和辐射性能。</p>
		<div class="hdTitle2">
			<span>4、可靠性更高</span>
        </div>
		<p class="hdSection">采用工业4.0可追溯性生产，对传感器进行一致性校准。 Xscape100可以让地理信息服务商的遥感任务快速而准确。</p>
		<div class="hdTitle1">
			<span>应用</span>
        </div>
        <p class="hdText hdIconTri">自然灾害</p>
        <p class="hdText hdIconTri">海岸线及水域监测</p>
        <p class="hdText hdIconTri">能源</p>
        <p class="hdText hdIconTri hdSectionEnd">安全</p>
		<div class="row">
            <div class="col-sm-6">
                <img class="illustration" src="assets/strategy/satellite/4.png" />
            </div>
            <div class="col-sm-6 text-right">
                <img class="illustration" src="assets/strategy/satellite/5.png" />
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
        width: 90%;
    }
</style>
