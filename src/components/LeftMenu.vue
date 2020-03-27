<template>
<div>
	<div>
		<ul class="leftMenu">
			<li class="menuItemLv1" v-if="!item1.hidden" v-for="item1 in menuData">
				<p :style="getMenuItem1Style(item1)" @click="chooseItem(item1)">
					<span>{{item1.name}}</span>
					<span v-if="item1.children.length>0" class="glyphicon iconLv1" :class="isMenuSelect(item1)?'hdIconDown':'hdIconUp'"></span>
				</p>
				<ul v-if="item1.children.length>0" :class="{'hidden':!isMenuSelect(item1)}">
					<li class="menuItemLv2" v-if="!item2.hidden" v-for="item2 in item1.children">
						<p :style="getMenuItem2Style(item2)" @click="chooseItem(item2)">
							<span class="glyphicon iconLv2" :class="isMenuSelect(item2) ? 'glyphicon-check' : 'glyphicon-unchecked'" />&nbsp;
							<span>{{item2.name}}</span>
						</p>
					</li>
				</ul>
			</li>
			<li class="imgContainer"><img src="assets/components/jobs.png" @click="Goto('/Hr/Recruit')" /></li>
			<li class="imgContainer" style="margin:10px 0px 200px 0px"><img src="assets/components/news.png" @click="Goto('/News/Hot')" /></li>
		</ul>
	</div>
</div>
</template>

<script>

export default {
	data() {
		return {
			menuData: [],
			// 菜单正常
			menuItem1SNormal: {
				color: '#56585f',
				backgroundColor: '#ffffff',
			},
			// 菜单选中1
			menuItem1Select1: {
				color: '#363940',
				backgroundColor: '#f7f9ff',
				backgroundImage: 'url(assets/components/menuSel.png)',
				backgroundRepeat: 'no-repeat',
			},
			// 菜单选中2
			menuItem1Select2: {
				color: '#363940',
				backgroundImage: 'url(assets/components/menuSel.png)',
				backgroundRepeat: 'no-repeat',
			},
			// 菜单项正常
			menuItem2Normal: {
				color: '#8c8f99',
				backgroundColor: '#ffffff',
			},
			// 菜单项选中
			menuItem2Select: {
				color: '#4068f5',
				backgroundColor: '#f7f9ff',
			}
		}
	},
	mounted: function() {
		let paths = this.$route.fullPath.split('?')[0].split('/');
		let path = '/' + paths[1];
		if(paths.length > 1) {
			let routes = this.$router.options.routes[0].children.find(i => i.path==path).children;
			let parent = this.menuData;
			routes.forEach(route => {
				let child = { name: route.name, path: route.path, hidden: route.hidden, children: [], childPaths: route.childPaths };
				if(!route.component) {
					this.menuData.push(child);
					parent = child.children;
				} else {
					parent.push(child);
				}
			});
		}
		// 默认选中第一个子菜单
		if(this.$route.fullPath.lastIndexOf('/') == 0){
			this.chooseItem(this.menuData[0], null);
		}
	},
	methods: {
		// 选择菜单
		chooseItem: function(item){
			let path = item.children.length > 0 ? item.children[0].path : item.path;
			console.log(path);
			this.Goto(path);
		},
		// 菜单是否选中
		isMenuSelect: function(item) {
			let select = false;
			if (!!item.childPaths) {
				let strs = this.$route.fullPath.split('/');
				let str = '/' + strs[strs.length - 1] + '/';
				select = item.childPaths.indexOf(str) >= 0;
			} else {
				select = this.$route.fullPath.indexOf(item.path) == 0;
			}
			return select;
		},
		// 获取菜单样式
		getMenuItem1Style: function(item) {
			if(this.isMenuSelect(item)) {
				if(item.children.length == 0) {
					return this.menuItem1Select1;
				} else {
					return this.menuItem1Select2;
				}
			}
			return this.menuItem1SNormal;
		},
		// 获取子菜单样式
		getMenuItem2Style: function(item) {
			return this.isMenuSelect(item) ? this.menuItem2Select : this.menuItem2Normal;
		}
	}
}
</script>

<style scoped lang="less">
	// 图片超链接
	li.imgContainer {
		overflow: hidden;
		img {
			width: 312px;
			transition: all .6s;
			&:hover {
				transform: scale(1.2);
			}
		}
	}

	// ul li以横排显示
	.hidden {
		height: 0px;
	}

	// 左侧菜单样式
	.leftMenu {
		list-style: none;// 去掉ul前面的符号
		margin: 0px;// 与外界元素的距离为0
		padding: 0px;// 与内部元素的距离为0
		width: @hdLMenuWidth;// 宽度
		&:hover {
			cursor: pointer;
		}
	}

	// 一级菜单项样式
	.menuItemLv1 {
		width: 100%;
		font-size: @hdLMenuItemFontSize;
		border: 1px @hdLMenuDividerColor solid;
		border-top: 0;
		border-left: 0;
		border-right: 0;
		line-height: 90px;// 行高
		p {
			position: relative;
			padding-left: 30px;
		}
		.iconLv1 {
			position: absolute;
			right: 10px;
			top: 0;
			bottom: 0;
			margin: auto;
			height: 20px;
			color: gray;
		}
	}

	// 二级菜单项样式
	.menuItemLv2 {
		border: 0px;
		font-size: @hdLMenuChildFontSize;
		line-height: 60px;
		.iconLv2 {
			font-size: @hdLMenuChildFontSize * 0.7;
		}
	}

	// 手机模式隐藏左侧菜单
	@media (max-width: 768px) {
		.leftMenu {
			display: none !important;
		}
	}
</style>