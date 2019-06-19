<template lang="pug">
footer
    .container
        .row
            - for(let i = 1; i <= 4; i++)
                .col-md-3.col-xs-6
                    .columen
                        ul.list-unstyled
                            label About Farfly
                            each val in [ "Premium Plans", "For Business", "Reviews", "How it Works", "Farfly Blog"]  
                                li=val
        .row
            .container
                .col-xs-12.col-md-6
                    .copyright
                        p
                            | Copyright ©2019 All rights reserved | This template is made with
                            |
                            i.fas.fa-heart(style="color: red3")
                            |                             by
                            |
                            a(href="https://colorlib.com") Colorlib
                .col-sm-6.clearfix
                    .contact.clearfix
                        a(href="#")
                            i.fab.fa-facebook
                        a(href="#")
                            i.fab.fa-twitter
                        a(href="#")
                            i.fab.fa-behance
                        a(href="#")
                            i.fab.fa-github
</template>


<style lang="scss" scoped>
$color_1: #FFF;
$color_2: rgba(255, 255, 255, 0.5);
$color_3: #3fcaff;
$color_4: #22195e;
$background_color_1: #3fcaff;

footer {
	background: linear-gradient(to right, #231a60 0%, #3c338d 51%, #231a60 100%);
	padding-top: 120px;
	.container {
		.row {
			&:first-child {
				border-bottom: 1px solid #FFF;
				padding-bottom: 30px;
			}
			&:nth-child(2) {
				padding-top: 20px;
				div {
					padding-left: 0;
				}
			}
		}
	}
	ul {
		label {
			color: $color_1;
			font-weight: bold;
			font-size: 20px;
			padding-bottom: 20px;
		}
		li {
			cursor: pointer;
			color: $color_2;
			font-size: 14px;
			font-weight: 200;
			padding-bottom: 20px;
			transition: all 0.4s ease;
			&:hover {
				color: $color_3;
			}
		}
	}
	.copyright {
		color: $color_1;
        p{
            margin-left: 20px
        }
	}
	.contact {
		padding-bottom: 30px;
		float: right;
		a {
			display: inline-block;
			position: relative;
			margin-left: 6px;
			color: $color_1;
			width: 30px;
			height: 30px;
			padding: 0;
			background: #4c4588;
			transition: all 0.4s ease-in-out;
			&:hover {
				background-color: $background_color_1;
				color: $color_4;
			}
			i {
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
			}
		}
	}
}

</style>
