import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlaceOrder from '../components/PlaceOrder.vue'
import CheckOut from '../components/CheckOut.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/placeOrder',
    name:"placeOrder",
    component: PlaceOrder
  },
  {
    path:'/CheckOut',
    name:'CheckOut',
    component:CheckOut
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
