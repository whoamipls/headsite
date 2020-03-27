<template>
    <div>
        <PageTitle :titles="['宇航中心','Space Center','组件出口']" />
        <p class="hdPara">随着中国在航天领域实力和能力的大幅提升，中国的航天产品也得到世界的关注。“技术成熟、可靠性高、性价比好” 是中国宇航级产品的三大优势，并得到了欧洲等主流宇航企业的关注及认可。和德宇航公司作为中国首批商业航天公司之一，13年来密切关注国际商业航天动态，为中国产品走出去贡献了自己的力量。目前已成功将国内的星敏、太敏、热控薄膜、太阳能电池片等产品出口至瑞士、意大利、南非等国。<a href='assets/mainwork/spacecenter/componentexport/1.pdf' download='Chinese Space Products Catalog_HEAD.pdf'>点击此处获取完整产品清单</a></p>
        <p class="hdHead1 hdH1MTB">主要产品</p>
        <p class="hdHead1 hdH1MB hdIconRect">滚珠轴承飞轮FW-GR.260.5-A</p>
        <p class="hdHead1 hdH1MTB">产品介绍</p>
        <p class="hdPara">该产品是一种机电集成的产品，拥有数字控制接口。它采用高精度速度测量单元，提升了角动量控制的精度，具有出色的零速度特性。</p>
        <p class="hdHead1 hdH1MTB">应用范围</p>
        <p class="hdPara">中地球轨道/近地轨道卫星</p>
        <p class="hdHead1 hdH1MTB">主要参数</p>
        <div class="imgContainer100 hdPMTB">
            <div class="row">
                <div class="col-sm-6">
                    <img src="assets/mainwork/spacecenter/componentexport/1.png" />
                </div>
                <div class="col-sm-6">
                    <img src="assets/mainwork/spacecenter/componentexport/2.png" />
                </div>
            </div>
        </div>
        <p class="hdHead1 hdH1MTB hdIconRect">三型高精度CCD星敏感器</p>
        <p class="hdHead1 hdH1MTB">产品介绍</p>
        <p class="hdPara">采用集成结构，基于ST-CCD2-2,选取大面积CCD检测器并增加高速通讯接口，具有低重量、高精度、良好动态性能、高可靠性等特点，产品接口为RS422或者LVDS。</p>
        <p class="hdHead1 hdH1MTB">应用范围</p>
        <p class="hdPara">该产品适用于地球同步轨道/中地球轨道/近地轨道卫星或者其他飞行器。</p>
        <p class="hdHead1 hdH1MTB">主要参数</p>
        <div class="imgContainer100 hdPMTB">
            <div class="row">
                <div class="col-sm-6">
                    <img src="assets/mainwork/spacecenter/componentexport/3.png" />
                </div>
                <div class="col-sm-6">
                    <img src="assets/mainwork/spacecenter/componentexport/4.png" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
export default {
	components: {
		PageTitle,
	},
    mounted: function() {
    }
}
</script>
