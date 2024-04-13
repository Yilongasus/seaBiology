<template>
    <div
        id="main"
        class="mt-4 p-5 bg-white position-sticky vh-100 zindex_2 text-white"
    >
        <div>註冊登入</div>
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
        <input type="text" v-model="watchVal.level.b"/>
    </div>
</template>
<script setup>
    import { ref, reactive, watch } from 'vue'
    let item = reactive({
            name:2,
            info: {
                age: 23
            }
        }),
        changItem = ref(0),
        data = reactive({
            a: 'apple',
            b: 'banana',
            c: 'candy'
        })

    // watch(item, watchItem => {
    //     console.log("reactive:", watchItem);
    // })

    let changeValue = () => {
        changItem.value > 2 ? item.info.age = 4 : item.info.age = 1
    },
    text = ref('哈囉')
    setTimeout(()=> {
        text.value = '歡迎來到水世界'
    }, 3000)

    let watchVal = ref({
        level: {
            a: 'apple',
            b: 'banana',
        }
    })

    watch([()=>watchVal.value.level.a, ()=>watchVal.value.level.b], (newVal, old) => {
        console.log(newVal, old);
    });
</script>
<style scoped>
    .shack {
        font-size: large;
        animation: change 1s ease-in-out;
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
    }
</style>