<script setup>
// import CustomInput from "@/components/CustomInput.vue";
// import CustomPassword from "@/components/CustomPassword.vue";
// import CustomGenderCheckbox from "@/components/globals/CustomGenderCheckbox.vue";
import GenderListe from "../components/globals/GenderListe.vue";
import CustomCheckbox from "@/components/globals/CustomCheckbox.vue";
import CustomButtonVue from "@/components/globals/CustomButton.vue";
import CustomInput from "@/components/globals/CustomInput.vue"
import { ref, reactive } from 'vue';
const accountInfo = reactive({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    passwordConfirmation: "",
    gender: "",
});
const genders = reactive([
    {
        type: "Femme"
    },
    { type: "Homme" },
    { type: "Non spécifié" }]
)
</script>
<template>
    <div class="bg-[#11131B] flex flex-col justify-center">
        <div class="flex items-center my-20 mx-auto">
            <img class="w-[43px] h-[26.427px]" src="images/logo.png" alt="" />
            <p class="text-white font-['Open_Sans'] text-lg">SFAKES</p>
        </div>
        <div class="w-[400px] h-[640px] items-center rounded-[26px] bg-white justify-center mx-auto ">
            <h1 class="text-[#D1BCAB] py-2  text-center font-[Raleway] text-[18px]">
                Bienvenue dans votre store en ligne
            </h1>
            <h3 class="text-[#D1BCAB] text-center font-[Raleway] text-[12px]">
                Outil digital pour faciliter votre vie
            </h3>
            <form action="" class="flex flex-col items-center py-2 px-10 my-2 gap-[12px] self-stretch ">
                <!-- <custom-input label="Nom :" v-model:value="question" /> -->
                <!-- <custom-input label="Prénom :" /> -->
                <!-- <custom-input label="Email :" /> -->
                <!-- <custom-input label="Numéro:" /> -->
                <custom-input :value="accountInfo.firstname" v-model="accountInfo.firstname" classname="w-[340px] "
                    label="Nom :" />
                <custom-input :value="accountInfo.lastname" v-model="accountInfo.lastname" classname="w-[340px] "
                    label="Prénom :" />
                <custom-input :value="accountInfo.email" v-model="accountInfo.email" classname="w-[340px] " label="Email :"
                    inputType="email" />
                <custom-input :value="accountInfo.phone" v-model="accountInfo.phone" classname="w-[340px] "
                    label="Numéro de téléphone :" inputType="tel" />
            </form>

            <gender-liste :genders="genders" />

            <!-- <div class="flex px-10 gap-[14px]">
                <custom-gender-checkbox :is-checked="gender == 'check'" gender="Femme" />
                <custom-gender-checkbox gender="Homme" />
                <custom-gender-checkbox gender="Non spécifié" />
            </div> -->
            <div
                class=" flex flex-col justify-center items-center py-2 my-3 mx-8 gap-[12px] w-[340px]   rounded-[8px] bg-[#ECDAC3]">
                <p class="text-[#907C61]  text-center font-[Raleway] text-[16px]">Definissez votre mot de passe : </p>
                <form action="" class="flex flex-col gap-[12px]">
                    <custom-input :value="accountInfo.password" v-model="accountInfo.password" inputType="password"
                        classname="w-[320px] " />
                    <custom-input :value="accountInfo.passwordConfirmation" v-model="accountInfo.passwordConfirmation"
                        inputType="password" classname="w-[320px] " label="Confirmer :" />
                </form>
            </div>
            <div class="items-center my-2 mx-8">
                <custom-checkbox />
            </div>
            <custom-button-vue class="mx-auto" />
        </div>
    </div>
</template>
