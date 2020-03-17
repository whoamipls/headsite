<template>
    <div>
		<PageTitle :titles="['发展历程','Development Path','发展历程']" />
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
                    year: '2019',
                    months: [
                        {
                            month: '12月',
                            text: '和德二号A/B卫星在太原卫星发射中心成功发射入轨'
                        },
                        {
                            month: '10月',
                            text: '荣获信息技术服务管理体系认证证书'
                        },
                        {
                            month: '9月',
                            text: '成为北京市软件和信息服务协会理事会员单位'
                        },
                        {
                            month: '7月',
                            text: '成为中国宇航学会理事长单位'
                        },
                        {
                            month: '6月',
                            text: '环境管理体系认证证书复审通过'
                        },
                        {
                            month: '6月',
                            text: '职业健康安全管理体系认证证书复审通过'
                        },
                        {
                            month: '3月',
                            text: '成为中国交通运输协会理事会员'
                        },
                        {
                            month: '3月',
                            text: '成为中国国防工业企业协会常务理事单位'
                        }
                    ]
                },
                {
                    year: '2018',
                    months: [
                        {
                            month: '12月',
                            text: '公司融资1亿元---国家服务贸易创新发展引导基金'
                        },
                        {
                            month: '9月',
                            text: '天行者星座--和德二号A/B卫星立项、研制'
                        },
                        {
                            month: '7月',
                            text: '公司搬迁新址北理工国防科技园5号楼'
                        },
                        {
                            month: '7月',
                            text: '荣获中关村高新技术企业证书'
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
							text: '举办和德公司成立10周年庆典'
						},
                        {
							month: '02月',
							text: '天行者星座--和德一号卫星立项、研制'
						}
                    ]
                },
                {
                    year: '2016',
                    months: [
						{
							month: '12月',
							text: '荣获北京市高新技术企业证书'
						},
						{
							month: '10月',
							text: '加入国际电信联盟 ITU'
						},
						{
							month: '10月',
							text: '和德法国子公司成立'
						},
						{
							month: '8月',
							text: '加入荷兰宇航组织'
						}
                    ]
                },
                {
                    year: '2015',
                    months: [
						{
							month: '4月',
							text: '荣获海关AEO认证企业'
						},
						{
							month: '4月',
							text: '和德荷兰子公司成立'
						}
                    ]
                },
                {
                    year: '2013',
                    months: [
						{
							month: '4月',
							text: '与五院、意大利ALTA公司成立电推进联合实验室'
						}
                    ]
                },
                {
                    year: '2012',
                    months: [
						{
							month: '12月',
							text: '取得三级保密资格单位证书'
						},
						{
							month: '10月',
							text: '成为IAF成员认证单位'
						}
                    ]
                },
                {
                    year: '2011',
                    months: [
						{
							month: '12月',
							text: '加入国际航标协会 IALA'
						}
                    ]
                },
                {
                    year: '2008',
                    months: [
						{
							month: '12月',
							text: '和德香港子公司成立'
						},
						{
							month: '12月',
							text: '首次参与国家重大专项“探月工程”，为上海八院提供月球车模拟实验台'
						}
                    ]
                },
                {
                    year: '2007',
                    months: [
						{
							month: '4月',
							text: '北京和德宇航技术有限公司成立'
						}
                    ]
                }
            ]
        }
    }
}
</script>
