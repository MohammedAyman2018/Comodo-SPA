<template>
    <div>
        <banner to="Gallery" title="SCREEN SHOT GALLERY"></banner>
        <gallery/>
        <br><br>
        <br>
        <br>
        <br>
    </div>
</template>

<script>
import _3Banner from "../blocks/SecondaryBanner"
import _2gallery from "../blocks/Gallery"

export default {
    components: {
        banner: _3Banner,
        gallery: _2gallery
    }
}
</script>
