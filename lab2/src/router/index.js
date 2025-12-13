import { createRouter, createWebHistory } from "vue-router";
import { auth } from "../store/auth";

const router = createRouter({
  history: createWebHistory(),

  linkActiveClass: "active-link",

  scrollBehavior() {
    return { top: 0 };
  },

  routes: [
    {
      path: "/",
      redirect: "/login",
      meta: { public: true },
    },
    {
      path: "/login",
      component: () => import("../pages/LoginPage.vue"),
      meta: { public: true },
    },
    {
      path: "/register",
      component: () => import("../pages/RegisterPage.vue"),
      meta: { public: true },
    },

    {
      path: "/admin",
      component: () => import("../layouts/AdminLayout.vue"),
      meta: { requiresAuth: true },
      children: [
        {
          path: "dashboard",
          component: () => import("../pages/DashboardPage.vue"),
        },
        {
          path: "users",
          component: () => import("../pages/UsersPage.vue"),
        },
        {
          path: "user/:id",
          component: () => import("../pages/UserDetailsPage.vue"),
        },
        {
          path: "reports",
          component: () => import("../pages/ReportsPage.vue"),
        },
      ],
    },

    {
      path: "/:pathMatch(.*)*",
      component: () => import("../pages/NotFound.vue"),
    },
  ],
});

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !auth.isAuth.value) {
    return "/login";
  }
});

export default router;
