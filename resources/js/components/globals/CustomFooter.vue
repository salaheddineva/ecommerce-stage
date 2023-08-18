<script setup></script>
<template>
    <div class="bottom-0 inset-x-0 text-white">
        <div class="grid grid-cols-12 w-full bg-black p-10">
            <div class="col-span-12 md:col-span-6 lg:col-span-3 my-4 lg:my-0">
                <h1 class="font-extrabold mb-1">Sfakes</h1>
                <p class="text-xs md:w-[210px]">
                    Nous avons une expertise et une expérience considérables dans l'industrie de la maroquinerie. Nous
                    sommes fiers de continuer la tradition de la fabrication artisanale
                </p>
            </div>

            <div class="flex flex-col col-span-12 md:col-span-6 lg:col-span-3 my-4 lg:my-0">
                <h1 class="font-extrabold mb-1">Liens</h1>
                <div class="flex flex-col">
                    <router-link :to="{ name: 'about-us' }"
                        class="   text-20 font-bold leading-24 tracking-wider">A
                        propos de nous</router-link> <router-link :to="{ name: 'our-products' }"
                        class="   text-20 font-bold leading-24 tracking-wider">Produits</router-link>
                    <router-link :to="{ name: 'contact-us' }"
                        class="   text-20 font-bold leading-24 tracking-wider">Contactez nous
                    </router-link>
                </div>
            </div>
            <div class="flex flex-col col-span-12 md:col-span-6 lg:col-span-3 my-4 lg:my-0">
                <h1 class="font-extrabold mb-1">Contact</h1>
                <div class="space-y-4">
                    <div class="flex flex-row items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M12 13.4299C12.4097 13.4299 12.8154 13.3492 13.194 13.1924C13.5725 13.0357 13.9165 12.8058 14.2062 12.5161C14.4959 12.2264 14.7257 11.8824 14.8825 11.5039C15.0393 11.1254 15.12 10.7197 15.12 10.3099C15.12 9.90022 15.0393 9.49451 14.8825 9.11597C14.7257 8.73743 14.4959 8.39349 14.2062 8.10377C13.9165 7.81405 13.5725 7.58423 13.194 7.42744C12.8154 7.27064 12.4097 7.18994 12 7.18994C11.1725 7.18994 10.3789 7.51865 9.79383 8.10377C9.20872 8.68888 8.88 9.48247 8.88 10.3099C8.88 11.1374 9.20872 11.931 9.79383 12.5161C10.3789 13.1012 11.1725 13.4299 12 13.4299Z"
                                stroke="white" stroke-width="1.5" />
                            <path
                                d="M3.62001 8.49C5.59001 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C14.6321 21.4735 13.3398 21.9952 11.995 21.9952C10.6503 21.9952 9.35794 21.4735 8.39001 20.54C5.63001 17.88 2.47001 13.57 3.62001 8.49Z"
                                stroke="white" stroke-width="1.5" />
                        </svg>

                        <a href="#localisation" class="  ml-2">localisation</a>
                    </div>
                    <div class="flex flex-row items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.58811 18.4401 8.49169 17.5041 7.47 16.49C6.45877 15.472 5.5261 14.3789 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
                                stroke="white" stroke-width="1.5" stroke-miterlimit="10" />
                            <path
                                d="M18.5 9C18.5 8.4 18.03 7.48 17.33 6.73C16.69 6.04 15.84 5.5 15 5.5M22 9C22 5.13 18.87 2 15 2"
                                stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <a href="#+212-12345678" class="  ml-2">+212-12345678</a>
                    </div>
                </div>
            </div>
            <div class="flex flex-col space-y-8 col-span-12 md:col-span-6 lg:col-span-3 my-4 lg:my-0">
                <h1 class="font-extrabold">Réseaux sociaux</h1>
                <div class="flex space-x-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M14 9.3V12.2H16.6C16.8 12.2 16.9 12.4 16.9 12.6L16.5 14.5C16.5 14.6 16.3 14.7 16.2 14.7H14V22H11V14.8H9.3C9.1 14.8 9 14.7 9 14.5V12.6C9 12.4 9.1 12.3 9.3 12.3H11V9C11 7.3 12.3 6 14 6H16.7C16.9 6 17 6.1 17 6.3V8.7C17 8.9 16.9 9 16.7 9H14.3C14.1 9 14 9.1 14 9.3Z"
                            stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                        <path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z"
                            stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                            stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M12 15.5C12.4596 15.5 12.9148 15.4095 13.3394 15.2336C13.764 15.0577 14.1499 14.7999 14.4749 14.4749C14.7999 14.1499 15.0577 13.764 15.2336 13.3394C15.4095 12.9148 15.5 12.4596 15.5 12C15.5 11.5404 15.4095 11.0852 15.2336 10.6606C15.0577 10.236 14.7999 9.85013 14.4749 9.52513C14.1499 9.20012 13.764 8.94231 13.3394 8.76642C12.9148 8.59053 12.4596 8.5 12 8.5C11.0717 8.5 10.1815 8.86875 9.52513 9.52513C8.86875 10.1815 8.5 11.0717 8.5 12C8.5 12.9283 8.86875 13.8185 9.52513 14.4749C10.1815 15.1313 11.0717 15.5 12 15.5Z"
                            stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M17.636 7H17.648" stroke="white" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M17.3 15.3002C17 15.5002 16.8 15.5002 16.6 15.6002C16.4 15.6002 16.3 15.7002 16.2 15.8002C16 15.8002 16 16.0002 16 16.1002C16 16.2002 16 16.3002 15.9 16.4002C15.8 16.5002 15.6 16.5002 15.4 16.5002C15.1 16.5002 14.7 16.5002 14.3 16.7002L13.7 17.0002C13.3 17.3002 12.9 17.5002 12.1 17.5002C11.3 17.5002 10.9 17.2002 10.5 17.0002C10.3 16.9002 10.1 16.7002 9.9 16.7002C9.5 16.6002 9.1 16.5002 8.8 16.5002C8.6 16.5002 8.4 16.5002 8.3 16.4002C8 16.3002 8 16.2002 8 16.1002C8 16.0002 8 15.8002 7.8 15.8002C7.7 15.7002 7.5 15.7002 7.4 15.6002C7.2 15.5002 7 15.5002 6.7 15.3002C6.4 15.1002 6.6 15.0002 6.7 14.9002C8.6 14.0002 8.9 12.5002 8.9 12.4002C8.9 12.3002 8.9 12.2002 8.8 12.1002C8.7 12.0002 8.4 11.8002 8.1 11.7002C8 11.6002 7.9 11.6002 7.8 11.5002C7.5 11.3002 7.4 11.1002 7.5 10.9002C7.6 10.7002 7.7 10.7002 7.9 10.7002H8.1C8.3 10.7002 8.5 10.8002 8.6 10.9002C8.7 10.9002 8.8 11.0002 8.9 11.0002H9C9.1 11.0002 9.1 11.0002 9.1 10.8002V10.7002C9.1 10.4002 9 9.7002 9.1 9.2002C9.2 8.4002 9.4 7.9002 9.8 7.6002C10 7.4002 10.7 6.7002 12.1 6.7002C13.5 6.7002 14.2 7.5002 14.4 7.6002C14.7 8.0002 15 8.4002 15.1 9.2002C15.2 9.8002 15.1 10.4002 15.1 10.8002C15.1 10.9002 15.1 11.0002 15.2 11.0002H15.3C15.4 11.0002 15.5 10.9002 15.6 10.9002C15.8 10.8002 15.9 10.8002 16.1 10.7002H16.3C16.5 10.7002 16.6 10.8002 16.7 10.9002C16.8 11.1002 16.7 11.3002 16.4 11.5002C16.3 11.5002 16.2 11.6002 16.1 11.7002C15.9 11.9002 15.5 12.1002 15.4 12.1002C15.3 12.2002 15.3 12.3002 15.3 12.4002C15.3 12.5002 15.6 13.9002 17.5 14.9002C17.5 15.0002 17.7 15.1002 17.3 15.3002Z"
                            stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
                        <path
                            d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z"
                            stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>