<template>
<div id="app">
  <transition name="el-fade-in-linear" mode="out-in">
    <router-view />
  </transition>
  <!-- progress-bar-->
  <vue-progress-bar></vue-progress-bar>
</div>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.$Progress.start()
    this.$router.beforeEach((to, from, next) => {
      this.$Progress.start()
      next()
    })
    this.$router.afterEach((to, from) => {
      this.$Progress.finish()
    })
  },
  mounted() {
    this.$Progress.finish()
  }
}
</script>

<style scoped>
#app {
  position: relative;
  height: 100%;
}

#app>>>a {
  color: #42b983;
  text-decoration: none;
  outline: none;
}
</style>
