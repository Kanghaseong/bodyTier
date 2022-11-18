import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BitView from "../views/BitView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/bit",
    name: "BitView",
    component: BitView,
    // route level code-splitting
    // this generates a separate chunk (bitView.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "bitView", webpackPrefetch:true */ "../views/BitView.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
