<template>
  <div v-if="ramen">
    <h1>{{ ramen.name }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'RamenDetails' }">Details</router-link>
      |
      <router-link :to="{ name: 'EventRegister' }">Register</router-link>
      |
      <router-link :to="{ name: 'EventEdit' }">Edit</router-link>
    </div>
    <router-view :ramen="ramen" />
  </div>
</template>

<script>
import RamenService from '@/services/RamenService.js'

export default {
  props: ['id'],
  data() {
    return {
      ramen: null,
    }
  },
  created() {
    RamenService.getEvent(this.id)
      .then((response) => {
        this.ramen = response.data
      })
      .catch((error) => {
        if (error.response && error.response.status == 404) {
          this.$router.push({
            name: '404Resource',
            params: { resource: 'ramen' },
          })
        } else {
          this.$router.push({ name: 'NetworkError' })
        }
      })
  },
}
</script>
