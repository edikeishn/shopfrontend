<template>
  <div class="item">
    <a href="##">
      <img alt="Картинка" :src="image"/>
    </a>
    <h3>{{title}}</h3>
    <p>Цена: {{price}}</p>
  </div>
</template>
<script>
export default {
  name: "Item",

  props: ["id","title","image","price"],

  data() {
    return {

    }
  },

  created() {

  }
}
</script>
<style>
.item {
  width: 220px;
  height: 300px;
  border: 1px dotted #DCDCDC;
  justify-content: space-around;
}

img {
        height: 200px;
        width: auto;
      }
</style>
