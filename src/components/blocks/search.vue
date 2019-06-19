<template lang="pug">
    .search
            .container
                .row
                    .col-md-6
                        .text
                            h2 Subscribe Our Newsletter
                            p We won’t send any kind of spam
            
                    .col-md-6
                        .input-group
                            input.form-control(name="EMAIL" placeholder="Enter email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your email address'" required="" type="email")
                            button.btn.btn-default.our-btn subscribe
</template>

<style lang="scss" scoped>
$color_3: #000;
$color_4: #777;

.search {
	background: linear-gradient(to right, #3fcaff 0%, #a4ffb0 100%);
	margin-top: 120px;
	padding: 68px 0 60px;
	.row {
		margin-top: 0;
		h2 {
			margin: 0;
			font-weight: 600;
			font-size: 36px;
			color: $color_3;
		}
		p {
			color: $color_4;
		}
		.input-group {
			display: flex;
			position: relative;
			.form-control {
				border-radius: 50px;
				width: 100%;
				padding: 30px;
				height: 50px;
				display: block;
			}
			button {
				display: inline-block;
				position: absolute;
				top: 10px;
				right: 10px;
				z-index: 99999;
			}
		}
	}
}

@media (max-width: 320px){
	input{
		padding-left: 10px !important;
	}
	button{
		padding: 0 0px !important;
	}
}
</style>

