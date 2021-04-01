import { createStore } from 'vuex'
import  {basket}  from './modules/basket.js'
import  {itemsModule}  from './modules/itemsModule.js'

export default createStore({

  modules: {
    basket: basket,
    itemsModule: itemsModule
  },

  state: {
    itemsInBasket: [],
    items: []
  },

  getters:{

  },

  mutations: {
    adItemToBasket(state, item_id) {
      state.itemsInBasket.push(item_id);
      let item = state.items.filter(
        item => item.id == item_id
      );
      item[0].quantity--;
    }
  },
  actions: {
    // Метод добавления товара в корзину
    adItemToBasket(context, item_id) {
      context.commit("adItemToBasket",item_id);
    }
  }
})
