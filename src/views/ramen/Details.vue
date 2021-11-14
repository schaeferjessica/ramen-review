<template>
  <img class="ramen__image" :src="imageUrl" :alt="ramen.name" />
</template>

<script>
export default {
  props: ['ramen'],
  computed: {
    imageUrl: function () {
      return `https://raw.githubusercontent.com/schaeferjessica/vue-mastery/master/src/assets/images/${this.ramen.image}.jpg`
    },
  },
}
</script>
<style scoped>
.ramen__image {
  max-width: 100%;
}
</style>
