import Vue from 'vue';
import VueRouter from 'vue-router';
import AdminHome from '../views/admin/home.vue';
import ImageList from '../views/admin/imageManagement/imageList.vue';
import UserList from '../views/admin/userManagement/userList.vue';
import Blacklist from '../views/admin/userManagement/blacklist.vue';
import SystemSettings from '../views/admin/systemManagement/systemSettings.vue';
import UserInfo from '../views/admin/userManagement/userInfo.vue';
import UserLog from '../views/admin/userManagement/userLog.vue';
import MessageList from '../views/admin/messageManagement/messageList.vue';
import Welcome from '../views/admin/welcome.vue';

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'AdminHome',
    component: AdminHome
  },
  {
    path: '/test',
    name: 'test',
    // 懒加载
    component: () => import('../views/test/test.vue')
  }, {
    path: '/admin/welcome',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/admin/image_management/image_list',
    name: 'ImageList',
    component: ImageList
  },
  {
    path: '/admin/user_management/user_list',
    name: 'UserList',
    component: UserList
  },
  {
    path: '/admin/user_management/blacklist',
    name: 'Blacklist',
    component: Blacklist
  },
  {
    path: '/admin/system_management/system_settings',
    name: 'SystemSettings',
    component: SystemSettings
  },
  {
    path: '/admin/user_management/user_info',
    name: 'UserInfo',
    component: UserInfo
  }, {
    path: '/admin/user_management/user_log',
    name: 'UserLog',
    component: UserLog
  }, {
    path: '/admin/message_management/message_list',
    name: 'MessageList',
    component: MessageList
  }
]

const router = new VueRouter({
  routes
});

export default router;