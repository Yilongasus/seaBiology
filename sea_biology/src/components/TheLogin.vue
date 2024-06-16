<template>
    <div
        class="position-sticky vh-100 zindex_2"
    >
    <div class="d-flex flex-column flex-lg-row h-100 loginAll">
        <div class="flex-fill mh-100 py-5 mt-sm-5 mt-0 align-items-center">
            <img class="loginImg" :src="loginImg" alt="登入圖">
        </div>
        <div class="p-2 mh-100 flex-fill border bg-white">

            <!-- ---pinia示範 Start--- -->
            <!-- <button type="button" class="btn btn-light border me-2" @click="counterStore.increment">新增數量</button>
            <button type="button" class="btn btn-outline-secondary border" @click="counterStore.double">雙倍數量</button>
            <h1>{{ counterStore.count }}</h1>
            <h1>{{ counterStore.name }}</h1> -->
            <!-- ---End--- -->

            <div 
            class="
                d-flex
                align-self-center
                flex-column
                pt-5
                sm:mx-2
                mx-5
                mt-5
                text-center
            ">
                <div class="loginTitle pt-5 mb-2 fw-bold">預約註冊</div>
                <div>
                    <p>歡迎使用官網線上預約，請先
                        <span class="text-primary">G</span>
                        <span class="text-danger">o</span>
                        <span class="text-warning">o</span>
                        <span class="text-primary">g</span>
                        <span class="text-success">l</span>
                        <span class="text-danger">e</span>
                        註冊再進行預約！</p>
                </div>
                <div class="my-3 d-flex justify-content-center">
                    <div id="g_id_onload"
                        data-client_id="977111883266-qiol7u2pjo83gf0qh7u8n1qgakp6b8m3.apps.googleusercontent.com"
                        data-context="use"
                        data-ux_mode="popup"
                        
                        data-auto_prompt="false">
                    </div>
                    <!-- data-login_uri="https://localhost:5173/TheLogin" -->
                    <div class="g_id_signin"
                        data-type="standard"
                        data-shape="rectangular"
                        data-theme="outline"
                        data-text="signup_with"
                        data-size="large"
                        data-logo_alignment="left"
                        data-width="400">
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <div class="tipGray">
                        <p class="m-0">
                            已有帳號了？<span class="text-primary fw-bold pe-auto">在此登入</span>
                        </p>
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <div class="privacyContent">
                        <span>隱私權政策</span>&nbsp;|&nbsp;<span>服務條款聲明</span>
                    </div>
                </div>
            </div>

        </div>
    </div>

        <!-- 
        <input type="text" v-model="changItem" @change="changeValue"/>
        <p class="text-white">
        {{ item }}
        </p>

        <div v-for="(value, key, index) in data" :key="index">
            <p>索引 {{ index }}</p>
            <p>key {{ key }}</p>
            <p>value {{ value }}</p>
        </div>
        <input type="text" v-model="watchVal.level.a"/>
        <input type="text" v-model="watchVal.level.b"/> -->
    </div>
</template>
<script setup>
    import { ref, reactive, watch, onMounted } from 'vue'
    import loginImg from '/src/assets/login.png'
    import { useCounterStore } from '@/stores/useStore'
    import { storeToRefs } from 'pinia'
    const counterStore = useCounterStore()
    const { doubleCount } = storeToRefs(counterStore)
    // let item = reactive({
    //         name:2,
    //         info: {
    //             age: 23
    //         }
    //     }),
    //     changItem = ref(0),
    //     data = reactive({
    //         a: 'apple',
    //         b: 'banana',
    //         c: 'candy'
    //     })

    // watch(item, watchItem => {
    //     console.log("reactive:", watchItem);
    // })

    // let changeValue = () => {
        // changItem.value > 2 ? item.info.age = 4 : item.info.age = 1
    // },
    // text = ref('哈囉')
    // setTimeout(()=> {
    //     text.value = '歡迎來到水世界'
    // }, 3000)

    // let watchVal = ref({
    //     level: {
    //         a: 'apple',
    //         b: 'banana',
    //     }
    // })

    // watch([()=>watchVal.value.level.a, ()=>watchVal.value.level.b], (newVal, old) => {
    //     console.log(newVal, old);
    // });

    function decodeJwtResponse(token) {
        const parts = token.split('.'),
        payload = parts[1],
        decodedPayload = JSON.parse(atob(payload));
        return decodedPayload;
    }

    function handleCredentialResponse(response) {
        const responsePayload = decodeJwtResponse(response.credential);
        localStorage.setItem("userInfo", responsePayload);
        console.log(`
            照片 ${ responsePayload.picture }
            全名 ${ responsePayload.name }
            姓氏 ${ responsePayload.family_name }
            名字 ${ responsePayload.given_name }
            信箱 ${ responsePayload.email }
            發行者 ${ responsePayload.iss }
        `);
    }

    const loadGoogleSignIn = () => {
        if (!document.getElementById('google-signin-script')) {
            const script = document.createElement('script');
            script.id = 'google-signin-script';
            script.src = 'https://accounts.google.com/gsi/client';
            script.onload = initializeGoogleSignIn;
            document.head.appendChild(script);
        } else {
            initializeGoogleSignIn();
        }
    };

    const initializeGoogleSignIn = () => {
        if (window.google) {
            window.google.accounts.id.initialize({
            client_id: "977111883266-qiol7u2pjo83gf0qh7u8n1qgakp6b8m3.apps.googleusercontent.com",
            callback: handleCredentialResponse,
            });
            window.google.accounts.id.renderButton(
            document.getElementById("g_id_signin"),
            {
                theme: "outline",
                size: "large",
            }
            );
            window.google.accounts.id.prompt();
        }
    };

    onMounted(() => {
        loadGoogleSignIn();
    });
</script>
<style scoped>
    .shack {
        font-size: large;
        animation: change 1s ease-in-out;
    }
    .loginAll {
        background: linear-gradient(to right, #6B5264 20%, #154166 45%);
    }
    .loginImg {
        /* background:url("/src/assets/login.png")center center no-repeat;  */
        height: 500px;
    }
    .loginTitle {
        color: #4B4845;
        font-size: 24px;
        text-align: center;
    }
    .privacyContent {
        color:#898580;
        font-size: 14px;
        text-align: left;
        padding-top: 0.5rem;
        width: 400px;
        max-width: 400px;
        min-width: min-content;
    }
    @keyframes change {
        0% {
            opacity: 0;
            transform: translateY(20px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
    #articleWidth {
        width: 25%;
    }
    @media screen and (max-width:768px) {
        #articleWidth {
        width: 100%;
        }
        .loginImg {
            width: 100%;
        }
    }
</style>