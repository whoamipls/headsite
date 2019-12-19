<template>
    <div class="outer">
        <b-carousel
            :interval="4000"
            :controls="images.length>1"
        >
            <b-carousel-slide v-for="img in images" :img-src="img"></b-carousel-slide>
        </b-carousel>
        <div class="inner">
            <div class="title">
                <img src="assets/components/bluerect.png" />
                <span>{{title}}</span>
            </div>
            <p>{{text}}</p>
        </div>
    </div>
</template>

<script>
	export default {
		props: {
			images: Array,
            title: String,
            text: String
		},
        mounted: function(){
        }
	}
</script>

<style scoped lang="less">
	.title {
		.paraTitle();
	}
    div.outer {
        border: 1px solid gray;
        padding: 0px;
    }
    div.inner {
        padding: 0px 15px;
    }
    p {
        text-align: left;
        font-size: 12px;
    }
</style>