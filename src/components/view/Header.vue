<template>
  <div class="top-header">
    <div class="left-top-header"> 1</div>
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
  <div class="header">I,m header</div>
</template>

<script>

export default {
  name: 'Header'
}
</script>

<style scope>

.header {
  background-color: #5222;
  height: 125px;

}
.left-top-header {
    width: 70%;
    background-color: #1E90FF;
    float: left;
    height: 30px;

  }
.right-top-header {
    width: 30%;
    background-color: #6495ED;
    float: left;
    height: 30px;

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


</style>
