import { createRouter, createWebHistory } from "../../node_modules/vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectView from "../views/ProjectView.vue";
import ProjectDetailsView from "../views/ProjectDetailsView.vue";
import OtherView from "../views/OtherView.vue";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/projects",
      name: "Projects",
      component: ProjectView,
    },
    {
      path: "/details",
      name: "Details",
      component: ProjectDetailsView,
    },
    {
      path: "/other",
      name: "Other",
      component: OtherView,
    },
  ],
});

export default router;
