<template>
    <div>
        <PageTitle :titles="['航天重大专项配套','Major aerospace special support','探月工程']" />
        <p class="hdHead1 hdH1MB hdIconRect">钻月驱动组件</p>
        <p class="hdHead1 hdH1MTB">产品描述</p>
        <p class="hdPara">该驱动组件由宇航级电机和减速器两部分高度集成，具有重量轻、力矩大、功耗小、在苛刻条件适应性强的特点。可适应超高温和超低温下的工作条件，具有防尘、抗紫外线辐照等特征。</p>
        <p class="hdHead1 hdH1MTB">主要功能如下：</p>
        <p class="hdText hdIconTri">重量轻：＜2.5kg（包括冗余，线缆）</p>
        <p class="hdText hdIconTri">体积小：直径＜60mm，长度＜200mm</p>
        <p class="hdText hdIconTri">力矩大：15Nm@160rpm，9Nm@480rpm</p>
        <p class="hdText hdIconTri">可靠性高：双绕组，冗余备份，径向跳动＜0.003mm，各相间绝缘电阻值＞50MΩ</p>
        <p class="hdText hdIconTri">抗辐照，对月尘等有极好屏蔽效果</p>
        <p class="hdText hdIconTri">散热好，持续工作时间较长</p>
        <p class="hdHead1 hdH1MTB hdIconRect">轻质谐波减速器组件</p>
        <p class="hdHead1 hdH1MTB">产品描述</p>
        <p class="hdPara">轻质谐波组件是面向特种机床及机器人、特殊医药设备和航空航天等对重量极其敏感的行业所专业设计，其柔轮、钢轮和波发生器都经过精准减重和尺寸缩小设计，在保证功能的同时达到减重20%-50%。</p>
        <p class="hdHead1 hdH1MTB">主要功能如下：</p>
        <p class="hdText hdIconTri">柔轮的输出法兰对内径尺寸和空心轴直径进行了优化</p>
        <p class="hdText hdIconTri">钢轮设计成特殊的“T”型，在减重的同时保证了径向刚度</p>
        <p class="hdText hdIconTri">波发生器尺寸及内腔都做了几何优化</p>
        <p class="hdText hdIconTri">特殊合金制作的发生器栓，散热良好</p>
        <p class="hdText hdIconTri">波发生器转动惯量减少40%，但力矩承载能力不变</p>
        <p class="hdText hdIconTri">丰富的宇航飞行经验：探月、火星等项目</p>
        <div class="imgContainer70 hdPMTB">
            <div class="row">
                <div class="col-sm-12">
                    <img src="assets/mainwork/spacecenter/lunarprobe/1.png" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
export default {
	components: {
		PageTitle,
	},
    mounted: function() {
    }
}
</script>
