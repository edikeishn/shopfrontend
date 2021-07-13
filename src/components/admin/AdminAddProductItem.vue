<template>
<div class="olumns is-mobile">
  <div class="column is-half is-offset-one-quarter">
    <AdminAddNewProductForm/>
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AdminAddNewProductForm from './AdminAddNewProductForm';

export default {
  name: 'AdminAddProductItem',
  computed: {
    ...mapGetters([
      'cartItems',
      'cartTotal',
      'cartQuantity'
    ])
  },
  methods: {
    ...mapActions([
      'removeAllCartItems'
    ])
  },
  components: {
    AdminAddNewProductForm
  },

}
</script>

<style scoped>

</style>
