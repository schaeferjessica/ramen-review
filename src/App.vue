<template>
  <div id="nav">
    <router-link to="/">EventList</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

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
</style>
