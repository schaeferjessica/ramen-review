<template>
  <div class="networkError">
    <p>Uh-Oh!</p>
    <p>
      It looks like you're experiencing some network issues, please take a
      breath and
      <a href="#" @click="$router.go(-1)">click here</a> to try again.
    </p>
  </div>
</template>
<style scoped>
.networkError {
  padding-left: 5%;
  padding-right: 5%;
}
</style>
