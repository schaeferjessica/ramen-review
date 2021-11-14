<template>
  <p>Register for the ramen here</p>
  <button @click="register">Register me</button>
</template>
<script>
export default {
  props: ['ramen'],
  inject: ['GlobalStore'],
  methods: {
    register() {
      // If registration API call is successful
      this.$router.push({
        name: 'RamenDetails',
      })
    },
  },
}
</script>
