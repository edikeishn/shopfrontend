<template>
  <div class="main-container">
    <item v-for="item in items"  :key="item"
    :id="item.id"
    :title="item.title"
    :image="item.image"
    :price="item.price">
  </item>
  </div>
</template>
<script>
import Item from "../model/Item.vue"
export default {
  name: "MainContainer",
  data() {
    return {
      items: []
    }
  },
   created() {
    this.axios.get("./items.json")
    .then(response => {
      console.log(response.data.items);
    this.items = response.data.items;
      })
    console.log(this.items);

  },
  components: {
    Item
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
