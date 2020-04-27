import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Single from '@/components/Single'
import Category from '@/components/Category'
import User from '@/components/User'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
			alias: '/home',
      component: Home,
			meta: {
				title: 'Home'
			}
    },
		{
      path: '/single',
      name: 'Single',
      component: Single,
			meta: {
				title: 'View Image'
			}
    },
		{
      path: '/category',
      name: 'Category',
      component: Category,
			meta: {
				title: 'Dog Images'
			}
    },
		{
      path: '/user',
      name: 'User',
      component: User,
			meta: {
				title: 'User X_MDS_SLAYER_X'
			}
    }
  ],
  path: '*', // or '/index.html'
  beforeEnter: (to, from, next) => {
    next('/')
  }
})