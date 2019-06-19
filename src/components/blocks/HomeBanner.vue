<template lang="pug">
	.banner
		.container
			.row
				.col-md-6.col-xs-12
					.img
						img.img-responsive.hidden-xs.hidden-sm(src="../../assets/banner/home-left.png")
				.col-md-6.col-xs-12
					.info.text-left
						h1 For All Occasion HairStyle is a Must Try Fashion
						p Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.

						button.play-btn.btn.btn-default
							i.fas.fa-play
						span Watch The Video
		
</template>

<script>
export default {
	name: 'test'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.banner{
	background: url("../../assets/banner/home-banner.jpg") no-repeat center center;
	background-size: cover;
	height: 100vh;
	padding-top: 110px;
	
	.img{
		margin-top: 10px
	}

	.info{
		h1{
			font-size: 70px;
			font-weight: bold;
			color: white;
		}

		p{
			color: white;
			font-size: 16px;
			line-height: 1.6
		}

		.play-btn{
			outline: 0;
			margin-top: 20px;
			margin-right: 15px;
			width: 60px;
			height: 60px;
			border: none;
			border-radius: 50% !important;
			background: linear-gradient(90deg, #3fcaff 0%, #a4ffb0 100%);
			display: inline-block;
			position: relative;

			&::before{
				content: "";
				width: 60px;
				height: 60px;
				border: none;
				position: absolute;
				top: 50%;
				left: 50%;
				border-radius: 50% !important;
				background: linear-gradient(90deg, #3fcaff 0%, #a4ffb0 100%);
				animation: video 1.5s ease-out infinite;
			}
		}
		span{
			vertical-align: middle;
			color: #ddd
		}
	}
}

@keyframes video {
	0%{
		transform: translate(-50%, -50%) translateZ(0) scale(1);
		opacity: 0.7
	}
	100%{
		transform: translate(-50%, -50%) translateZ(0) scale(1.5);
		opacity: 0
	}
}

@media (max-width: 425px){
	.info{
		h1{
			font-size: 40px !important
		}
	}
}
@media (min-width: 1024px) and (max-width: 1440px){
	.banner{
		height: auto;
		padding-bottom: 20px
	}
}
</style>
