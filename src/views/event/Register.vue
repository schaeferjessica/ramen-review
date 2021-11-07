<template>
  <p>Register for the event here</p>
  <button @click="register">Register me</button>
</template>
<script>
export default {
  props: ['event'],
  methods: {
    register() {
      // If registration API call is successful
      this.$router.push({
        name: 'EventDetails',
      })
    },
  },
}
</script>
