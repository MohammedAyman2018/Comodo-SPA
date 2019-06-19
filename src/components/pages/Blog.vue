<template>
    <div>
        <banner/>
        <caty/>
        <div class="banner-primary posts">
            <div class="container">
                <div class="row">
                    <articles/>
                    <info/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import _9banner from "../blocks/HomeBanner"
import caty from "../blocks/blog/catigories"
import article from "../blocks/blog/article"
import info from "../blocks/blog/Infos"

export default {
    components:{
        banner: _9banner,
        caty: caty,
        articles: article,
        info: info
    }
}
</script>

<style lang="scss" scoped>
.row{
    margin-top: 120px
}
</style>
