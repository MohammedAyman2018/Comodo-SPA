<template lang="pug">
section.banner-primary.banner-seven
    .container
        header.back-header
            h2 Pricing Plans
            h3 Pricing Plans
        .row
            each size in [ "col-sm-6 col-md-4" , "col-sm-6 col-md-4 active", "hidden-sm col-md-4"]
                div(class= `${size}`)
                    header
                        p Silver Package
                        h3 $69.00
                    ul.list-unstyled
                        li Basic hair Cut
                        li Basic hair Cut
                        li Basic hair Cut
                    button.btn.btn-default.module-border-wrap
                        a.module
                            | order now

</template>

<script>

export default {

}
</script>

<style lang="scss">
$color_1: #fff;
$color_2: #FFF;
$color_3: #ddd;
$color_4: #22195e;
$color_5: white;
$font_family_1: "Rajdhani", sans-serif;

/* Start ul */
/* Start button */
.banner-seven {
	margin-top: 120px;
	.row {
		margin-top: 120px;
		div {
			background: linear-gradient(to right, #231a60 0%, #3c338d 51%, #231a60 100%);
			text-align: center;
			padding: 0;
			border: 10px solid #FFF;
			color: $color_1;
			header {
				p {
					font-size: 18px;
					padding: 35px 30px 25px;
				}
				h3 {
					padding: 30px;
					margin: 0;
					background: #342b7e;
				}
			}
			ul {
				margin: 0;
				padding: 35px 50px 18px;
				li {
					color: $color_3;
					padding: 14px 0;
					border-bottom: 1px dashed rgba(255, 255, 255, 0.2);
					&:last-child {
						border: none;
					}
				}
			}
			.module-border-wrap {
				width: 50% !important;
				height: 60px;
				padding: 1px;
				border: 0;
				border-radius: 10px;
				margin: 30px 0;
				position: relative;
				background: linear-gradient(to right, #3fcaff 0%, #a4ffb0 100%);
				transition: all 0.4s ease-in-out;
				.module {
					display: flex;
					justify-content: center;
					align-items: center;
					letter-spacing: 1px;
					padding: 0;
					width: 99%;
					height: 95%;
					margin: auto;
					font-weight: 200;
					font-size: 20px;
					color: $color_5;
					border-radius: 10px;
					background: linear-gradient(to right, #231a60 0%, #3c338d 51%, #231a60 100%);
					transition: all 0.4s ease-in-out;
				}
			}
			&:hover {
				>.module-border-wrap {
					.module {
						background: linear-gradient(to right, #3fcaff 0%, #a4ffb0 100%);
						color: $color_4;
						text-decoration: none;
						border-radius: 10px;
					}
				}
			}
		}
		div.active {
			color: $color_2 !important;
			>.module-border-wrap {
				.module {
					background: linear-gradient(to right, #3fcaff 0%, #a4ffb0 100%);
					color: $color_4;
					text-decoration: none;
					border-radius: 10px;
				}
			}
		}
		header {
			font-family: $font_family_1 !important;
		}
	}
}

</style>
