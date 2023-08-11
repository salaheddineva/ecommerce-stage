<script setup>
const props = defineProps({
    detail: {
        type: Object
    }
});
</script>
<template>
    <div>
        <div class="mx-[8rem] mt-3 flex w-[80%]  items-center px-4">
            <p class="font-[Raleway]  text-base w-[18%]">{{ detail.createdAt }}</p>
            <p class="font-[Raleway]  text-center text-base w-[50%] ">{{ detail.adresse }}</p>
            <div class="flex items-center   w-[15%] justify-center space-x-2">
                <p class="font-[Raleway] text-base ">{{ detail.status }}</p>
                <img :src="detail.statusIcon" alt="">
            </div>
            <p class="font-[Raleway] text-base   w-[15%]">{{ detail.paymentAt }}</p>
        </div>
    </div>
</template>