import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/dashboard',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/Products.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/Orders.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/Coupons.vue')
      }
    ]
  },
  {
    path: '/loop',
    component: () => import('../views/Userboard.vue')
  },
  {
    path: '/contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/skateboards',
    component: () => import('../views/Skateboards.vue'),
    children: []
  },
  {
    path: '/shortboard',
    component: () => import('../views/Shortboard.vue')
  },
  {
    path: '/longboard',
    component: () => import('../views/Longboard.vue')
  },
  {
    path: '/cruiser',
    component: () => import('../views/Cruiser.vue')
  },
  {
    path: '/sale',
    component: () => import('../views/Sale.vue')
  },
  {
    path: '/cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/order',
    component: () => import('../views/Order.vue')
  },
  {
    path: '/:productId',
    component: () => import('../views/UserItem.vue')
  },
  {
    path: '/usercart',
    component: () => import('../views/UserCart.vue')
  },
  {
    path: '/usercheckout/:orderId',
    component: () => import('../views/UserCheckout.vue')
  },
  {
    path: '/checkout/:orderId',
    component: () => import('../views/Checkout.vue')
  },
  {
    path: '/product',
    component: () => import('../views/UserProduct.vue')
  },
  {
    path: '/newpage/:id',
    component: () => import('../views/NewPage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
