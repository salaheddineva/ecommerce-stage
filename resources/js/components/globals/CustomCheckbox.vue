<script setup>
const props = defineProps({
    checkbox: {
        type: String,
        default: " Oui, j'accepte les Conditions générales du site SFAKES "
    }

})
</script>
<template>
    <div class="flex py-2 space-x-2 ">
        <input type="checkbox" name="checkbox" id="checkbox"
            class=" w-4 h-4  border border-solid border-black rounded accent-black">
        <label for="checkbox" class="   text-[14px]">{{ checkbox }}</label>
    </div>
</template>