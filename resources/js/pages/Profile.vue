<script setup>
import CustomProfileInput from '@/components/CustomProfileInput.vue';
</script>
<template>
    <div>
        <div class="flex  flex-col items-center justify-center">
            <h3 class="text-[26px] font-['Open_Sans']  uppercase mt-6">Mon Profile</h3>
            <custom-profile-input class="mt-[29px]" />
            <custom-profile-input label="Prénom :" />
            <custom-profile-input label="Email :" />
            <custom-profile-input label="Genre :" />
            <custom-profile-input label="Numéro de téléphone :" />
            <custom-profile-input label="Adresse :" />
            <custom-profile-input label="Mot de passe :" />
            <div
                class="mt-4 flex w-[50%] items-center justify-between rounded-[18px] border border-[#C4AB8A] px-[23px] py-[18px]">
                <div class="space-y-4">
                    <span class="text-[#D1BCAB] font-['Open_Sans']">Liste de commandes :</span>
                    <div class="space-x-[18px]">
                        <span class="font-bold text-black/50 font-['Open_Sans']">Dernière commande :</span>
                        <span class="text-black/50 font-['Open_Sans']">Le 03 Juin 2023</span>
                    </div>
                </div>
                <button
                    class="rounded-[9px] border border-[#D1BCAB] px-[28px] py-[9px] text-[#C4AB8A] font-['Open_Sans']">Consulter</button>
            </div>
            <router-link :to="{ name: 'our-products' }">
                <button
                    class="my-[28px] rounded-[26px] bg-[#C99249]/20 px-[70px] py-[8px] text-[20px] font-['Open_Sans']">Enregistrer les modifications
                </button>
            </router-link>
        </div>
    </div>
</template>