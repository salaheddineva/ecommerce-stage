<script setup>
import CustomHeader from '@/components/globals/CustomHeader.vue';
import CustomButton from '@/components/globals/CustomButton.vue';
import CustomFooter from '@/components/globals/CustomFooter.vue';
</script>
<template>
    <CustomHeader />
    <div class="flex flex-col border border-[#ECDAC3] rounded-3xl m-24 p-16">
        <div class="flex justify-between">
            <div class="flex flex-col space-y-3 font-[Raleway] w-[50%] ">
                <span class="font-bold font-[Raleway]">Adresse :</span>
                <div class="border border-black/2 w-auto h-auto p-5 font-[Raleway]">BD Zerktouni N° 11, Guèliz Marrakech,
                    Marrakech, Maroc </div>
                <span class="font-bold font-[Raleway]">Coordonnées de la carte :</span>
                <table class="">
                    <tr class="border border-black/2 text-center">
                        <td><input type="text" placeholder="Numéro" name="number" id="" class="focus:outline-none" ></td>
                        <div class="flex items-center justify-end px-2 space-x-2"><svg width="46" height="41"
                                viewBox="0 0 46 41" fill="none" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                <rect x="0.418457" y="0.460052" width="45.2237" height="40.2759" fill="url(#pattern0)" />
                                <defs>
                                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlink:href="#image0_68_9"
                                            transform="matrix(0.0208333 0 0 0.0233927 0 -0.0614242)" />
                                    </pattern>
                                    <image id="image0_68_9" width="48" height="48"
                                        xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACnUlEQVR4nO2YzWsTQRjGNxRR8VA9+dG01ngoIv4J2Y9m7aGrJtOKePbkxYNgGpM0Hz30qFc/ED2pbRHSXTcqaRT8FwR70UvWJHhQ0VLSg+ArM2lKW91spjM1G5kHnstmhzy/4Z2Zd0eShISEhISE/ieFo68GZWQ/U1BxRUFF8IlXZGQXtAsvRzzDKzH7qw8Cg4u/4YyuAOszDz73giuAz8oG/m77RzsA6AVLLAB6zISZ8QSUdQUcNQhr4X3ENfUoLOkq+W0UWVvHXDRhJpGE8n0dnEII1sr9xE4hRJ7lEynyzq4DZIwU1NQjAGGprevKYUgZmeaYqWmoWUMAb/e2dc06Dpl4ZncANPQc5sYmPINv9q9wAJYyEc/gsM1zty+BNmHzBaANj/3u6hnq8LDuJ7cu8wPAZUMb/g8/2EMNkY5n2QHwgsWLkxkgGgB4QwdQtwZdF3bHAHhHoQ27HB3ZcenANuem0mwAr3WZGuB98jQ3gNK9s2wAn9Rj7OXTMgpQAziFEBtAQ97PDyAiUQM0ygf/PUCj2M+thFZLh9gAHHWAGqD+MMgNoLLIWEK43+FWQtf66BfxXcZFnDdu8gO4Q3+YZVm30UjMhKpCtxP9lPvg86MB5vKpWUPsB1mzlUhTz/aH8yeZAVI3ct1t5jacpa/9xzybOWwtZsPTsUnqdnr5yqkddaIa73a65bQx3dGawB8018/NNsfEs1A1hz2DV83htmXDBaC1sHPjSSjpGlTUIDnsVuUD8FE7QZ4ljDz5ANoyZtIkjRnubfDejk9Y7MpiiDzDuw1+p5P/Zwbwg6VevlaRY/Z3VwB8fdftgIq3510B8N0jvr7z7eyj4hcFvQhKnvejqLiAb8C6HVjZMMky7xleSEhISEhI6jH9Bnm6laI4if4oAAAAAElFTkSuQmCC" />
                                </defs>
                            </svg>
                            <img src="images/logo_visa.png" class="h-10 w-10" alt="">
                            <img src="images/logo_cart.png" class="h-10 w-10" alt="">
                        </div>
                    </tr>
                    <tr>
                        <td class="border border-black/2 text-center"><input type="text" placeholder="MM/AA" name="number" id="" class="focus:outline-none">
                        </td>
                        <td class="border border-black/2 text-center"><input type="text" placeholder="CVC" name="number" id="" class="focus:outline-none">
                        </td>
                    </tr>
                </table>
                <span class="font-bold font-[Raleway]">Titulaire de la carte :</span>
                <div class="border border-black/2  p-3 font-[Raleway]">
                    <input type="text" placeholder="Nom Prénom" name="number" id="" class="focus:outline-none">
                </div>
            </div>
            <div class="flex flex-col  space-y-6 w-[40%]">
                <span class="font-bold font-[Raleway]">Détail de la commande :</span>
                <div class="flex items-center justify-between  font-[Raleway] "><span>Cartable à dos x1</span> <span
                        class="">200€</span></div>
                <div class="flex items-center  font-[Raleway] justify-between "><span>Sac x2</span> <span>500€</span></div>
                <div class="flex items-center font-[Raleway] justify-between"><span>Pochette x1</span> <span>150€</span>
                </div>
            </div>
        </div>
        <div class="flex justify-end mr-4 "><span class="font-[Raleway] font-bold "> Total : 850€</span></div>
        <div class="flex justify-end space-x-1 ">
            <CustomButton class="text-[#ECDAC3]  text-xl text-center rounded-[9px]  h-[50px] py-2" button="Retour" />
            <CustomButton class="bg-[#ECDAC3] text-xl text-center rounded-[9px] h-[50px] py-2 " button="Payer" />
        </div>
    </div>
    <CustomFooter />
</template>