<template>
	<div id="wrap">
		<Header />
		<router-view />
		<!--
		<router-view :key="$route.path + $route.query.t"/>
		-->
		<Footer />
	</div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
	components: {
		Header,
		Footer,
	}
}
</script>
