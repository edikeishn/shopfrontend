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


img {
        height: 200px;
        width: auto;
      }
</style>
