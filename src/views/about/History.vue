<template>
    <div>
		<Title :titles="['发展历程','Development Path','发展历程']" />
        <Timeline :years="years"/>
	</div>
</template>

<script>
import Title from '@/components/Title.vue'
import Timeline from '@/components/Timeline.vue'
export default {
	components: {
        Title,
        Timeline
	},
    data() {
        return {
            years: [
                {
                    year: '2019',
                    months: [
                        {
                            month: '10月',
                            text: '荣获信息技术服务管理体系认证证书'
                        },
                        {
                            month: '9月',
                            text: '北京市软件和信息服务协会理生会员单位'
                        },
                        {
                            month: '7月',
                            text: '正式成为“中国宇航学会理手单位'
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
                            text: '成为 “中国交通运输协会理事会员”'
                        },
                        {
                            month: '3月',
                            text: '成为“中国国防工业企业协会常务理事单位'
                        }
                    ]
                },
                {
                    year: '2018',
                    months: [
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
							text: '成功发射实验星“和德-号”,也是我国首个AIS商用微纳卫星'
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
							text: '正式加入“国际电信联盟 ITU'
						},
						{
							month: '10月',
							text: '和德法国分公司成立'
						},
						{
							month: '8月',
							text: '正式加入荷兰宇航组织'
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
							text: '和德荷兰分公司成立'
						}
                    ]
                },
                {
                    year: '2013',
                    months: [
						{
							month: '4月',
							text: '协助五院与欧洲电推进公司ALTA建立合作，基于外方成熟技术，联合开发电推进推进器，使中国电推进技术与欧洲站在了同一起跑线'
						}
                    ]
                },
                {
                    year: '2012',
                    months: [
						{
							month: '12月',
							text: '获得三级保密资格单位证书'
						},
						{
							month: '10月',
							text: 'IAF成员认证单位'
						},
						{
							month: '10月',
							text: '和德公司协助航天五院从欧洲引进整套SAR天线技术，克服了产品出口禁运的难题，使我国星载SAR技术有了长足的进步'
						}
                    ]
                },
                {
                    year: '2011',
                    months: [
						{
							month: '12月',
							text: '加入国际航标协会获得SAIa签约'
						}
                    ]
                },
                {
                    year: '2008',
                    months: [
						{
							month: '12月',
							text: '和德香港分公司成立'
						},
						{
							month: '12月',
							text: '和德公司协助上海八院从欧洲引进月球车模拟试验台，模拟月球环境，为中国的“玉兔”成功月面行走提供保证'
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
