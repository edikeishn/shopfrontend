<template>
  <div>
    <router-link to="/admin">
      Вернуться обратно
    </router-link>
    <p/>

    <div>
      <input type="text" v-model="title" required minlength="4" maxlength="8" size="10">
      <input type="text" v-model="price" required minlength="4" maxlength="8" size="10">
      <input type="text" v-model="quantity" required minlength="4" maxlength="8" size="10">
      <input type="file" required accept="image/png, image/jpeg"  style="color: transparent;" ref="file" v-on:change="handleFileUpload()">
      <button @click="adNewItem">Загрузить</button>
    </div>

  </div>
</template>
<script>
import  {_addNewItem} from '../../api/items_api.js'
export default {
  name: "AddNewItem",
  data() {
    return {
        title: "",
        price: "",
        quantity: "",
        image: ""
    }
  },

  methods: {
    // Метод добавления нового товара в базу данных
    adNewItem () {
     _addNewItem(this.title, this.price, this.quantity, this.image);
     this.title = "";
     this.price = "";
     this.quantity = "";
     this.image = ""
    },

    //Метод загрузки картинки товара
    handleFileUpload() {
      this.image = this.$refs.file.files[0];
      console.log(this.image)
    }
    }
}
</script>
<style scope>

</style>
