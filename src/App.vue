<template>
    <header-vue/>
</template>

<script>
import HeaderVue from './components/view/Header.vue'

export default {
  name: 'App',
  components: {
    HeaderVue
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
  margin: 0;
  padding: 0;
}
</style>
