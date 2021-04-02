<template>
  <div>
    <header-vue/>
    <router-view/>
  </div>
</template>

<script>
import HeaderVue from './components/view/Header.vue'
//import MainContainer from './components/view/MainContainer.vue'

export default {
  name: 'App',
  components: {
    HeaderVue,
//    MainContainer
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
