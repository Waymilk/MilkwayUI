import { router } from './router';
import { createApp } from 'vue'
import './index.scss'
// import {createWebHashHistory,createRouter} from 'vue-router'
// import IconSvg from './components/Icon.vue'
// // import Markdown from './components/Markdown.vue'
import 'github-markdown-css'
import App from './App.vue'

const app = createApp(App)
// // app.component('icon-svg',IconSvg)
// // app.component('Markdown',Markdown)
app.use(router)
app.mount('#app')