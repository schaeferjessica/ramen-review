<template>
  <div class="networkError">
    <p>Oops!</p>
    <p>The {{ resource }} you're looking for is not here.</p>
    <router-link :to="{ name: 'RamenReviews' }"
      >Back to the home page</router-link
    >
  </div>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      required: true,
      default: 'page',
    },
  },
}
</script>
<style scoped>
.networkError {
  padding-left: 5%;
  padding-right: 5%;
}
</style>
