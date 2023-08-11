<script setup>
import CustomPassword from '@/components/CustomPassword.vue';
import CustomInputSigneUp from '@/components/CustomInputSigneUp.vue';
import CustomCheckbox from '@/components/CustomCheckbox.vue';
import CustomButtonVue from '@/components/globals/CustomButton.vue';
</script>
<template>
    <div>
        <div class="flex items-center my-20 mx-[110px] ">
            <img class="w-[80px] h-[50px]" src="images/logo.png" alt="" />
            <h1 class="text-white font-['Open_Sans'] text-lg">SFAKES</h1>
        </div>
        <div class="w-[400px] h-[415px]  rounded-[26px] bg-white justify-center mx-auto ">
            <h1 class="text-[#D1BCAB] py-2  text-center font-[Raleway] text-[18px]">
                Bienvenue dans votre store en ligne
            </h1>
            <h3 class="text-[#D1BCAB] text-center font-[Raleway] text-[12px]">
                Outil digital pour faciliter votre vie
            </h3>
            <div class=" flex flex-col  py-2 my-3 mx-8 gap-[12px] w-[340px]   rounded-[8px] bg-[#ECDAC3]">
                <p class="text-[#907C61]  text-center font-[Raleway] text-[16px]">Saisissez votre mot de passe : </p>
                <form action="" class="flex flex-col gap-[12px]">
                    <CustomInputSigneUp class="mx-2" />
                    <custom-password class="h-[50px] mx-2 " label="Mot de passe :" />
                </form>
                <CustomCheckbox class=" mx-3" checkbox="Mémoriser mon authentification" />
                <CustomButtonVue button="S'authentifier" class="bg-white w-8 mx-auto" />
            </div>
        </div>
    </div>
</template>
<style>
body {
    @apply bg-[#11131B] flex justify-center;
}
</style>