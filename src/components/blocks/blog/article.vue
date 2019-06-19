<template lang="pug">
    .col-md-8
        section.artical
            .row
                each val in [1,2,3,4]
                    article
                        .col-md-3
                            .post-info
                                ul.list-unstyled.text-right
                                    li
                                        a.active Politics,
                                        | 
                                        each val, cls in ["Food","Technology","Lifestyle"]
                                            a(href="#" class=cls)= val + ","
                                    li
                                        a(href="#") Mark Wiens
                                        i.fas.fa-user
                                    li
                                        a(href="#") 12 Dec, 2017
                                        i.far.fa-calendar-plus
                                    li
                                        a(href="#") 1.2M Views
                                        i.far.fa-eye
                                    li
                                        a(href="#") 06 Comments
                                        i.far.fa-comment
                        .col-md-9
                            .post-content
                                img.img-responsive(src="../../../assets/blog/main-blog/m-blog-" + val + ".jpg")
                                h3 Astronomy Binoculars A Great Alternative
                                p
                                    | MCSE boot camps have its supporters and its detractors. Some people do not
                                    | understand why you should have to spend money on boot camp when you can get
                                    | the
                                    | MCSE study materials yourself at a fraction.
                                button.btn.btn-default
                                    | View More
</template>

<style lang="scss" scoped>
$color_1: #777777;
$color_2: #FFF;
$background_color_1: transparent;
$background_color_2: rgb(63, 202, 255);

article{
    &:not(:first-child){
        margin-top: 30px;
    }
    .post-info ul {
		li {
            &:first-child a {
                color: #000;
            }

			a {
                text-decoration: none;
                transition: all 0.4s ease;
				font: 300 14px/20px "Roboto", sans-serif;
				color: $color_1;
				padding-bottom: 12px;
				display: inline-block;
                
                &:last-child{
                    margin-right: 10px;
                }
                &.active, &:hover{
                    color: rgb(63, 202, 255) !important
                }
			}
			i {
				margin-left: 15px;
				font-size: 20PX;
				font-weight: bolder;
			}
		}
	}
	.post-content {
		padding-bottom: 30px;

		p {
			font: 300 14px/20px "Roboto", sans-serif;
			color: $color_1;
			padding-bottom: 12px;
			display: inline-block;
		}
		a {
			display: block;
			max-width: 100%;
		}
		button {
			min-width: 150px;
			background-color: $background_color_1;
			border: none;
			border-radius: 0;
			transition: all 0.6s ease;
			&:hover {
				background-color: $background_color_2 !important;
				color: $color_2;
			}
		}
	}
}
</style>
