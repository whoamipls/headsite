<template>
    <div class="cardContainer">
        <b-carousel
            :interval="4000"
            :controls="images.length>1"
        >
            <b-carousel-slide v-for="img in images" :img-src="img"></b-carousel-slide>
        </b-carousel>
        <div class="inner">
            <p class="hdHead1 hdIconRect">{{title}}</p>
            <p class="content">{{text}}</p>
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
    div.cardContainer {
        border: 1px solid @dividerColor;
        padding: 0px;
        div.inner {
            padding: 0px 15px 5px 15px;
            p.hdHead1 {
                margin-top: 10px;
            }
            p.content {
                text-align: left;
                font-size: 12px;
                line-height: 24px;
            }
        }
    }
</style>