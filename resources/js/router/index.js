
import ProductList from "@/pages/product/list.vue"
import Home from "@/pages/home.vue"
import { createWebHistory, createRouter } from "vue-router";
const routes = [
 {  path: '/',name: 'home', component: Home },
 {  path: '/products/list',name: 'product.list', component: ProductList },
];

const router = createRouter({
 history: createWebHistory(),
 routes,
})

export default router;