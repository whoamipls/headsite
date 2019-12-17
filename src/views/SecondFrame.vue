<template>
    <div>
		<Banner image='images/about/banner.png'/>
		<!-- Content -->
		<div id="content">
			<!-- TEAM -->
			<section class="innovaction light-sec">
				<div class="container">
					<div class="row">
						<div class="col-sm-4">
							<LeftMenu />
						</div>
						<!-- Image -->
						<div class="col-sm-8 text-right">
                            <router-view />
                        </div>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import LeftMenu from '@/components/LeftMenu.vue'
export default {
	components: {
		Banner,
		LeftMenu,
	},
    mounted: function() {
		// alert(1);
	    // mainReady();
    }
}
</script>

<style scoped lang="less">
</style>
