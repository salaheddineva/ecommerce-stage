<script setup>
import ProductColor from '@/components/globals/ProductColor.vue';
defineProps({
    Src: {
        type: String
    },
    name: {
        type: String
    },
    price: {
        type: String
    }
})
</script>
<template>
    <router-link :to="{ name: 'detail-product' }">
        <div class=" flex-row  mx-20 ">
            <img :src="Src" alt="Image" class="border: rounded-[10px] rounded-b-none w-[294px] h-[285px] ">

            <div
                class="flex space-x-4  pt-4  bg-[#ECDAC3] border: rounded-[10px] rounded-t-none w-[294px] h-[65px]">
                <ProductColor color="#AC8756" />
                <h5>{{ name }}</h5>
                <h5 class=" px-20">{{ price }}</h5>
            </div>
        </div>
    </router-link>
</template>