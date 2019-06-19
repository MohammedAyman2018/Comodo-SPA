<template>
    <div id="about">
        <banner to="About" title="About Us"/>
        <about/>
        <asked/>
        <search/>
    </div>
</template>

<script>
import SecBanner from "../blocks/SecondaryBanner"
import secAbout from "../blocks/About"
import secQ from "../blocks/Q&A"
import secSearch from "../blocks/search"


export default {
    components: {
        banner: SecBanner,
        about: secAbout,
        asked: secQ,
        search: secSearch
    }
}
</script>