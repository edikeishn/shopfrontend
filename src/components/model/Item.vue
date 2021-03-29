<template>
  <div class="item">
    <a href="##">
      <img alt="Картинка" :src="item.image"/>
    </a>
    <h3>{{item.title}}</h3>
    <p>Цена: {{item.price}}</p>
  </div>
</template>
<script>
export default {
  name: "Item",

  props: ["item"],

  data() {
    return {
      image:"",
      title:"",
      price:""

    }
  },

  created() {
    console.log(this.item);
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
