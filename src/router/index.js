import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '@/components/AppHome.vue'
import AppMenu from '@/components/AppMenu.vue'
import AppAbout from '@/components/AppAbout.vue'
import AppSignIn from '@/components/AppSignIn.vue'
// import SignUp from '@/components/AppSignUp.vue'
import AppContent from '@/components/AppContent.vue'
import AppDashboard from '@/components/AppDashboard.vue'
import DashboardContent from '@/components/DashboardContent.vue'
import DashboardMenu from '@/components/DashboardMenu.vue'
import DashboardTypography from '@/components/DashboardTypography.vue'

import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: AppHome
    },
    {
      path: '/menu',
      name: 'Menu',
      component: AppMenu
    },
    {
      path: '/about',
      name: 'About',
      component: AppAbout
    },
    {
      path: '/content',
      name: 'Content',
      component: AppContent,
      beforeEnter: AuthGuard
    },
    // {
    //   path: '/signup',
    //   name: 'SignUp',
    //   component: SignUp
    // },
    {
      path: '/signin',
      name: 'SignIn',
      component: AppSignIn
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: AppDashboard,
      beforeEnter: AuthGuard,
      children: [
        {
          path: 'content',
          component: DashboardContent
        },
        {
          path: 'menu',
          component: DashboardMenu
        },
        {
          path: 'typography',
          component: DashboardTypography
        }
      ]
    }
  ],
  mode: 'history'
})
