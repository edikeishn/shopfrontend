<template>
  <div >
    <a class="basket" href="##">
      <img alt="Корзина" :src="image"/>
      <span>1</span>
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
}
.basket span {
  margin: 3px;
  position: absolute;
  top: 46%;
  font-style: oblique;

}

</style>
