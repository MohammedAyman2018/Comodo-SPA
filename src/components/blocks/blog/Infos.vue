<template lang="pug">
    .col-md-4
        .right-col
            .form-group
                input.form-control(placeholder="Search Posts")
                i.lnr.lnr-magnifier.form-group-addon
            // End form-group
            .user-info.text-center
                img.img-circle(width="140px" height="140px" src="../../../assets/blog/author.jpg")
                p.h3 Mohammed Ayman
                p.h5 Front-End Developer
                ul.list-inline
                    a(href="https://www.facebook.com/mohammed.ayman.75098") 
                    | 
                    span.fab.fa-facebook
                    a(href="https://twitter.com/Dev12M") 
                    | 
                    span.fab.fa-twitter
                    a(href="https://github.com/MohammedAyman2018") 
                    | 
                    span.fab.fa-github
                p
                    | A work harder Front-End Developer 
                    br
                    | i work with Vue.js,Sass,Pug,Jquery and some 
                    br
                    | other libs and this is a template with Vue.

            .popular-posts.text-center
                p.h3 Popular Posts
                - for(let i = 1; i < 4; i++)
                    .popular-post
                        img(class="img-responsive" src="../../../assets/blog/popular-post/post" + i+ ".jpg")
                        .disc.text-left
                            a(href="#") Space The Final Frontier
                            p 02 Hours ago
            .ad.text-center
                a(href="#")
                    img.img-responsive(src="../../../assets/blog/add.jpg")
            .post-catgories.text-center
                p.h3 Post Catgories
                ul.list-unstyled
                    each val in [ ["Technology" ,37] , ["Lifestyle" ,24] , ["Fashion" ,59], ["art" ,29], ["Food" ,37], ["Architecture" , 9] , ["Adventure" ,44]]
                        li.clearfix
                            p=val[0]
                            span=val[1]
            .newsletter.text-center
                p.h3 Newsletter
                p
                    | Here, I focus on a range of items and features that we use in life without giving them a 
                    br
                    |  second thought.
                .form-group
                    i.far.fa-envelope.clearfix
                    input.form-control(placeholder="Enter email" type="email")
                    button.btn-btn-default Sebscribe
                p.h6 You can unsubscribe at any time
            // End newsltter
            .tag-clouds.text-center
                p.h3 Tag Clouds
                .tags
                    each val in [ ["Technology" ,37] , ["Lifestyle" ,24] , ["Fashion" ,59], ["art" ,29], ["Food" ,37], ["Architecture" , 9] , ["Adventure" ,44], ["art" ,44], ["Fashion" ,44], ["Lifestyle" ,44]]
                        a.tag=val[0]
</template>

<style lang="scss" scoped>
$color_1: #FFF;
$color_2: #777;
$color_3: #3fcaff;
$color_4: #000;
$color_5: #222222;
$background_color_1: #3fcaff;
$background_color_2: transparent;
$border_bottom_color_1: #3fcaff;

.right-col {
	padding: 20px;
	border: 1px solid #eeee;
    margin-bottom: 60px;
	.form-group {
		input {
			display: inline-block;
			border: none;
			color: $color_1;
			border-radius: 45px;
			background-color: $background_color_1;
			&::-webkit-input-placeholder {
				color: $color_1;
			}
			&::-moz-placeholder {
				color: $color_1;
			}
			&:hover {
				box-shadow: none;
				box-shadow: none;
			}
			&:focus {
				box-shadow: none;
				box-shadow: none;
			}
		}
		i {
			display: inline-block;
			position: absolute;
			top: 10px;
			right: 15px;
			cursor: pointer;
			color: $color_1;
			font-weight: 500;
		}
	}
	.user-info {
		p.h5 {
			color: $color_2;
		}
		ul {
			span {
				margin: 10px;
				cursor: pointer;
				transition: all 0.6s ease;
				&:hover {
					color: $color_3;
				}
			}
		}
		p {
			&:last-child {
				text-align: center;
				color: $color_2;
				line-height: 2;
				margin-bottom: 30px;
			}
		}
	}
	.popular-posts {
		border-bottom: 1px solid #eeee;
		padding: 10px 0;
		p.h3 {
			background: #3fcaff;
			color: $color_1;
			line-height: 1.9;
			margin-bottom: 30px;
		}
		.popular-post {
			display: flex;
			flex-direction: row;
			margin-bottom: 20px;
			.disc {
				margin-left: 10px;
				padding: 5px;
				p {
					&:last-child {
						color: $color_2;
						font-size: 12px;
						margin-top: 5px;
					}
				}
			}
		}
	}
	.newsletter {
		.form-group {
			input {
				display: inline-block;
				box-shadow: none;
				border: none;
				outline: none;
				color: $color_4;
				padding-left: 40px;
				border-radius: 0;
				background-color: $background_color_2;
			}
			i {
				width: 5%;
				position: absolute;
				top: 10px;
				left: 10px;
				cursor: pointer;
				color: $color_4;
				font-weight: 500;
				z-index: 94994949;
			}
			button {
				border: none;
				outline: none;
				height: 34px;
				width: 40%;
				background-color: $background_color_1;
				position: absolute;
				top: 0;
				right: 0;
				cursor: pointer;
				color: $color_1;
				font-weight: 500;
				font-size: 12px;
			}
		}
	}
}
.form-group {
	position: relative;
	padding-bottom: 20px;
	border-bottom: 1px solid #eeee;
}
.user-info {
	border-bottom: 1px solid #eeee;
}
.ad {
	border-bottom: 1px solid #eeee;
	img {
		margin: 25px 0;
	}
}
.post-catgories {
	border-bottom: 1px solid #eeee;
	p.h3 {
		background: #3fcaff;
		color: $color_1;
		line-height: 1.9;
		margin-bottom: 30px;
	}
	ul {
		li {
			color: $color_2;
			border-bottom: 3px dotted #eee;
			margin-bottom: 15px;
			transition: all 0.4s ease-in-out;
			&:hover {
				color: $color_3;
				border-bottom-color: $border_bottom_color_1;
			}
			p {
				float: left;
			}
			span {
				float: right;
			}
		}
	}
}
.newsletter {
	border-bottom: 1px solid #eeee;
	p.h3 {
		background: #3fcaff;
		color: $color_1;
		line-height: 1.9;
		margin-bottom: 30px;
	}
	p {
		&:nth-child(2) {
			color: $color_2;
			line-height: 1.5;
		}
	}
	.form-group {
		position: relative;
		padding-bottom: 0px;
		border: 1px solid #eeee;
	}
}
.tag-clouds {
	p.h3 {
		background: #3fcaff;
		color: $color_1;
		line-height: 1.9;
		margin-bottom: 30px;
	}
	.tags {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		.tag {
			display: inline-block;
			background: #fff;
			padding: 4px 13px;
			margin-left: 8px;
			margin-bottom: 8px;
			transition: all 0.3s ease 0s;
			color: $color_5;
			font-size: 12px;
			border: 1px solid#cccc;
			&:hover {
				color: $color_1 !important;
                text-decoration: none;
				background-color: $background_color_1;
			}
		}
	}
}
</style>
