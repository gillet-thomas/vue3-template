import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue";
import Page from "../components/Page.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/page", component: Page },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
