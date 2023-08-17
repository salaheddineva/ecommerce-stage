
import example from "@/router/example"
import publicRoutes from "@/router/publicRoutes"
import dashboardCustomerRoutes from "@/router/dashboardCustomerRoutes"
import dashboardAdminRoutes from "@/router/dashboardAdminRoutes"
import { createWebHistory, createRouter } from "vue-router";


const router = createRouter({
 history: createWebHistory(),
 routes: [
  ...publicRoutes,
  ...dashboardCustomerRoutes,
  ...dashboardAdminRoutes,
  ...example,
  { path: '/:notFound', name: 'not.found', component: () => import('@/pages/pageNotFound.vue') }],
})

export default router;