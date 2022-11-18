<template>
  <router-view />
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/bit">Bit</router-link>
  </nav>
</template>
<script>

</script>
<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
