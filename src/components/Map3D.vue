<template>
    <div id="cesiumContainer" style="width: 700px; height:400px"></div>
</template>

<script>
	export default {
		props: {
		},
        mounted: function() {
            var tdtKey = 'f2b11a204a2f84fc62bc5af15e483b48';// 天地图
            Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmNDRmOTdiMS1mNWQ1LTQ0MTctYWRhMC0zNGZjZjk1NjgzNmQiLCJpZCI6MTAxNjYsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NTU4MTQ0NjN9.ejboCzDUFnHQ1Jx7EIKzw8KnxM9ZUC0-W_lcWldREOs';
            var viewer = new Cesium.Viewer('cesiumContainer', {
                imageryProvider: new Cesium.MapboxImageryProvider({
                    mapId: 'mapbox.satellite'
                }),
                animation: false,  //是否显示动画控件
                baseLayerPicker: false, //是否显示图层选择控件
                geocoder: false, //是否显示地名查找控件
                timeline: true, //是否显示时间线控件
                sceneModePicker: true, //是否显示投影方式控件
                navigationHelpButton: false, //是否显示帮助信息控件
                infoBox: false,  //是否显示点击要素之后显示的信息
                fullscreenButton: false,// 全屏显示按钮
            });
            viewer._cesiumWidget._creditContainer.style.display = "none";// 隐藏版权信息
            // Google卫星
            // viewer.imageryLayers.addImageryProvider(
            //     new Cesium.UrlTemplateImageryProvider({
            //         url: `http://www.google.cn/maps/vt?lyrs=s@851&gl=cn&x={x}&y={y}&z={z}`,
            //     })
            // );
            // 天地图矢量地图
            viewer.imageryLayers.addImageryProvider(
                new Cesium.UrlTemplateImageryProvider({
                    url: `https://t2.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=${tdtKey}`,
                })
            );
            // 天地图矢量中文注记层
            viewer.imageryLayers.addImageryProvider(
                new Cesium.UrlTemplateImageryProvider({
                    url: `https://t0.tianditu.gov.cn/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=${tdtKey}`,
                })
            );
        }
	}
</script>

<style scoped lang="less">
    #cesiumContainer {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
</style>
