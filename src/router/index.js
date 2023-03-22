import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: "setdata",
      path: "/home",
      component: () => import("../views/SetDataPage.vue"),
      children: [
        {
          name: "home",
          path: "",
          component: () => import("../views/SetDataPage.vue"),
        },
      ],
    },
    { path: "/:pathMatch(.*)*", redirect: "/home" },
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
