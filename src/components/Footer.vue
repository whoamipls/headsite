<template>
	<!--======= FOOTER =========-->
	<footer>
		<div class="container">
			<!-- FOOTER -->
			<div class="footer-info">
				<div class="row">
					<!-- keep in touch -->
					<div class="col-md-4">
						<div class="padding-right-50"> <img src="assets/home/logo.png" class="margin-bottom-30" alt="">
							<p>北京和德宇航技术有限公司</p>
							<p style="font-size:12px">Copyright @ China HEAD Aerospace Technology Co.</p>
						</div>
						<br><br><br><br>
						<div>
							<img src="assets/components/footer/wb.png" />
							<img class="padding-left-30 padding-right-30" src="assets/components/footer/wx.png" />
							<img src="assets/components/footer/qq.png" />
						</div>
					</div>
					<!-- Links -->
					<div class="col-md-2">
						<h6 class="hdFooterH6">快速入口</h6>
						<hr class="hdFooterHr">
						<ul class="links">
						<li><a href="#" @click="Goto('/About/Overview')">关于和德 </a></li>
						<li><a href="#" @click="Goto('/Mainwork/MannedSpace')">航天重大专项配套 </a></li>
						<li><a href="#" @click="Goto('/Mainwork/Skywalker')">“天行者”星座和应用 </a></li>
						<li><a href="#" @click="Goto('/Mainwork/Station')">地面站系统建设 </a></li>
						<li><a href="#" @click="Goto('/News/Hot')">和德资讯 </a></li>
						<li><a href="#" @click="Goto('/Duty/Charity')">社会责任 </a></li>
						<li><a href="#" @click="Goto('/Hr/Idea')">人力资源 </a></li>
						</ul>
					</div>
					<!-- Contact US -->
					<div class="col-md-3">
						<h6 class="hdFooterH6">联系我们</h6>
						<hr class="hdFooterHr">
						<ul class="links">
							<p>电话 : +86 10 82890470</p>
							<p>传真 : +86 10 82780152</p>
							<p>地址 : 北京市海淀区西三环北路甲 2 号院国防科技园 5 号楼 5 层</p>
						</ul>
					</div>
					<!-- Contact US -->
					<div class="col-md-3">
						<h6 class="hdFooterH6">给我留言</h6>
						<hr class="hdFooterHr">
						<ul class="links">
							<p>* 姓名 : <input class="hdInputSingleLine" type="text" /></p>
							<p>* 邮箱 : <input class="hdInputSingleLine" type="text" /></p>
							<p>* 留言 : </p>
							<textarea class="hdInputMultiLine" rows="5" width="100%" />
							<b-button>提交</b-button>
						</ul>
					</div>
				</div>
				<a class="ipc" target="_blank" href="http://www.beian.miit.gov.cn">京ICP备12040513号</a>
			</div>
			<span style="position:absolute;left:20px;bottom:20px">{{visitCount}}</span>
		</div>
	</footer>
</template>

<script>
import DataUtils from '@/js/DataUtils.js'
export default {
	data() {
		return {
			visitCount: 0
		}
	},
	mounted: function() {
		DataUtils.getVisitCount().then(data => {
			this.visitCount = data;
		})
	}
}
</script>

<style scoped lang="less">
	.footer-info {
		p, a {
			color: @hdFooterColor!important;
		}
		a.ipc {
			position: absolute;
			bottom: 20px;
			left: 0px;
			right: 0px;
			margin: auto;
			width: auto;
			text-align: center;
		}
	}
	.hdFooterHr {
		color: @dividerColor!important;
	}
	footer button {
		float: left;
		width: 80px;
		height: 38px;
		font-size: 16px;
		color: #a9afbf;
		padding: 0!important;
		line-height: 0!important;
		border-radius: 5px;
		margin-top: 10px;
		background: #4f5c82!important;
	}
</style>
