<template id="">
  <nav class="level navbar is-fixed-top container">
    <div class="level-left">
      <div class="level-item">
        <div class="dropdown">
          <div class="dropdown-trigger">
            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3">
              <span>Click me</span>
              <span class="icon is-small">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu3" role="menu">
            <div class="dropdown-content">
              <a href="#" class="dropdown-item">
                Overview
              </a>
              <a href="#" class="dropdown-item">
                Modifiers
              </a>
              <a href="#" class="dropdown-item">
                Grid
              </a>
              <a href="#" class="dropdown-item">
                Form
              </a>
              <a href="#" class="dropdown-item">
                Elements
              </a>
              <a href="#" class="dropdown-item">
                Components
              </a>
              <a href="#" class="dropdown-item">
                Layout
              </a>
              <hr class="dropdown-divider">
              <a href="#" class="dropdown-item">
                More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="level-item">
        <div class="field has-addons">
          <p class="control">
            <input class="input" type="text" placeholder="Find a post">
          </p>
          <p class="control">
            <button class="button">
              Search
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
        <a class="has-text-grey">Закзаы</a>
      </p>
      <p class="level-item">
        <a class="has-text-grey">Избранное</a>
      </p>
      <p class="level-item">
        <a class="has-text-grey">
          <span class="icon-text">
           <span class="icon">
            <i class="fa fa-shopping-cart"></i>
           </span>
           <span>{{ cartQuantity }}</span>
         </span></a></p>
    </div>
  </nav>


</template>
<script>
  import { mapGetters } from 'vuex';
  export default {
    name: "NavbarList",
    computed: {
  ...mapGetters([
    'token',
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
