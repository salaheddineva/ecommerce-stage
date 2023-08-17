<script setup>
// import CustomQuantity from './CustomQuantity.vue';
import ProductColor from '@/components/globals/ProductColor.vue';
defineProps({
    product: {
        type: Object
    }
})
const emits = defineEmits(['deleteItem', 'increase', 'decrease']);

import { reactive } from 'vue';
const counter = reactive({
    count: 0
});
</script>
<template>
    <div class=" mx-[130px] mt-3 flex w-[80%] space-x-[7.5%] items-center">
        <div class="  mt-3 flex w-[80%] space-x-[10%] items-center ">
            <div>
                <img :src="product.image" alt="" class="h-[120px] w-32">
            </div>
            <div class=" mt-1">
                <div class="flex ">
                    <h3 class="px-2 w-[73%] font-[Raleway] font-bold">{{ product.name }}</h3>
                    <div class="w-[27%]">
                        <ProductColor :color="product.color" />
                    </div>
                </div>
                <h3 class="px-2 font-[Raleway] font-bold">{{ `${product.price}€` }}</h3>
                <div class="flex space-x-4 items-center">
                    <div class=" flex items-center border border-black h-[50px] w-[160px] mt-2 mr-4 rounded-lg p-2  ">
                        <button class="w-[20%] text-center text-[27px]" @click="emits('decrease', product.id)">-</button>
                        <span class="text-[27px] text-center font-[Raleway] w-[80%]">{{ product.count }}</span>
                        <button class="w-[20%] text-center text-[27px]" @click="emits('increase', product.id)">+</button>
                    </div>
                    <svg width="30" height="30" class="cursor-pointer" viewBox="0 0 30 30" fill="none"
                        xmlns="http://www.w3.org/2000/svg" @click="emits('deleteItem', product.id)">
                        <g id="cil:trash">
                            <path id="Vector"
                                d="M5.62504 27.6562C5.62223 28.0258 5.7661 28.3814 6.0251 28.645C6.2841 28.9086 6.63708 29.0588 7.00662 29.0625H22.9935C23.363 29.0588 23.716 28.9086 23.975 28.645C24.234 28.3814 24.3779 28.0258 24.375 27.6562V8.90625H5.62504V27.6562ZM7.50004 10.7812H22.5V27.1875H7.50004V10.7812Z"
                                fill="black" />
                            <path id="Vector_2"
                                d="M9.84375 12.6563H11.7188V24.375H9.84375V12.6563ZM14.0625 12.6563H15.9375V24.375H14.0625V12.6563ZM18.2812 12.6563H20.1562V24.375H18.2812V12.6563ZM19.2188 5.15625V2.34375C19.2188 1.5552 18.6628 0.9375 17.9531 0.9375H12.0469C11.3372 0.9375 10.7812 1.5552 10.7812 2.34375V5.15625H3.75V7.03125H26.25V5.15625H19.2188ZM12.6562 2.8125H17.3438V5.15625H12.6562V2.8125Z"
                                fill="black" />
                        </g>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path
                            d="M8.86719 24.2456H10.2422L24.0859 10.4018L22.7109 9.02679L8.86719 22.8706V24.2456ZM28.0547 9.05804L24.0547 5.05804L25.3672 3.74554C25.7213 3.39137 26.1588 3.21429 26.6797 3.21429C27.2006 3.21429 27.6381 3.39137 27.9922 3.74554L29.3672 5.12054C29.7213 5.47471 29.8984 5.91221 29.8984 6.43304C29.8984 6.95387 29.7213 7.39137 29.3672 7.74554L28.0547 9.05804ZM26.7422 10.3705L10.9922 26.1206H6.99219V22.1206L22.7422 6.37054L26.7422 10.3705ZM23.3984 9.71429L22.7109 9.02679L24.0859 10.4018L23.3984 9.71429Z"
                            fill="#1E1E24" />
                    </svg>
                </div>
            </div>
        </div>
        <div><span class="font-[Raleway] font-bold">{{ `${product.totalPrice}€` }}</span></div>
    </div>
</template>