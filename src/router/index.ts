import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    redirect: { name: 'ProductsList' }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/pages/Cart/CartView.vue')
  },
  {
    path: '/products',
    name: 'ProductsList',
    component: () => import('@/views/pages/ProductsList/ProductsListView.vue')
  },
  {
    path: '/products/:id',
    name: 'ProductDetail',
    component: () => import('@/views/pages/ProductDetail/ProductDetailView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
