import { defineStore } from 'pinia'
import { ref, reactive, computed } from 'vue'

export const useCounterStore = defineStore('counter', () => {
    // state
    const count = ref(0),
        name = ref('Pinia')

    // getters
    const doubleCount = computed(() => count.value * 2)

    // actions
    let increment = () => count.value++
    let double = () => count.value *= 2

    return {count, name, increment, double}
});