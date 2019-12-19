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
