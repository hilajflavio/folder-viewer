<template>
    <div class="main-area">
        <h1 class="flex justify-around mb-5 py-8 m-0 bg-gray">UPT ARCHIVE SCANNING DEMO</h1>
        <div class="row flex col-12 justify-around">
            <Incoming></Incoming>
            <div class="i-tabler:arrow-big-right-lines font-800 mr-2 icon" />
            <Assesment></Assesment>
        </div>
        <h1 class="flex justify-around py-5 bg-gray mb-0 lower" style="position: fixed; bottom: 0">
            SUPPORTED BY ARKIT
        </h1>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Assesment from '../components/Assesment.vue'
import Incoming from '../components/Incoming.vue'

export default defineComponent({
    components: { Assesment, Incoming },

     mounted() {
         // Call the refreshPage function every 10 seconds
         setInterval(this.refreshPage, 10000)
     },

     methods: {
         refreshPage() {
             // Use location.reload() to refresh the page
             location.reload()
         }
     }
})
</script>

<style>
/* Add your component-specific styles here */

.main-area {
    font-family: 'Montserrat', sans-serif;
}

.icon {
    font-size: 30px;
    padding-top: 40px;
}

body {
    margin: 0;
}

.lower {
    margin-bottom: 0 !important;
    width: 100%;
    font-size: 20px;
}
</style>
