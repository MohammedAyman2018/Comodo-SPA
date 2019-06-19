<template lang="pug">
section.banner-primary.banner-eight
    .container
        header.back-header
            h2 Frequently Asked Questions
            h3 Frequently Asked Questions
        .row
            - for(let i = 0; i < 3; i++)
                .col-lg-6.col-sm-5.question
                    h4 We Believe that Interior beauty Lasts Long
                    p
                        | inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct
                        | standards especially in the workplace. That’s why it’s crucial that as women.
                .col-lg-6.col-md-offset-0.col-sm-offset-2.col-sm-5.question
                    h4 We Believe that Interior beauty Lasts Long
                    p
                        | inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct
                        | standards especially in the workplace. That’s why it’s crucial that as women.

</template>

<script>
export default {
    
}
</script>


<style lang="scss" scoped>
$color_1: #22195e;
$color_2: #777;
$font_family_1: "Rajdhani";

.banner-eight {
	margin-top: 120px;
	.container {
		.row {
			margin-top: 120px;
			.question {
				padding-top: 10px;
				border: 1px dashed rgba(199, 199, 199, 0.5);
				border-top: none;
				&:nth-child(even) {
					border-right: none;
					border-left: none;
				}
				&:nth-child(odd) {
					border-left: none;
				}
				&:nth-last-child(2) {
					border-bottom: 0;
				}
				&:last-child {
					border-bottom: 0;
				}
				h4 {
					color: $color_1;
					padding-bottom: 20px;
					font-size: 20px;
					font-weight: bold;
					font-family: $font_family_1;
				}
				p {
					font-weight: 400;
					font-size: 16px;
					padding: 0 20px 40px 0;
					margin: 0;
					color: $color_2;
				}
			}
		}
	}
}

</style>
