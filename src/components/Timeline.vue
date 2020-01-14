<template>
	<div class="div1">
		<div class="div2" v-for="y in years">
			<img :src="`assets/components/timeline/${y==years[0]?1:2}.png`">
			<span class="year">{{y.year}}</span>
			<ul>
				<li v-for="m in y.months"><span class="month">{{m.month}}</span>&nbsp;<span class="info">{{m.text}}</span></li>
			</ul>
			<br>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
            years: Array,
		},
        mounted: function() {
        }
	}
</script>

<style scoped lang="less">
    .div1 {
        padding-left: 80px;
        text-align: left;
		color: @contentColor;
    }

    .div2 {
        position: relative;
        border: 1px solid #E4E5E6;
        border-top: 0;
        border-bottom: 0;
        border-right: 0;
        padding-bottom: 20px;
    }

    ul {
        margin-top: 0px;
        margin-bottom: 0px;
        margin-left: 50px;
        font-size: 16px;
    }

    li {
        line-height: 36px;
        list-style-type: disc;
    }

    li:after {
        color:red;
    }

    img {
        position: absolute;
        transform: translate(-50%, -50%);
        top: 18px;
    }
    span.year {
        position: absolute;
        transform: translate(-180%, 0);
		font-size: 18px;
		font-weight: bold;
        color: @hdTitleColor;
        top: 5px;
    }
    span.month {
        color: @hdLMenuChildColor;
    }
    span.info {
        margin-left: 10px;
    }
</style>
