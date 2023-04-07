import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "setdata",
      path: "/p",
      component: () => import("../views/SetDataPage.vue"),
      children: [
        {
          name: "home",
          path: ":parkingToken",
          component: () => import("../views/SetDataPage.vue"),
        },
      ],
    },
    { path: "/:pathMatch(.*)*", redirect: "/" },
    {
      name: "paymentSteps",
      path: "/steps",
      component: () => import("../views/steps/Steps.vue"),
      children: [
        {
          name: "carSelect",
          path: "carSelect",
          component: () => import("../views/steps/CarSelectPage.vue"),
        },
        {
          name: "checkout",
          path: "checkout/:licensePlate",
          component: () => import("../views/steps/CheckoutPage.vue"),
        },
      ],
    },
    {
      name: "result",
      component: () => import("../views/PaymentResult.vue"),
      path: "/result",
    },
  ],
});

export default router;
