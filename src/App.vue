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
  background: linear-gradient(180deg, #e3ddcd 31.69%, #ffffff 100%);
  background-repeat: none;
  min-height: 100vh;
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

img {
  width: 100%;
  height: 100%;
  object-fit: contain;
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
  align-items: center;
  padding-left: 5%;
  padding-right: 5%;
  margin-top: 20px;
  margin-bottom: 20px;
}

@media only screen and (max-width: 600px) {
  body {
    font-size: 18px;
  }

  .footer {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
