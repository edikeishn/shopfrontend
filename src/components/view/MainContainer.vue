<template>
  <div class="main-container">
    <item class="item" v-for="item in items"  :key="item.id"
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
<style scope>

.main-container {
  clear: both;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}

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
