<template>
    <div>
        <Banner image="assets/contact/banner.png" />
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <div class="title">
                        <img src="assets/components/triangle.png" />
                        <span>北京和德宇航技术有限公司(总公司)</span>
                    </div>
                    <p class="content">地址 : 北京市海淀区西三环北路甲2号院国防科技园区5号楼5层</p>
                    <p class="content">电话 : +86 10 82890470</p>
                    <p class="content">传真 : +86 10 82780152</p>
                    <p class="content">邮箱 : info@head-aerospace.com</p>
                    <p class="content">微信公众号 : 和德宇航</p>            
                    <p class="content">邮编 : 100081</p>
                </div>
                <div class="col-sm-6">
                    <Map3D />
                </div>
            </div>
            <div class="title">
                <img src="assets/components/triangle.png" />
                <span>全球分布与国际合作</span>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <div class="title">
                        <span>和德香港</span>
                    </div>
                    <p class="content">地址 : 香港干诺道西28号 威胜商业大厦9楼11室</p>
                    <p class="content">电话 : +852 28757803</p>
                    <p class="content">传真 : +852 28757806</p>
                </div>
                <div class="col-sm-6">
                    <div class="title">
                        <span>和德荷兰</span>
                    </div>
                    <p class="content">地址 : HEAD Aerospace Netherlands Kapteynstraat 12201 BB Noordwijk, The Netherlands</p>
                    <p class="content">电话 : +31 886966900</p>
                    <p class="content">传真 : +31 886966999</p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <div class="title">
                        <span>和德法国</span>
                    </div>
                    <p class="content">地址 : HEAD TECHNOLOGY FRANCE71 Boulevard National, La Garenne Colombes, 92250, Paris,France</p>
                    <p class="content">电话 : +336 86030414</p>
                    <p class="content">传真 : +331 70823119</p>
                </div>
                <div class="col-sm-6">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import Map3D from '@/components/Map3D.vue'
export default {
	components: {
		Banner,
        Map3D,
	}
}
</script>

<style scoped lang="less">
    .title {
		.paraTitle();
	}
    div.row {
        margin-top: 20px;
    }
</style>
