
const state = {
  cartItems: [],

}

const mutations = {
  UPDATE_CART_ITEMS (state, payload) {
   state.cartItems = payload;
  }
}

const actions = {


  addCartItem ({ commit }, cartItem) {
      let cartProductExists = false;
      const cartProducts = JSON.parse(JSON.stringify(this.getters.cartItems));
      cartProducts.map((cartProduct) => {
      if (cartProduct.id === cartItem.id) {
      cartProduct.quantity++;
      cartProductExists = true;
   }
 });
    if(!cartProductExists) {
      cartItem.quantity = 1;
      cartProducts.push(cartItem);
    }
      commit('UPDATE_CART_ITEMS', cartProducts);
},

  removeCartItem ({ commit }, cartItem) {
    const cartProducts = JSON.parse(JSON.stringify(this.getters.cartItems));
    cartProducts.map((cartProduct) => {
    if (cartProduct.id === cartItem.id && cartProduct.quantity > 1) {
    cartProduct.quantity--;
   }
   else if (cartProduct.id === cartItem.id && cartProduct.quantity === 1) {
        const cartIndexToRemove = cartProducts.findIndex(cartProduct => cartProduct.id === cartItem.id);
        cartProducts.splice(cartIndexToRemove, 1);
      }
});
commit('UPDATE_CART_ITEMS', cartProducts);
  },

  removeAllCartItems ({ commit }) {
  commit('UPDATE_CART_ITEMS', []);
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
