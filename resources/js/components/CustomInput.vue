<script setup>
const props = defineProps({
    label: {
        type: String,
        default: "Nom"
    },
    value: {
        type: String,
        default: ''
    }
})
import { ref } from 'vue';

const isFocused = ref('');
</script>
<template>
    <div class="items-center ">
        <div class="w-[340px] h-[40px] px-4 py-[6px] rounded-[18px] border border-solid border-[#D1BCAB]">
            <label :for="label" class="text-black  font-[Raleway] text-[13px]" :class="{
                'text-blue-400 font-[Raleway] text-[10px]  translate-y-[-100%] translate-x-[-20%]': isFocused,
                ' text-black font-[Raleway] text - [13px]': !isFocused
            }">
                {{ label }}
            </label>
            <input type="text" :name="label" @focusin="(isFocused = !isFocused)" @focusout="(isFocused = !isFocused)"
                :value="value" @input="$emit('update:value', isFocused)" class=" focus:outline-none  text-#000 font-[Raleway] text-[13px] " />
        </div>
    </div>
</template>
