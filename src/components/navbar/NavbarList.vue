<template id="">
  <nav class="level navbar is-fixed-top container">
    <div class="level-left">
      <div class="level-item">
        <div class="dropdown" id="categoriesMenu">
          <div class="dropdown-trigger">
            <button class="button" @click="showMenu" aria-haspopup="true" aria-controls="dropdown-menu3">
              <span>Категории</span>
              <span class="icon is-small">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu3" role="menu">
            <div class="dropdown-content">
              <a href="#" class="dropdown-item" @click="showMenu">
                Все категории
              </a>
              <a href="#" class="dropdown-item" @click="showMenu">
                Чаи
              </a>
              <a href="#" class="dropdown-item" @click="showMenu">
                Напитки
              </a>
              <a href="#" class="dropdown-item" @click="showMenu">
                Натуральная косметика
              </a>

            </div>
          </div>
        </div>
      </div>
      <div class="level-item">
        <div class="field has-addons">
          <p class="control">
            <input class="input" type="text" placeholder="Поиск продукта" v-model="itemsFindText">
          </p>
          <p class="control">
            <button class="button" @click="findItems">
              Поиск
            </button>
          </p>
        </div>
      </div>
    </div>
    <!-- Right side -->
    <div class="level-right is-size-1-mobile">
      <p class="level-item">
        <a class="has-text-grey">Войти</a>
      </p>
      <p class="level-item">
        <a class="has-text-grey">Заказы</a>
      </p>
      <p class="level-item">
        <a class="has-text-grey">Избранное</a>
      </p>
      <p class="level-item">
        <router-link to="/cart" class="has-text-grey">
          <span class="icon-text">
           <span class="icon">
            <i class="fa fa-shopping-cart"></i>
           </span>
           <span>{{ cartQuantity }}</span>
         </span></router-link></p>
    </div>
  </nav>


</template>
<script>
  import { mapGetters } from 'vuex';
  export default {
    name: "NavbarList",
    data() {
      return {
        itemsFindText: ""
      }
    },
    methods: {
      showMenu() {
        var element = document.getElementById("categoriesMenu");
        element.classList.contains("is-active") ? element.classList.remove("is-active") : element.classList.add("is-active");
      },
      findItems() {
        console.log(this.itemsFindText);
        this.$store.dispatch("getProductItems");
        this.itemsFindText="";

      }
    },
    computed: {
  ...mapGetters([
    'cartQuantity'
  ])
},
  }
</script>
<style >
.tags-custom {
  background-color: black;
}
</style>
