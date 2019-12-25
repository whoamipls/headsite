<template>
	<div>
		<p style="text-align:left"><span class="hdHeaderZh">{{titles[0]}}</span>&nbsp;<span class="hdHeaderEn">{{titles[1]}}</span></p>
		<hr>
		<p class="hdTitle">{{titles[2]}}</p>
		<p v-if="titles.length>3" class="hdAnnotationC">{{titles[3]}}</p>
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
	div {
		margin-bottom: @hdTitleMargin;
	}
	.hdHeaderZh {
		font: @hdHeaderFontCh;
	}
	.hdHeaderEn {
		font: @hdHeaderFontEn;
		color: @hdHeaderColorEn;
	}
	.hdTitle {
		text-align: center;
		margin-top: @hdTitleMargin;
		font: @hdTitleFont;
		color: @hdTitleColor;
	}
</style>
