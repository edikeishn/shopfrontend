import { createStore } from 'vuex'
import  {test}  from '../api/test.js'
import  {_getItems}  from '../api/items_api.js'

export default createStore({
  state: {
    itemsInBasket: [],
    items: []
  },
  getters:{


  },
  mutations: {
    adItemToBasket(state, item_id) {
      test();
      state.itemsInBasket.push(item_id);
      let item = state.items.filter(
        item => item.id == item_id
      );
      item[0].quantity--;
    },

    // Извлечение всех товаров из базы данных
    getItems(state, items) {
      state.items = items;
    }

  },
  actions: {
    // Метод добавления товара в корзину
    adItemToBasket(context, item_id) {
      context.commit("adItemToBasket",item_id);
    },
    //Метод извлечения всех товаров из базы данных
    async getItems (context) {
    let items = await _getItems();
    context.commit("getItems", items)
      }
  },
  modules: {
  }
})
