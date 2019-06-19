<template lang="pug">
section.banner-primary.banner-six
    .container
        .owl-carousel.owl-theme
            - for(let i =0; i< 4; i++)
                .item(style="width: 100%")
                    .row
                        .col-xs-12
                            img.img-responsive(src="../../assets/quote.png")
                        .col-xs-12
                            h4 Fanny Spencer
                        .col-xs-12
                            i.fas.fa-star
                            i.fas.fa-star
                            i.fas.fa-star
                            i.fas.fa-star
                            i.fas.fa-star
                        .col-xs-12.text-center
                            p
                            | As conscious traveling Paup ers we must always be oncerned about 
                            br
                            |  dear Mother Earth. If you think about it,you travel across her face
                            br
                            | and She is the host to your journey.
</template>

<script>
export default {
    
}
</script>


<style lang="scss" scoped>
$color_1: #FFF;
$color_2: #ffc000;

.banner-six {
    margin-top: 120px;
	background: url("../../assets/testimonial_bg.png") no-repeat center;
	background-size: cover;
	.owl-carousel {
		.item {
			color: $color_1;
			width: 100%;
			margin: 90px 0;
			.row {
				.col-xs-12 {
					display: flex;
					justify-content: center;
					align-items: center;
					p {
						margin-top: 140px;
						font-size: 18px;
						font-weight: 500;
						text-align: center;
					}
				}
			}
			img {
				margin: auto;
				width: auto;
			}
			i {
				color: $color_2;
				font-size: 14px;
			}
		}
	}
}
</style>
