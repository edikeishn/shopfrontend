import { createStore } from 'vuex'

export default createStore({
  state: {
    itemsInBasket: []
  },
  getters:{


  },
  mutations: {
    adItemToBasket(state, item_id) {
      state.itemsInBasket.push(item_id)

    }

  },
  actions: {
    adItemToBasket(context, item_id) {
      context.commit("adItemToBasket",item_id);
    }
  },
  modules: {
  }
})
