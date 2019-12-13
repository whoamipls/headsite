<template>
	<div id="wrap">
		<Header />
		<router-view />
		<Footer />
	</div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Home from '@/components/Home.vue'

export default {
	components: {
		Header,
		Footer,
		Home,
	}
}
</script>
