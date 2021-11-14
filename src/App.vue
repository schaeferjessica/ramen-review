<template>
  <div id="nav" class="navigation">
    <div id="flashMessage" v-if="GlobalStore.flashMessage">
      {{ GlobalStore.flashMessage }}
    </div>
    <router-link :to="{ name: 'RamenList' }">RamenList</router-link> |
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

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

a,
a:visited {
  color: black;
  text-decoration: none;
}

ul {
  list-style: none;
}

@keyframes yellowfade {
  from {
    background: yellow;
  }
  to {
    background: transparent;
  }
}

.navigation {
  text-align: right;
}

#flashMessage {
  animation-name: yellowfade;
  animation-duration: 3s;
}
</style>
