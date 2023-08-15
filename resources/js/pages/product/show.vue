<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>
<template>show details product {{ route.params.id }}</template>
