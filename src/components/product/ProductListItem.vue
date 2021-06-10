<template>
  <div class="item card">
    <router-link :to="{name: 'itemdetails', params: { id: productItem.id } }">
      <img alt="Картинка" :src="productItem.image"/>
    </router-link>
    <h3>{{productItem.title}}</h3>
    <p>Цена: {{productItem.price}}</p>
    <span
  @click="addCartItem(productItem)"
  class="tag is-primary has-text-white">
    Add to Cart
</span>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ProductListItem',
  props: ['productItem'],
  methods: {
    ...mapActions(['addCartItem'])
  },
  computed: {
    available() {
      return this.productItem.quantity>0;
      }

    }
}
</script>

<style scoped>
.item {
  width: 250px;
  height: 306px;
  margin: 5px;
  border-radius: 10px;

}

.tag{
  cursor: pointer;

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
        margin-top: 2px;
        height: 200px;
        width: auto;
      }


h3 {
      margin: 6px;
        }

p {
      margin: 6px;
      }
</style>
