<template>
    <div>
        <PageTitle :titles="['航天重大专项配套','Major aerospace special support','地球观测卫星']" />
        <p class="hdHead1 hdH1MB hdIconRect">星载合成孔径雷达SAR技术</p>
        <p class="hdHead1 hdH1MTB">产品描述</p>
        <p class="hdPara">星载合成孔径雷达SAR技术，源于德国SAR-Lupe合成孔径雷达的研制升级。</p>
        <p class="hdHead1 hdH1MTB">可提供：</p>
        <p class="hdText hdIconTri">SAR设计和分析</p>
        <p class="hdText hdIconTri">SAR原始数据仿真</p>
        <p class="hdText hdIconTri">SAR系统性能测试</p>
        <p class="hdText hdIconTri">SAR 主动雷达目标(ARC)校准</p>
        <p class="hdText hdIconTri">后端SAR数据处理</p>
        <p class="hdText hdIconTri">条带式合成孔径雷达SAR成像数据处理机</p>
        <p class="hdText hdIconTri">遥感卫星用高性能、快速查询数据处理机</p>
        <p class="hdHead1 hdH1MTB hdIconRect">飞秒脉冲激光模拟单粒子效应试验系统</p>
        <p class="hdHead1 hdH1MTB">产品描述</p>
        <p class="hdPara">高能辐射粒子与微芯片单元（单粒子效应SEE）之间相互作用既可引起软件故障，如数码设备单个和多个数据乱码破坏了存储单元的数据（直到重启），也会引起硬件故障，甚至会造成集成电路的损坏。新型单粒子效应试验系统采用非常短的光脉冲从一个超快速激光系统通过显微镜目镜聚焦到设备的表面，在IC中提供了完美的单粒子转移模拟。该设备的费用远低于采用离子，质子和中字粒子束测试。</p>
        <p class="hdPara">该设备在微芯片表面可以辨识出具体的敏感位置，而离子束很难实现。激光提供短的光脉冲，用于在硅的敏感区产生电离窄柱，模拟辐射粒子径迹和相互作用的影响，具有从前部和后部输送激光脉冲进入微芯片的能力。可有效避免后部金属层穿透。</p>
        <div class="imgContainer50 hdPMTB">
            <div class="row">
                <div class="col-sm-12">
                    <img src="assets/mainwork/spacecenter/earthobservationsat/1.png" />
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
