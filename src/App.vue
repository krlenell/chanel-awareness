<template>
  <div id="app">
    <GoFundMe msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import GoFundMe from './components/GoFundMe.vue'

export default {
  name: 'App',
  components: {
    GoFundMe
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
