import { createApp } from 'vue'
import './input.css'
import App from './App.vue'
import '/dist/output.css'
import router from './router'

createApp(App).use(router).mount('#app')
