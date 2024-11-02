<script setup>
import Navbar from "@/components/Navbar.vue";
import DataTableComponent from "@/components/DataTableComponent.vue";
import ChipsComponent from "@/components/ChipsComponent.vue";

</script>

<template>
    
    <section class="bg-gray-50 dark:bg-gray-900">
        <Navbar />
    </section>
    <section>
        <ChipsComponent />
    </section>
    <section >
        <DataTableComponent />
    </section>


    
</template>