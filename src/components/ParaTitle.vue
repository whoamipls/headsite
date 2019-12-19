<template>
    <div>
        <img src='rect.png' />
        <span style="vertical-align: middle;">我们的世界</span>
    </div>
</template>

<script>
	export default {
		props: {
			text: String,			// 内容
			fontSize: {				// 字体大小
				type: String,
				default: '14px'
			},
			fontWeight: {			// 字体粗细
				type: String,
				default: 'normal'
			},
			titleMargin: {
				type: String,
			}
		},
        mounted: function() {
        }
	}
</script>

<style scoped lang="less">
	div {
		/* height: 500px; */
		/* line-height: 500px; */
		margin: 50px 0px;
		// border: 1px solid;
	}
	img,
	span {
		display: inline-block;
		vertical-align: middle;
	}
	span {
		margin-left: 20px;
		font-size: 28px;
		font-weight: bold;
	}
</style>