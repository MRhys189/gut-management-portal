<script setup>
import { reactive, defineProps, onMounted,ref } from 'vue';
import axios from 'axios';
import DataRecordComponent from '@/components/DataRecordComponent.vue';

const props = defineProps({
    customers: Object
});


const state = reactive({
    customers: []
});


onMounted(async () => {
    try {
        const response = await axios.get('api/debtors');
        state.customers = response.data;
        console.log(response.data);
    } catch(error) {
        console.error("Error getting debtors because: ", error);
    }
})

</script>

<template>
    <section class="py-16 content-center">
        
    </section>
    <!-- <section class="bg-green-100 px-14 py-14">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-black-500 mb-6 text-center">Customers</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div v-for="customer in state.customers" :key="customer.id">
                    <div class="div">{{ customer.name }}</div>
                    <div class="div">{{ customer.staff }}</div>
                    <div class="div">{{ customer.amount }}</div>
                 </div>
            </div>
        </div>
        
    </section> -->
    <!-- <div class="grid grid-cols-3 md:grid-cols-1 gap-2"> -->
        <!-- <DataRecordComponent v-for="(customer, index) in state.customers" :key="customer.id" :customer="customer"/> -->
        
    <!-- </div> -->
</template>

<!-- <template>
    <div class="grid grid-cols-3 md:grid-cols-1 gap-2">
        <DataRecordComponent v-for="(customer, index) in state.customers">
            <div>{{ customer.name }}</div>
            <div>{{ customer.staffId }}</div>
            <div>{{ customer.amount }}</div>
        </DataRecord>
    </div>
    
    
</template> -->