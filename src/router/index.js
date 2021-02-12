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
  },
  {
    path: "/admin/manage_category",
    name: "ManageCategory",
    // 懒加载
    component: () => import("../views/admin/example/ManageCategory.vue")
  },
  {
    path: "/admin/system_settings",
    name: "SystemSettings",
    // 懒加载
    component: () => import("../views/admin/example/SystemSettings.vue")
  },
  {
    path: "/login",
    name: "Login",
    // 懒加载
    component: () => import("../views/admin/example/Login.vue")
  },
  {
    path: "/admin/user_info",
    name: "UserInfo",
    // 懒加载
    component: () => import("../views/admin/example/UserInfo.vue")
  },
  {
    path: "/admin/operation_log",
    name: "OperationLog",
    // 懒加载
    component: () => import("../views/admin/example/OperationLog.vue")
  },
  {
    path: "/admin/message_list",
    name: "MessageList",
    // 懒加载
    component: () => import("../views/admin/example/MessageList.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router