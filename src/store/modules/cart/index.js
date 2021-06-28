import axios from 'axios';

const state = {
  cartItems: []
}

const mutations = {
  UPDATE_CART_ITEMS (state, payload) {
    state.cartItems.push(payload);

  }
}

const actions = {
  getCartItems ({ commit }, token) {
    axios.get(`/api/cart?token=${token}`).then((response) => {
      commit('UPDATE_CART_ITEMS', response.data)
    });
  },

  addCartItem ({ commit }, cartItem) {
      cartItem.quantity = 1;
      axios.get(`../items.json`).then((response) => {
      let availableProduct = response.data.items.find(
      item =>  item.id === cartItem.id
    );
      let cartProductExists = false;
      const cartProducts = this.getters.cartItems;
      cartProducts.map((cartProduct) => {
      if (cartProduct.id === cartItem.id) {
        console.log(cartProduct.quantity);
      if(cartProduct.quantity < availableProduct.quantity){
        cartProduct.quantity++;
        cartProductExists = true;
      }
 }
});
if (!cartProductExists) cartProducts.push(cartItem);
      commit('UPDATE_PRODUCT_ITEMS', cartProducts);

    });

    },
  removeCartItem ({ commit }, cartItem) {
    axios.post('/api/cart/delete', cartItem).then((response) => {
      commit('UPDATE_CART_ITEMS', response.data)
    });
  },
  removeAllCartItems ({ commit }) {
    axios.post('/api/cart/delete/all').then((response) => {
      commit('UPDATE_CART_ITEMS', response.data)
    });
  }
}

const getters = {
  cartItems: state => state.cartItems,
  cartTotal: state => {
    return state.cartItems.reduce((acc, cartItem) => {
      return (cartItem.quantity * cartItem.price) + acc;
    }, 0).toFixed(2);
  },
  cartQuantity: state => {
    return state.cartItems.length;
  }
}

const cartModule = {
  state,
  mutations,
  actions,
  getters
}

export default cartModule;
