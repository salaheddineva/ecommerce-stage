<script setup>
import { ref } from 'vue';

defineProps({
    label: {
        type: String,
        default: "Mot de passe :",
    },

    value: {
        type: String,
        required: true
    },
    inputType: {
        type: String,
        default: "text"
    },

    classname: {
        type: String
    },
})


const isFocused = ref(false);
const emits = defineEmits(['update:modelValue']);

const onInput = (e) => {
    emits('update:modelValue', e.target.value);
}
</script>
<template>
    <div class="flex flex-row h-[40px] px-3 py-[6px] items-center   rounded-[18px] border border-solid border-[#D1BCAB] bg-white"
        :class="classname">
        <label for="mdp" class="text-black  w-[40%]  font-[Raleway] text-[10px] " :class="{
            'text-[#c5ad99] font-[Raleway] text-[10px]  translate-y-[-55%] ': isFocused,
            ' text-black font-[Raleway] text - [13px]': !isFocused
        }">{{ label }}</label>
        <input :type="inputType" class="w-[60%] focus:outline-none text-[13px]" @focusin="() => isFocused = true"
            @focusout="() => isFocused = false" :value="value" @input="onInput" required />
    </div>
</template>