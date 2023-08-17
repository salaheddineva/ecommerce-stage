<script setup>
import CustomInput from '@/components/CustomInput.vue';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue'; 
import { ref, reactive } from 'vue';
const accountInfo = reactive({
    firstname: "",
    email: "",
    phone: "",
    message: "",
    
});

</script>
<template>
    <Header />
    <div>
        <div class="flex h-screen flex-col items-center justify-center">
            <h3 class="text-[26px] font-['Open_Sans'] ">Contactez-nous</h3>
            <form action="" class="flex flex-col gap-[12px]">
                <custom-input :value="accountInfo.firstname" v-model="accountInfo.firstname" classname="w-[340px] "
                    label="Nom :" />
                <custom-input :value="accountInfo.email" v-model="accountInfo.email" classname="w-[340px] " label="Email :"
                    inputType="email" />
                <custom-input :value="accountInfo.phone" v-model="accountInfo.phone" classname="w-[340px] "
                    label="Numéro de téléphone :" inputType="tel" />
                <custom-input :value="accountInfo.message" v-model="accountInfo.phone" classname="w-[340px] "
                    label="Numéro de téléphone :" inputType="text" />
                
            </form>
        </div>
    </div>
    <Footer />
</template>

