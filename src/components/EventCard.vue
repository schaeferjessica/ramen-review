<template>
  <router-link :to="{ name: 'EventDetails', params: { id: event.id } }">
    <div class="event-card">
      <span> @ {{ event.time }} on {{ event.date }}</span>
      <h2>{{ event.title }}</h2>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    event: Object,
  },
}
</script>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
</style>
