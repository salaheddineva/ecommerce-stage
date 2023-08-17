<script setup>
import ProductItem from './ProductItem.vue';
defineProps({
    products: {
        type: Array,
        default: []
    }
})
const emits = defineEmits(['deleteItem', 'increase', 'decrease']);

</script>
<template>
    <div class="ml-32 mr-32 mt-10 flex w-auto   items-center border border-[#ECDAC3] border-x-0 py-2 px-4 space-x-[80%] ">
        <div class="flex items-center space-x-[180%] ">
            <h3 class="font-[Raleway] ">Image</h3>
            <h3 class="font-[Raleway] ">Produit</h3>
        </div>
        <div class="">
            <h3 class="font-[Raleway]  ">Total</h3>
        </div>
    </div>
    <ProductItem v-for="item in products" :product="item" @delete-item="(id) => emits('deleteItem', id)"
        @decrease="(id) => emits('decrease', id)" @increase="(id) => emits('increase', id)" />
</template>