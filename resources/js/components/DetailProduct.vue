<script setup>
import ProductItem from '@/components/ProductItem.vue';
defineProps({
    products: {
        type: Array,
        default: []
    }
})
const emits = defineEmits(['deleteItem']);

</script>
<template>
    <div class="mx-[8rem] mt-6 flex w-[80%] items-center border border-[#ECDAC3] border-x-0 py-2 px-4 ">
        <h3 class="font-[Raleway] w-[18%] ">Titre</h3>
        <h3 class="font-[Raleway] text-center w-[18%] ">Couleur</h3>
        <h3 class="font-[Raleway] text-center w-[18%] ">Taille</h3>
        <h3 class="font-[Raleway] w-[18%] ">Price</h3>
        <h3 class="font-[Raleway] w-[50%] ">Image</h3>
        <h3 class="font-[Raleway] w-[18%] ">Options</h3>

    </div>
    
    <ProductItem v-for="item in products" :key="item.id" :product="item" @deleteItem="(id)=>emits('deleteItem',id)" />
</template>