<template>
	<div>
		<PageTitle :titles="['社会责任','Social Responsibility','慈善公益']" />
		<div>
			<p class="hdPara hdPMB">扶危济困、乐善好施是中华民族的传统美德，饮水思源、回报社会是民营企业的使命和责任。和德宇航在长期经营和创新发展过程中，秉承以人为本、和谐共生的理念，为民生、教育、环保、扶贫、体育、医疗等慈善公益事业作出应有的贡献。在努力实现经济效益和社会利益双丰收的同时，打造和德宇航的百年基业。</p>
			<p class="hdPMTB" style="text-align:center">
                <b-img src="assets/duty/charity/1.png" fluid alt="Responsive image"></b-img>
            </p>
			<p class="hdHead1 hdH1MT">微信捐步</p>
			<p class="hdPara hdPMB">我们号召员工绿色出行，健步行走，结合社会公益做贡献，参加微信捐步的员工占比65%以上。</p>
			<p class="hdHead1 hdH1MT">志愿者活动</p>
			<p class="hdPara hdPMB">我们一直致力于积极参与社会福利性事务活动，鼓励员工利用业余时间参加志愿者活动及社会公益活动。</p>
			<p class="hdHead1 hdH1MT">扶贫帮困</p>
			<p class="hdPara hdPMB">我们积极践行社会责任，吸纳残疾人来公司就业， 把扶贫帮困落实到位。</p>
			<p class="hdHead1 hdH1MT">公益慈善</p>
			<p class="hdPara hdPMB">和德慈善基金正在积极筹备之中。</p>
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

<style scoped lang="less">

</style>
