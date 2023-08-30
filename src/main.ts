import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'virtual:uno.css'
import 'uno.css'

import axios from 'axios'

// Configure Axios base URL to point to your Node.js server
axios.defaults.baseURL = 'http://localhost:3000' // Replace with your server's URL

const app = createApp(App)

app.use(router)

app.mount('#app')
