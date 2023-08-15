import './bootstrap';

import { createApp } from 'vue'
import VueAxios from "vue-axios";
import App from './App.vue'
import router from '@/router'

// Import axios
import axios from "./axios";

const app = createApp(App)
.use(router)
.use(VueAxios, axios);

app.mount("#app")