import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";

// تعريف الروتينج لكل صفحة
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactView,
  },
];

// إنشاء الراوتر
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
