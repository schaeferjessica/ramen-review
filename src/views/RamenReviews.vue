<template>
  <div class="ramen">
    <ul class="ramen__grid">
      <RamenPack v-for="ramen in ramens" :key="ramen.id" :ramen="ramen" />
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import RamenPack from '@/components/RamenPack.vue'
import RamenService from '@/services/RamenService.js'
import { watchEffect } from 'vue'

export default {
  name: 'RamenReviews',
  components: {
    RamenPack,
  },
  data() {
    return {
      ramens: null,
    }
  },
  created() {
    watchEffect(() => {
      this.events = null
      RamenService.getEvents()
        .then((response) => {
          this.ramens = this.sortByRating(response.data).reverse()
        })
        .catch(() => {
          this.$router.push({ name: 'NetworkError' })
        })
    })
  },
  methods: {
    sortByRating(ramenArray) {
      return ramenArray.sort(function (opjectA, opjectB) {
        const ratingA = +opjectA.noodels + opjectA.soupe
        const ratingB = +opjectB.noodels + opjectB.soupe
        return ratingA - ratingB
      })
    },
  },
}
</script>
<style scoped>
.ramen__grid {
  display: grid;
  grid-auto-flow: dense;
  grid-row-gap: 50px;
  grid-template-columns: repeat(3, auto);
  grid-column-gap: 10%;
  margin: 0;
  padding-left: 5%;
  padding-right: 5%;
}
</style>
