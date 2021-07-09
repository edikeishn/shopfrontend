<template>
  <div id="admin">
   <div class="block">
     <router-link to="/admin/addnewproduct">
       <button class="button">Добавить новый товар</button>
     </router-link>
   </div>
   <table class="table is-bordered">
     <thead>
     <tr>
       <th>№№</th>
       <th>Артикул</th>
       <th>Наименование</th>
       <th>Изображение</th>
       <th>Цена</th>
       <th>Количесвто</th>
       <th>Действие</th>
     </tr>
    </thead>
    <tbody>
      <tr v-for="(productItem, index) in productItems" :key="productItem.id" class="cart-item">
        <AdminProductListItem :productItem="productItem" :index="index"/>
      </tr>
    </tbody>
   </table>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AdminProductListItem from './AdminProductListItem';

export default {
  name: 'AdminProductList',

  computed: {...mapGetters(['productItems'])
  },

  components: {
    AdminProductListItem
  }
}
</script>

<style scoped>



#admin {
  height: 100%;
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}


</style>
