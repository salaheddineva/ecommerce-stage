
import ProductList from "@/pages/product/list.vue"
import AddNewProduct from "@/pages/product/create.vue"
import UpdateProduct from "@/pages/product/update.vue"
import ShowDetailsProduct from "@/pages/product/show.vue"
import Home from "@/pages/home.vue"
const routes = [
 { path: '/', name: 'home', component: Home },
 {
  path: '/products',
  name: 'product',
  children: [
   { path: 'list', name: 'product.list', component: ProductList },
   { path: ':uuid/details', name: 'product.show.details', component: ShowDetailsProduct, props: true },
   { path: ':id/update', name: 'product.update', component: UpdateProduct },
   { path: 'create', name: 'product.create', component: AddNewProduct },

  ],
 },
 { path: '/:notFound', name: 'not.found', component: () => import('@/pages/pageNotFound.vue') }
];



export default routes;