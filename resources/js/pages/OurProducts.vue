<script setup >
import CustomProduct from '@/components/CustomProduct.vue';
const url1 = 'images/img5.jpg';
const url2 = 'images/img6.jpg';
const url3 = 'images/img7.jpg';
const url4 = 'images/img8.jpg';
const url5 = 'images/img3.jpg';
const url6 = 'images/img2.png';
</script>
<template>
    <div>
        <div class="flex  text-[24px] justify-center space-x-28 pt-14 font-['Open_Sans'] ">
            <a href="#Produits"> Nos Produits</a>
            <a href="#sacs">Sacs</a>
            <a href="#Protefeuilles">Portefeuilles</a>
            <button
                class="px-4  bg-[#ECDAC3] text-black rounded-[10px] hover:bg-[#ECDAC3] focus:outline-none focus:ring-2 focus:ring-[#ECDAC3] focus:ring-offset-2">Chercher</button>
        </div>
        <div class=" space-y-8">
            <div class="flex justify-center pt-20">
                <custom-product :Src="url1" name="sac A" :price="32"/>
                <custom-product :Src="url2" name="sac B" :price="32"/>
                <custom-product :Src="url3" name="sac C" :price="32" />
            </div>
            <div class="flex justify-center pb-14">
                <custom-product :Src="url4" name="sac D" :price="32"/>
                <custom-product :Src="url5" name="sac E" :price="32"/>
                <custom-product :Src="url6" name="sac F" :price="32"/>
            </div>
        </div>
    </div>
</template>