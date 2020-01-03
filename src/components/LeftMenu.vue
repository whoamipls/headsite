<template>
<div>
	<div class="menu">
		<ul>
			<li v-for="item in menuData" v-if="!item.hidden">
				<a :style="getMenuHeadStyle(item)" @click="chooseItem(item)">
					{{item.name}}
					<span v-if="item.children.length>0" class="glyphicon" :class="isMenuSelect(item)?'hdIconDown':'hdIconUp'"></span>
				</a>
				<ul v-if="item.children.length>0" :class="{'hidden':!isMenuSelect(item)}">
					<li v-for="child in item.children" v-if="!child.hidden">
						<a :style="getMenuItemStyle(child)" @click="chooseItem(child)">{{child.name}}</a>
					</li>
				</ul>
			</li>
			<li class="imgContainer"><img src="assets/components/jobs.png" @click="Goto('/Hr/Recruit')" /></li>
			<li class="imgContainer" style="margin:10px 0px"><img src="assets/components/news.png" @click="Goto('/News/Hot')" /></li>
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
			menuHeadNormal: {
				color: '#56585f',
				backgroundColor: '#ffffff',
			},
			// 菜单选中1
			menuHeadSelect1: {
				color: '#363940',
				backgroundColor: '#f7f9ff',
				backgroundImage: 'url(assets/components/menuSel.png)',
				backgroundRepeat: 'no-repeat',
			},
			// 菜单选中2
			menuHeadSelect2: {
				color: '#363940',
				backgroundImage: 'url(assets/components/menuSel.png)',
				backgroundRepeat: 'no-repeat',
			},
			// 菜单项正常
			menuItemNormal: {
				color: '#8c8f99',
				backgroundColor: '#ffffff',
			},
			// 菜单项选中
			menuItemSelect: {
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
			this.Goto(path);
		},
		// 菜单是否选中
		isMenuSelect: function(item) {
			let select = false;
			if (!!item.childPaths) {
				let strs = this.$route.fullPath.split('/');
				let str = strs[strs.length - 1];
				select = item.childPaths.indexOf(str) >= 0;
			} else {
				select = this.$route.fullPath.indexOf(item.path) == 0;
			}
			return select;
		},
		// 获取菜单样式
		getMenuHeadStyle: function(item) {
			if(this.isMenuSelect(item)) {
				if(item.children.length == 0) {
					return this.menuHeadSelect1;
				} else {
					return this.menuHeadSelect2;
				}
			}
			return this.menuHeadNormal;
		},
		// 获取子菜单样式
		getMenuItemStyle: function(item) {
			return this.isMenuSelect(item) ? this.menuItemSelect : this.menuItemNormal;
		}
	}
}
</script>

<style scoped lang="less">
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

	/* ul li以横排显示 */
	.hidden {
		height: 0px;
	}

	/* 所有class为menu的div中的ul样式 */
	div.menu ul {
		list-style: none;
		/* 去掉ul前面的符号 */
		margin: 0px;
		/* 与外界元素的距离为0 */
		padding: 0px;
		/* 与内部元素的距离为0 */
		width: auto;
		/* 宽度根据元素内容调整 */
	}

	/* 所有class为menu的div中的ul中的li样式 */
	div.menu ul li {
		/*float:left;  向左漂移，将竖排变为横排 */// font-size: 16px;
		width: @hdLMenuWidth;
	}

	div.menu ul li ul li a{
		border: 0px;
		font-size: @hdLMenuChildFontSize;
		line-height: 60px;
	}

	div.menu ul li a{
		border: 1px @hdLMenuDividerColor solid;
		border-top: 0;
		border-left: 0;
		border-right: 0;
		/* 边框 */
		display: block;
		/* 此元素将显示为块级元素，此元素前后会带有换行符 line-height: 1.35em;*/
        line-height: 90px;
		/* 行高 padding: 4px 20px;*/
		padding: 0px 30px;
		/* 内部填充的距离 */
		text-decoration: none;
		/* 不显示超链接下划线 */
		white-space: nowrap;
		/* 对于文本内的空白处，不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。 */
		width: 100%;//@hdLMenuWidth;
		box-sizing: border-box;
		position: relative;
		font-size: @hdLMenuItemFontSize;
	}

	div.menu ul li a span{
		position: absolute;
		right: 10px;
		top: 0;
		bottom: 0;
		margin: auto;
		height: 20px;
		color: gray;
	}

	div.menu ul li a:hover, div.menu ul li img:hover {
		cursor: pointer;
	}
	// 手机模式隐藏左侧菜单
	@media (max-width: 768px) {
		div.menu {
			display: none !important;
		}
	}
</style>