import Vue from 'vue'
import Router from 'vue-router'

import VueYouTubeEmbed from 'vue-youtube-embed'

Vue.use(Router)
Vue.use(VueYouTubeEmbed)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            alias: '/home',
            component: () => import('@/components/Home'),
            meta: {
                title: 'Home'
            }
        },
        {
            path: '/video/:id',
            name: 'video',
            component: () => import('@/components/Video'),
            meta: {
                title: 'View Video'
            } 
        },
        {
            path: '/category/:category',
            name: 'Category',
            component: () => import('@/components/Category'),
            props: true,
        },
    ],
    path: '*', // or '/index.html'
    beforeEnter: (to, from, next) => {
        next('/')
    }
})