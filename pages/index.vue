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
        v-toolbar-title.ml-2.white--text
          | Winter Games 2022 App
        v-spacer

      v-container
        v-row.align-center(justify-center)
          v-col
            div.text-center.text-md-left.mt-6
              h1.mb-2.font-weight-bold.white--text
                | Follow Winter Olympics 2022
              p.mb-2.font-weight-bold.white--text
                | Unoficial app for  Winter games in Beijing/Peking
              v-btn(
                    large
                    href="https://apps.apple.com/us/app/winter-games-2022/id1599727786"
                    target="_blank"
                    color="primary"
                    
              )
                v-icon mdi-apple
                .pl-2 iPhone
                
              
              v-btn.ml-4(
                    large
                    href="https://play.google.com/store/apps/details?id=com.quadriq.pksport"
                    target="_blank"
                    color="primary"
              )
                v-icon mdi-google-play
                .pl-2 Android
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
      Theapp
    v-container
      Olympics
    v-container
      Sports
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

import Olympics from "~/components/content/Olympics.vue"
import Theapp from "~/components/content/Theapp.vue"
import Sports from "~/components/content/Sports.vue"

export default {
  components: {Olympics, Sports, Theapp},
}
</script>