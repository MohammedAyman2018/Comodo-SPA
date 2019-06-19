<template lang="pug">
	nav.navbar.navbar-default
		.container
			.navbar-header
				img(src="../../assets/logo.png")
				button.navbar-toggle.collapsed(data-toggle="collapse" data-target="#navbar")
					span.icon-bar
					span.icon-bar
					span.icon-bar
			.collapse.navbar-collapse.navbar-right(id="navbar")
				ul.nav.navbar-nav
					li 
						router-link(to="/" exact) home
					li 
						router-link(to="/about" exact) about
					li 
						router-link(to="/gallery" exact) gallery
					li.nav-item(@mouseover="show=true" @mouseleave="drop()")
						a(style="cursor: pointer") pages

						transition(name="custom-classes-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut")
							ul.dropdown-menu(v-if="show" @mouseleave="on_it=false")
								li
									router-link(to="/pricing" exact) Pricing
								li
									router-link(to="/games" exact) Games

					li.nav-item
						router-link(to="/blog")  blog

					li
						router-link(to="/contact") contact
					li
						button.btn.btn-default.our-btn JOIN US
</template>

<script>
export default {
	name: 'nav',
	data () {
		return {
			show: false,
		}
	},
	methods:{
		drop(){
			if(this.on_it == true)
				this.show = true
			else
				this.show = false
		}
	}
}
</script>

<style lang="scss"scoped>
.dropdown-menu{
	display: block;
	left:0;
	width: 250px;
	float: right;
	li{
		padding: 10px;
		border-bottom: 1px solid #eee;
		&:last-child{border-bottom: 0}
		&:hover{
			background: -webkit-linear-gradient(0deg, #4dabff 0%, #62ddff 100%);
			cursor: pointer
		}
		a{
			color: #000 !important;
			&:hover,&:focus{
				color: #000 !important;
				background-color: transparent;	
			}
		}
	}
}

nav{
	border: none !important;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 999999;
	border-radius: 0;
	background-color: #2c2172;
	padding: 20px;
	margin-bottom: 0;

	button.navbar-toggle{
		border: 0px;

		&:hover,&:focus,&:active{
			background-color: transparent;
		}

		span{
			background-color: #fff !important;
			height: 3px;
			width: 30px;
		}
	}

	ul li a{
		display: block;
		color: #FFF !important;
		text-transform: uppercase;
		transition: all 0.6s ease-in-out;;
		font-size: 13px;
		margin-right: 10px;
		&:hover{
			color: #3fcaff
		}

		&.active{
			color: #3fcaff!important
		}
	}
	.our-btn{
		margin-top: 5px;
		margin-left: 40px
	}
}


@media(max-width: 425px){
	nav{
		background-color: #000;

		.navbar-header img{
			float: left
		}
		.navbar-collapse{
			margin-top: 10px !important;
			.our-btn{
				margin-left: 0 !important;
				width: 100%;
			}
		}
	}
}

@media(min-width: 426px) and (max-width: 768px){
	nav{
		max-height: 120px;
		.navbar-header img{
			float: left
		}
		.navbar-collapse{
			ul {
				display: flex;
				justify-content: center;
				align-items: center;
				li {
					vertical-align: middle;
					a {
						padding: 0px;
					}
				}
			}
			.our-btn{
				vertical-align: middle
			}
		}
	}
}
</style>
