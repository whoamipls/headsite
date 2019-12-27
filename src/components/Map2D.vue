<template>
    <div id="baiduMapContainer"></div>
</template>

<script>
	export default {
		props: {
		},
        data() {
            return {
                map: null,
                points:[
                    {
                        name: '北京和德宇航技术有限公司',
                        x: 116.316873,
                        y: 39.966187,
                    },
                    {
                        name: '和德香港',
                        x: 114.160455,
                        y: 22.291028,
                    }
                ]
            }
        },
        methods: {
            panTo: function(val, oldVal) {
                if(val == null || val < 0 || val >= this.points.length) return;
                let p = this.points[val];
                this.map.panTo(new BMap.Point(p.x, p.y));
            }
        },
        mounted: function() {
            this.map = new BMap.Map("baiduMapContainer", { enableMapClick: false });// 创建地图实例
            var point = new BMap.Point(116.404, 39.915);// 创建点坐标
            this.map.centerAndZoom(point, 11);// 初始化地图，设置中心点坐标和地图级别
            this.map.enableScrollWheelZoom();
            this.points.forEach(p =>{
                var marker = new BMap.Marker(new BMap.Point(p.x,p.y));// 创建标注
                this.map.addOverlay(marker);
                var label = new BMap.Label(p.name);
                marker.setLabel(label);
            });
        }
	}
</script>

<style scoped lang="less">
    #baiduMapContainer {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
</style>
