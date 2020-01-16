<template>
	<div>
    	<PageTitle :titles="['热点事件','Trending','']" />
		<table>
			<tr>
				<td class="col1">
					<DateIcon :time="hot.time" />
				</td>
				<td>
					<p class="hdHead1" style="margin-bottom:0">{{hot.title}}</p>
					<p class="hdAnnotationL">发布于 : {{hot.time.Format("yyyy-MM-dd")}}</p>
				</td>
			</tr>
			<tr v-for="item in hot.content">
				<td colspan="2" class="content">
					<p v-if="item.type==0" class="hdPara">{{item.value}}</p>
					<p v-if="item.type==1"><img :src="item.value[0]" /></p>
					<p v-if="item.type==2"><video width="100%" controls autobuffer :src="item.value[0]" /></p>
					<p v-if="item.type!=0" class="hdAnnotationC hdAMT">{{item.value[1]}}</p>
				</td>
			</tr>
		</table>
	</div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import DateIcon from '@/components/DateIcon.vue'
export default {
	components: {
		PageTitle,
		DateIcon,
	},
	mounted: function() {
	},
    data() {
        return {
            hot :{
				time: new Date(Date.now()),
				title: "和德“天行者”星座双星顺利发射",
				content: [
					{
						type: 0,
						value: "2019年12月7日16点50分，北京和德宇航技术有限公司（以下简称 : 和德宇航）自行研制的“和德二号 A、B”两颗空间物联网实验卫星由快舟一甲火箭在太原卫星发射中心升空发射，双星均顺利进入预定轨道。卫星在完成预定在轨测试任务后，将为客户提供卫星空间物联网数据、全球 AIS船只数据采集及ADS-B航班数据监测等一系列服务。未来，和德宇航将陆续发射 48 颗近地轨道卫星完成“天行者星座”的部署建设。"
					},
					{
						type: 1,
						value: ["assets/news/hot/1.png", "图 : 和德二号全体研发人员合影"]
					},
					{
						type: 0,
						value: "在国家鼓励民营商业航天企业发展政策的指引下，和德宇航将紧密围绕国家军民融合发展战略，持续加大科技创新和科研投入，谋划在海外建设卫星地面站网的同时，加快卫星组网和地面终端产品的研发投入，聚焦航空航运、物联网加卫星遥感应用于一体的智能化综合空间信息服务整合能力，在智慧交通、智能电网、智慧港口、智能集装箱、国土测绘、海洋监管、灾害预警、污染监测、应急通讯等行业不断积累经验，拓展业务能力和信息服务水平，为实现空天海地一体的智能信息网络建设贡献自己的一份力量。并积极促进中国与“一带一路”国家的”互联互通”，为构建人类命运共同体做出积极贡献。"
					},
					{
						type: 1,
						value: ["assets/news/hot/2.png", "图 : 和德宇航员工在公司总部庆祝“天行者”星座双星发射成功留影"]
					},
					{
						type: 2,
						value: ["assets/common/video/rocket.mp4", "图 : 和德二号A/B星发射视频"]
					}
				]
			}
        }
    }
}
</script>

<style scoped lang="less">
	p.left {
		text-align: left;
	}
	td {
		padding-bottom: @hdParaMargin;
	}
	td.col1 {
		vertical-align: top;
		width: 90px;
	}
	td.content{
		text-align: center;
	}
</style>