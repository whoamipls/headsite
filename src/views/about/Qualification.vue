<template>
    <div>
		<Title :titles="['资质荣誉','Qualification honor','资质与认证','合规性是企业发展的基础，和德严格遵守国家法律法规的各项要求，积极参与行业标准的制定与推广']" />
		<b-row v-for="i in 8">
			<b-col>
			<b-img thumbnail fluid :src="`images/about/honor${i*3-2}.png`" alt="Image 1"></b-img>
			</b-col>
			<b-col>
			<b-img v-if="i*3-1<23" thumbnail fluid :src="`images/about/honor${i*3-1}.png`" alt="Image 2"></b-img>
			</b-col>
			<b-col>
			<b-img v-if="i*3<23" thumbnail fluid :src="`images/about/honor${i*3}.png`" alt="Image 3"></b-img>
			</b-col>
		</b-row>
	</div>
</template>

<script>
import Title from '@/components/Title.vue'
export default {
	components: {
		Title
	},
    mounted: function() {
    }
}
</script>

<style scoped lang="less">
</style>
