<template>
    <div>
        <Banner image="assets/contact/banner.png" :menuTitles="['联系我们','Contact']" />
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <p class="hdHead1 hdH1MB hdIconTri clickable" @click="panTo(0)">北京和德宇航技术有限公司(总部)</p>
                    <p class="hdText">地址 : 北京市海淀区西三环北路甲2号院国防科技园区5号楼5层</p>
                    <p class="hdText">电话 : +86 10 82890470</p>
                    <p class="hdText">传真 : +86 10 82780152</p>
                    <p class="hdText">邮箱 : info@head-aerospace.com</p>
                    <p class="hdText">微信公众号 : 和德宇航</p>            
                    <p class="hdText hdPMB">邮编 : 100081</p>
                </div>
                <div class="col-sm-6">
                    <Map2D ref="map2D" />
                </div>
            </div>
            <br><br><br>
            <p class="hdHead1 hdH1MB hdIconTri">海内外子公司</p>
            <div class="row">
                <div class="col-sm-6">
                    <p class="hdHead1 hdH1MB clickable" @click="panTo(1)">和德香港</p>
                    <p class="hdText">地址 : 香港干诺道西28号 威胜商业大厦9楼11室</p>
                    <p class="hdText">电话 : +852 28757803</p>
                    <p class="hdText hdPMB">传真 : +852 28757806</p>
                </div>
                <div class="col-sm-6">
                    <p class="hdHead1 hdH1MB clickable" @click="panTo(2)">和德荷兰</p>
                    <p class="hdText">地址 : Kapteynstraat 12201 BB Noordwijk, The Netherlands</p>
                    <p class="hdText">电话 : +31 886966900</p>
                    <p class="hdText hdPMB">传真 : +31 886966999</p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <p class="hdHead1 hdH1MB clickable" @click="panTo(3)">和德法国</p>
                    <p class="hdText">地址 : 71 Boulevard National, La Garenne Colombes, 92250, Paris,France</p>
                    <p class="hdText">电话 : +336 86030414</p>
                    <p class="hdText">传真 : +331 70823119</p>
                </div>
                <div class="col-sm-6">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import Map2D from '@/components/Map2D.vue'
// import Map3D from '@/components/Map3D.vue'
export default {
	components: {
		Banner,
        Map2D,
        // Map3D,
	},
    methods: {
        panTo: function(idx) {
            this.$refs.map2D.panTo(idx);
        }
    }
}
</script>

<style scoped lang="less">
    .container {
        margin-top: 50px;
        margin-bottom: 50px;
        .clickable:hover {
            cursor: pointer;
        }
    }
</style>
