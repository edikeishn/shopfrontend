<template>
 <div class="column is-three-fifths is-offset-one-quarter" v-if="productItem">
   <div class="title">
    <h3>{{productItem.title}}</h3>
   </div>
  <div class="columns">
   <div class="column is-one-thirds">
    <a>
     <img alt="Картинка" :src="productItem.image" @click="fullscreen"/>
    </a>
    <div :class="[{'is-active':active},'modal']">
   <div class="modal-background" @click="fullscreen"></div>
   <div class="modal-content">
    <p class="image_fullscreen">
      <img :src="productItem.image" class="image_fullscreen">
    </p>
  </div>
  <button class="modal-close is-large" aria-label="close" @click="fullscreen"></button>
</div>
    </div>
    <div class="column is-two-thirds">
      <table class="table">
        <tbody>
          <tr>
            <td>Стоимость: </td>
            <td>{{productItem.price}} руб.</td>
          </tr>
          <tr>
            <td>В наличии:</td>
            <td>{{productItem.quantity}} шт.</td>
          </tr>
        </tbody>
      </table>
     <section>

      <span
    @click="addCartItem(productItem)"
    class="tag is-primary has-text-white">
      В корзину
  </span>
    </section>
   </div>
  </div>
 </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'ProductItem',
  data() {
    return {
      active: false
    }
  },
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
          this.getProductItems();
        });
    },
    fullscreen() {
        this.active ? this.active=false : this.active=true
    },
    ...mapActions(['addCartItem','getProductItems'])
  },
  created() {
    this.getProductItems();
  }
}
</script>

<style scoped>
.image_fullscreen{
  height: 405px;
  width: auto;
}
.modal-content{
  height: 405px;
  width: auto;
}
</style>
