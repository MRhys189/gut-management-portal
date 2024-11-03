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
const tableData = {};

async function commaSeparatedNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};


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
    <section>
        <div class="mx-5 relative shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">StaffId</th>
                        <th scope="col" class="px-6 py-3">Name</th>
                        <th scope="col" class="px-6 py-3">Amount</th>
                    </tr>
                </thead>
                <tbody v-for="(customer, index) in state.customers" :key="index">
                    <tr class="bg-white border-b dark:bg-gray-800 hover:text-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ customer.staffId }}
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ customer.name }}
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ customer.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}
                        </th>
                    </tr>
                </tbody>
            
            </table>
        </div>
        
    </section>

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