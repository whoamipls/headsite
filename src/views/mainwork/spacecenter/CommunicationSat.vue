<template>
    <div>
        <PageTitle :titles="['航天重大专项配套','Major aerospace special support','通信卫星']" />
        <p class="hdHead1 hdH1MB hdIconRect">激光通信粗指向机构</p>
        <p class="hdHead1 hdH1MTB">产品描述</p>
        <p class="hdPara">粗指向机构用于激光通信终端的运动，可进行初始捕获、稳定跟踪，用于高、中、低轨卫星，该技术来源于欧洲，符合国际ESA标准，已在欧洲激光通信星座上广泛应用，具有指向精度高，质量轻，寿命长的优点。</p>
        <p class="hdText hdIconTri">半球指向</p>
        <p class="hdText hdIconTri">三种光学口径: Ø70mm, Ø80mm, Ø135 mm</p>
        <p class="hdText hdIconTri">反射率: > 93% @ 1064 nm</p>
        <p class="hdText hdIconTri">波前误差 < 27 nm rms</p>
        <p class="hdText hdIconTri">角速度 / 加速度: ≥ 25°/sec / ≥ 5°/sec²</p>
        <p class="hdText hdIconTri">指向误差: < 55 μrad, < 30 μrad rms</p>
        <p class="hdText hdIconTri">定位偏差: < 2 μrad rms</p>
        <p class="hdText hdIconTri">15年在轨寿命</p>
        <p class="hdHead1 hdH1MTB hdIconRect">电推进矢量调节机构</p>
        <p class="hdHead1 hdH1MTB">产品描述</p>
        <p class="hdPara">电推进矢量调节机构用于电推进对电推进器进行双轴精准指向。主要由驱动组件、压紧释放装置、阻尼装置和热控系统组成。</p>
        <p class="hdHead1 hdH1MTB">主要指标如下：</p>
        <p class="hdText hdIconTri">指向范围：-34°~+14°（俯仰角）；±14°（方位角）</p>
        <p class="hdText hdIconTri">最大转速：0.35°/s</p>
        <p class="hdText hdIconTri">步距角：0.00205°</p>
        <p class="hdText hdIconTri">重量：18.0kg</p>
        <p class="hdText hdIconTri">寿命：＞15年</p>
        <div class="imgContainer50 hdPMTB">
            <div class="row">
                <div class="col-sm-12">
                    <img src="assets/mainwork/spacecenter/communicationsat/1.png" />
                </div>
            </div>
        </div>
        <p class="hdHead1 hdH1MTB hdIconRect">等离子体诊断系统</p>
        <p class="hdHead1 hdH1MTB">产品描述</p>
        <p class="hdPara">电推进束流诊断系统主要用于对电推进系统中推力器的束流能量、粒子进行测量和分析，配备有多种测量探针，包括：减速电势分析器（RPAs）、法拉第杯、朗缪尔探针与石英晶体微量天平（QCM）等。</p>
        <p class="hdHead1 hdH1MTB">主要功能如下：</p>
        <p class="hdText hdIconTri">测量羽流离子电流密度</p>
        <p class="hdText hdIconTri">根据电位，等离子体密度和电子温度以及等离子体能量，来测量羽流等离子体性质</p>
        <p class="hdText hdIconTri">通过以上相关参数构建羽流等离子体的3D轮廓图</p>
        <p class="hdText hdIconTri">获取、存储并处理数据</p>
        <p class="hdText hdIconTri">扫描束流平面较宽的部分，从空间观点分析羽流。包含相应驱动器和控制器的可移动系统</p>
        <p class="hdText hdIconTri">可以方便的对系统探针进行校准</p>
        <div class="imgContainer50 hdPMTB">
            <div class="row">
                <div class="col-sm-12">
                    <img src="assets/mainwork/spacecenter/communicationsat/2.png" />
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
