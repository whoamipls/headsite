<template>
    <div>
        <PageTitle :titles="['航天重大专项配套','Major aerospace special support','北斗导航']" />
        <p class="hdHead1 hdH1MB hdIconRect">太阳翼驱动机构（SADA）</p>
        <p class="hdHead1 hdH1MTB">产品描述</p>
        <p class="hdPara">SADA用于驱动太阳翼，按指定速度、精度对日定向来保证卫星能源充足。同时，传输太阳翼与星体间的能源和信号。</p>
        <p class="hdHead1 hdH1MTB">主要指标如下：</p>
        <p class="hdText hdIconTri">转速：0-1转/min</p>
        <p class="hdText hdIconTri">寿命：＞10年</p>
        <p class="hdText hdIconTri">输出转矩：≥10Nm</p>
        <p class="hdText hdIconTri">传输功率＞2kW</p>
        <p class="hdText hdIconTri">重量：≤4.25kg</p>
        <div class="imgContainer70 hdPMTB">
            <div class="row">
                <div class="col-sm-12">
                    <img src="assets/mainwork/spacecenter/beidounavi/1.png" />
                </div>
            </div>
        </div>
        <p class="hdHead1 hdH1MTB hdIconRect">辐射环境监测仪</p>
        <p class="hdHead1 hdH1MTB">产品描述</p>
        <p class="hdPara">RADEM全称为辐射加固型电子监测仪，该仪器基于欧宇航局JUICE开发项目，针对LAGRANGE项目进行了升级。该仪器主要用于对空间环境中的质子、电子和重离子等粒子进行能量测量，评估其对航天器可能的损伤。该仪器可非常精确的进行LET测量，并辨明粒子之间清晰间隔。</p>
        <p class="hdText hdIconTri">质子望远镜(2 MeV – 500 MeV)</p>
        <p class="hdText hdIconTri">电子望远镜(200 keV – 8 MeV)</p>
        <p class="hdText hdIconTri">定向探测器(E > 200 keV)</p>
        <p class="hdText hdIconTri">重离子望远镜(5 MeV/n – 500 MeV/n)</p>
        <div class="imgContainer50 hdPMTB">
            <div class="row">
                <div class="col-sm-12">
                    <img src="assets/mainwork/spacecenter/beidounavi/2.png" />
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
