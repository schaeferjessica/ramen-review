<template>
  <p>Register for the event here</p>
  <button @click="register">Register me</button>
</template>
<script>
export default {
  props: ['event'],
  inject: ['GlobalStore'], // <---- Inject the Global Store
  methods: {
    register() {
      // Assuming successful API call to register them

      this.GlobalStore.flashMessage =
        'You are successfully registered for ' + this.event.title
      setTimeout(() => {
        // After 3 seconds remove it
        this.GlobalStore.flashMessage = ''
      }, 3000)

      // If registration API call is successful
      this.$router.push({
        name: 'EventDetails',
      })
    },
  },
}
</script>
