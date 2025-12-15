import { createRouter, createWebHistory } from "vue-router";

import ProfilePage from "../pages/ProfilePage.vue";
import CartPage from "../pages/CartPage.vue";
import ProductsPage from "../pages/ProductsPage.vue";

const routes = [
  {
    path: "/",
    redirect: "/profile",
  },
  {
    path: "/profile",
    component: ProfilePage,
  },
  {
    path: "/cart",
    component: CartPage,
  },
  {
    path: "/products",
    component: ProductsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
