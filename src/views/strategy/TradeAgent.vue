<template>
    <div>
        <PageTitle :titles="['宇航中心','Space Center','外贸代理服务']" />
        <p class="content">外贸代理是公司的传统业务，也是比较重要的业务。公司成立至今，外贸代理业务一直是公司业务的重要组成部分。近几年在公司领导的大力支持下，外贸代理业务取得了比较大发展。</p>
        <p class="content">目前主要客户为中国航天科技集团、中科院、和中电集团等。为客户提供商务执行、风险规避、合同履约等方面的服务。商务执行主要包括协助客户进行招标工作的各项准备、外贸合同的前期沟通，合同各个条款的商定等，风险规避主要包括从合同签订、对外付款、相关法律条款、合同执行周期等各主要环节进行风险评估及控制，最大限度的规避风险。合同履约主要包括合同签订后的外汇支付、免税办理、清关物流，验收结算等环节。</p>
        <div class="title">
            <span>我司的主要优势</span>
        </div>
        <div class="title">
            <span>1、贸易术语多样化</span>
        </div>
        <p class="content">对CIP、CIF、FCA、FOB、CPT、EXW等多种贸易术语的内容熟悉，且都有过实际、熟练操作。</p>
        <div class="title">
            <span>2、采购经验</span>
        </div>
        <p class="content">引进过多种类型的产品，包括采用一般贸易方式引进的元器件、各类标准化地面测试设备、星上部件、软件等，采用非贸易方式完成的培训服务、大型设备搬迁、维修服务等。</p>
        <div class="title">
            <span>3、资源支持</span>
        </div>
        <p class="content">海关—北京、上海、天津、烟台、西安、青岛等；办理免税快速、高效；</p>
        <p class="content">物流—国内、国际、空运、海运、陆运、香港中转库房等；清关速度快；</p>
        <p class="content">保险公司—投保迅速、及时，合理、优惠的费用；</p>
        <p class="content">银行—专业、高效、审单严格、流程规范、有效规避资金风险、信用额度；</p>
        <p class="content">律师事务所—专业的法律支持，提前规避法律风险；</p>
        <p class="content">主要领导机关—与科技集团、总装、海关总署、商务部等单位保持密切联系。</p>
        <div class="title">
            <span>4、免税办理</span>
        </div>
        <p class="content">我司在办理科教免、鼓励免、转项免等免税业务方面有较丰富的经验，办理效率较高。团队经验丰富。</p>
        <div class="title">
            <span>5、团队经验</span>
        </div>
        <p class="content">我公司从事外贸代理业务的员工均已取得经国家认证的外贸从业资格证书；行业经验平均十年以上，熟悉运作模式；熟悉国内公开招标各环节的具体工作，有完整的招标流程文件，可协助用户进行前期各项准备工作；所有合同实行专人专管、一管到底，并严格按照规范化流程执行。我们以“为客户不断提供增值服务”为理念，充分锻炼了团队成员在商务执行、合同履约、风险规避等方面的综合能力。</p>
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
	.title {
		.paraTitle();
	}
</style>
