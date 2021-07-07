import axios from 'axios';

const state = {
  cartItems: []
}

const mutations = {
  UPDATE_CART_ITEMS (state, payload) {
  console.log(state.cartItems[0]);
      console.log(payload[0]);
        state.cartItems = payload;
          console.log(state.cartItems[0]);

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
  //    let cartProductExists = false;
      const cartProducts = this.getters.cartItems;
      cartProducts.map((cartProduct) => {
      if (cartProduct.id === cartItem.id) {
        cartItem.quantity = cartProduct.quantity+2;
        //cartProduct.quantity+=3;
    //    cartProductExists = true;
    const index = cartProducts.indexOf(cartProduct);
    cartProducts.splice(index,1);
    console.log(cartProducts);
 }
 });
    cartProducts.push(cartItem);
      commit('UPDATE_CART_ITEMS', cartProducts);
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
    return state.cartItems.reduce((acc, cartItem) => {
  return cartItem.quantity + acc;
}, 0);
  }
}

const cartModule = {
  state,
  mutations,
  actions,
  getters
}

export default cartModule;
