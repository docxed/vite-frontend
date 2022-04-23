import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/create",
    name: "Create",
    component: () => import("../views/Create.vue"),
  },
  {
    path: "/retrieve",
    name: "Retrieve",
    component: () => import("../views/Retrieve.vue"),
  },
  {
    path: "/update",
    name: "Update",
    component: () => import("../views/Update.vue"),
  },
  {
    path: "/delete",
    name: "Delete",
    component: () => import("../views/Delete.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
