import { createApp } from 'vue'
import App from './App.vue'
import { reveal, inview } from './directives/reveal.js'
import './style.css'

createApp(App).directive('reveal', reveal).directive('inview', inview).mount('#app')
