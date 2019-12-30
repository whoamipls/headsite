<template>
    <div>
        <div class="hotBrief">
            <table>
                <tr>
                    <td class="col1">
                        <DateIcon :time="time"/>
                    </td>
                    <td>
                        <p class="hdTitle1Margin0">{{title}}</p>
                        <p class="hdSection">{{content}}</p>
                        <p class="link"><a href="javascript:void(0);" @click="showDetail">查看详情>></a></p>
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
    },
    methods: {
        showDetail: function() {
            this.$emit('onShowDetail', 'id');
        }
    }
}
</script>

<style scoped lang="less">
    div.hotBrief {
        border: 1px @dividerColor solid;
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
    // p.title {
    //     font-size: @hdTitle1FontSize; //20px;
    //     font-weight: bold;
    // }
    .link a {
        font-size: 14px;
    }
</style>