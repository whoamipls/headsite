<template>
    <div>
		<PageTitle :titles="['发展历程','Development process','发展历程']" />
        <Timeline :years="years"/>
	</div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import Timeline from '@/components/Timeline.vue'
export default {
	components: {
        PageTitle,
        Timeline
	},
    data() {
        return {
            years: [
                {
                    year: '2020',
                    months: [
                        {
                            month: '02月',
                            text: '成功进入联合国采购（UNGM）供应商名录'
                        }
                    ]
                },
                {
                    year: '2019',
                    months: [
                        {
                            month: '12月',
                            text: '“和德二号A/B”卫星在太原卫星发射中心成功发射入轨'
                        },
                        {
                            month: '10月',
                            text: '通过信息技术服务管理体系认证'
                        },
                        {
                            month: '09月',
                            text: '成为北京市软件和信息服务协会理事会员单位'
                        },
                        {
                            month: '07月',
                            text: '成为中国宇航学会理事长单位'
                        },
                        {
                            month: '03月',
                            text: '成为中国交通运输协会理事单位'
                        }
                    ]
                },
                {
                    year: '2018',
                    months: [
                        {
                            month: '12月',
                            text: '完成A轮融资：引入国家服务贸易创新发展引导基金1亿元投资'
                        },
                        {
                            month: '09月',
                            text: '“和德二号A/B”卫星成功立项，开始研制'
                        },
                        {
                            month: '07月',
                            text: '公司迁入新址：北京理工大学国防科技园'
                        },
                        {
                            month: '07月',
                            text: '获批“中关村高新技术企业”'
                        }
                    ]
                },
                {
                    year: '2017',
                    months: [
						{
							month: '11月',
							text: '成功发射我国首颗商用AIS卫星“和德一号”'
						},
                        {
							month: '06月',
							text: '联合IAF，举办GLEX2017闭幕招待会暨和德宇航成立10周年庆典活动'
						},
                        {
							month: '02月',
							text: '“和德一号”卫星成功立项，开始研制'
						}
                    ]
                },
                {
                    year: '2016',
                    months: [
						{
							month: '10月',
							text: '加入国际电信联盟（ITU），成为中国航天唯一民企会员单位'
						},
						{
							month: '10月',
							text: '和德法国公司成立'
						},
						{
							month: '08月',
							text: '加入荷兰宇航组织'
						}
                    ]
                },
                {
                    year: '2015',
                    months: [
						{
							month: '04月',
							text: '和德荷兰公司成立'
						}
                    ]
                },
                {
                    year: '2013',
                    months: [
						{
							month: '04月',
							text: '与中国空间技术研究院、意大利ALTA公司共同发起成立电推进联合实验室'
						}
                    ]
                },
                {
                    year: '2012',
                    months: [
						{
							month: '10月',
							text: '成为国际宇航联合会（IAF）成员单位'
						}
                    ]
                },
                {
                    year: '2011',
                    months: [
						{
							month: '12月',
							text: '成为国际航标协会（IALA）成员单位'
						}
                    ]
                },
                {
                    year: '2008',
                    months: [
						{
							month: '12月',
							text: '和德香港公司成立'
						},
						{
							month: '12月',
							text: '为国家探月工程提供配套服务'
						}
                    ]
                },
                {
                    year: '2007',
                    months: [
						{
							month: '04月',
							text: '北京和德宇航技术有限公司成立'
						}
                    ]
                }
            ]
        }
    }
}
</script>
