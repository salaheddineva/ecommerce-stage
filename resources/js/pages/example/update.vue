<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>
<template>update product {{ route.params.id }}</template>