<template>
  <div class="ramen">
    <ul class="ramen__grid">
      <EventCard v-for="ramen in ramens" :key="ramen.id" :ramen="ramen" />
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'
import { watchEffect } from 'vue'

export default {
  name: 'EventList',
  components: {
    EventCard,
  },
  data() {
    return {
      ramens: null,
    }
  },
  created() {
    watchEffect(() => {
      this.events = null
      EventService.getEvents()
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
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  margin: 0;
  padding: 0;
  grid-column-gap: 10%;
  margin: 0;
  padding: 0;
}
</style>
