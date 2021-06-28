import { createRouter, createWebHistory } from "vue-router";
import ProductList from "../components/product/ProductList.vue"
import ProductItem from "../components/product/ProductItem.vue"
import CartList from "../components/cart/CartList.vue"
import Admin from "../components/view/Admin.vue"
import AddNewItem from "../components/view/AddNewItem.vue"
import NotFound from '../components/NotFound.vue';

const routes = [
  { path: '/', name: "main", component: ProductList },

  { path: '/cart', component: CartList },

  { path: '/admin', component: Admin },

  { path: '/admin/addNewItem', component: AddNewItem },

  { path: '/itemdetails/:id',
    component: ProductItem,
    name: 'itemdetails',
    props: true },

    {
        path: '/:pathMatch(.*)*',
        component: NotFound
      }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
