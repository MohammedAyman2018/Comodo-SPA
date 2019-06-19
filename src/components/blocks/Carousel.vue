<template lang="pug">
section.banner-four.banner-primary
	.container
		#myCarousel.carousel.slide(data-ride="carousel")
			ol.carousel-indicators
				each val, index in ["Live Streaming","Upcoming Challanges", "Recent Famous Games"]
					if (index == 0)
						li.indecators-ol.active(data-target="#myCarousel" data-slide-to=index)
							a.anchor-ol=val
					else
						li.indecators-ol(data-target="#myCarousel" data-slide-to=index)
							a.anchor-ol=val
			.carousel-inner
				.news.item.active
					.row
						.col-md-6.col-sm-6.hidden-xs
							img.img-responsive(src="../../assets/recent_up.png")
						.about-us.col-md-6.col-sm-6
							h3 about us
							h2
								| We Believe that 
								br
								|  Interior beauty Lasts Long
							p
								| inappropriate behavior is often laughed off as “boys will be boys,” women face
								| higher
								| conduct
								| standards especially in the workplace. That’s why it’s crucial that as women.
							button.btn.btn-default.our-btn
								| learn more
						// End about-us div
				- for(let i=0;i<2; i++)
					.news.item
						.row
							.col-md-6.col-sm-6.hidden-xs
								img.img-responsive(src="../../assets/recent_up.png")
							.about-us.col-md-6.col-sm-6
								h3 about us
								h2
									| We Believe that 
									br
									|  Interior beauty Lasts Long
								p
									| inappropriate behavior is often laughed off as “boys will be boys,” women face
									| higher
									| conduct
									| standards especially in the workplace. That’s why it’s crucial that as women.
								button.btn.btn-default.our-btn
									| learn more
							// End about-us div
				
</template>

<script>
export default {
	name: 'carousel'
}
</script>

<style lang="scss" scoped>

$color_1: #FFF;
$color_2: #000000;
$font_family_1: "Rajdhani", sans-serif;
$background_color_1: transparent;
$background_color_2: rgba(0, 0, 0, 0);

.banner-four {
    margin-top: 120px;
	background-image: url('../../assets/recent_up_bg.png');
}
.carousel-indicators {
	bottom: 0;
	top: 60px;
	height: 60px;
	display: flex;
	width: 100%;
	padding-left: 20px;
	left: 0;
	margin-left: 0;
	li {
		font-family: $font_family_1;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 33%;
		height: 50px;
		margin: 5px;
		text-indent: 0;
		cursor: pointer;
		background-color: $background_color_1;
		background-color: $background_color_2;
		border: 1px;
		border-radius: 0;

		&:hover {
			background-image: linear-gradient(to right, #3fcaff 0%, #a4ffb0 51%, #3fcaff 100%) !important;
			a {
				color: $color_2;
				text-decoration: none;
			}
		}
	}
	.active {
		font-family: $font_family_1;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 33%;
		height: 50px;
		margin: 5px;
		text-indent: 0;
		cursor: pointer;
		background-color: $background_color_1;
		background-color: $background_color_2;
		border: 1px;
		border-radius: 0;
		background-image: linear-gradient(to right, #3fcaff 0%, #a4ffb0 51%, #3fcaff 100%) !important;
		a {
			color: $color_2;
			text-decoration: none;
		}
	}
}
.anchor-ol {
	display: block;
	text-decoration: none;
	color: $color_1;
	font-size: 18px;
	font-weight: 600;
	padding: 10px;
	border-radius: 10px;
}
.indecators-ol {
	width: 80%;
	padding: 1px;
	border-radius: 10px;
	margin: 30px 0;
	position: relative;
}
.carousel-inner {
	.item {
		margin-top: 100px;
		color: $color_1 !important;
		.row {
			padding: 90px 0px;
		}
		button{
			margin-top: 30px
		}
	}
}

.anchor-ol {
	display: block;
	text-decoration: none;
	color: #FFF;
	font-size: 18px;
	font-weight: 600;
	padding: 10px;
	border-radius: 10px;
}

.indecators-ol {
	width: 80%;
	padding: 1px;
	border-radius: 10px;
	margin: 30px 0;
	position: relative;
}

@media (max-width: 425px){
	
	ol.carousel-indicators {
		padding-left: 0;
		li a:last-child{
			font-size: 16px;
			line-height: 1
		}
	}
	.news.item{
		text-align: center;
		.row{
			padding-top: 30px
		}
		button{
			width: 100%
		}
	}
}
</style>