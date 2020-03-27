<template>
    <div>
        <PageTitle :titles="['“天行者”星座和应用服务','&quot;Skywalker&quot; constellation construction','系统平台和移动APP']" />
        <p class="hdPara hdPMB">SAAS和移动平台提供可操作的业务智能，以提高效率、安全性和遵从性。</p>
        <p class="hdPara">界面友好，平台中集成用于设备和用户管理多种实用工具，可以将多个网络服务产品和设备整合到一个智能平台上，从而实现简单和灵活掌控。</p>
        <div class="container hdPMT">
            <div class="row">
                <div class="col-sm-12">
                    <img class="illustration" src="assets/mainwork/skywalker/platform/1.png" />
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
