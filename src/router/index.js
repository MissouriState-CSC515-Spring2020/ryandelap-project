import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Video from '@/components/Video'
import Category from '@/components/Category'
import VueYouTubeEmbed from 'vue-youtube-embed'

Vue.use(Router)
Vue.use(VueYouTubeEmbed)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            alias: '/home',
            component: Home,
            meta: {
                title: 'Home'
            }
        },
        {
            path: '/video/:id',
            name: 'video',
            component: Video,
            meta: {
                title: 'View Video'
            } 
        },
        {
            path: '/category/:category',
            name: 'Category',
            component: Category,
            props: true,
        },
    ],
    path: '*', // or '/index.html'
    beforeEnter: (to, from, next) => {
        next('/')
    }
})