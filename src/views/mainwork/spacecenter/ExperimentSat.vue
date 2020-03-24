<template>
    <div>
        <PageTitle :titles="['宇航中心','Space Center','新技术试验卫星']" />
        <p class="hdHead1 hdH1MB hdIconRect">热刀压紧释放机构</p>
        <p class="hdHead1 hdH1MTB">产品描述</p>
        <p class="hdPara">是使用热刀逐渐释放Aramid 纤维线缆连接、通过嵌套堆叠结构的预拉力来释放的系统。相比于火工品而言，优势在于产生非常低的展开冲击力。从1996 年起至今有约500 套带有aramid 纤维线缆的压紧释放系统，成功用于在轨展开打型太阳帆板、天线指向机、快门机构等。</p>
        <p class="hdText hdIconTri">技术成熟度等级为9，具有100%成功率</p>
        <p class="hdText hdIconTri">模块化轻质量释放系统</p>
        <p class="hdText hdIconTri">非爆炸性释放</p>
        <p class="hdText hdIconTri">无放气或粒子损失</p>
        <p class="hdText hdIconTri">可进行标准化变动，可定制</p>
        <p class="hdText hdIconTri">预拉力：7000N</p>
        <p class="hdText hdIconTri">除准电压外，工作电压可通过脉冲宽度调节器应用</p>
        <p class="hdText hdIconTri">完全冗余构造</p>
        <p class="hdText hdIconTri">无自动释放风险</p>
        <div class="imgContainer50 hdPMTB">
            <div class="row">
                <div class="col-sm-12">
                    <img src="assets/mainwork/spacecenter/experimentsat/1.png" />
                </div>
            </div>
        </div>
        <p class="hdHead1 hdH1MTB hdIconRect">星上太阳敏感器</p>
        <p class="hdHead1 hdH1MTB">产品描述</p>
        <p class="hdPara">星上太阳敏感器是用于高精度太阳跟踪、指向和姿态测量的两轴、低成本太阳敏感器。太敏分别测量两个轴上的太阳入射角。该产品包含一个微处理器直接计算出太阳入射角及相关参数，计算结果通过RS-422接口传输。太敏提供基于设计几何尺寸的高灵敏度测量结果。金属屏蔽层和保护玻璃的使用，减小设备在高辐照下的老化。每个敏感器都经标定，并包含一个内部热敏电阻。</p>
        <p class="hdHead1 hdH1MTB">产品特点如下：</p>
        <p class="hdText hdIconTri">在超过10个飞行任务的近50个SSOC单元上经过验证</p>
        <p class="hdText hdIconTri">卫星姿态测量</p>
        <p class="hdText hdIconTri">高精度太阳位置确定</p>
        <p class="hdText hdIconTri">卫星太阳帆板定位</p>
        <p class="hdText hdIconTri">姿控和故障报警</p>
        <p class="hdText hdIconTri">卫星特定轨迹点的位置确定法</p>
        <p class="hdText hdIconTri">浮空器和UAV控制</p>
        <p class="hdHead1 hdH1MTB hdIconRect">霍尔电推进系统</p>
        <p class="hdHead1 hdH1MTB">产品描述</p>
        <p class="hdPara">霍尔推力器是国际先进的电推进装置，被广泛应用在卫星位置保持和姿态控制领域，并以结构简单、高比冲（在10³s数量级上）、高效率（可达60%以上）等优点成为未来空间飞行器的首选推进装置之一。KM-45推力器的标称推力为18 mN，功率为350 W，用于小型卫星(500公斤以下)。2017年已在航天器GSAT-9上通过了在轨验证。</p>
        <p class="hdHead1 hdH1MTB">主要参数指标如下：</p>
        <p class="hdText hdIconTri">功率：0.2 – 0.45kW</p>
        <p class="hdText hdIconTri">推力：10 – 28nN</p>
        <p class="hdText hdIconTri">比冲：1250 – 1500s</p>
        <div class="imgContainer50 hdPMTB">
            <div class="row">
                <div class="col-sm-12">
                    <img src="assets/mainwork/spacecenter/experimentsat/2.png" />
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
