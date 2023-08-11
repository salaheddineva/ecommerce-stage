<script setup>
import CustomHeader from '@/components/CustomHeader.vue';
// import CustomQuantity from '@/components/CustomQuantity.vue';
import CustomButtonVue from '@/components/globals/CustomButton.vue';
import CustomFooterVue from '@/components/CustomFooter.vue';
</script>
<template>
    <CustomHeader />
    <div class="flex  mx-20 my-28">
        <div class="flex flex-col space-y-20 w-[50%]">
            <img src="images/SacMarron.png" class="w-[500px]  " alt="">
            <div class="flex flex-row  space-x-2">
                <img src="images/SacNoire.png" alt="">
                <img src="images/SacGris.png" alt="">
            </div>
        </div>
        <div class="flex flex-col  space-y-6 w-[50%]  ">
            <div class="flex text-lg font-bold font-[Raleway]"><span class="w-[50%]">Sac X</span> <span
                    class="flex justify-end w-[50%]">13€</span>
            </div>
            <div class=" font-[Raleway]">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem
                    mollitia impedit iste asperiores nisi reprehenderit consequatur, autem</p>
            </div>
            <div class="flex items-center space-x-10"><span class="font-bold font-[Raleway]">Couleurs :</span>
                <div class="flex space-x-14">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                        <circle cx="25" cy="25" r="23.5" transform="matrix(1 0 0 -1 0 50)" fill="#B1711C" stroke="white"
                            stroke-width="3" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                        <circle cx="25" cy="25" r="23.5" transform="matrix(1 0 0 -1 0 50)" fill="#11131B" stroke="white"
                            stroke-width="3" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                        <circle cx="25" cy="25" r="23.5" transform="matrix(1 0 0 -1 0 50)" fill="#F6FA49" stroke="white"
                            stroke-width="3" />
                    </svg>
                </div>
            </div>
            <div class="flex"><span class="font-bold font-[Raleway]">Taille : </span><span>100cm</span></div>
            <div class="flex">
                <CustomQuantity />
            </div>
            <div class="flex">
                <CustomButtonVue button="Acheter" class="h-14 mx-0 py-4 bg-[#ECDAC3] rounded-lg" />
            </div>
        </div>
    </div>
    <CustomFooterVue />
</template>