<template>
    <div>
        <PageTitle :titles="['“天行者”星座建设','&quot;Skywalker&quot; constellation construction','全球卫星网络']" />
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <img class="illustration" src="assets/mainwork/skywalker/network/1.png" />
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <img class="illustration" src="assets/mainwork/skywalker/network/2.png" />
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
        width: 80%;
    }
    div.row {
        margin-top: 20px;
    }
</style>
