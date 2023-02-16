import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
// import Home from './views/HomeView.vue'
import router from './router'

import './assets/main.css'
// import i18n from './i18n'

const app = createApp(App)
// .use(i18n)
app.use(router)
app.use(createPinia())
app.mount('#app')
