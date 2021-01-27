import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import userIndex from '../views/userManage/userIndex.vue'
import taskHall from '../views/taskInformation/taskHall.vue'
import companyTaskManage from '../views/taskManage/companyTaskManage.vue'
import userTaskManage from '../views/taskManage/userTaskManage.vue'
import companyArticle from '../views/articleManage/companyArticle.vue'
import login from '../views/log/login.vue'

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
    path: '/userIndex',
    name: 'userIndex',
    component: userIndex,
    meta: {
      keepAlive: true
    }
  },{
    path: '/taskHall',
    name: 'taskHall',
    component: taskHall,
    meta: {
      keepAlive: true
    }
  },{
    path: '/companyTaskManage',
    name: 'companyTaskManage',
    component: companyTaskManage,
    meta: {
      keepAlive: true
    }
  },{
    path: '/userTaskManage',
    name: 'userTaskManage',
    component: userTaskManage,
    meta: {
      keepAlive: true
    }
  },{
    path: '/companyArticle',
    name: 'companyArticle',
    component: companyArticle,
    meta: {
      keepAlive: true
    }
  },{
    path: '/login',
    name: 'login',
    component: login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
