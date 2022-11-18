<template>
  <div class="titleBar">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
  },
}
</script>


<style scoped>
h1 {
  font-size: 2.5rem;
  margin: 1.5rem;
}
</style>
