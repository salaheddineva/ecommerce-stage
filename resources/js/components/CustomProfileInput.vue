<script setup>
const props = defineProps ({
    label: {
        type: String,
        default: 'Nom'
    }
})
</script>
<template>
    <div class="mt-4 flex w-[50%] items-center justify-between rounded-[18px] border border-[#C4AB8A] px-[23px] py-[18px]">
        <label for="last-name" class="text-4 w-[25%] text-[#C4AB8A] font-['Open_Sans']">{{ label }}</label>
        <input type="text" id="last-name" value="john" class="w-1/2 text-center text-[20px] focus:outline-none" />
        <div class="flex w-[25%] cursor-pointer items-center justify-end space-x-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" @click="oninput" >
                <path
                    d="M5 19H6.4L15.025 10.375L13.625 8.975L5 17.6V19ZM19.3 8.925L15.05 4.725L16.45 3.325C16.8333 2.94167 17.3043 2.75 17.863 2.75C18.4217 2.75 18.8923 2.94167 19.275 3.325L20.675 4.725C21.0583 5.10833 21.2583 5.571 21.275 6.113C21.2917 6.655 21.1083 7.11733 20.725 7.5L19.3 8.925ZM17.85 10.4L7.25 21H3V16.75L13.6 6.15L17.85 10.4ZM14.325 9.675L13.625 8.975L15.025 10.375L14.325 9.675Z"
                    fill="#C4AB8A" />
            </svg>
            <span class="text-sm text-[#C4AB8A]">Editer</span>
        </div>
    </div>
</template>