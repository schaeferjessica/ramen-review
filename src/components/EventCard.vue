<template>
  <router-link :to="{ name: 'RamenDetails', params: { id: ramen.id } }">
    <div class="ramen-grid">
      <img :src="ramen.url" :alt="ramen.name" />
      <span>{{ ramen.name }}</span>
      <span>flavour: {{ ramen.flavour }}</span>
      <span>noodels: {{ ramen.noodels }}</span>
      <span>soupe: {{ ramen.soupe }}</span>
      <span>spice: {{ ramen.spice }}</span>
      <p>comment: {{ ramen.comment }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    ramen: Object,
  },
}
</script>

<style scoped>
.ramen-grid {
  display: grid;
  grid-auto-flow: row dense;
  gap: 10%;
}
</style>
