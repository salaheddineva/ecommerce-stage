
import ProductList from "@/pages/dashboard/admin/product/ProductList.vue";
import Dashboard from "@/pages/dashboard/admin/Dashboard.vue";
import DashboardAdminLayout from "@/layouts/DashboardAdminLayout.vue"
const dashboardAdminRoutes = [
 {
  path:'/admin',
  component: DashboardAdminLayout,
  children: [
   { path: '', name: 'admin-dashboard', component: Dashboard },
   { path: 'products', name: 'admin-product-list', component: ProductList },
  ]
 }
];

export default dashboardAdminRoutes;