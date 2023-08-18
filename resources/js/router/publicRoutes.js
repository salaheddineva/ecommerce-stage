


import SignIn from "@/pages/SignIn.vue";
import SignUp from "@/pages/SignUp.vue";
import Acceuil from "@/pages/Acceuil.vue";
import AboutUs from "@/pages/AboutUs.vue";
import ContactUs from '@/pages/ContactUs.vue';
import OurProducts from '@/pages/OurProducts.vue';
import PublicLayout from "@/layouts/PublicLayout.vue"
const publicRoutes = [
 { path: '/auth/sign-in', name: 'sign-in', component: SignIn },
 { path: '/auth/sign-up', name: 'sign-up', component: SignUp },
 {
  path:'/',
  component: PublicLayout,
  children: [
   { path: '', name: 'acceuil', component: Acceuil },
  
   { path: '/', name: 'acceuil', component: Acceuil },
   { path: '/about-us', name: 'about-us', component: AboutUs },
   { path: '/contact-us', name: 'contact-us', component: ContactUs },
   { path: '/products', name: 'our-products', component: OurProducts }
  ]
 }
];

export default publicRoutes;