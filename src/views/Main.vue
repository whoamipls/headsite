<template>
	<div id="wrap">
		<Header />
		<router-view />
		<!--
		强制刷新
		<router-view :key="$route.path + $route.query.t"/>
		-->
		<FriendlyLink />
		<Footer />
	</div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import FriendlyLink from '@/components/FriendlyLink.vue'
import Footer from '@/components/Footer.vue'

export default {
	components: {
		Header,
		FriendlyLink,
		Footer,
	},
	mounted: function() {
		if(this.$route.fullPath.length <= 1) {
			this.$router.push('/Home');
		}
	}
}
</script>
