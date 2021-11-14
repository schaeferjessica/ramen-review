<template>
  <nav id="nav" class="navigation">
    <router-link :to="{ name: 'RamenReviews' }">Ramen Reviews</router-link>
  </nav>

  <router-view />

  <footer class="footer">
    <p>
      Ramen Reviews by
      <a href="https://jessica.gatsbyjs.io/" target="_blanck"
        >Jessica Schäfer</a
      >
    </p>
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
  text-decoration-style: wavy;
  text-decoration-color: #3d3832;
  text-underline-offset: 5px;
}

ul {
  list-style: none;
}

.navigation {
  padding-left: 5%;
  padding-right: 5%;
  margin-top: 20px;
  margin-bottom: 20px;
}

.footer {
  display: flex;
  justify-content: space-between;
  padding-left: 5%;
  padding-right: 5%;
  margin-top: 20px;
}
</style>
