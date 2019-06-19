<template lang="pug">
#galley
    section.banner-five.banner-primary
        .container
            header.back-header
                h2 Screens Gallery
                h3 Screens Gallery
            .row
                .col-md-8.text-center
                    .row
                        .col-md-12
                            .row.top-left-img
                                - for(let i = 0; i<2; i++)
                                    .test.col-sm-6
                                        figure.imghvr-fade(style="background-color: transparent")
                                            img.img-responsive(src="../../assets/gallery_img"+ (i+1) +".png")
                                            figcaption(@click="openModal")
                                                i.far.fa-eye
                        .test.col-md-12
                            figure.imghvr-fade(style="background-color: transparent; padding-top: 20px")
                                img.img-responsive(src="../../assets/gallery_img3.png")
                                figcaption(@click="openModal")
                                    i.far.fa-eye
                .test.col-md-4.hidden-xs.hidden-sm.text-center
                    figure.imghvr-fade(style="background-color: transparent")
                        img.img-responsive(src="../../assets/gallery_img4.png")
                        figcaption(@click="openModal")
                            i.far.fa-eye
    .modal(v-if="openModalState")
        img.img-responsive(:src='srce')
        button.btn.btn-primary(@click="openModalState = false") &times
</template>

<script>
export default {
    name: 'App',
    data(){
        return{
            openModalState: false,
            srce: ""
        }
    },
    methods:{
        openModal(event){
            this.openModalState = true;
            this.srce = String(event.target.parentElement.firstChild.getAttribute('src'));
        }
    }
}
</script>

<style lang="scss">
.modal {
    display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	z-index: 9999999;
	background-color: rgba(0, 0, 0, 0.711);
	position: fixed;
	button{
        position: absolute;
        top: 10px;
        right: 10px;
    }
}
figcaption{
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>

