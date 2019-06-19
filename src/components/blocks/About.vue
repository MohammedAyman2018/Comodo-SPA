<template lang="pug">
section.banner-two
    .container
        .row.about-us-content
            .about-us.col-md-6
                h3 about us
                h2 We Believe that <br class="hidden-xs hidden-sm"> Interior beauty Lasts Long
                p inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that as women.
                button.btn.btn-default.our-btn learn more

            .about-us-img.col-md-6.hidden-sm.hidden-xs
                img.img-responsive(src="../../assets/about_img.png")


</template>

<script>

export default {
    name: 'About'
}
</script>

<style lang="scss">
.banner-two{
    margin-top: 120px;
    color: #FFF;

    .container{
        background: linear-gradient(to right, #231a60 0%, #3c338d 51%, #231a60 100%);    
        .about-us-content {
            padding: 40px;
            position: relative;

            h3{
                position: relative;
                font-size: 14px;
                letter-spacing: 2px;
                font-weight: 600;
                text-transform: uppercase;
                margin-bottom: 12px;

                &::after{
                    content: '';
                    position: absolute;
                    bottom: -10px;
                    left: 0;
                    background-image: linear-gradient(to right, #3fcaff 0%, #a4ffb0 100%);
                    height: 1px;
                    width: inherit;
                }
            }
            h2 {
                font-weight: 600;
                font-size: 36px;
                padding: 30px 0 30px;
            }
            P{
                font-weight: 400;
                padding: 0 40px 40px 0;
                line-height: 24px;
            }

            .our-btn {
                border-radius: 5px !important;
                display: block; 
            }

            .about-us-img {
                border-left: 1px solid #CCC;
            }
        }
    }
}
</style>
