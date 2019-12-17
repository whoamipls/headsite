<template>
	<div>
		<span>有一个人保护，就不用自我保护</span>
		<router-view />
	</div>
</template>

<script>
export default {
  mounted: function() {
	  console.log('about');
  }
}
</script>

<style scoped lang="less">
</style>
