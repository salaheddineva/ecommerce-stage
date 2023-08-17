<script setup>
import ProductColor from '@/components/globals/ProductColor.vue';
const props = defineProps({

    // isChecked: {
    //     type: String,
    //     default: 'false'
    // },
    gender: {
        type: Object
    }
})
</script>
<template>
    <div class="flex items-center ">

        <label class="relative flex   rounded-full p-3" for="react">
            <input id="react" name="type" type="radio"
                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-black  checked:border-black checked:before:bg-black " />
            <div
                class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-black opacity-0 transition-opacity peer-checked:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                </svg>
            </div>
        </label>
        <label for="checkbox" class="text-[Raleway] text-[14px] ">
            {{ gender.type }}
        </label>
    </div>
</template>
