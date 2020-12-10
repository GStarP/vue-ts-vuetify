import { RouteConfig } from "vue-router";

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue")
  }
];

export default routes;
