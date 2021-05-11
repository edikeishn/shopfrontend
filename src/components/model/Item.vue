<template>
  <div >
    <router-link :to="{name: 'itemdetails', params: { itemId: item.id } }">
      <img alt="Картинка" :src="item.image"/>
    </router-link>
    <h3>{{item.title}}</h3>
    <p>Цена: {{item.price}}</p>
    <button v-if="available" @click="adToBasket">В корзину</button>
  </div>
</template>
<script>
export default {
  name: "Item",

  props: ["item"],

  data() {
    return {

    }
  },

  computed: {
    available() {
      return this.item.quantity>0;
      }

    },

  methods: {
    adToBasket () {
    if (this.available) {
    this.$store.dispatch("basket/adItemToBasket" ,this.item.id);
        }
      }
    },

  mounted() {
  }}
</script>
<style scope>




</style>
