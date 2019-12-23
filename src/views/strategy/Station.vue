<template>
    <div>
        <PageTitle :titles="['卫星地面站系统建设','Satellite ground station system construction','卫星地面站']" />
        <p class="content">和德卫星地面测控站网由骨干测控网和附属测控网两大部分组成，其中骨干测控网由计划在国内分批建设的3个地面站构成，附属测控及通信网由公司在海外开拓建设的若干地面站构成。</p>
        <div class="title">
            <img src="assets/components/bluerect.png" />
            <span>骨干测控网</span>
        </div>
        <p class="content">配合卫星发展规划，计划在国内择机分批建设3座卫星地面站，每个地面站包括至少一套X频段上下卫星测控数传设备以及不小于5.4米口径的卫星天线系统、一套U/V频段的卫星测控数传设备和天线系统。一期工程计划于近期择地建设一个测控与数据接收站，二期工程将与星座建设同步，再在国内选择合适的测控地点，建设两座测控与数据接收站，形成骨干测控网，该测控网完全自主控制，提供基本服务能力，用于保证和德自有卫星的在轨管理及测控数传任务。在完成自有卫星测控及数据接收任务的基础上，可对外提供部分测控服务能力。</p>
        <div class="title">
            <img src="assets/components/bluerect.png" />
            <span>附属测控网及通信信关站</span>
        </div>
        <p class="content">附属测控网的建设同步于公司海外战略布局，根据海外市场开拓情况，通过政府间项目合作等方式，着重在非洲、拉美、东南亚等地落地多个地面测控站项目并取得地面站的运营权，将其作为和德地面系统的测控资源，纳入附属测控网。结合具体项目落地地点，与当地政府合作建设通信信关站。</p>
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <img class="illustration" src="assets/strategy/station/1.png" />
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 text-right">
                    <img class="illustration" src="assets/strategy/station/2.png" />
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
    .title {
		.paraTitle();
	}
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
