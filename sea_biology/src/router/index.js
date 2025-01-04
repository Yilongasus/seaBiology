import { createWebHistory, createRouter } from 'vue-router';

// import App from '@/App'
import TheIndex from '@/views/TheIndex.vue'
import TheLogin from '@/views/TheLogin.vue'
import TheExhibition from '@/views/TheExhibition.vue'
import TheNews from '@/views/TheNews.vue'
import NotFound from '@/views/404.vue';

const history = createWebHistory(import.meta.env.BASE_URL);

const router = createRouter({
    history, routes:[
        {
            path: '/',
            component: TheIndex,
            name: 'TheIndex',  
            meta: {title: '首頁'}
        },
        // /TheLogin/:id/:another
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
            meta: {title: '展館介紹'}
        },   
        {
            path: '/TheNews',
            component: TheNews,
            name: 'TheNews',
            meta: {title: '展館消息'}
        }, 
        {
            path: '/:pathMatch(.*)*', // 匹配所有未定義的路徑
            component: NotFound,
            name: 'NotFound',
            meta: { title: '404 - 頁面找不到' },
        },            
    ]
})

// 全局導航守衛：自動設定頁面標題
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || '屏東海生館';
    next();
});

export default router;