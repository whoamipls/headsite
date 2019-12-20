<template>
    <div>
        <p class="month">{{month}}</p>
        <p class="day">{{day}}</p>
    </div>
</template>

<script>
	export default {
		props: {
            time: Object
		},
        data() {
            return {
                month: '',
                day: ''
            }
        },
        mounted: function(){
            let t = new Date(this.time);
            this.month = t.toDateString().split(" ")[1];
            this.day = this.formatZero(t.getDate(), 2);
        },
        methods: {
            formatZero: function(num, len) {
                if(String(num).length > len) return num;
                return (Array(len).join(0) + num).slice(-len);
            }
        }
	}
</script>

<style scoped lang="less">
    div {
        width: 50px;
        height: 50px;
    }

    p {
        margin: 0px;
        width: 100%;
        height: 50%;
        line-height: 25px;
        text-align: center;
    }

    p.month {
        background: blue;
        color: white;
        font-size: 14px;
    }

    p.day {
        border: 1px solid gray;
        border-top: 0;
        color: blue;
        font-size: 20px;
    }
</style>