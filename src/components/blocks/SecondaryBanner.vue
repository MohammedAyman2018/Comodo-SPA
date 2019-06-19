<template lang="pug">
    section.section-one
        .container
            .address.text-center
                a(href="../index.html")
                    | Home <span class="fas fa-arrow-right"></span>
                a(href="contact.html") {{ to }}
                h1 {{ title }}
</template>

<script>
export default {
	props: {
		to: String,
		title: String
	}
}
</script>


<style lang="scss" scoped>
$color_1: #FFF;
$color_2: #3fcaff;

.section-one {
    background-image: url("../../assets/banner/home-banner.jpg");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	padding: 160px 0px;

	.address {
		margin-top: 50px;
	}
	a {
		color: $color_1;
		font-weight: 300;
		font-size: 18px;
		transition: all 0.4s ease-in;
		&:hover {
			color: $color_2;
		}
		span{
			margin-right: 5px;
		}
	}
	h1 {
		color: $color_1;
		font-size: 45px;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 1px;
	}
}

</style>
