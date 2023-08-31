<template>
    <div>
        <h1>Assesment List</h1>
        <ul class="">
            <li v-for="file in files" :key="file.name">
                <a :href="file.path" target="_blank">{{ file.name }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            files: []
        }
    },

    mounted() {
        // Fetch the list of files using Axios
        this.fetchFiles()
    },
    methods: {
        async fetchFiles() {
            try {
                const response = await axios.get('http://172.16.203.215:4000') // Make sure Axios is properly configured in your Vue project
                if (response.status === 200) {
                    this.files = response.data.files
                } else {
                    console.error('Failed to fetch files:', response.statusText)
                }
            } catch (error) {
                console.error('Error fetching files:', error)
            }
        }
    }
}
</script>

<style scoped>
/* Add your component-specific styles here */

a {
    color: #000000;
    display: flex;
    justify-content: space-between;
    text-decoration: none;
}
</style>
