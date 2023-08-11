<script setup>
import CustomHeader from '@/components/globals/CustomHeader.vue';
import CustomFooter from '@/components/globals/CustomFooter.vue';
import OrderListe from '@/components/order/OrderListe.vue';
import { reactive } from 'vue';
const orders = reactive([
    {
        id: 1,
        createdAt: 'Le 08 Mars 2023',
        adresse: `BD Zerktouni N° 11, Guéliz   Marrakech, Marrakech, Maroc`,
        status: `Reçue`,
        statusIcon: `images/done.png`,
        paymentAt: `Le 08 Mars 2023`,
        amount: 5,
    },
    {
        id: 2,
        createdAt: 'Le 08 Mars 2023',
        adresse: `BD Zerktouni N° 11, Guéliz   Marrakech, Marrakech, Maroc`,
        status: `En cours`,
        statusIcon: `images/progresse.png`,
        paymentAt: `Le 08 Mars 2023`,
        amount: 6,
    }]);
</script>
<template>
    <custom-header />
    <div class="flex flex-col my-8">
        <div class="flex  space-x-[20px] mx-[8rem]  w-[80%]  items-cente ">
            <svg width="17" height="24" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect y="0.462463" width="16.7177" height="23.1655" fill="url(#pattern0)" />
                <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_65_989" transform="matrix(0.0577371 0 0 0.0416667 -0.192845 0)" />
                    </pattern>
                    <image id="image0_65_989" width="24" height="24"
                        xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAASElEQVR4nGNgGAWDBTAxMDDEQDEjLSyIYWBg+A/F0Ujih5HEScGHaW3BIXQLGKEGR9EqiIY+YBpNRQyjqYhSMJqK/o+mohEMAGVga2jJTerWAAAAAElFTkSuQmCC" />
                </defs>
            </svg>
            <span class="font-[Raleway] text-lg">Liste de commandes :</span>
        </div>
        <order-liste :orders="orders" />
    </div>
    <custom-footer />
</template>