import { createRouter, createWebHistory } from "vue-router";
import MainContainer from "../components/view/MainContainer.vue"
import ItemDetails from "../components/model/ItemDetails.vue"
import Admin from "../components/view/Admin.vue"
import AddNewItem from "../components/view/AddNewItem.vue"

const routes = [
  { path: '/', component: MainContainer },
  { path: '/admin', component: Admin },
  { path: '/admin/addNewItem', component: AddNewItem },
  { path: '/itemdetails/:itemId',
    component: ItemDetails,
    name: 'itemdetails',
    props: true }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
