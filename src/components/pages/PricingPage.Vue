<template>
    <div>
        <banner to="pricing" title="PRICING PLANS"></banner>
        <plans/>
        <search/>
    </div>
</template>

<script>
import _4Banner from "../blocks/SecondaryBanner"
import _2cards from "../blocks/Cards"
import _3search from "../blocks/search"
export default {
    components: {
        banner: _4Banner,
        plans: _2cards,
        search: _3search
    }
}
</script>
