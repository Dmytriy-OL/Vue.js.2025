import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active-link",
  scrollBehavior() {
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../pages/HomePage.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../pages/AboutPage.vue"),
    },
    {
      path: "/article/:id",
      name: "article",
      component: () => import("../pages/ArticlePage.vue"),
      props: true,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: () => import("../pages/NotFound.vue"),
    },
  ],
});

export default router;
