<template>
    <div>
        <section class="sub-bnr" data-stellar-background-ratio="0.5" :style="bannerStyle">
			<div class="position-center-center">
				<div class="container">
				<!--
				<h3>关于我们</h3>
				<hr>
				 <ol class="breadcrumb">
					<li><a href="#">Home</a></li>
					<li class="active">About</li>
				</ol> 
				-->
				</div>
			</div>
		</section>
		<section class="innovaction light-sec" v-if="!!menuTitles && menuTitles.length==2">
			<div class="container">
				<div class="row">
					<div class="col-sm-4">
						<div class="menuTitle">
							<div style="display: inline-block">
								<p>{{menuTitles[0]}}</p>
								<p>{{menuTitles[1]}}</p>
							<div>
						</div>
					</div>
					<div class="col-sm-8 text-right">
					</div>
				</div>
			</div>
		</section>
    </div>
</template>

<script>
	export default {
		props: {
			image: String,		// 背景图
			menuTitles: Array,	// 菜单标题（中、英文）
		},
		data() {
			return {
				bannerStyle: `background: url(${this.image}) no-repeat`
			}
		}
	}
</script>

<style scoped lang="less">
	section.sub-bnr {
		background-size:100% 100%!important;
		-moz-background-size:100% 100%!important;
	}

	.menuTitle {
		background: fade(@hdLMenuChildColorSel, 66%);//#4068f5aa;
		height: 130px;
		line-height: 130px;
		width: @hdLMenuWidth;
		position: absolute;
		bottom: 1px;
		text-align: center;
		div {
			vertical-align: middle;
			p {
				margin: 0px;
			}
			:nth-child(1) {
				color: #fff;
				font: 32px bold;
			}
			:nth-child(2) {
				color: #ffffff7f;
				font: 20px bold;
				opacity: 50%;
				&:before {
					content: "■";
					font-size: 25px;
					margin-right: 5px;
				}
			}
		}
    }
</style>
