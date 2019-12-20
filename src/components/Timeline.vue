<template>
	<div class="div1">
		<div class="div2" v-for="y in years">
			<img :src="`assets/components/timeline/${y==years[0]?1:2}.png`">
			<span class="year">{{y.year}}</span>
			<ul>
				<li v-for="m in y.months"><span>{{m.month}}</span>&nbsp;<span>{{m.text}}</span></li>
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
        padding-left: 50px;
        text-align: left;
		color: @contentColor;
    }

    .div2 {
        position: relative;
        border: 1px solid gray;
        border-top: 0;
        border-bottom: 0;
        border-right: 0;
    }

    ul {
        margin-top: 0px;
        margin-bottom: 0px;
        margin-left: 40px;
        font-size: 16px;
    }

    li {
        line-height: 30px;
        list-style-type: disc;
    }

    img {
        position: absolute;
        transform: translate(-50%, 0);
    }

    span.year {
        position: absolute;
        transform: translate(-150%, 0);
		font-size: 18px;
		font-weight: bold;
    }
</style>
