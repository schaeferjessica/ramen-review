<template>
  <div class="events">
    <h1>This is an event page</h1>
    <EventCard v-for="ramen in ramens" :key="ramen.id" :ramen="ramen" />
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
