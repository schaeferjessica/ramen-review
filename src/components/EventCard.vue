<template>
  <li class="ramen__list">
    <router-link :to="{ name: 'RamenDetails', params: { id: ramen.id } }">
      <img class="ramen__image" :src="imageUrl" :alt="ramen.name" />
    </router-link>
    <div class="ramen__context">
      <span
        ><strong>{{ ramen.name }}</strong></span
      >
      <span>flavour: {{ ramen.flavour }}</span>
      <span>noodels: {{ ramen.noodels }}</span>
      <span>soupe: {{ ramen.soupe }}</span>
      <span>spice: {{ ramen.spice }}</span>
      <span>comment: {{ ramen.comment }}</span>
    </div>
  </li>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    ramen: Object,
  },
  computed: {
    imageUrl: function () {
      return `https://raw.githubusercontent.com/schaeferjessica/vue-mastery/master/src/assets/images${this.ramen.url}.jpg`
    },
  },
}
</script>

<style scoped>
.ramen__image {
  width: 100%;
}
.ramen__context > span {
  display: block;
  text-align: left;
}
</style>
