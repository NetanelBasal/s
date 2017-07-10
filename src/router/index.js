import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/pages/dashboard'
import ThreatMangament from '@/pages/threat-managment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: { template: '<div>Home</div>' }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/threat-managment',
      name: 'threat-managment',
      component: ThreatMangament
    }
  ]
})
