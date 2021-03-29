<template>
  <div >
    <a class="basket" href="##">
      <img alt="Корзина" :src="image"/>
      <span>{{quantity}}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "Basket",

  data () {
    return {
      image:"assets/content/basket_full.png"
    }
  }
,
  methods: {},
  computed: {
  quantity() {
   return this.$store.state.itemsInBasket.length

  }
  }
}
</script>

<style>
.basket{
  display: block;
  border-radius: 10px;
  height: 40px;
  width: 75px;
  text-decoration: none;
  background-color: red;

}

.basket img {
  height: 40px;
  width: 40px;
  float: left;

}
.basket span {
  margin: 3px;
  position: relative;
  top: 17%;
  font-style: oblique;
  float: left;

}

</style>
