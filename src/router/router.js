import Main from "@/page/Main.vue";
import PostPage from "@/page/PostPage.vue";
import About from "@/page/About.vue";
import PostIdPage from "@/page/PostIdPage.vue";

import {createRouter, createWebHistory} from 'vue-router';

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/posts",
    component: PostPage,
  },
  {
    path: "/posts/:id",
    component: PostIdPage,
  },
  {
    path: "/about",
    component: About,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
});

export default router;