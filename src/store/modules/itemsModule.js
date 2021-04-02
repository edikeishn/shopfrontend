import  {_getItems}  from '../../api/items_api.js'

export const itemsModule = {
  namespaced: true,
  state: () => ({
  items: [],
     }),
  mutations: {
    // Извлечение всех товаров из базы данных
    getItems(state, items) {
      state.items = items;
    },

    //Метод уменьшения количества определнного товара
    decrementItem(state, item_id) {
      let item = state.items.filter(
        item => item.id == item_id
      );
      item[0].quantity--;
    }
  },
  actions: {
    //Метод извлечения всех товаров из базы данных
    async getItems (context) {
    let items = await _getItems();
    context.commit("getItems", items)
  },

   //Метод уменьшения количества определнного товара
   decrementItem (context, item_id) {
     context.commit("decrementItem", item_id)
   }
 },
  getters: {
    getItemById: (state) =>  (item_id) => {
    for (const element of state.items) {
       if (element.id == item_id) {
    return element;
  }
  }
   }
  }
}
