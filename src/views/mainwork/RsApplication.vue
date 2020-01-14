<template>
    <div>
        <PageTitle :titles="['卫星遥感图像及服务','Satellite remote sensing images and services','应用服务']" />
        <p class="hdSection">基于多卫星遥感数据源及遥感应用系统，和德宇航可提供以下航天综合应用服务：</p>
        <div class="hdTitle1">
			<span>制图</span>
		</div>
        <p class="hdText hdIconTri">用资源3号等卫星立体图像做1:50,000 地图 或加控制点做1:25,000地图。</p>
        <div class="hdTitle1">
			<span>资源及社会调查</span>
		</div>
        <p class="hdText hdIconTri">世界各国2020房屋及人口普查</p>
        <p class="hdText hdIconTri">地籍系统</p>
        <p class="hdText hdIconTri">土地资源普查分类及管理系统</p>
        <p class="hdText hdIconTri">农业资源普查及管理系统</p>
        <div class="hdTitle1">
			<span>城市管理</span>
		</div>
        <p class="hdText hdIconTri">基于卫星图像变化监测的城市/区域管理</p>
        <p class="hdText hdIconTri">非法建筑</p>
        <p class="hdText hdIconTri">非法捕鱼（领海入侵监管系统）（使用AIS+其它数据+雷达和高分辨率可见光卫星图像）</p>
        <div class="hdTitle1">
			<span>环境监测系统</span>
		</div>
        <p class="hdText hdIconTri">自然保护区</p>
        <p class="hdText hdIconTri">水污染监测</p>
        <p class="hdText hdIconTri">空气污染监测</p>
        <p class="hdText hdIconTri">土壤污染监测</p>
        <div class="hdTitle1">
			<span>多星源管理及分发系统</span>
		</div>
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <img class="illustration" src="assets/mainwork/rsapplication/1.png" />
                    <p class="hdAnnotationC">图 : 多源卫星数据</p>
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
