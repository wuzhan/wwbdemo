import Vue from 'vue'
import Router from 'vue-router'
import testState from '@/components/routertest/testState'
import aaa from '@/components/aaa'
import bbb from '@/components/bbb'
// import Test1 from '@/components/routertest/Test1'
// import Test2 from '@/components/routertest/Test2'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'testState',
    //   component: testState
    // }
    {
      path: '/',
      name: 'aaa',
      component: aaa
    },
    {
      path: '/bbb',
      name: 'bbb',
      component: bbb
    }
  ]
})
