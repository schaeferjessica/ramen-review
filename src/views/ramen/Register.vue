<template>
  <p>Register for the ramen here</p>
  <button @click="register">Register me</button>
</template>
<script>
export default {
  props: ['ramen'],
  inject: ['GlobalStore'], // <---- Inject the Global Store
  methods: {
    register() {
      // Assuming successful API call to register them

      this.GlobalStore.flashMessage =
        'You are successfully registered for ' + this.ramen.title
      setTimeout(() => {
        // After 3 seconds remove it
        this.GlobalStore.flashMessage = ''
      }, 3000)

      // If registration API call is successful
      this.$router.push({
        name: 'RamenDetails',
      })
    },
  },
}
</script>
