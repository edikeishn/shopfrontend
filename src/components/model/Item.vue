<template>
  <div class="item">
    <a href="##">
      <img alt="Картинка" :src="item.image"/>
    </a>
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
    this.$store.dispatch("adItemToBasket" ,this.item.id);
  //  this.item.quantity--;
        }
      }
    },

  created() {
    console.log(this.item);
  }
}
</script>
<style scope>

h3 {
margin: 6px;
  }

p {
margin: 6px;
}


.item {
  width: 250px;
  height: 300px;
  margin: 5px;
  border: 1px dotted black;
  border-radius: 10px;

}

@media (max-width:1328px) {
  .item {
    width: 240px;
    }
}
@media (max-width:1328px) {
  .item {
    width: 230px;
    }
}

@media (max-width:480px) {
  .item {
    width: 180px;
    }

  img {
            height: 150px;
            width: auto;
          }
}


img {
        height: 200px;
        width: auto;
      }


</style>
