<template>
	<div style="margin-bottom:50px">
		<p style="text-align:left"><span class="title0">{{titles[0]}}</span>&nbsp;<span class="title1">{{titles[1]}}</span></p>
		<hr>
		<p class="title2">{{titles[2]}}</p>
		<p v-if="titles.length>3" class="title3">{{titles[3]}}</p>
	</div>
</template>

<script>
	export default {
		props: {
			titles: []
		},
        mounted: function() {
        }
	}
</script>

<style scoped lang="less">
	.title0 {
		font: 18px bold;
	}
	.title1 {
		font: 12px bold;
		color: gray;
	}
	.title2 {
		text-align: center;
		margin-top: 50px;
		font: 28px bold;
		color: '#363940';
	}
    .title3 {
		text-align: center;
		font: 14px;
		color: gray;
	}
</style>
