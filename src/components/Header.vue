<template>
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
				<li v-for="item in $router.options.routes[0].children">
					<a @click="chooseItem(item.path)">{{item.name}}</a>
					<ul class="dropdown animated-3s fadeIn">
						<li v-for="child in item.children"><a @click="chooseItem(child.path)">{{child.name}}</a></li>
					</ul>
				</li>
        <!--
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
              -->
            </ul>
          </nav>
        </div>
      </div>
    </header>
</template>

<script>

export default {
	mounted: function(){
    menuReady();
		// this.$router.push('/Home');
	},
	methods: {
		chooseItem: function(path){
			if(path.length > 0){
				//this.$router.push(path);
				this.$router.push({
					path: path,
					query: {
						t: Date.now(),
					},
				});
			}
		}
	}
//   props: {
//     msg: String
//   }
}
</script>

<style scoped lang="less">
</style>
