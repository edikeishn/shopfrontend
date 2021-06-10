<template>
  <div class="top-header">
    <div class="left-top-header">

                  <router-link to="/admin">
                    Админка
                  </router-link>

    </div>
    <div class="right-top-header">

      <button class="button">
        <div>
          Регистрация
        </div>
      </button>
      <button class="button">
        <div>
        Войти
      </div>
    </button>
    </div>
  </div>
  <div class="header">I,m header

  </div>
</template>

<script>

export default {
  name: 'Header',
  components: {
    
  }
}
</script>

<style scope>

.header {
  background-color: #5222;
  height: 75px;
  position: sticky;
  top: 33px;

}

.top-header {
    position: sticky;
    top: 0px;
    height: 33px;
    background-color: #1E90FF;
}

.left-top-header {
    display: block;
    height: 33px;
    width: 70%;
    float: left;

  }

.right-top-header {
    display: block;
    height: 33px;
    width: 30%;
    background-color: #6495ED;
    float: left;

  }

  .button {
  margin: 2%;
  font-family:arial;
  font-size: 10px;
  line-height: 10px;
  letter-spacing: -1px;
  text-decoration: none;
  text-align:center;
  width:80px;
  color: #888888;
  position: relative;
  -webkit-transition: color 0.2s;
  -moz-transition: color 0.2s;
  -o-transition: color 0.2s;
  transition: color 0.2s;
}
@media (max-width:812px) {
  .left-top-header, .right-top-header {
      width: 50%
    }
}

.basket{
margin: 0 0 0 auto;
}
</style>
