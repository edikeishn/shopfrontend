<template>
  <section id="product-item" class="item" v-if="productItem">
    <a>
          <img alt="Картинка" :src="productItem.image"/>
    </a>
        <h3>{{productItem.title}}</h3>
        <p>Цена: {{productItem.price}}</p>
        <button  @click="adToBasket">В корзину</button>
  </section>
</template>

<script>
export default {
  name: 'ProductItem',
  props: ['id'],
  computed: {
    productItem() {
      return this.$store.getters.productItemFromId(Number(this.id));
    }
  },
  methods: {
    addAndGoToCart(productItem) {
      this.$store
        .dispatch('addCartItem', productItem)
        .then(() => {
          this.$router.push('/cart');
        });
    }
  }
}
</script>

<style scoped>
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
