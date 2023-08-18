<script setup>
const props = defineProps({
    button: {
        type: String,
        default: "S'inscrire"
    }
})
</script>

<template>
    <div
        class=" h-[40px] w-[200px] px-16 text-center py-2 m-6 border border-solid border-[#D1BCAB] rounded-2xl  font-[Raleway] text-sm">
        <button>{{ button }}</button>
    </div>
</template>