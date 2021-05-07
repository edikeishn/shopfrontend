<template>
  <div class="main-container">

    <router-link to="/admin">
      Вернутьься обратно
    </router-link>


    <table class="table">
        <tr>
          <th>№№</th>
          <th>Артикул</th>
          <th>Наименование</th>
          <th>Цена</th>
          <th>Количество</th>
          <th>Редактировать</th>
        </tr>
        <tr v-for="(item, index) in items" :key='item.id'>
          <td>{{index+1}}</td>
          <td>{{item.id}}</td>
          <td>{{item.title}}</td>
          <td>{{item.price}}</td>
          <td>{{item.quantity}}</td>
          <td>№№</td>
        </tr>
  </table>
  </div>
</template>
<script>

export default {
  name: "Admin",
  data() {
    return {

    }
  },

   created() {
    this.$store.dispatch("itemsModule/getItems");
  },

   components: {

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
  display: inline;
  flex-flow: row wrap;
  justify-content: space-around;
}

table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>
