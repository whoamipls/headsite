<template>
    <!-- header -->
    <header class="header-normal">
      <div class="sticky">
        <div class="container">
          <!-- Logo -->
          <div class="logo"> <a href="index.html"><img class="img-responsive" src="assets/home/logo.png" alt=""></a> </div>

          <!-- Navigation -->
          <nav class="navbar webimenu">
            <!-- MENU BUTTON RESPONSIVE -->
            <div class="menu-toggle"> <i class="fa fa-bars"> </i> </div>
            <!-- NAV -->
            <ul class="nav ownmenu">
				<li :class="{active:$route.fullPath.indexOf(item.path)==0}" v-for="item in $router.options.routes[0].children">
					<a @click="chooseItem(item.path)">{{item.name}}</a>
					<!--
					<ul class="dropdown animated-3s fadeIn">
						<li v-for="child in item.children"><a @click="chooseItem(child.path)">{{child.name}}</a></li>
					</ul>
					-->
				</li>
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
	},
	methods: {
		chooseItem: function(path){
			if(this.$route.fullPath.indexOf(path) == 0) return;
			if(path.length > 0){
				this.Goto(path);
				// 强制刷新
				// this.Goto({
				// 	path: path,
				// 	query: {
				// 		t: Date.now(),
				// 	},
				// });
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
