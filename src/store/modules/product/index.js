import axios from 'axios';

const state = {
  productItems: []
}

const mutations = {
  UPDATE_PRODUCT_ITEMS (state, payload) {
    state.productItems = payload;

  }
}

const actions = {
  getProductItems ({commit}) {
    axios.get(`../items.json`).then((response) => {
      commit('UPDATE_PRODUCT_ITEMS', response.data.items);

    });
  }
}

const getters = {
  productItems: state => state.productItems,
  productItemFromId: (state) => (id) => {

    return state.productItems.find(productItem => productItem.id === id)
  }
}

const productModule = {
  state,
  mutations,
  actions,
  getters
}

export default productModule;
