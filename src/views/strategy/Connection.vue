<template>
    <div>
        <PageTitle :titles="['“天行者”规划建设','&quot;Skywalker&quot; planning and construction','互联互通']" />
        <p class="hdSection">“天行者”星座具备连接全球数十亿终端的服务能力。</p>
        <p class="hdSection">卫星与地面移动网络双模通信、自由切换。</p>
        <p class="hdSection">一个全球覆盖无盲区、多网兼容、最具性价比的物联网综合连接解决方案。</p>
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <img class="illustration" src="assets/strategy/connection/1.png" />
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
