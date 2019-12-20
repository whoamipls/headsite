<template>
	<div class="div1">
		<div class="div2" v-for="y in years">
			<img src="assets/1.png">
			<span class="year">{{y.year}}</span>
			<ul>
				<li v-for="m in y.months"><span>{{m.month}}</span>&nbsp;<span>{{m.text}}</span></li>
				<li><span>9月</span>&nbsp;&nbsp;<span>北京市软件和信息服务协会理生会员单位</span></li>
				<li><span>7月</span>&nbsp;&nbsp;<span>正式成为“中国宇航学会理手单位</span></li>
				<li><span>6月</span>&nbsp;&nbsp;<span>环境管理体系认证证书复审通过</span></li>
				<li><span>6月</span>&nbsp;&nbsp;<span>职业健康安全管理体系认证证书复审通过</span></li>
				<li><span>3月</span>&nbsp;&nbsp;<span>成为 “中国交通运输协会理事会员”</span></li>
				<li><span>3月</span>&nbsp;&nbsp;<span>成为“中国国防工业企业协会常务理事单位</span></li>
			</ul>
			<br>
		</div>
		<div class="div2">
			<img src="assets/2.png">
			<span class="year">2018</span>
			<ul>
				<li><span>10月</span>&nbsp;<span>荣获信息技术服务管理体系认证证书</span></li>
				<li><span>9月</span>&nbsp;&nbsp;<span>北京市软件和信息服务协会理生会员单位</span></li>
				<li><span>7月</span>&nbsp;&nbsp;<span>正式成为“中国宇航学会理手单位</span></li>
				<li><span>6月</span>&nbsp;&nbsp;<span>环境管理体系认证证书复审通过</span></li>
				<li><span>6月</span>&nbsp;&nbsp;<span>职业健康安全管理体系认证证书复审通过</span></li>
				<li><span>3月</span>&nbsp;&nbsp;<span>成为 “中国交通运输协会理事会员”</span></li>
				<li><span>3月</span>&nbsp;&nbsp;<span>成为“中国国防工业企业协会常务理事单位</span></li>
			</ul>
			<br>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
            years: Array,
		},
        mounted: function() {
        }
	}
</script>

<style scoped lang="less">

</style>
