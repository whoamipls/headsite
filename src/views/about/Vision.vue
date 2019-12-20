<template>
    <div>
		<PageTitle :titles="['公司愿景','Company Vision','公司愿景']" />
		<div class="title">
			<img src="assets/components/bluerect.png" />
			<span>我们的使命：</span>
		</div>
		<p class="content">为客户提供快速有效的空间应用解决方案，建立产业融合的空间信息生态圈，帮助客户感知地球、精准决策！</p>
		<br>
		<div class="title">
			<img src="assets/components/bluerect.png" />
			<span>我们的愿景：</span>
		</div>
		<p class="content">发展成为同行市值最大、受人尊敬、引领产业方向的科技创新型宇航服务企业。</p>
		<br>
		<p class="content">第一阶段发展目标：</p>
		<p class="content">2017-2020年，通过国际合作构建天行者星座系统，启动全球地面站网络建设，整合多行业在轨卫星数据源，创建空间大数据综合应用平台，为全球客户提供信息应用服务。</p>
		<br>
		<p class="content">第二阶段发展目标：</p>
		<p class="content">2021-2024年，打造世界一流的智能空间信息服务业系统平台，构建全球服务网络+专属星座+空间大数据应用平台，为全球客户提供快速有效的应用服务。</p>
		<br>
		<p class="content">第三阶段发展目标：</p>
		<p class="content">2025-2030年，建立多产业融合的空间信息服务生态圈，牵引产业发展方向，孵育新客户，催生新需求。以系统综合能力为亿万终端消费者服务，构建可持续发展的生态体系。</p>
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
	.title {
		.paraTitle();
	}
</style>
