<script setup>
const props = defineProps({
    label: {
        type: String,
        default: "Mot de passe :",
    }
})

</script>
<template>
    <div
        class="flex flex-row w-[320px] h-[40px] px-3 py-[6px] items-center   rounded-[18px] border border-solid border-[#D1BCAB] bg-white">
        <label for="mdp" class="text-black    font-[Raleway] text-[13px] ">{{ label }}</label>
        <input type="password" id="mdp" class="w-[90px] focus:outline-none text-[13px]  " required />
    </div>
</template>