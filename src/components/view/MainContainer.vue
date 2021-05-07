<template>
  <div class="main-container">
    <item v-for="item in items"  :key="item.id"
    :item="item">
    </item>
  </div>
</template>
<script>
import Item from "../model/Item.vue"
export default {
  name: "MainContainer",
  data() {
    return {

    }
  },

   created() {
    this.$store.dispatch("itemsModule/getItems");
  },

   components: {
    Item
  },

  computed: {
    items() {
     return this.$store.state.itemsModule.items
    }
  }
}
</script>
<style>
.main-container {
  clear: both;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
</style>
