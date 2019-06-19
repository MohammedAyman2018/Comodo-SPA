<template lang="pug">
.games
    .container    
        header.back-header
                h2 Upcoming Games
                h3 Upcoming Games
        .row.text-center
            each game,index in ["Best Ps4 Games", "World Dart 2019", "New XBox Games", "Amarican Football"]
                .col-lg-3.col-xs-12.col-sm-6
                    .game
                        img(src="../../assets/b_map"+ (index+1) + ".png")
                        .main-title.text-center
                            transition(name="coloring")
                                h2=game
</template>

<script>
export default {
	name: 'UpcomingGames'
}
</script>

<style lang="scss">
.games{
    margin-top: 120px;
    .game {
        position: relative;
        display: inline-block;
        padding-bottom: 10px;

        &:hover h2 {
            background-image: linear-gradient(to right, #3fcaff 0%, #a4ffb0 51%, #3fcaff 100%) !important;
            color: #22195e;
        }
        .main-title {
            text-align: center;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 100%;
            
            h2 {
                background: rgba(44, 37, 93, 0.8);
                padding: 20px;
                font-size: 18px;
                font-weight: 600;
                color: #FFF;
            }
        }
    }
}

</style>
