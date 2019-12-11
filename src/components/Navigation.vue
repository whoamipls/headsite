<template>
  <div id="wrap">

    <!-- header -->
    <header class="header-normal">
      <div class="sticky">
        <div class="container">
          <!-- Logo -->
          <div class="logo"> <a href="index.html"><img class="img-responsive" src="images/logo.png" alt=""></a> </div>

          <!-- Navigation -->
          <nav class="navbar webimenu">
            <!-- MENU BUTTON RESPONSIVE -->
            <div class="menu-toggle"> <i class="fa fa-bars"> </i> </div>
            <!-- NAV -->
            <ul class="nav ownmenu">
              <li class="active"> <a href="index.html">关于和德</a>
                <ul class="dropdown animated-3s fadeIn">
                  <li> <a href="index.html">公司概况</a> </li>
                  <li> <a href="index-1.html">旗下企业</a> </li>
                </ul>
              </li>
              <li> <a href="index.html">公司战略</a>
                <ul class="dropdown animated-3s fadeIn">
                  <li> <a href="#">重大专项配套</a> </li>
                  <li> <a href="#">卫星地面站系统建设</a> </li>
                  <li> <a href="#">"天行者"规划建设</a> </li>
                </ul>
              </li>
              <li> <a href="services.html">社会责任</a>
                <ul class="dropdown animated-3s fadeIn">
                  <li> <a href="#">公益慈善</a> </li>
                  <li> <a href="#">社工服务</a> </li>
                  <li> <a href="#">文体活动</a> </li>
                </ul>
              </li>
              <li> <a href="about.html">和德资讯</a>
                <ul class="dropdown animated-3s fadeIn">
                  <li> <a href="about.html">近期热点</a> </li>
                  <li> <a href="#">重大宇航事件</a> </li>
                  <li> <a href="#">业务动态</a> </li>
                  <li> <a href="#">行业新闻</a> </li>
                  <li> <a href="#">媒体报道</a> </li>
                  <li> <a href="#">视频影像</a> </li>
                </ul>
              </li>
              <li> <a href="portfolio.html">人力资源</a>
                <ul class="dropdown animated-3s fadeIn">
                  <li> <a href="#">人才理念</a> </li>
                  <li> <a href="#">招贤纳士</a> </li>
                  <li> <a href="#">薪酬福利</a> </li>
                  <li> <a href="#">工作环境</a> </li>
                  <li> <a href="#">团建活动</a> </li>
                </ul>
              </li>
              <li> <a href="contact.html">联系我们</a> </li>
              <li> <a href="blog.html">相关链接</a> </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

	<!--======= FOOTER =========-->
	<footer>
		<div class="container">

		<!-- FOOTER -->
		<div class="footer-info">
			<div class="row">
			<!-- keep in touch -->
			<div class="col-md-4">
				<div class="padding-right-50"> <img src="images/logo.png" class="margin-bottom-30" alt="">
				<p>北京和德宇航技术有限公司</p>
				<p>Copyright @ China HEAD Aerospace Technology Co.</p>
				</div>
			</div>
			<!-- Links -->
			<div class="col-md-2">
				<h6>快速入口</h6>
				<ul class="links">
				<li><a href="#.">关于和德 </a></li>
				<li><a href="#.">重大专项配套 </a></li>
				<li><a href="#.">“天行者”规划建设 </a></li>
				<li><a href="#.">卫星地面站系统建设 </a></li>
				<li><a href="#.">重大宇航事件 </a></li>
				<li><a href="#.">公益慈善 </a></li>
				<li><a href="#.">人力资源 </a></li>
				</ul>
			</div>
			<!-- Contact US -->
			<div class="col-md-3">
				<h6>联系我们</h6>
				<ul class="links">
				<p>电话 : +86 10 82890470</p>
				<p>传真 : +86 10 82780152</p>
				<p>地址 : 北京市海淀区西三环北路甲 2 号院国防科技园 5 号楼 5 层</p>
				</ul>
			</div>
			<!-- Contact US -->
			<div class="col-md-3">
				<h6>给我留言</h6>
				<ul class="links">
				<p>姓名 : </p>
				<p>邮箱 : </p>
				<p>留言 : </p>
				</ul>
			</div>
			</div>
		</div>
		</div>
	</footer>

  </div>
</template>

<script>
// import '../css/font-awesome.min.css'
// import '@/css/ionicons.min.css'
// import '@/css/main.css'
// import '@/css/style.css'
// import '@/css/responsive.css'

export default {
  props: {
    msg: String
  }
}
</script>

<style scoped lang="less">
</style>
