<template>
	<div class="overviewContainer">
		<PageTitle :titles="['公司概况','Company Overview','公司概况']" />
		<div style="float:right; padding-left:20px">
			<video width="400" height="300" controls autobuffer src="assets/common/video/advertise.mp4" poster="assets/common/video/advertise.png" />
		</div>
		<div>
			<p class="hdCompanyCh">北京和德宇航技术有限公司</p>
			<p class="hdCompanyEn">China HEAD Aerospace Technology Co.</p>
			<p class="hdParaTab hdPMB">北京和德宇航技术有限公司创建于2007年，总部位于北京，在香港、荷兰、法国设立了实体子公司，在南非、西班牙、摩洛哥、墨西哥和上海设立了代表处。公司拥有专业的国际化团队，吸引了包括欧洲政府顾问、大型企业前高管、高级律师以及国际宇航领域知名技术专家等高端人才，建立起遍布全球的超过40家合作伙伴和分销商的服务网络。</p>
			<p class="hdParaTab hdPMB">和德宇航业务涵盖宇航国际贸易、卫星数据融合应用和卫星通信服务三大领域：先后参与了我国载人航天、嫦娥探月、北斗导航等多个重大航天专项任务，同时把中国先进的宇航技术和产品成功出口至意大利、瑞士等国，成功架起一座国际间航天合作的桥梁；公司拥有专业的技术研发团队，已为多国政府和行业客户提供遥感监测和卫星通信服务，拥有国土测绘、森林防火、水质监测、应急通信等众多成熟的空间大数据融合应用解决方案；公司自我规划设计由48-66颗小卫星组成的低轨物联网星座“天行者”系统，已于2017年11月和2019年12月成功发射了3颗试验卫星，预计在2022年完成“天行者”系统建设，将为智慧海洋、海事监管、跨境物流等行业用户提供完整的智能空间信息服务。</p>
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
	    mainReady();
    }
}
</script>

<style scoped lang="less">
	.overviewContainer {
		video {
			background: black;
		}
	}
	p.hdCompanyCh {
		text-align: left;
		font-size: @hdCompanyFontSizeCh;
		margin: 0;
		font-weight: normal;
		color: @hdCompanyColorCh;
	}
	p.hdCompanyEn {
		text-align: left;
		font-size: @hdCompanyFontSizeEn;
		padding-bottom: 10px;
		color: @hdCompanyColorEn;
	}
</style>
