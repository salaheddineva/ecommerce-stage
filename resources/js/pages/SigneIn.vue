<script setup>
import CustomInput from "@/components/CustomInput.vue";
import CustomPassword from "@/components/CustomPassword.vue";
import CustomGenderCheckbox from "@/components/CustomGenderCheckbox.vue";
import CustomCheckbox from "@/components/CustomCheckbox.vue";
import CustomButtonVue from "@/components/globals/CustomButton.vue";
import { ref, reactive } from 'vue';
const question = ref('');
const gender = reactive('')
</script>
<template>
    <div class="">
        <div class="flex items-center py-2 px-[140px] ">
            <img class="w-[43px] h-[26.427px]" src="images/logo.png" alt="" />
            <p class="text-white font-['Open_Sans'] text-lg">SFAKES</p>
        </div>
        <div class="w-[400px] h-[624px] items-center rounded-[26px] bg-white justify-center mx-auto ">
            <h1 class="text-[#D1BCAB] py-2  text-center font-[Raleway] text-[18px]">
                Bienvenue dans votre store en ligne
            </h1>
            <h3 class="text-[#D1BCAB] text-center font-[Raleway] text-[12px]">
                Outil digital pour faciliter votre vie
            </h3>
            <form action="" class="flex flex-col items-center py-2 px-10 my-2 gap-[12px] self-stretch ">
                <custom-input label="Nom :" v-model:value="question" />
                <custom-input label="Prénom :" />
                <custom-input label="Email :" />
                <custom-input label="Numéro:" />
            </form>
            <p class="text-[14px] text-[Raleway] px-10 ">Genre :</p>
            <div class="flex px-10 gap-[14px]">
                <custom-gender-checkbox :is-checked="gender == 'check'" gender="Femme" />
                <custom-gender-checkbox gender="Homme" />
                <custom-gender-checkbox gender="Non spécifié" />
            </div>
            <div
                class=" flex flex-col justify-center items-center py-2 my-3 mx-8 gap-[12px] w-[340px]   rounded-[8px] bg-[#ECDAC3]">
                <p class="text-[#907C61]  text-center font-[Raleway] text-[16px]">Definissez votre mot de passe : </p>
                <form action="" class="flex flex-col gap-[12px]">
                    <custom-password />
                    <custom-password label="Confirmer le mot de passe :" />
                </form>
            </div>
            <div class="items-center my-2 mx-8">
                <custom-checkbox />
            </div>
            <custom-button-vue class="mx-auto" />
        </div>
    </div>
</template>

<style>
body {
    @apply bg-[#11131B] flex justify-center;
}
</style>
