
export const basket = {
  namespaced: true,
  state: () => ({
  itemsInBasket: []
   }),
  mutations: {
    adItemToBasket(state, item_id) {
    console.log(state.itemsInBasket);
    if (this.getters["basket/getItemById"](item_id)!=null) {
      this.getters["basket/getItemById"](item_id).quantity++;
    }
    else state.itemsInBasket.push({"id":item_id,"quantity":1});
    }
  },
  actions: {
    // Метод добавления товара в корзину
    adItemToBasket(context, item_id) {
      context.commit("adItemToBasket",item_id);
      this.dispatch("itemsModule/decrementItem",item_id);
    }
   },

  getters: {
    getItemById: (state) => (item_id) => {
       let item = state.itemsInBasket.find(
       item => item.id === item_id
       );
       return item;
   }
  }
}
