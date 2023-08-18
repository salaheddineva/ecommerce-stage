<script setup>
import WebSiteLogo from "../components/globals/WebSiteLogo.vue";



  components: { WebSiteLogo }
  </script>
<template>
    <div
        id="header"
        class="sticky top-0 left-0 right-0 h-[98px] bg-black flex justify-between items-center px-8"
    >
    <web-site-logo />
    <ul class="flex space-x-8">
            <li>
                <router-link :to="{ name: 'admin-dashboard' }"
                    class="text-white font-[Raleway] text-20 font-bold leading-24 tracking-wider">Dashboard</router-link>
            </li>
            
            <li>
                <router-link :to="{ name: 'admin-product-list' }"
                    class="text-white   text-20 font-bold leading-24 tracking-wider">Produits</router-link>
            </li>
           
        </ul>
        
        <div class="flex justify-end space-x-8">

            <router-link
                :to="{ name: 'sign-in' }"
                class="text-white text-center text-20 font-bold"
                >
                Logout
            </router-link>
        </div>
    </div>
    <div class="section-min-height container mx-auto">
        <router-view />
    </div>
</template>
