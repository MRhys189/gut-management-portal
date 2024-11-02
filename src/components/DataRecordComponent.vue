<script setup>
import { reactive, defineProps, onMounted } from 'vue';


const props = defineProps({
    customer: Object
});


</script>

<template>
    <div>{{ customer.name }}</div>
    <div>{{ customer.staffId }}</div>
    <div>{{ customer.amount }}</div>
</template>

<!-- <template>
    
    <div class="pr-8 pl-8 pt-20">
    <table class="rounded w-full table-auto border-collapse border border-slate-400">
        <thead>
            <tr>
                <th class="border border-slate-300 p-2">Staff Id</th>
                <th class="border border-slate-300 p-2">Name</th>
                <th class="border border-slate-300 p-2">Amount Due</th>
            </tr>
        </thead>
        <tbody id="table-body">
            <DataRecord v-for="(debtor, index) in state.debtors" :key="debtor.id"/>
            <tr>
                <td class="text-center border border-slate-300 p-2">092452</td>
                <td class="text-center border border-slate-300 p-2">Rhys Murage</td>
                <td class="text-center border border-slate-300 p-2">Kshs. 560</td>
            </tr>

            <tr>
                <td class="text-center border border-slate-300 p-2">092452</td>
                <td class="text-center border border-slate-300 p-2">Rhys Murage</td>
                <td class="text-center border border-slate-300 p-2">Kshs. 560</td>
            </tr>

            <tr>
                <td class="text-center border border-slate-300 p-2">092452</td>
                <td class="text-center border border-slate-300 p-2">Rhys Murage</td>
                <td class="text-center border border-slate-300 p-2">Kshs. 560</td>
            </tr>

            <tr>
                <td class="text-center border border-slate-300 p-2">092452</td>
                <td class="text-center border border-slate-300 p-2">Rhys Murage</td>
                <td class="text-center border border-slate-300 p-2">Kshs. 560</td>
            </tr>

            </tbody>
        </table>
    </div>

</template> -->