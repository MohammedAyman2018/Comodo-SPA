<template lang="pug">
#caty
    .banner-primary.catigories
        .container
            .row
                each val in ["one","two","three hidden-xs hidden-sm"]
                    .col-sm-6.col-md-4
                        .catigory-item(class= val)
                            .catigory-inner.text-center
                                h6 hello
                                p Enjoy your social life together
</template>


<style lang="scss" scoped>
$color_1: #FFF;
$font_family_1: 'Helvatica', sans-serif;
$background_color_1: rgba(34, 34, 34, 0.8);
$background_color_2: rgba(63, 202, 255, 0.85);

#caty{
    margin-top: 120px;
	margin-bottom: 30px;
}

.catigory-item {
    
    &.one {
        background-image: url("../../../assets/blog/cat-post/cat-post-3.jpg");
    }
    &.two {
        background-image: url("../../../assets/blog/cat-post/cat-post-2.jpg");
    }
    &.three {
        background-image: url("../../../assets/blog/cat-post/cat-post-1.jpg");
	
    }
	padding: 10px;
	margin-bottom: 20px;
	cursor: pointer;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	.catigory-inner {
		color: $color_1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 20px;
		height: 150px;
		background-color: $background_color_1;
		transition: all 0.6s ease-in;
		&:hover {
			background-color: $background_color_2;
			cursor: pointer;
		}
		h6 {
			font-family: $font_family_1;
			font-size: 25px;
		}
		p {
			font-size: 16px;
			border-top: 1px solid #FFF;
		}
	}
	&:hover {
		.catigory-inner {
			background-color: $background_color_2;
			cursor: pointer;
		}
	}
}


</style>
