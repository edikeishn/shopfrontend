

export const basket = {
  namespaced: true,
  state: () => ({
  itemsInBasket: []
   }),
  mutations: {
    adItemToBasket(state, item_id) {
      state.itemsInBasket.push(item_id);
    }
  },
  actions: {
    // Метод добавления товара в корзину
    adItemToBasket(context, item_id) {
      context.commit("adItemToBasket",item_id);
      this.dispatch("itemsModule/decrementItem",item_id);
    }
   },

  getters: {}
}
