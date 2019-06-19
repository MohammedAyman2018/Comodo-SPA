<template lang="pug">
#form
    section.section-three
        .container
            .row
                .col-md-4.col-xs-12
                    .info
                        .info-item
                            i.fas.fa-home
                            h3 California, United States
                            p Santa monica bullevard
                        .info-item
                            i.fas.fa-phone
                            h3 00 (440) 9865 562
                            p Mon to Fri 9am to 6 pm
                        .info-item
                            i.far.fa-envelope
                            h3 support@colorlib.com
                            p Send us your query anytime!
                .col-md-4
                    .form-group
                        input.form-control(type='text' value='' placeholder='Enter Your Name')
                        label
                    .form-group
                        input.form-control(type='text' placeholder='Enter Your Email Address')
                        label
                    .form-group
                        input.form-control(type='text' placeholder='Enter Subject')
                        label
                .col-md-4
                    .form-group
                        textarea#message.form-control(name='message' rows='1' placeholder='Enter Message' resize='none')
                        label
                    .text-right
                        button.btn.btn-default.our-btn send message
</template>

<style lang="scss" scoped>
$color_1: #3fcaff;
$color_2: #777;
$border_color_1: #ccc;

.section-three {
	.info-item {
		margin-bottom: 15px;
		padding: 0 0 20px 20px;
		position: relative;
	}
	i {
		position: absolute;
		left: 0px;
		font-size: 25px;
		font-weight: 600;
		color: $color_1;
	}
	h3 {
		margin: 0 0 0 15px;
		font-size: 24px;
		font-weight: bold;
	}
	p {
		margin: 0 0 0 15px;
		color: $color_2;
		padding-top: 5px;
		font-size: 14px;
	}
	input {
		border-radius: 0;
		color: $color_2;
		font-size: 12px;
		&:focus {
			box-shadow: none;
			border-color: $border_color_1;
		}
	}
	.form-group {
		margin-bottom: 0;
	}
	textarea {
		&:focus {
			box-shadow: none;
			border-color: $border_color_1;
		}
		resize: none;
		height: 164px;
		color: $color_2;
		font-size: 12px;
		border-radius: 0;
	}
	button {
		border-radius: 4px !important;
		height: 50px !important;
	}
}


</style>
