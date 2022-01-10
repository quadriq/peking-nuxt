<template lang="pug">
  div.white-bg
    div.banner-wrapper
      v-app-bar.app-header(app absolute flat elevate-on-scroll)
        v-img(
            max-height=50
            max-width=50
            contain
            :src="require('@/assets/icons/app_icon.png')"
            alt="logo"
          )
        v-toolbar-title.ml-2
          | Winter Games 2022 App
        v-spacer

      v-container
        v-row.align-center(justify-center)
          v-col
            div.text-center.text-md-left
              h1.mb-2.font-weight-bold.white--text
                | Follow Winter Olympics 2022
              h4.mb-2.font-weight-bold.white--text
                | 
              v-btn(
                    large
                    href="https://apps.apple.com/us/app/winter-games-2022/id1599727786"
                    target="_blank"
                    color="primary"
                    
              ) IOS App
              
              v-btn.ml-4(
                    large
                    href="https://play.google.com/store/apps/details?id=com.quadriq.pksport"
                    target="_blank"
                    color="primary"
              ) Android App
          v-col
            v-img(
              :src="require('@/assets/images/screens/header.png')"
              max-height=400
              max-width=400
            )
    //- v-container
    //-   h1.text-center App Screens
    //-   VueSlickCarousel(:arrows='true' :dots='true')
    //-     div
    //-       v-img(src="require('@/assets/images/screens/s1.jpg')" max-height=600 max-width=100)


    v-container  
      h1.text-center Sports
      v-row
        v-card.d-inline-flex.pa-4.ma-4.deep-purple.lighten-5(v-for="(value, key) in sports")
            v-row.align-center
              v-img.ma-4(:src="require('@/assets/icons/sports/ic_' + key + '.png')" max-height=50 max-width=50 )
              h2.ma-4.black--text {{ value}}
              | &nbsp;&nbsp;&nbsp;&nbsp;
    v-container
      
        

</template>

<style scoped>
.banner-wrapper {
    background: #607df9;
    /* background: url('~/assets/images/bg /header.jpg') no-repeat center fixed !important;
    background-size: 100% 100%; */
    min-height: 600px;
    display: flex;
    align-items: center;
}

.white-bg {
  background: white !important;
}
</style>

<script>


export default {
  data: () => ({
    sports: {
        "as": "Alpine Skiing",
        "bi": "Biathlon",
        "bo": "Bobsleigh",
        "cr": "Cross-Country Skiing",
        "cu": "Curling",
        "fi": "Figure Skating",
        "fr": "Freestyle Skiing",
        "ho": "Ice Hockey",
        "lu": "Luge",
        "no": "Nordic Combined",
        "sh": "Short Track Speed Skating",
        "sj": "Ski Jumping",
        "sk": "Skeleton",
        "sn": "Snowboard",
        "sp": "Speed Skating"
    }
  }),
}
</script>
