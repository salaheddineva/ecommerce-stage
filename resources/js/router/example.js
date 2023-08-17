
import ProductList from "@/pages/example/list.vue"
import AddNewProduct from "@/pages/example/create.vue"
import UpdateProduct from "@/pages/example/update.vue"
import ShowDetailsProduct from "@/pages/example/show.vue"
const example = [
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
 
];



export default example;