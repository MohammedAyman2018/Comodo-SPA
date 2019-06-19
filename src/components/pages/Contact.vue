<template lang="pug">
#contact
    banner(to="Contact" title="CONTACT US")
    section.section-two
        .map-area.fix.container
            #map
    my_form
</template>

<script>
import _9banner from "../blocks/SecondaryBanner"
import my_form from "../blocks/contactForm"

export default {
    components:{
        banner: _9banner,
        my_form
    }
}
</script>

<style lang="scss" scoped>
.section-two{
    margin-top: 120px;
    margin-bottom: 120px;

    #map {
        height: 100%;
    }
}
</style>
