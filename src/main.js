import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import router from './router'


const app = createApp(App);
app.use(VueAxios, axios);
app.use(store);

app.use(router);

app.mount('#app');
