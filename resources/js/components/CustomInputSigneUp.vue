<script setup>
const props = defineProps ({
    label: {
        type: String,
        default: 'Email :'
    }
})
</script>

<template>
    <div class="items-center ">
        <div class="flex flex-row w-[320px] h-[50px] px-3 py-[6px] items-center   rounded-[18px] border border-solid border-[#D1BCAB] bg-white">
            <label :for="label" class="text-black  font-[Raleway] text-[13px]">
                {{ label }}
            </label>
            <input type="email" :name="label" class=" focus:outline-none  text-#000 font-[Raleway] text-[13px] " />
        </div>
    </div>
</template>