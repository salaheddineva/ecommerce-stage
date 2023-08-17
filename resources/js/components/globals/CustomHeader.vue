<script setup></script>
<template>
    <div id="header" class="h-[98px] bg-black flex justify-between items-center px-8">
        <div class="flex items-center">
            <img class="w-[80px] h-[50px] " src="images/logo.png" alt="sfakes">
            <h1 class="text-white font-['Open_Sans'] text-base"> Sfakes</h1>

        </div>

        <ul class="flex space-x-8">
            <li>
                <router-link :to="{name:'acceuil'}" class="text-white font-[Raleway] text-20 font-normal leading-24 tracking-wider">Accueil</router-link>
            </li>
            <li>
                <router-link :to="{name:'about-us'}" class="text-white font-['Open_Sans']  text-20 font-normal leading-24 tracking-wider">A
                    propos de nous</router-link>
            </li>
            <li>
                <router-link :to="{name:'our-products'}"
                    class="text-white font-['Open_Sans']  text-20 font-normal leading-24 tracking-wider">Produits</router-link>
            </li>
            <li>
                <router-link :to="{name:'contact-us'}"
                    class="text-white font-['Open_Sans']  text-20 font-normal leading-24 tracking-wider">Contactez nous
                </router-link>
            </li>
        </ul>

        <div class="flex justify-end space-x-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 22 22" fill="none">
                <path
                    d="M1 1H2.74C3.82 1 4.67 1.93 4.58 3L3.75 12.96C3.71759 13.3459 3.76569 13.7342 3.89123 14.1005C4.01678 14.4669 4.21705 14.8031 4.47934 15.0879C4.74163 15.3728 5.06023 15.6001 5.41495 15.7553C5.76967 15.9106 6.15278 15.9905 6.54 15.99H17.19C18.63 15.99 19.89 14.81 20 13.38L20.54 5.88C20.66 4.22 19.4 2.87 17.73 2.87H4.82M8 7H20M15.25 21C15.5815 21 15.8995 20.8683 16.1339 20.6339C16.3683 20.3995 16.5 20.0815 16.5 19.75C16.5 19.4185 16.3683 19.1005 16.1339 18.8661C15.8995 18.6317 15.5815 18.5 15.25 18.5C14.9185 18.5 14.6005 18.6317 14.3661 18.8661C14.1317 19.1005 14 19.4185 14 19.75C14 20.0815 14.1317 20.3995 14.3661 20.6339C14.6005 20.8683 14.9185 21 15.25 21ZM7.25 21C7.58152 21 7.89946 20.8683 8.13388 20.6339C8.3683 20.3995 8.5 20.0815 8.5 19.75C8.5 19.4185 8.3683 19.1005 8.13388 18.8661C7.89946 18.6317 7.58152 18.5 7.25 18.5C6.91848 18.5 6.60054 18.6317 6.36612 18.8661C6.1317 19.1005 6 19.4185 6 19.75C6 20.0815 6.1317 20.3995 6.36612 20.6339C6.60054 20.8683 6.91848 21 7.25 21Z"
                    stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                    d="M22 22L20 20M11.5 21C12.7476 21 13.9829 20.7543 15.1355 20.2769C16.2881 19.7994 17.3354 19.0997 18.2175 18.2175C19.0997 17.3354 19.7994 16.2881 20.2769 15.1355C20.7543 13.9829 21 12.7476 21 11.5C21 10.2524 20.7543 9.0171 20.2769 7.86451C19.7994 6.71191 19.0997 5.66464 18.2175 4.78249C17.3354 3.90033 16.2881 3.20056 15.1355 2.72314C13.9829 2.24572 12.7476 2 11.5 2C8.98044 2 6.56408 3.00089 4.78249 4.78249C3.00089 6.56408 2 8.98044 2 11.5C2 14.0196 3.00089 16.4359 4.78249 18.2175C6.56408 19.9991 8.98044 21 11.5 21Z"
                    stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <router-link :to="{name:'sign-in'}" class="text-white text-center font-['Open_Sans']  text-20 font-normal">Se connecter</router-link>
        </div>
    </div>
</template>