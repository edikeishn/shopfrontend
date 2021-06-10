import { createRouter, createWebHistory } from "vue-router";
import ProductList from "../components/product/ProductList.vue"
import ProductItem from "../components/product/ProductItem.vue"
import Admin from "../components/view/Admin.vue"
import AddNewItem from "../components/view/AddNewItem.vue"

const routes = [
  { path: '/', component: ProductList },

  { path: '/admin', component: Admin },

  { path: '/admin/addNewItem', component: AddNewItem },

  { path: '/itemdetails/:id',
    component: ProductItem,
    name: 'itemdetails',
    props: true }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
