<script setup>

const props = defineProps({
    gender: {
        type: String,
        default: "Femme"
    },
    isChecked: {
        type: String,
        default: 'false'
    }
})

</script>

<template>
    <div class="flex items-center space-x-2">
        <input type="checkbox" id="checkbox" class="custom-checkbox hidden" />
        <img v-if="isChecked" src="./../../../public/images/icon-checked.svg"  alt="" class="h-5 w-5" @click="$emit('change', !isChecked)">
        <img v-else src="./../../../public/images/icon-not-chcked.svg" alt="" class="h-5 w-5">


        <label for="checkbox" class="text-[Raleway] text-[14px] ">
            {{ gender }}
        </label>


    </div>
</template>
