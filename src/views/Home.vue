<template>
	<div>
		<!--======= HOME MAIN SLIDER =========-->
		<section class="home-slider">
			<!-- Slider Loader -->
			<div id="loader" class="hom-slie">
				<div class="tp-loader spinner0"> <span class="dot1"></span> <span class="dot2"></span> <span
					class="bounce1"></span> <span class="bounce2"></span> <span class="bounce3"></span> </div>
			</div>
			<!-- SLIDE Start -->
			<div class="tp-banner-container">
				<div class="tp-banner">
					<ul>
						<!-- SLIDE  -->
						<li data-transition="random" data-slotamount="7" data-masterspeed="300" data-saveperformance="off">
							<!-- MAIN IMAGE -->
							<img src="assets/home/banner/1.png" alt="slider" data-bgposition="center center" data-bgfit="cover"
								data-bgrepeat="no-repeat">
							<!-- LAYERS -->
							<!-- LAYER NR. 2 -->
							<div class="tp-caption sfb tp-resizeme letter-space-4" data-x="center" data-hoffset="0"
								data-y="center" data-voffset="-70" data-speed="800" data-start="800" data-easing="Power3.easeInOut"
								data-splitin="chars" data-splitout="none" data-elementdelay="0.07" data-endelementdelay="0.1"
								data-endspeed="300"
								style="z-index: 6; font-size:52px; color:#fff; text-transform:uppercase; white-space: nowrap;">
								航天创建人类美好生活 </div>
							<!-- LAYER NR. 2 -->
							<div class="tp-caption sfb tp-resizeme letter-space-3" data-x="center" data-hoffset="0"
								data-y="center" data-voffset="0" data-speed="800" data-start="1300" data-easing="Power3.easeInOut"
								data-splitin="chars" data-splitout="none" data-elementdelay="0.07" data-endelementdelay="0.1"
								data-endspeed="300"
								style="z-index: 6; font-size:30px; color:white; text-transform:uppercase; white-space: nowrap;">
								Space Creates a Better Future for Human Being </div>
							<!-- LAYER NR. 3 -->
							<div class="tp-caption sfb tp-resizeme letter-space-1" data-x="center" data-hoffset="0" data-y="center"
								data-voffset="40" data-speed="800" data-start="1800" data-easing="Power3.easeInOut" data-splitin="none"
								data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1" data-endspeed="300"
								style="z-index: 7; font-size:18px; color:#fff; max-width: auto; max-height: auto; white-space: nowrap;">
								国内商业航天领先者，智能空间信息服务提供商 </div>
						</li>
						<!-- SLIDE  -->
						<li data-transition="random" data-slotamount="7" data-masterspeed="300" data-saveperformance="off">
							<!-- MAIN IMAGE -->
							<img src="assets/home/banner/1.png" alt="slider" data-bgposition="center center" data-bgfit="cover"
								data-bgrepeat="no-repeat">
							<!-- LAYERS -->
							<!-- LAYER NR. 2 -->
							<div class="tp-caption sfr tp-resizeme letter-space-4" data-x="center" data-hoffset="0"
								data-y="center" data-voffset="-70" data-speed="800" data-start="800" data-easing="Power3.easeInOut"
								data-splitin="chars" data-splitout="none" data-elementdelay="0.07" data-endelementdelay="0.1"
								data-endspeed="300"
								style="z-index: 6; font-size:52px; color:#fff; text-transform:uppercase; white-space: nowrap;">
								感知地球精准决策 </div>
							<!-- LAYER NR. 2 -->
							<div class="tp-caption sfr tp-resizeme letter-space-3" data-x="center" data-hoffset="0"
								data-y="center" data-voffset="0" data-speed="800" data-start="1300" data-easing="Power3.easeInOut"
								data-splitin="chars" data-splitout="none" data-elementdelay="0.07" data-endelementdelay="0.1"
								data-endspeed="300"
								style="z-index: 6; font-size:30px; color:white; text-transform:uppercase; white-space: nowrap;">
								Enabling Decision Makers By Sensing The Earth</div>
							<!-- LAYER NR. 3 -->
							<div class="tp-caption sfb tp-resizeme letter-space-1" data-x="center" data-hoffset="0" data-y="center"
								data-voffset="40" data-speed="800" data-start="1800" data-easing="Power3.easeInOut" data-splitin="none"
								data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1" data-endspeed="300"
								style="z-index: 7; font-size:18px; color:#fff; max-width: auto; max-height: auto; white-space: nowrap;">
								为全球客户提供智能空间信息服务方案和解决方案</div>
						</li>
					</ul>
				</div>
			</div>
		</section>
		<!-- Content -->
		<div id="content">
			<!-- Welcome -->
			<section class="padding-top-150 padding-bottom-150">
				<div class="container">
					<!-- Heading -->
					<div class="heading text-center">
						<h4>主营业务</h4>
						<span>Main Business</span>
						<hr>
					</div>
					<!-- OFFER -->
					<div class="offers">
						<ul class="row">
							<li class="col-sm-4"> <img src="assets/home/mainwork/1.png" class="img-responsive" alt="">
								<h5>宇航中心</h5>
								<hr class="main">
								<p class="hdAnnotationL">北京和德宇航技术有限公司(以下简称和德宇)成立于2007年4月，是一家致力于微小卫星及星座技术应用于人类生活的技术创新服务型公司。公司总部位于北京市海淀区北理工国防科技产业园,在香港...</p>
								<a href="javascript:void(0);" @click="Goto('/Mainwork/Special')">详细 <i class="fa fa-long-arrow-right"></i></a>
							</li>
							<li class="col-sm-4"> <img src="assets/home/mainwork/2.png" class="img-responsive" alt="">
								<h5>“天行者”规划建设</h5>
								<hr class="main">
								<p class="hdAnnotationL">“天行者“星座是由北京和德宇航技术有限公司提出的先进的微小卫星星座，提供窄带空间物联网双向数据通信（DCS）和全球船舶位置监控（AIS），全球航空器监控（ADS-B）等空间服务。”天行者”星座由48...</p>
								<a href="javascript:void(0);" @click="Goto('/Mainwork/Skywalker')">详细 <i class="fa fa-long-arrow-right"></i></a>
							</li>
							<li class="col-sm-4"> <img src="assets/home/mainwork/3.png" class="img-responsive" alt="">
								<h5>地面站系统建设</h5>
								<hr class="main">
								<p class="hdAnnotationL">根据公司全球服务体系，和德宇航分别在中国、东南亚、中亚、南亚、中东、中亚、非洲、美洲等区域成立海外子公司，建设地面站，组建全球地面站网，以及提供本地化的卫星应用服务，满足“天行者”星座在轨运...</p>
								<a href="javascript:void(0);" @click="Goto('/Mainwork/Station')">详细 <i class="fa fa-long-arrow-right"></i></a>
							</li>
						</ul>
					</div>
				</div>
			</section>
			<!-- Gallery -->
			<section>
				<div class="container">
					<!-- Heading -->
					<div class="heading text-center">
						<h4>和德资讯</h4>
						<span>Information</span>
						<hr>
					</div>
				</div>
				<!-- PORTFOLIO -->
				<div class="portfolio port-wrap">
					<!-- Work Filter -->
					<ul class="portfolio-filter text-center margin-bottom-80">
						<li><a class="active" href="#." data-filter="*">热点事件 </a></li>
						<li><a href="#." data-filter=".pf-branding-design">业务动态 </a></li>
						<li><a href="#." data-filter=".pf-photography">行业新闻 </a></li>
						<li><a href="#." data-filter=".pf-web-design">媒体报道 </a></li>
						<li><a href="#." data-filter=".pf-digital-art">视频影像 </a></li>
					</ul>
					<!-- PORTFOLIO ITEMS -->
					<div class="items row col-4">
						<!-- ITEM -->
						<article class="portfolio-item pf-branding-design pf-web-design">
							<div class="portfolio-image"> <a href="#."> <img alt="" src="assets/home/news/1.png"> </a> </div>
							<div class="portfolio-overlay">
								<div class="position-center-center"> <a href="#."><i class="ion-link"></i></a> </div>
							</div>
						</article>
						<!-- ITEM -->
						<article class="portfolio-item pf-photography">
							<div class="portfolio-image"> <a href="#."> <img alt="" src="assets/home/news/2.png"> </a> </div>
							<div class="portfolio-overlay">
								<div class="position-center-center"> <a href="#."><i class="ion-link"></i></a> </div>
							</div>
						</article>
						<!-- ITEM -->
						<article class="portfolio-item pf-web-design pf-branding-design">
							<div class="portfolio-image"> <a href="#."> <img alt="" src="assets/home/news/3.png"> </a> </div>
							<div class="portfolio-overlay">
								<div class="position-center-center"> <a href="#."><i class="ion-link"></i></a> </div>
							</div>
						</article>
						<!-- ITEM -->
						<article class="portfolio-item pf-branding-design pf-digital-art">
							<div class="portfolio-image"> <a href="#."> <img alt="" src="assets/home/news/6.png"> </a> </div>
							<div class="portfolio-overlay">
								<div class="position-center-center"> <a href="#."><i class="ion-link"></i></a> </div>
							</div>
						</article>
						<!-- ITEM -->
						<article class="portfolio-item pf-web-design pf-digital-art pf-branding-design">
							<div class="portfolio-image"> <a href="#."> <img alt="" src="assets/home/news/4.png"> </a> </div>
							<div class="portfolio-overlay">
								<div class="position-center-center"> <a href="#."><i class="ion-link"></i></a> </div>
							</div>
						</article>
						<!-- ITEM -->
						<article class="portfolio-item pf-branding-design pf-digital-art">
							<div class="portfolio-image"> <a href="#."> <img alt="" src="assets/home/news/5.png"> </a> </div>
							<div class="portfolio-overlay">
								<div class="position-center-center"> <a href="#."><i class="ion-link"></i></a> </div>
							</div>
						</article>
					</div>
				</div>
				<div class="text-center"></div>
			</section>

			<!-- TimeLine -->
			<section class="innovaction padding-top-150 padding-bottom-150">
				<div class="container">
					<!-- Heading -->
					<div class="heading text-center" style="color:white">
						<h4 style="color:white">发展历程</h4>
						<span style="color:white">Development history</span>
						<hr style="border-top: 1px solid #3e93cf;border-bottom: 1px solid #3e93cf;">
					</div>
					<div class="row">
						<h2></h2>
						<div class="timeline">
							<div class="timeline-item timeline-item-left">
								<div class="timeline-point timeline-point-blank"></div>
								<div class="timeline-event timeline-event-default">
									<div class="timeline-heading">
										<h4>2019-12</h4>
									</div>
									<div class="timeline-body">
										<p class="hdAnnotationL">发射“和德二号A/B”两颗实验星，搭载AIS、DCS、ADS-B三种通信载荷</p>
									</div>
									<div class="timeline-footer">
										<p class="text-right"></p>
									</div>
								</div>
							</div>
							<div class="timeline-item timeline-item-right">
								<div class="timeline-point timeline-point-blank"></div>
								<div class="timeline-event timeline-event-default">
									<div class="timeline-heading">
										<h4>2018-12</h4>
									</div>
									<div class="timeline-body">
										<p class="hdAnnotationL">公司融资1亿元---招商资本</p>
									</div>
									<div class="timeline-footer">
										<p class="text-right"></p>
									</div>
								</div>
							</div>
							<div class="timeline-item timeline-item-left">
								<div class="timeline-point timeline-point-blank"></div>
								<div class="timeline-event timeline-event-default">
									<div class="timeline-heading">
										<h4>2018-07</h4>
									</div>
									<div class="timeline-body">
										<p class="hdAnnotationL">公司搬迁到北理工国防科技园5号楼</p>
									</div>
									<div class="timeline-footer">
										<p class="text-right"></p>
									</div>
								</div>
							</div>
							<div class="timeline-item timeline-item-right">
								<div class="timeline-point timeline-point-blank"></div>
								<div class="timeline-event timeline-event-default">
									<div class="timeline-heading">
										<h4>2017-11</h4>
									</div>
									<div class="timeline-body">
										<p class="hdAnnotationL">“和德一号”卫星作为全国首个商用AIS小卫星，已于2017年成功发射</p>
									</div>
									<div class="timeline-footer">
										<p class="text-right"></p>
									</div>
								</div>
							</div>
							<div class="timeline-item timeline-item-left">
								<div class="timeline-point timeline-point-blank"></div>
								<div class="timeline-event timeline-event-default">
									<div class="timeline-heading">
										<h4>2007-04</h4>
									</div>
									<div class="timeline-body">
										<p class="hdAnnotationL">北京和德宇航技术有限公司成立</p>
									</div>
									<div class="timeline-footer">
										<p class="text-right"></p>
									</div>
								</div>
							</div>
							<span class="timeline-label">
								<a href="javascript:void(0);" @click="Goto('/About/History')" class="btn btn-default" title="More...">More</a>
							</span>
						</div>
					</div>
				</div>
			</section>
			<!-- Partner -->
			<section class="padding-top-150 padding-bottom-150">
				<div class="container">
					<!-- Heading -->
					<div class="heading text-center">
					<h4>合作伙伴</h4>
					<span>Cooperative partner</span>
					<hr>
					</div>
					<div class="clients-img col-5">
						<ul class="row">
							<li><a href="javascript:void(0);"><img src="assets/home/partner/1.png" class="img-responsive" alt=""></a></li>
							<li><a href="javascript:void(0);"><img src="assets/home/partner/2.png" class="img-responsive" alt=""></a></li>
							<li><a href="javascript:void(0);"><img src="assets/home/partner/3.png" class="img-responsive" alt=""></a></li>
							<li><a href="javascript:void(0);"><img src="assets/home/partner/4.png" class="img-responsive" alt=""></a></li>
							<li><a href="javascript:void(0);"><img src="assets/home/partner/5.png" class="img-responsive" alt=""></a></li>
						</ul>
						<ul class="row">
							<li><a href="javascript:void(0);"><img src="assets/home/partner/6.png" class="img-responsive" alt=""></a></li>
							<li><a href="javascript:void(0);"><img src="assets/home/partner/7.png" class="img-responsive" alt=""></a></li>
							<li><a href="javascript:void(0);"><img src="assets/home/partner/8.png" class="img-responsive" alt=""></a></li>
							<li><a href="javascript:void(0);"><img src="assets/home/partner/9.png" class="img-responsive" alt=""></a></li>
							<li><a href="javascript:void(0);"><img src="assets/home/partner/10.png" class="img-responsive" alt=""></a></li>
						</ul>
					</div>
				</div>
			</section>
			<!-- Resource -->
			<!--
			<section class="padding-top-150 padding-bottom-150" style="background:#eeeeee">
				<div class="container">
					<div class="heading text-center">
						<h4>资源链接</h4>
						<span>Cooperative partner</span>
						<hr>
					</div>
				</div>
			</section>
			-->
		</div>
	</div>
</template>

<script>

export default {
	mounted: function() {
		mainReady();
	}
}
</script>

<style scoped lang="less">
	// 合作伙伴垂直居中
	.clients-img.col-5 li {
		line-height: 80px!important;
	}
	// 合作伙伴水平居中
	img.img-responsive {
		display: inherit!important;
	}
</style>
<style lang="less">
	// 解决首页banner文字边距显示错误，由于多创建了一个空的div，通过选择器排除掉
	div.tp-splitted:empty {
		display: none!important;
	}
</style>
