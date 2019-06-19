<template lang="pug">
section.banner-nine
        .container
            header.back-header
                h2 Latest Blog Post
                h3 Latest Blog Post
            .row
                each val, index in ['', '', 'hidden-xs hidden-sm']
                    .col-md-4.col-sm-6
                        .blog-post(class=val)
                            header
                                img.img-responsive(src='../../assets/blog_img' + (index+1) + '.png' width="100%")
                            .content
                                h4
                                    a(href="#") Portable Fashion for women
                                p
                                    | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    | incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                                .info
                                    a(href="#")
                                        i.far.fa-calendar-alt
                                        |                                     13th Dec
                                    a(href="#")
                                        i.far.fa-heart
                                        |                                     15
                                    a(href="#")
                                        i.far.fa-comments
                                        |                                     05
</template>

<script>
export default {
    
}
</script>


<style lang="scss" scoped>
$color_1: #FFF;
$color_2: #ddd;
$color_3: #000;
$color_4: #777;
$font_family_1: "Rajdhani", sans-serif;
$background_color_1: #22195e;

.banner-nine {
    margin-top: 120px;
	.row {
		margin-top: 120px;
		header {
			img {
				transition: all 0.6s ease-in-out;
			}
			overflow: hidden;
		}
	}
	.blog-post {
		margin-bottom: 20px;
		&:hover {
			img {
				transform: scale(1.2);
			}
			h4 {
				a {
					background: linear-gradient(to right, #3fcaff 0%, #a4ffb0 100%);
					-webkit-background-clip: text;
					background-clip: text;
					-webkit-text-fill-color: transparent;
					transition: all 0.6s ease-in-out;
				}
			}
			.content {
				background-color: $background_color_1;
				transition: all 0.6s ease-in-out;
			}
		}
		&:active {
			img {
				transform: scale(1.2);
			}
			h4 {
				a {
					background: linear-gradient(to right, #3fcaff 0%, #a4ffb0 100%);
					-webkit-background-clip: text;
					background-clip: text;
					-webkit-text-fill-color: transparent;
				}
			}
			.content {
				background-color: $background_color_1;
			}
		}
	}
	.content {
		background: #3b328b;
		padding: 40px 20px 50px;
		color: $color_1;
		h4 {
			a {
				font-family: $font_family_1;
				color: $color_1;
				font-size: 18px;
				font-weight: bold;
			}
		}
		p {
			padding: 20px 0 40px;
			color: $color_2;
			font-weight: 400;
			margin: 0;
		}
		a {
			cursor: pointer;
			color: $color_1;
			margin-right: 10px;
			font-weight: lighter;
			i {
				cursor: pointer;
				color: $color_1;
				margin-right: 10px;
				font-weight: lighter;
			}
		}
	}
}

</style>
