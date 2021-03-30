import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
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
    getItems (context) {
      axios.get("./items.json")
      .then(response => {
      let items = response.data.items;
      context.commit("getItems", items);
        })
      }
  },
  modules: {
  }
})
