<script setup>
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useProductStore } from "@/stores/product";
import { onMounted } from "vue";
const { product, loading, error } = storeToRefs(useProductStore());
const { fetchProductByUuid } = useProductStore();
const route = useRoute();
const props=defineProps({
    uuid: {
        type: String,
    },
});
onMounted(() => {
    fetchProductByUuid(props.uuid);
});
</script>
<template>
    show details product
    
    <ul v-if="!loading">
        <li>Uuid :{{ product.uuid }}</li>
        <li>Name :{{ product.name }}</li>
        <li>Sku :{{ product.sku }}</li>
    </ul>
</template>
