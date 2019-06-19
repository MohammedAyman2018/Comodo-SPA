<template>
	<div id="app">
		<Navbar/>
		<transition name="fade" mode="out-in">
			<router-view/>
		</transition>
		<Footer/>
	</div>
</template>

<script>
import mianNav from "./components/blocks/Nav"
import mianFoot from "./components/blocks/Footar"

export default {
	name: 'App',
	components: {
		Navbar: mianNav,
		Footer: mianFoot
	}
}
</script>

<style lang="scss">

.fade-enter-active,
.fade-leave-active {
	transition-duration: 1s;
	transition-property: opacity;
	transition-timing-function: ease-OUT;
}

.fade-enter,
.fade-leave-active {
	opacity: 0
}

.our-btn{
	min-width: 135px;
	height: 40px;
	padding: 0px 35px;
	border: none;
	border-radius: 50px;
	text-transform: uppercase;
	letter-spacing: 2px;
	font-size: 12px;
	background-image: linear-gradient(to right, #3fcaff 0%, #a4ffb0 51%, #3fcaff 100%);;
	box-shadow: 0px 10px 30px rgba(163, 255, 177, 0.2);
	background-size: 200% auto;
	transition: all 0.6s ease-in;
	&:hover{
		background-position: right center;
		color: #22195e;
	}
}


.back-header {
    text-align: center;
	
	h2 {
		font-size: 72px;
		color: #3fcaff;
		opacity: 0.1;
		margin: 0;
		line-height: 60px;
	}
	
	h3 {
		margin-top: -40px;
		font-size: 36px;
		font-weight: 600;
		line-height: 60px;
	}
}

h1, h2, h3, h4, h5, h6, label{
	font-family: 'Rajdhani', sans-serif;
}
</style>

Gallery