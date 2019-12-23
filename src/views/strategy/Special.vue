<template>
    <div>
        <PageTitle :titles="['宇航中心','Space Center','重大专项配套']" />
        <div class="title">
            <img src="assets/components/bluerect.png" />
            <span>太阳帆板驱动机构</span>
        </div>
        <p class="content">SEPTA®33 型太阳帆板驱动机构（SADM）以宽适用范围、通用型标准化产品为设计理念，可以适用低轨、中轨、高轨在1000kg 左右的科学试验卫星和通信卫星。产品成熟，可靠性高，产品累计在轨飞行时间大于100年。</p>
        <div class="row">
            <div class="col-sm-6">
                <img class="illustration" src="assets/strategy/special/1.png" />
            </div>
            <div class="col-sm-6 text-right">
                <img class="illustration" src="assets/strategy/special/2.png" />
            </div>
        </div>
        <div class="title">
            <img src="assets/components/bluerect.png" />
            <span>钻月电机</span>
        </div>
        <p class="content">此驱动组件由电机和减速器组成，具有抗高低温（温度范围-40℃—+110℃）、高效率低功耗、体积小集成度高（200x60x60mm）、质量轻（低于2.5kg）、密封度高（可抗月尘）、具备冷备份，多种模式等特点。</p>
        <p class="content">此产品将用于探月三期项目中，为月壤的钻取采集机构提供驱动动力，预计2021年发射。</p>
        <div class="row">
            <div class="col-sm-6">
                <img class="illustration" src="assets/strategy/special/3.png" />
            </div>
            <div class="col-sm-6 text-right">
                <img class="illustration" src="assets/strategy/special/4.png" />
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

<style scoped lang="less">
	.title {
		.paraTitle();
	}
    img.illustration {
        width: 100%;
    }
</style>
