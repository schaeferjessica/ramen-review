<template>
  <div class="events">
    <h1>This is an event page</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <div class="pagination">
      <router-link
        :to="{ name: 'EventList', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
        >Prev Page</router-link
      >

      <router-link
        :to="{ name: 'EventList', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
        >Next Page</router-link
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'
import { watchEffect } from 'vue'

export default {
  name: 'EventList',
  props: ['page'],
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
      totalEvents: 0,
    }
  },
  created() {
    watchEffect(() => {
      this.events = null
      EventService.getEvents(2, this.page)
        .then((response) => {
          this.events = response.data
          this.totalEvents = response.headers['x-total-count']
        })
        .catch(() => {
          this.$router.push({ name: 'NetworkError' })
        })
    })
  },
  computed: {
    hasNextPage() {
      // First, calculate total pages
      var totalPages = Math.ceil(this.totalEvents / 2) // 2 is events per page

      // Then check to see if the current page is less than the total pages.
      return this.page < totalPages
    },
  },
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  display: flex;
  justify-content: space-between;
}
</style>
