import { createRouter, createWebHistory } from "vue-router";
// import MaasServices from "@/views/MaasServices.vue";
// import AvailableHours from "@/views/AvailabeHours.vue";
// import EngineerShifts from "@/views/EngineerShifts.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/services",
      name: "maasservices",
      component: () => import("@/views/MaasServices.vue"),
    },
    {
      path: "/available_hours",
      name: "availablehours",
      component: () => import("@/views/AvailabeHours.vue"),
    },

    {
      path: "/shifts",
      name: "engineershifts",
      component: () => import("@/views/EngineerShifts.vue"),
    },
  ],
});

export default router;
