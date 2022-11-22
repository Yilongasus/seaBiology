import { createWebHistory, createRouter } from 'vue-router';

// import App from '@/App'
import TheLogin from '@/components/TheLogin'

const history = createWebHistory();
const router = createRouter({
    history, routes:[
        {
            path: '/',
            // component: App,
            name: 'App',  
            meta: {title: '展館'}                                  
        },        
        {
            path: '/TheLogin',
            component: TheLogin,
            name: 'TheLogin',            
            meta: {title: '線上預約'}                          
        },
    ]
})

export default router;