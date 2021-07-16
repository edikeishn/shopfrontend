<template>
  <navbar-list/>
  <div class="container">
    <section v-if="this.$route.path==='/'" class="hero is-medium is-link hero-custom">
  <div class="hero-body">
    <p class="title">
      Medium hero
    </p>
    <p class="subtitle">
      Medium subtitle
    </p>
  </div>
</section>
    <router-view class="top"/>
  </div>
</template>

<script>
import NavbarList from './components/navbar/NavbarList.vue'

export default {
  name: 'App',

  components: {
  NavbarList
  },

  created() {
    this.updateInitialState();

  },

  methods: {
    updateInitialState() {
      this.$store.dispatch("getProductItems");

    }
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
.top {
  margin-top: 1rem;
}
.hero-custom{
  margin-top: 5.5rem
}


</style>
