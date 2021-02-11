import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminHome from '../views/admin/Home.vue'
import AdminWelcome from '../views/admin/example/Welcome.vue';

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: AdminHome
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminHome
  },
  {
    path: '/admin/welcome',
    name: 'AdminWelcome',
    component: AdminWelcome
  },
  {
    path: "/admin/manage_images",
    name: "ManageImages",
    // 懒加载
    component: () => import("../views/admin/example/ManageImages.vue")
  },
  {
    path: "/admin/manage_articles",
    name: "ManageArticles",
    // 懒加载
    component: () => import("../views/admin/example/ManageArticles.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router