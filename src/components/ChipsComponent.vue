<script setup>
import {ref} from 'vue';

const categories = ref(["All", "Debtors", "Creditors"]);

const handleClick = () => {
    console.log("click action check!!!!")
    if(category === "All") {
        console.log("Loading all customers");
    } else if (category === "Debtors") {
        console.log("Loading debtors only");
    } else {
        console.log("Loading creditors only");
    }
};
</script>

<template>
    <div class="py-5 flex flex-wrap gap-12 justify-center items-center">
        <div
        class="px-3 border-black border-2 rounded-md bg-slate-800 text-white hover:bg-slate-500"
        v-for="(category, index) in categories"
        :key="index"
        @click="handleClick"
        >
        {{ category }}
        </div>
    </div>

    <!-- <div class="flex gap-2">
            <div class="rounded-md bg-slate-800 py-1 px-3 border border-transparent text-sm text-white transition-all shadow-sm">
            All</div>      
            <div class="rounded-md bg-slate-800 py-1 px-3 border border-transparent text-sm text-white transition-all shadow-sm">
            Debtors</div>      
            <div class="rounded-md bg-slate-800 py-1 px-3 border border-transparent text-sm text-white transition-all shadow-sm">
            Creditors</div>      

        </div> -->

</template>