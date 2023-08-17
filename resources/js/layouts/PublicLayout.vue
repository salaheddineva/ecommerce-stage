<script setup>
import CustomHeader from "@/components/globals/CustomHeader.vue";
import CustomFooterVue from "@/components/globals/CustomFooter.vue";
</script>
<template>
  
        <CustomHeader />
        <div
            class="section-min-height"
        >
            <router-view />
        </div>
        <CustomFooterVue />
 
</template>
