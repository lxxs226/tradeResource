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
import articleContent from '../views/articleManage/articleContent.vue'
import articleDetail from '../views/articleManage/articleDetail.vue'
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
  //首页
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    meta: {
      keepAlive: true
    }
  },
  //用户个人资料（可修改）
  {
    path: '/userEdit',
    name: 'userEdit',
    component: userEdit,
    meta: {
      keepAlive: false
    }
  },
  //查看他人资料
  {
    path: '/userInformation',
    name: 'userInformation',
    component: userInformation,
    meta: {
      keepAlive: false
    }
  },
  //我的
  {
    path: '/userIndex',
    name: 'userIndex',
    component: userIndex,
    meta: {
      keepAlive: true
    }
  },
  //任务大厅
  {
    path: '/taskHall',
    name: 'taskHall',
    component: taskHall,
    meta: {
      keepAlive: true
    }
  },
  //发布方任务管理
  {
    path: '/companyTaskManage',
    name: 'companyTaskManage',
    component: companyTaskManage,
    meta: {
      keepAlive: true
    }
  },
  //发布任务
  {
    path: '/publishTask',
    name: 'publishTask',
    component: publishTask,
    meta: {
      keepAlive: false
    }
  },
  //接单方任务管理
  {
    path: '/userTaskManage',
    name: 'userTaskManage',
    component: userTaskManage,
    meta: {
      keepAlive: true
    }
  },
  //发布方文稿管理
  {
    path: '/companyArticle',
    name: 'companyArticle',
    component: companyArticle,
    meta: {
      keepAlive: true
    }
  },
  //登录
  {
    path: '/login',
    name: 'login',
    component: login
  },
  //任务详情
  {
    path: '/taskDetail',
    name: 'taskDetail',
    component: taskDetail
  },
  //账户金额
  {
    path: '/accountDetail',
    name: 'accountDetail',
    component: accountDetail
  },
  //编辑文稿页面
  {
    path: '/articleContent',
    name: 'articleContent',
    component: articleContent
  },
  //文稿情况页面
  {
    path: '/articleDetail',
    name: 'articleDetail',
    component: articleDetail
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
