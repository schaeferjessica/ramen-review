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
  name: 'RamenList',
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
          this.ramens = response.data
        })
        .catch(() => {
          this.$router.push({ name: 'NetworkError' })
        })
    })
  },
}
</script>
<style scoped>
.ramen__grid {
  display: grid;
  grid-auto-flow: dense;
  grid-row-gap: 3%;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 10%;
  margin: 0;
  padding: 0;
}
</style>
