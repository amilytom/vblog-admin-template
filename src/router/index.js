import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* sideRoutes config
* @meta
* icon: ''                      菜单图标(element-ui图标)
* login: false                  是否需要登录
* role: 'admin' || ['admin']    是否需要权限
* keep: false                   是否需要缓存
* open: false                   是否展开菜单
*/

// 要在侧边栏渲染的路由
export const sideRoutes = [
  {
    name: 'home',
    path: 'home',
    component: () => import('@/views/index/home'),
    meta: {
      icon: 'el-icon-my-home',
      title: '主页'
    }
  },
  {
    name: 'pageview',
    path: 'PageView',
    component: () => import('@/components/layout/pageView'),
    meta: {
      icon: 'el-icon-menu',
      title: '多级菜单',
      open: true
    },
    children: [
      {
        name: 'example',
        path: 'example',
        component: () => import('@/views/test/example'),
        meta: {
          icon: 'el-icon-my-ravelry',
          title: '示例'
        }
      },
      {
        name: 'table',
        path: 'table',
        component: () => import('@/views/test/table'),
        meta: {
          icon: 'el-icon-my-chart',
          title: '表格'
        }
      },
      {
        name: 'permission',
        path: 'permission',
        component: () => import('@/views/test/permission'),
        meta: {
          icon: 'el-icon-my-lock',
          title: '权限测试',
          role: 'admin'
        }
      }
    ]
  }
]

export const constantRoutes = [
  {
    path: '',
    redirect: '/index'
  },
  {
    name: 'index',
    path: '/index',
    component: () => import('@/views/index/index'),
    redirect: '/index/home',
    meta: {
      title: '首页',
      login: true
    },
    children: sideRoutes
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/login'),
  },
  {
    name: '401',
    path: '/401',
    component: () => import('@/components/error/page401'),
  },
  {
    name: '404',
    path: '/404',
    component: () => import('@/components/error/page404'),
  },
  {
    path: '*',
    redirect: '/404'
  }
]

export default new Router({
  mode: 'history',
  routes: constantRoutes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
