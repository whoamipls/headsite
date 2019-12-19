<template>
	<div>
		<Title :titles="['社会责任','Responsibility','慈善公益']" />
		<div>
			<p class="content">扶危济困、乐善好使是中华民族的传统美德，饮水思源、回报社会是民营企业的使命和责任。</p>
			<p class="content">和德宇航将在长期经营和创新发展过程中，秉承以人为本、和谐共生的理念，为民生、教育、环保、扶贫、体育、医疗等慈善公益事业作出应有的贡献。在努力实现经济效益和社会利益双丰收的同时，打造和德宇航的百年基业。</p>
			<p style="text-align:center">
                <b-img src="assets/duty/charity/1.png" fluid alt="Responsive image"></b-img>
            </p>
            <p class="content">公司十分注重团队建设和个人修养的培养，号召员工绿色出行，健步行走，参加微信捐步的员工占比50以上。我们一直致力于积极参与社会福利性事务活动，鼓励员工利用业余时间参加志愿者活动及社会公益活动，通过自己的正能量来弘扬社会正气，带动社会群体的共同进步！</p>
		</div>
	</div>
</template>

<script>
import Title from '@/components/Title.vue'
export default {
	components: {
		Title,
	},
    mounted: function() {
    }
}
</script>

<style scoped lang="less">

</style>
