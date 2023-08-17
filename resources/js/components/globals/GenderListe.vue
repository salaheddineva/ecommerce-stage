<script setup>
import CustomGenderCheckbox from './CustomGenderCheckbox.vue';
defineProps({
    genders: {
        type: Array,
        default: []
    }
})
</script>
<template>
    <p class="text-[14px] font-[Raleway] px-10 ">Genre :</p>
    <div class="flex mx-10  justify-between">
        <custom-gender-checkbox v-for="item in genders" :gender="item" />
    </div>
</template>
