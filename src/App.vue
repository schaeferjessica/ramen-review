<template>
  <div id="nav">
    <div id="flashMessage" v-if="GlobalStore.flashMessage">
      {{ GlobalStore.flashMessage }}
    </div>
    <router-link :to="{ name: 'EventList' }">EventList</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  inject: ['GlobalStore'],
}
</script>

<style>
.vue-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

a,
a:visited {
  color: black;
  text-decoration: none;
}

@keyframes yellowfade {
  from {
    background: yellow;
  }
  to {
    background: transparent;
  }
}

#flashMessage {
  animation-name: yellowfade;
  animation-duration: 3s;
}
</style>
