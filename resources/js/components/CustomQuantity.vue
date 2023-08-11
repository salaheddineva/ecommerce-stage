<script setup>
import { reactive } from 'vue';
const counter = reactive({
    count: 0
});
const increase = () => {
    counter.count++
};
const decrease = () => {
    if (counter.count > 0) {
        counter.count--
    }
    counter.count
};
</script>
<template>
    <div>
        <div class=" flex items-center border border-black h-[50px] w-[160px] mt-2 mr-4 rounded-lg p-2  ">
            <button class="w-[20%] text-center text-[27px]" @click="decrease">-</button>
            <span class="text-[27px] text-center font-[Raleway] w-[80%]">{{ counter.count }}</span>
            <button class="w-[20%] text-center text-[27px]" @click="increase">+</button>
        </div>
    </div>
</template>