<template>
    <div>
		<Banner :image='image' :menuTitles="menuTitles"/>
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
						<div class="col-sm-8 text-right" style="padding:40px 0px">
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
    props: {
        image: String,
		menuTitles: Array,
    }
}
</script>

<style scoped lang="less">
</style>
