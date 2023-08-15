import './bootstrap';

import { createApp } from 'vue'
import VueAxios from "vue-axios";
import App from './App.vue'
import router from '@/router'
import axios from "./axios";
import { createPinia } from 'pinia'


const pinia = createPinia()



const app = createApp(App)
.use(pinia)
.use(router)
.use(VueAxios, axios);

app.mount("#app")