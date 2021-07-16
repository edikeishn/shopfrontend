<template class="">
  <div class="main">
    <div class="header has-text-left">
      <h1 class="is-size-2">Оформление заказа</h1>
    </div>
    <div class="">
      <div class="columns is-10">
        <div class="column is-7 has-text-left column__ column__left">
          <div class="">
            <h1 class="is-size-4">
              Контактные данные получателя:
            </h1>
          </div>
          <div class="form">
            <div class="field">
             <label class="label">Фамилия</label>
             <div class="control">
             <input class="input" type="text" placeholder="Введите фамилию">
            </div>
          </div>
           <div class="field">
            <label class="label">Имя</label>
            <div class="control">
            <input class="input" type="text" placeholder="Введите имя">
           </div>
          </div>
          <div class="field">
           <label class="label">Номер телефона</label>
           <div class="control">
           <input class="input" type="text" placeholder="+7 (000) 000-00-00">
          </div>
         </div>
         <div class="field">
          <label class="label">E-mail</label>
          <div class="control">
          <input class="input" type="text" placeholder="Введите e-mail">
         </div>
        </div>
        <div class="field">
         <label class="label">Адрес доставки</label>
         <div class="control">
         <input class="input" type="text" placeholder="Введите название улицы, номер дома и помещения">
        </div>
       </div>
          </div>
        </div>
        <div class="column is-5 column__ ">
          <div class="block has-text-left">
            <div class="columns">
              <div class="column is-6">
                  <h1 class="is-size-4">
                    Ваш заказ
                  </h1>
              </div>
              <div class="column is-6 has-text-right">
                  <router-link to="/cart">
                    <h1 class="has-text-grey is-size-6 cart_link">
                      Вернуться в корзину
                    </h1>
                  </router-link>
              </div>

            </div>
            <div class="columns">
              <div class="column is-6">
                  Товары
              </div>
              <div class="column is-6 has-text-right">
                  100 рублей
              </div>

            </div>
            <div class="columns">
              <div class="column is-6">
                  Доставка
              </div>
              <div class="column is-6 has-text-right">
                  бесплатно
              </div>

            </div>
            <div class="columns">
              <div class="column is-6">
                  Итого
              </div>
              <div class="column is-6 has-text-right">
                  100 рублей
              </div>

            </div>
          </div>
          <div class="block">
            <button class="button is-medium">Подтвердить и заказать</button>
          </div>
          <div class="block">
            Размещая заказ, вы соглашаетесь на обработку персональных данных в соответствии с Соглашением о конфиденциальности и Пользовательским соглашением ООО "Райяна".
          </div>

        </div>

      </div>
    </div>

  </div>
</template>

<script>

</script>

<style scoped>
.main {
margin-top: 5.5rem
}

.header{
  padding-bottom: 1rem;
}

.form {
  width: 30rem;
}

.column__{
  border-radius: 10px;
  border: 2px solid #C0C0C0;
}


.columns {
    margin-left: 0rem;
    margin-right: 1rem;


}
.column__left{
  margin-right: 1rem;
}

.cart_link {
  margin-top: 0.35rem
}
</style>
