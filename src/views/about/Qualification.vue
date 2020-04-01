<template>
    <div>
		<PageTitle :titles="['资质荣誉','Qualification honor','资质与认证','合规性是企业发展的基础，和德严格遵守国家法律法规的各项要求，积极参与行业标准的制定与推广']" />
		<b-row v-for="i in 7">
			<b-col>
				<b-img-lazy v-bind="mainProps" :src="getImageUrl(i*3-2)"></b-img-lazy>
			</b-col>
			<b-col>
				<b-img-lazy v-if="i*3-1<=20" v-bind="mainProps" :src="getImageUrl(i*3-1)"></b-img-lazy>
			</b-col>
			<b-col>
				<b-img-lazy v-if="i*3<=20" v-bind="mainProps" :src="getImageUrl(i*3)"></b-img-lazy>
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
    mounted: function() {
    },
	methods: {
		getImageUrl: function(id) {
			return `assets/about/qualification/honor${id}.png`;
		}
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
	.mt-5, .my-5 {
		margin-top: 0rem!important;
	}
</style>
