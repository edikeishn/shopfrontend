import axios from 'axios';


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
    //  console.log(this.getters.cartItems[0]);
    //  console.log(cartItem.id);
      cartItem.quantity = 1;
      let cartProductExists = false;
      console.log(this.getters.cartItems[0]);
      const cartProducts = JSON.parse(JSON.stringify(this.getters.cartItems));
  //    console.log(cartProducts[0]);
      cartProducts.map((cartProduct) => {
      if (cartProduct.id === cartItem.id) {
  //      console.log(cartProduct.quantity);
      cartProduct.quantity++;
      cartProductExists = true;
   }
 });
    if(!cartProductExists) cartProducts.push(cartItem);

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
