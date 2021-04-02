import { createRouter, createWebHistory } from "vue-router";
import MainContainer from "../components/view/MainContainer.vue"
import ItemDetails from "../components/model/ItemDetails.vue"

const routes = [
  { path: '/', component: MainContainer },
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
