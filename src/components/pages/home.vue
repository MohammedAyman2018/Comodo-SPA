<template>
    <div class="home">
        <banner/>
        <about/>
        <games/>
        <carousel/>
        <gallery/>
        <owl/>
        <cards/>
        <qA/>
        <blog/>
        <search/>
        <footar/>
    </div>
</template>

<script>

import banner from "../blocks/HomeBanner"
import about from "../blocks/About"
import games from "../blocks/Games"
import carousel from "../blocks/Carousel"
import gallery from "../blocks/Gallery"
import owl from "../blocks/Owl"
import cards from "../blocks/Cards"
import q from "../blocks/Q&A"
import post from "../blocks/BlogPost"
import search from "../blocks/search"


export default {
    name: 'App',
    components:{
        banner: banner,
        about: about,
        games:games,
        carousel: carousel,
        gallery: gallery,
        owl: owl,
        cards: cards,
        qA: q,
        blog: post,
        search: search
    }
}
</script>

<style lang="scss">

</style>
