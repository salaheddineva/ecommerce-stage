<script setup>
import CustomInput from '@/components/globals/CustomInput.vue';
import CustomButtonVue from "@/components/globals/CustomButton.vue";
import { ref, reactive } from 'vue';
const accountInfo = reactive({
    firstname: "",
    email: "",
    phone: "",
    message: "",

});

</script>
<template>
    <h3 class="my-2 text-center text-[34px] font-['Open_Sans'] ">Contactez-nous</h3>

    <div class="py-8 my-2 w-[400px] h-auto items-center rounded-[26px] bg-[#ECDAC3] justify-center mx-auto">
        <div class=" flex flex-col items-center justify-center space-y-8">
            <form action="" class="flex flex-col gap-[10px]">
                <custom-input :value="accountInfo.firstname" v-model="accountInfo.firstname" classname="w-[340px] "
                    label="Nom :" />
                <custom-input :value="accountInfo.email" v-model="accountInfo.email" classname="w-[340px] " label="Email :"
                    inputType="email" />
                <custom-input :value="accountInfo.phone" v-model="accountInfo.phone" classname="w-[340px] "
                    label="Numéro de téléphone :" inputType="tel" />
                <custom-input :value="accountInfo.message" v-model="accountInfo.message" classname="w-[340px] h-[89px] "
                    label="Message :" inputType="texte" />

            </form>
            <button
                class="rounded-[10px] h-[40px] w-[200px] my-8 bg-black text-[#FFFFFF] font-['Open_Sans']">Envoyer</button>
        </div>
    </div>
</template>

