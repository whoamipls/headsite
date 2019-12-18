<template>
	<div>
		<Title :titles="['公司概况','Company Overview','公司概况']" />
		<div style="float:right; padding-left:20px">
			<video width="320" height="240" controls autobuffer>
			<source src="assets/about/overview/advertise.mp4" type="video/mp4;">
		</div>
		<div>
			<p class="title1" style="color:#6B7CBB">北京和德宇航技术有限公司</p>
			<p class="title2" style="color:#C7CDDE">China HEAD Aerospace Technology Co.</p>
			<p class="content">北京和德宇航技术有限公司（以下简称“和德宇航”）创建于2007年，中国总部位于北京理工大学国防科技产业园，目前拥有包括荷兰、法国、香港子公司，摩洛哥、南非、墨西哥、上海代表处等多家国内外分支机构。公司是国际宇航联合会会员单位、国际电信联盟（ITU）成员单位、国际航标组织（IALA）成员单位、中国军工协会常务理事单位，拥有国家高新技术企业资质、欧空局项目承接资质、中关村高新技术企业资质、乙级测绘资质、三级保密资质、国军标质量管理体系认证等多项资质，以及多项自主知识产权和发明专利。</p>
			<p class="content">主要业务涉及宇航贸易与投资、天行者星座加卫星地面站服务网络建设和智能空间信息服务三大领域。通过建立多产业融合的智能空间信息生态圈，为客户提供快速有效的智能空间信息服务，帮助客户感知地球、精准决策！</p>
			<p class="content">和德宇航组建了国际化团队，包括欧洲政府顾问、大型企业前高管、高级律师及在宇航领域具有丰富经验的技术专家等世界一流的宇航人才。通过十余年的发展，和德宇航在全球拥有400多家合作伙伴，与荷兰、意大利、法国、南非等多个国家的航天局建立了紧密的合作关系，与多国政府、宇航机构、驻华使馆保持着紧密的联系，在欧洲、南美、非洲等地自有独立的服务网络，先后成立了中瑞空间结构联合实验室、中意电推进联合实验室等多个世界级宇航联合实验室，初步形成全球航天服务能力，在国际宇航界有良好的信誉。公司先后为我国载人航天、嫦娥探月、高分卫星、北斗导航等多个重大航天专项提供产品和服务，业务涉及多项重点宇航项目，产品涵盖各个航天器分系统。同时将中国的宇航技术和产品分别出口意大利、瑞士、比利时和印度等国，获得客户的一致好评。</p>
			<p class="content">在中国与意大利、荷兰、南非等各国的航天合作框架下，以及我国“一带一路”、“中非合作”、“中欧合作”等国家外交战略指引下，和德宇航正在实施新的发展战略。借助公司十余年积淀的国际资源，充分利用国际、国内两种资源和市场，在夯实宇航贸易传统业务的同时，集中精力建设“天行者”星座、发展智能空间信息服务、全球卫星应用服务网络等三个新业务方向，致力于成为国际一流、受人尊敬、科技创新的宇航服务型企业。</p>
		</div>
	</div>
    <div style="display:none">
    <!--======= HOME MAIN SLIDER =========-->
    <section class="sub-bnr" data-stellar-background-ratio="0.5"
      style="background: url(images/about/banner.png) no-repeat">
      <div class="position-center-center">
        <div class="container">
          <h3>关于我们</h3>
          <hr>
          <!-- <ol class="breadcrumb">
            <li><a href="#">Home</a></li>
            <li class="active">About</li>
          </ol> -->
        </div>
      </div>
    </section>

    <!-- Content -->
    <div id="content">

      <!-- TEAM -->
      <section class="innovaction light-sec padding-top-150">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">

              <!-- Heading -->
              <div class="heading text-left margin-bottom-40">
                <h4>the best Innovation design</h4>
                <span>Super Design Idea</span>
                <hr>
              </div>

              <!-- Info -->
              <p>We have a number of different teams within our agency that specialise in different areas of business so
                you can be sure that you won’t receive a generic service and although we can’t boast years and years of
                service we can ensure you that is a good thing in this industry. The data sources that we use for this
                type of analysis include customer enquiry data, sales figures, costs, market data and customer feedback.
                Maecenas mollis rhoncus justo ac gravida. Duis purus risus, auctor sed erat et</p>
              <br>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor massa ut ipsum lobortis feugiat
                eget quis elit. Maecenas mollis rhoncus justo ac gravida. Duis purus risus, auctor sed erat et, blandit
                tempus mauris. Etiam magna odio, convallis pulvinar eleifend at, suscipit et libero. </p>
              <a href="#." class="btn margin-top-20">Read more <i class="fa fa-long-arrow-right"></i></a>
            </div>

            <!-- Image -->
            <div class="col-sm-6 text-right"> <img class="img-responsive" src="images/skills-img.png" alt=""> </div>
          </div>
        </div>
      </section>
    </div>
	</div>
</template>

<script>
import Title from '@/components/Title.vue'
export default {
	components: {
		Title,
	},
    mounted: function() {
	    mainReady();
    }
}
</script>

<style scoped lang="less">
	p.title1 {
		text-align: left;
		font-size: 20px;
		margin: 0;
		font-weight: bold;
		color: #363940;
	}
	p.title2 {
		text-align: left;
		font-size: 20px;
		padding-bottom: 10px;
		color: #363940;
	}
</style>
