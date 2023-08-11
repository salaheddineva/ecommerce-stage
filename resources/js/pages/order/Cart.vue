<script setup>
import CustomHeader from '@/components/globals/CustomHeader.vue';
import CustomButton from '@/components/globals/CustomButton.vue';
import ProductsListe from '@/components/product/ProductsListe.vue';
import CustomFooterVue from '@/components/globals/CustomFooter.vue';
import { reactive } from 'vue';
const products = reactive([
    {
        id: 1,
        image: `images/bag.png`,
        name: `cartable à dos`,
        color: `#AB3D1A`,
        price: 200,
        count: 1,
        totalPrice: 200
    },
    {
        id: 2,
        image: `images/sac.png`,
        name: `Sac`,
        color: `#D1BCAB`,
        price: 250,
        count: 1,
        totalPrice: 250
    },
    {
        id: 3,
        image: `images/Portefeuille.png`,
        name: `Pochette`,
        color: `#B1711C`,
        price: 150,
        count: 1,
        totalPrice: 150
    }
]);
const deleteItem = (id) => {
    const index = products.findIndex((product) => id === product.id);
    if (index >= 0) {
        products.splice(index, 1);
    }
};
const increase = (id) => {
    const index = products.findIndex((product) => id === product.id);
    if (index >= 0) {
        const product = products[index];
        product.count += 1;

        product.totalPrice = product.count * product.price
        products.splice(index, 1, product);
    }
}
const decrease = (id) => {
    const index = products.findIndex((product) => id === product.id);

    if (index >= 0) {
        const product = products[index];
        if (product.count > 1) {
            product.count -= 1;
            product.totalPrice = product.count * product.price
            products.splice(index, 1, product);
        }
    }
}
</script>
<template>
    <CustomHeader />
    <div class="flex flex-col justify-center  h-full">
        <div class="flex flex-col space-y-8">
            <ProductsListe :products="products" @delete-item="deleteItem" @increase="increase" @decrease="decrease" />
        </div>
        <div class="mr-[.5%] ml-[79.5%]"><span class="font-[Raleway] font-bold w-[20%]"> Total : {{
            products.reduce((total, product) => total += product.totalPrice, 0) }}€</span></div>
        <div class="flex space-x-4 mx-[70%]">
            <CustomButton class="text-[#ECDAC3] mx-auto rounded-[9px] h-[50px] px-8 py-3" button="Retour" />
            <CustomButton class="bg-[#ECDAC3] mx-auto rounded-[9px] h-[50px] px-8 py-3 " button="Confirmer" />
        </div>
    </div>
    <CustomFooterVue />
</template>