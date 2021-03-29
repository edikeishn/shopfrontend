<template>
  <div class="main-container">
    <item v-for="item in items"  :key="item"
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
      items: []
    }
  },
   created() {
    this.axios.get("./items.json")
    .then(response => {

    this.items = response.data.items;
      })

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
