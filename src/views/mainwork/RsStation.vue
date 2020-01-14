<template>
    <div>
        <PageTitle :titles="['卫星遥感图像及服务','Satellite remote sensing images and services','遥感卫星地面站']" />
        <p class="hdSection">和德宇航可向国际客户提供中国遥感卫星地面站解决方案，直接接收中国多种高分辨率遥感卫星数据，具有实时性、多源性等特点。地面站数据处理与存储系统可以实现多卫星数据源管理、数据分发，形成当地空间数据中心，为各级政府和行业用户提供服务。</p>
        <b-row>
			<b-col>
				<b-img-lazy v-bind="mainProps" src="assets/mainwork/rsstation/1.png"></b-img-lazy>
                <p class="hdAnnotationC">图 : 地面站天线系统</p>
			</b-col>
			<b-col>
				<b-img-lazy v-bind="mainProps" src="assets/mainwork/rsstation/2.png"></b-img-lazy>
                <p class="hdAnnotationC">图 : 机动站</p>
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
