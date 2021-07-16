import { createRouter, createWebHistory } from "vue-router";
import ProductList from "../components/product/ProductList.vue"
import Checkout from "../components/checkout/Checkout.vue"
import ProductItem from "../components/product/ProductItem.vue"
import CartList from "../components/cart/CartList.vue"
import AdminProductList from "../components/admin/AdminProductList.vue"
import AdminAddProductItem from "../components/admin/AdminAddProductItem.vue"
import NotFound from '../components/NotFound.vue';

const routes = [
  { path: '/', name: "main", component: ProductList },

  { path: '/cart', component: CartList },

  { path: '/checkout', component: Checkout },

  { path: '/admin', component: AdminProductList },

  { path: '/admin/addnewproduct', component: AdminAddProductItem },

  { path: '/product/:id',
    component: ProductItem,
    name: 'itemdetails',
    props: true },

  {
    path: '/:pathMatch(.*)*',
    component: NotFound}
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
