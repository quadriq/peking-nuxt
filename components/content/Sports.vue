<template lang="pug">
  div
    h2.text-center.black--text Sports
    v-row
      v-card.d-inline-flex.pa-4.ma-4.deep-purple.lighten-5(v-for="(value, key) in sports" :key="key")
          v-row.align-center
            v-img.ma-4(:src="require('@/assets/icons/sports/ic_' + key + '.png')" max-height=50 max-width=50 )
            h3.ma-4.black--text {{ value}}
            | &nbsp;&nbsp;&nbsp;&nbsp;
      
      
</template>

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