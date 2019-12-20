<template>
    <div>
        <div class="hotBrief">
            <table>
                <tr>
                    <td class="col1">
                        <DateIcon :time="time"/>
                    </td>
                    <td>
                        <p class="title">{{title}}</p>
                        <p class="content">{{content}}</p>
                        <p class="link"><a href="#">查看详情>></a></p>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import DateIcon from '@/components/DateIcon.vue'
export default {
    components: {
		DateIcon
	},
    props: {
        time: Object,
        title: String,
        content: String,
    },
    mounted: function(){
    }
}
</script>

<style scoped lang="less">
    div.hotBrief {
        border: 1px gray solid;
        border-top: 0;
        border-left: 0;
        border-right: 0; 
        margin-bottom: 20px;
    }
    td {
        vertical-align: top;
        text-align: left;
    }
    td.col1 {
        width: 80px;
    }
    p.title {
        font-size: 20px;
        font-weight: bold;
    }
    // p.content{
    //     font-size: 18px;
    //     color: @contentColor;
    // }
    .link a {
        font-size: 14px;
    }
</style>