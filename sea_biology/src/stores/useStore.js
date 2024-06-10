import { defineStore } from 'pinia'
import { ref, reactive, computed } from 'vue'

export const useCounterStore = defineStore('counter', () => {
    // state
    const count = ref(0),
        name = ref('Pinia'),
        music = ref(false)

    // getters
    const doubleCount = computed(() => count.value * 2)

    // actions
    let increment = () => {
        name.value = 'Costo'
        count.value++
    }
    let double = () => count.value *= 2
    let audio = () => music.value = !music.value

    return {count, name, music, increment, double, audio, doubleCount}
});