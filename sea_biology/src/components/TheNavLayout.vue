<template>

    <nav class="bg-gray-800">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-14">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">

            <button id="menu-button" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" v-on:click="menuToggle">
                <span class="sr-only">Open main menu</span>

                <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>

                <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            </div>
            <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div class="hidden sm:block sm:ml-6">
                <div class="flex space-x-4 items-center">

                <router-link class="text-xl text-white pr-2 font-semibold" to="/theMain">
                <img class="w-14" src="../static/seoLogo.png" alt="Logo圖片">
                </router-link>

                <li class="nav-item px-2 list-none">
                <router-link class="a text-md" to="/theMain">首頁</router-link>
                </li> 

                <li class="nav-item px-2 list-none">
                <router-link class="a text-md" to="/memberUpdate">會員資料</router-link>
                </li>
                
                <li class="nav-item px-2 list-none">
                <router-link class="a text-md" to="/defaultRegister">免費申請</router-link>  
                </li>

                <!-- <li class="nav-item px-2 list-none">
                <router-link class="a text-md" to="/canvasRect">線條特效</router-link>
                </li> -->

                <li class="nav-item px-2 list-none">
                <router-link  class="a text-md" to="/">登入</router-link>
                </li>

                <li class="list-none text-center hover:bg-gray-700" id="lineOut">
                <button type="button" class="inline-block px-5 py-2 bg-green-600 text-white font-medium text-base leading-snug rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-500 active:shadow-lg transition duration-150 ease-in-out" v-on:click="lineOut">
                    LINE 登出
                </button>        
                </li>          

                </div>
            </div>
            </div>
        </div>
        </div>

        <div class="sm:hidden" id="mobile-menu"> 
        <div class="px-2 pt-2 pb-3 space-y-1 items-center" data-aos="fade-down">

            <li class="px-2 list-none text-center hover:bg-gray-700">
            <router-link class="a text-md" to="/theMain">首頁</router-link>
            </li> 

            <li class="px-2 list-none text-center hover:bg-gray-700">
            <router-link class="a text-md" to="/memberUpdate">會員資料</router-link>  
            </li>

            <li class="px-2 list-none text-center hover:bg-gray-700">
            <router-link class="a text-md" to="/defaultRegister">免費申請</router-link>  
            </li>

            <li class="px-2 list-none text-center hover:bg-gray-700">
            <router-link  class="a text-md" to="/">登入</router-link>
            </li>


            <!-- <li class="px-2 list-none text-center hover:bg-gray-700">
            <router-link class="a text-md" to="/canvasRect">線條特效</router-link>
            </li>       -->

            <li class="list-none text-center hover:bg-gray-700" id="lineOut">
            <button type="button" class="inline-block px-5 py-2 bg-green-600 text-white font-medium text-base leading-snug rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-500 active:shadow-lg transition duration-150 ease-in-out" v-on:click="lineOut()">
                LINE 登出
            </button>        
            </li>      

        </div>
        </div>
    </nav> 

    <router-view></router-view>
</template>
    
<script scoped>
/*eslint-disable*/

export default {
    
    name: 'TheNavLayout',
    methods: {
    // 下拉menu
    menuToggle() {
        const menu = document.querySelector('#mobile-menu'); // rwd下的Menu
        menu.classList.toggle('hidden');
    }
    },
    setup() {           

    
    }

}


</script>

<style scoped>

</style>