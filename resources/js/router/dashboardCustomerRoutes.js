
import Profile from "@/pages/Profile.vue";
import Payment from "@/pages/Payment.vue";
import Cart from "@/pages/order/Cart.vue";
import Order from "@/pages/order/Order.vue";
import DetailProduct from "@/pages/DetailProduct.vue";


const dashboardCustomerRoutes = [
    { path: '/profile', name: 'profile', component: Profile },
    { path: '/payment', name: 'payment', component: Payment },
    { path: '/cart', name: 'cart', component: Cart },
    { path: '/order', name: 'order', component: Order },
    { path: '/detail-product', name: 'detail-product', component: DetailProduct },
 
];

export default dashboardCustomerRoutes;