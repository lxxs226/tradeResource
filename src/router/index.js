import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import userIndex from '../views/userManage/userIndex.vue'
import userEdit from '../views/userManage/userEdit.vue'
import userInformation from '../views/userManage/userInformation.vue'
import taskHall from '../views/taskInformation/taskHall.vue'
import companyTaskManage from '../views/taskManage/companyTaskManage.vue'
import publishTask from '../views/taskManage/publishTask.vue'
import userTaskManage from '../views/taskManage/userTaskManage.vue'
import companyArticle from '../views/articleManage/companyArticle.vue'
import login from '../views/log/login.vue'
import accountDetail from '../views/userManage/accountDetail.vue'
import taskDetail from '../views/taskInformation/taskDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/userEdit',
    name: 'userEdit',
    component: userEdit,
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/userInformation',
    name: 'userInformation',
    component: userInformation,
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/userIndex',
    name: 'userIndex',
    component: userIndex,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/taskHall',
    name: 'taskHall',
    component: taskHall,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/companyTaskManage',
    name: 'companyTaskManage',
    component: companyTaskManage,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/publishTask',
    name: 'publishTask',
    component: publishTask,
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/userTaskManage',
    name: 'userTaskManage',
    component: userTaskManage,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/companyArticle',
    name: 'companyArticle',
    component: companyArticle,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/taskDetail',
    name: 'taskDetail',
    component: taskDetail
  },
  {
    path: '/accountDetail',
    name: 'accountDetail',
    component: accountDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
