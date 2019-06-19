<template>
    <div id="about">
        <banner to="Upcoming Games" title="UPCOMING GAMES"/>
        <games/>
        <carousel/>
        <asked/>
        <search/>
    </div>
</template>

<script>
import _5Banner from "../blocks/SecondaryBanner"
import _2games from "../blocks/Games"
import _2carousel from "../blocks/Carousel"
import _3secQ from "../blocks/Q&A"
import _5Search from "../blocks/search"


export default {
    components: {
        banner: _5Banner,
        games: _2games,
        carousel: _2carousel,
        asked: _3secQ,
        search: _5Search
    }
}
</script>