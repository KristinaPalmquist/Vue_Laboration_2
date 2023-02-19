import { createRouter, createWebHistory } from "../../node_modules/vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectView from "../views/ProjectView.vue";
import ImagesView from "../views/ImagesView.vue";
import OtherView from "../views/OtherView.vue";
import UserView from "../views/UserView.vue";

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
      path: "/images",
      name: "Images",
      component: ImagesView,
    },
    {
      path: "/other",
      name: "Other",
      component: OtherView,
    },
    {
      path: "/other/:userName",
      name: "User",
      component: UserView,
    },
  ],
});

export default router;
