import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart:[],
    totalPrice:0
  },
  getters: {
    cartData(state)
    {
      return state.cart;
    },
    getTotalPrice(state)
    {
      let price=[];
      for(let i=0;i<state.cart.length;i++)
      {
         price[i] = state.cart[i].productQuantity * state.cart[i].productPrice; 
      }
      price.forEach((Element)=> state.totalPrice +=Element);
      return state.totalPrice;
    }
  },
  mutations: {
    setCart(state,payload)
    {
      state.cart = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
