<template>
    <div>
        <PageTitle :titles="['卫星遥感图像及服务','Satellite remote sensing images and services','卫星图像一站式服务']" />
        <p class="hdPara">中国在轨陆地遥感卫星目前已超过30颗。其中包括国家中央政府出资建设的高分系列、资源三号系列、环境减灾系列、中巴资源卫星系列等卫星，也包括商业高分辨率遥感卫星，包括高景一号、北京二号、吉林一号等卫星。成像载荷包括了可见光、红外，合成孔径雷达（SAR）、视频等多种载荷。空间分辨率从0.5米到50米，可实现最快1天内多次重访。和德宇航可根据不同行业客户个性化需求，提供多源卫星数据采集及数据处理服务。</p>
        <b-row>
			<b-col>
				<b-img-lazy v-bind="mainProps" src="assets/mainwork/rsonestop/1.png"></b-img-lazy>
                <p class="hdAnnotationC">图 : 高景一号（0.5米分辨率）</p>
			</b-col>
			<b-col>
				<b-img-lazy v-bind="mainProps" src="assets/mainwork/rsonestop/2.png"></b-img-lazy>
                <p class="hdAnnotationC">图 : 高分二号（0.8米分辨率）</p>
			</b-col>
		</b-row>
        <b-row>
			<b-col>
				<b-img-lazy v-bind="mainProps" src="assets/mainwork/rsonestop/3.png"></b-img-lazy>
                <p class="hdAnnotationC">图 : 资源三号卫星（2米分辨率）</p>
			</b-col>
			<b-col>
				<b-img-lazy v-bind="mainProps" src="assets/mainwork/rsonestop/4.png"></b-img-lazy>
                <p class="hdAnnotationC">图 : 高分一号卫星（2米分辨率）</p>
			</b-col>
		</b-row>
        <b-row>
			<b-col>
				<b-img-lazy v-bind="mainProps" src="assets/mainwork/rsonestop/5.png"></b-img-lazy>
                <p class="hdAnnotationC">图 : 高分三号卫星（1米分辨率）</p>
			</b-col>
			<b-col>
				<b-img-lazy v-bind="mainProps" src="assets/mainwork/rsonestop/6.png"></b-img-lazy>
                <p class="hdAnnotationC">图 : 高分七号卫星（0.6米分辨率）</p>
			</b-col>
		</b-row>
        <b-row>
			<b-col>
				<b-img-lazy v-bind="mainProps" src="assets/mainwork/rsonestop/7.png"></b-img-lazy>
                <p class="hdAnnotationC">图 : 吉林一号卫星（0.7米分辨率）</p>
			</b-col>
			<b-col>
				<b-img-lazy v-bind="mainProps" src="assets/mainwork/rsonestop/8.png"></b-img-lazy>
                <p class="hdAnnotationC">图 : 中巴资源04星（5米分辨率）</p>
			</b-col>
		</b-row>
    </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
export default {
	components: {
		PageTitle,
	},
	data() {
		return {
			mainProps: {
				center: true,
				fluidGrow: true,
				blank: true,
				blankColor: '#bbb',
				width: 600,
				height: 400,
				class: 'my-5'
			}
		}
	}
}
</script>

<style scoped lang="less">
    .mb-5, .my-5 {
        margin-top: 10px!important;
        margin-bottom: 10px!important;
    }
</style>
