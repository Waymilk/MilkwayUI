import { router } from './router';
import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import {createWebHashHistory,createRouter} from 'vue-router'
import IconSvg from './components/Icon.vue'
const app = createApp(App)
app.component('icon-svg',IconSvg)
app.use(router)
app.mount('#app')