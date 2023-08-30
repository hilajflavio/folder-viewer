<template>
    <div class="row flex col-12 justify-around">
        <Incoming></Incoming>
        <Assesment></Assesment>
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

<style scoped>
/* Add your component-specific styles here */
</style>
