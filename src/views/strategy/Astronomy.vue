<template>
    <div>
        <PageTitle :titles="['宇航中心','Space Center','天文科学工程']" />
        <p class="hdSection">和德宇航是意大利EIE GROUP的独家代理公司。EIE GROUP在全球拥有近30年的天文大科学项目工程经验，参与了大量全球最著名的天文项目，包括NTT、VLT、LBT、ALMA和E-ELT。我们可以为客户提供从标准天文台到知识培训的完整解决方案。天文台可根据客户要求配置1m级到8m级的Ritchey-Chrétien望远镜和Nasmyth平台。客户可以拥有一整套低成本、高生产效率的科学天文台，包括完善的圆顶和控制系统。除了标准天文观测用途外，还可以提供包括卫星跟踪、碎片跟踪和激光通信等非天文用途的可选配置。</p>
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <img class="illustration" src="assets/strategy/astronomy/1.png" />
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <img class="illustration" src="assets/strategy/astronomy/2.png" />
                </div>
                <div class="col-sm-6 text-right">
                    <img class="illustration" src="assets/strategy/astronomy/3.png" />
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

<style scoped lang="less">
    img.illustration {
        width: 100%;
    }
    div.container {
        width: 90%;
    }
    div.row {
        margin-top: 20px;
    }
</style>
