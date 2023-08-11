<script setup>
defineProps({
    className: {
        type: String,
        default: "w-6 h-6"
    },
    color: {
        type: String,
        default: "#000000"
    }
})
</script>
<template>
    <div class="rounded-full border-4 border-gray-200" :class="className" :style="{ backgroundColor: color }" />
</template>