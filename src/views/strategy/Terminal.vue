<template>
    <div>
        <PageTitle :titles="['“天行者”规划建设','&quot;Skywalker&quot; planning and construction','物联网卫星终端']" />
        <div class="hdTitle1Icon">
            <img src="assets/components/rect.png" />
            <span>轨迹、监控、控制</span>
        </div>
        <p class="hdSection">近几年物联网是全球研究最多的新兴市场之一，因为它具有颠覆业务流程和运营模式的巨大潜力，近几年在爆发式发展，多元化的物联网行业对低成本、稳定的卫星窄带双向通信冬端提出了数量可观的需求。</p>
        <p class="hdSection">天行者卫星终端的设计理念是价格低廉、便携耐用，使用尖端高集成度技术以减少体积和功耗。卫星终端是大量应用场景的数据通路，通过卫星星座的全球覆盖范围及实时通能力，确保客户应用和商业价值的可靠实现。</p>
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <img class="illustration" src="assets/strategy/terminal/1.png" />
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
        width: 70%;
    }
    div.row {
        margin-top: 20px;
    }
</style>
