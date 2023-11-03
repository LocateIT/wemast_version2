import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
// import Home from './views/HomeView.vue'
import router from './router'
import i18n from './i18n'

import './assets/main.css'
// import i18n from './i18n'
// import VueNotification from 'vue-notification';
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";
const app = createApp(App)
// .use(i18n)
app.use(router)
app.use(createPinia())
app.use(i18n)
app.use(Toast)
app.mount('#app')
