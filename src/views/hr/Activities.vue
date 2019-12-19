<template>
    <div>
        <b-row>
            <b-col>
                <Card :images="['assets/hr/activities/1.png']" title="年轻化团队" text="我们的团队各有千秋，别具一格，既能小清新，又能高挑战，充分展现团队每位成员的技能。" />
            </b-col>
            <b-col>
                <Card :images="['assets/hr/activities/2.png']" title="公司周年庆" text="12年易春秋，风华正茂；12年载耕耘，硕果累累，和德宇航12周年庆典活动。" />
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <Card :images="['assets/hr/activities/3.png']" title="十渡秋日团建" text='" 聚焦，坚毅，全力以赴，雷厉风行 " 为主题的秋季团建活动，大家团队协作，共同为完成同一目标而努力，彰显和德团结精神。' />
            </b-col>
            <b-col>
                <Card :images="['assets/hr/activities/4.png']" title="兴隆天文台基地夏日团建" text="增强团队凝聚力，培养同事之间的感情，同时普及天文知识，努力拓展业务技能,让员工实现劳逸结合，放松心情。" />
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <Card :images="['assets/hr/activities/5.png']" title="团队协作" text="自愿合作，协同努力，为达到目标一同奋斗，培养团队向心力。" />
            </b-col>
            <b-col>
                <Card :images="['assets/hr/activities/6.png']" title="季度福利" text='公司一直秉承注重的" 人文关怀，多关注，关心员工 "，每个季度都会进行应季水果采购发放。' />
            </b-col>
        </b-row>
	</div>
</template>

<script>
import Card from '@/components/Card.vue'
export default {
    components: {
        Card
    }
}
</script>

<style scoped lang="less">
    div.col {
        margin-bottom: 20px;
    }
</style>
