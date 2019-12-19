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
    </div>
</template>

<script>
	export default {
		props: {
			// 背景图
			image: String,
		},
		data() {
			return {
				bannerStyle: `background: url(${this.image}) no-repeat`,
			}
		}
	}
</script>
