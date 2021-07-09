<template>
  <td>{{index+1}}</td>
  <td>{{productItem.id}}</td>
  <td>{{productItem.title}}</td>
  <td>
    <div class="admin-item__image">
      <img :src="productItem.image" />
    </div>
  </td>
  <td>{{productItem.price}}</td>
  <td>{{productItem.quantity}}</td>
  <td>
   <div class="action_block">
     <button class="button is-small">Редактировать</button>
     <button class="button is-small">Удалить</button>
   </div>
  </td>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AdminProductListItem',
  props: ['productItem', 'index'],
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
.box {
  height: 90px;
  padding: 10px;
}

.cart-item__details {
  float: left;
  width: 250px;
  padding: 10px;
}

.admin-item__image img {
  height: 70px;
}

.cart-item__modify {
  cursor: pointer;
  margin: 0 1px;
}
</style>
