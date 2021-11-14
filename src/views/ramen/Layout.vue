<template>
  <div v-if="ramen" class="ramen__layout">
    <!-- <div id="nav">
      <router-link :to="{ name: 'RamenLink' }">Link</router-link>
    </div> -->
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
<style scoped>
.ramen__layout {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 5%;
  padding-right: 5%;
}
</style>
