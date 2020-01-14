<template>
	<div>
    	<HotBrief v-for="hot in hots" :time="hot.time" :title="hot.title" :content="hot.content" @onShowDetail="showDetail(hot.flag)" />
	</div>
</template>

<script>
import HotBrief from '@/components/HotBrief.vue'
export default {
	components: {
		HotBrief
	},
    methods: {
        // 显示详情
        showDetail: function(id) {
            if(!id) return;
            this.Goto('/News/HotDetail');
        }
    },
    data() {
        return {
            hots: [
                {
                    flag: true,
                    time: new Date("2019/12/7"),
                    title: "和德“天行者”星座双星顺利发射",
                    content: "2019年12月7日16点52分北京和德宇航技术有限公司自行研制的“和德二号A、B”两颗空间物联网实验卫星由快舟一甲火箭在太原卫星发射中心升空发射,双星均顺利进入预定轨道。卫星在完成预定在轨测试任务后,将为客户提供卫星空间物联网数据、全球AIS船只数据采集及ADS-B航班数据监测等-系列服务。"
                },
                {
                    time: new Date("2019/11/23"),
                    title: "和德宇航受邀参加京交会数字服务贸易研讨会发表主题演讲",
                    content: "北京和德宇航技术有限公司与腾讯、阿里、华为四家企业一同受邀参加了于2019年5月30日举行的京交会数字服务贸易研讨会 ,公司副总裁王治中代表公司进行了题为《卫星大数据精准服务数字贸易》的主题发言。"
                },
                {
                    time: new Date("2019/10/16"),
                    title: "中国交通通信信息中心与和德宇航签订合作协议",
                    content: "日前,中国交通通信信息中心与和德宇航正式签订合作协议。在国内外庞大市场资源的机遇下,在“一带一路”、“金砖五国”、非洲援建等国家外交政策的指引下,双方愿发挥各自优势,推动天地协同的VDES建设,联合运营、协同拓展国内及国际市场,为全球用户提供VDES等综合服务,提高中国在VDES海事、交通应用领域国际影响力。"
                },
                {
                    time: new Date("2019/10/12"),
                    title: "风华十二载，迎新创未来--和德宇航十二周年庆典耒趣味运动会",
                    content: "时光如梭，光阴似箭，不知不觉和德公司已走过十二个年头，十二年，在历史的长河中仅仅是弹指的了间，但是对于一个披荆斩棘、永攀高峰的企业来说，这十二年显得弥足珍贵。"
                },
                {
                    time: new Date("2019/9/26"),
                    title: "和德宇航参加首届联合国世界地理信息大会",
                    content: "2018年11月19日，为期三天的首届联合国世界地理信息大会在浙江省德清市地理信息小镇开幕。"
                },
                {
                    time: new Date("2019/8/10"),
                    title: "和德宇航闪耀不来梅",
                    content: "2018年10月1-5日在德国不来梅举行的第69届国际宇航大会上，和德宇航举行了多场具有影响力的活动，受到多方关注，进一步增强了和德宇航在国际商业航天圈的影响力。"
                }
            ]
        }
    }
}
</script>
