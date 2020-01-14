<template>
	<div class="pageTitleContainer">
		<p style="text-align:left"><span class="hdHeaderZh">{{titles[0]}}</span><span class="hdHeaderEn">{{titles[1]}}</span></p>
		<hr>
		<p class="hdBigTitle">{{titles[2]}}</p>
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
	.pageTitleContainer {
		hr {
			margin-top: 0.5rem!important;
		}
	}
	div {
		margin-bottom: @hdTitleMargin;
	}
	.hdHeaderZh {
		font: @hdHeaderFontCh;
		color: @hdTitleColor;
	}
	.hdHeaderEn {
		font: @hdHeaderFontEn;
		color: @hdHeaderColorEn;
		margin-left: 8px;
	}
	.hdBigTitle {
		text-align: center;
		margin-top: @hdTitleMargin;
		font: @hdTitleFont;
		color: @hdTitleColor;
	}
</style>
