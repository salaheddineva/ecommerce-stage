<script setup>
import DetailOrderItem from './DetailOrderItem.vue';
defineProps({
    orders: {
        type: Array,
        default: []
    }
})
</script>
<template>
    <div class="mx-[8rem] font-[Raleway]  mt-6 flex w-[80%] items-center border border-[#ECDAC3] border-x-0 py-2 px-4  ">
        <h3 class=" w-[18%]   ">Date de la commande</h3>
        <h3 class="text-center w-[50%]  ">Adresse</h3>
        <h3 class="text-center w-[15%] ">Status</h3>
        <h3 class="w-[15%]  ">Date de paiement</h3>
    </div>
    <detail-order-item  v-for="item in orders" :detail="item" />
</template>