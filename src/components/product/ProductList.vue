<template>
  <div id="products" class="main-container">
      <div v-for="productItem in productItems" :key="productItem.id"
        class="product-list--item">
        <ProductListItem :productItem="productItem"/>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductListItem from './ProductListItem';

export default {
  name: 'ProductList',

  computed: {...mapGetters(['productItems'])
  },

  components: {
    ProductListItem
  }
}
</script>

<style scoped>

.main-container {
  clear: both;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}



</style>
