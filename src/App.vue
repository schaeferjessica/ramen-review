<template>
  <nav id="nav" class="navigation">
    <router-link :to="{ name: 'RamenReviews' }">RamenReviews</router-link>
  </nav>

  <router-view />

  <footer class="footer">
    <p>Ramen Reviews by <a href="https://jessica.gatsbyjs.io/">Jessica</a></p>
    <router-link :to="{ name: 'Impressum' }">Impressum</router-link>
  </footer>
</template>

<script>
export default {
  inject: ['GlobalStore'],
}
</script>

<style>
.vue-app {
  font-family: 'Krub', sans-serif, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #3d3832;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-size: 20px;
}

a,
a:visited {
  color: #3d3832;
  text-decoration: none;
}

ul {
  list-style: none;
}

.footer {
  display: flex;
  justify-content: space-between;
}
</style>
