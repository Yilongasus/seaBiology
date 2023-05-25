import { createWebHistory, createRouter } from 'vue-router';

// import App from '@/App'
import TheLogin from '@/components/TheLogin.vue'
import TheExhibition from '@/components/TheExhibition.vue'
import TheNews from '@/components/TheNews.vue'

const history = createWebHistory();
const router = createRouter({
    history, routes:[
        {
            path: '/',
            // component: App,
            name: 'App',  
            meta: {title: '首頁'}                                  
        },        
        {
            path: '/TheLogin',
            component: TheLogin,
            name: 'TheLogin',
            meta: {title: '線上預約'}
        },
        {
            path: '/TheExhibition',
            component: TheExhibition,
            name: 'TheExhibition',
            meta: {title: '展館'}
        },   
        {
            path: '/TheNews',
            component: TheNews,
            name: 'TheNews',
            meta: {title: '展館消息'}
        },             
    ]
})

export default router;