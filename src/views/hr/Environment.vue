<template>
    <div>
        <b-row>
            <b-col>
                <Card :images="['assets/hr/environment/1.png']" title="和德宇航前台" text="清闲的雅室让你我感受自然的气息，温馨的团队为你我放飞青春的理想。自然舒畅的人文环境更添新意，青春洋溢的优秀团队再创奇迹。" />
            </b-col>
            <b-col>
                <Card :images="['assets/hr/environment/2.png']" title="和德宇航员工办公区域" text="清闲的雅室让你我感受自然的气息，温馨的团队为你我放飞青春的理想。自然舒畅的人文环境更添新意，青春洋溢的优秀团队再创奇迹。" />
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <Card :images="['assets/hr/environment/3.png']" title="和德宇航办公一角" text="清闲的雅室让你我感受自然的气息，温馨的团队为你我放飞青春的理想。自然舒畅的人文环境更添新意，青春洋溢的优秀团队再创奇迹。" />
            </b-col>
            <b-col>
                <Card :images="['assets/hr/environment/4.png']" title="和德宇航会议室" text="清闲的雅室让你我感受自然的气息，温馨的团队为你我放飞青春的理想。自然舒畅的人文环境更添新意，青春洋溢的优秀团队再创奇迹。" />
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <Card :images="['assets/hr/environment/5.png']" title="和德宇航会议室" text="清闲的雅室让你我感受自然的气息，温馨的团队为你我放飞青春的理想。自然舒畅的人文环境更添新意，青春洋溢的优秀团队再创奇迹。" />
            </b-col>
            <b-col>
                <Card :images="['assets/hr/environment/6.png']" title="和德宇航走廊" text="清闲的雅室让你我感受自然的气息，温馨的团队为你我放飞青春的理想。自然舒畅的人文环境更添新意，青春洋溢的优秀团队再创奇迹。" />
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
