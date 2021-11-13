<template>
  <p>{{ ramen.name }}</p>
  <p>{{ ramen.flavour }}</p>
</template>

<script>
export default {
  props: ['ramen'],
}
</script>
