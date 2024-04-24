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
import PrimeVue from 'primevue/config';
import "primeflex/primeflex.css";
import "primevue/resources/themes/aura-light-green/theme.css";
// import "primeicons/primeicons.css";
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import FloatLabel from 'primevue/floatlabel';
import Menubar from 'primevue/menubar';
import InputText from 'primevue/inputtext';
// import Sidebar from 'primevue/sidebar';
import SplitButton from 'primevue/splitbutton';
import Card from 'primevue/card';

const app = createApp(App)
// .use(i18n)
app.use(router)
app.use(createPinia())
app.use(i18n)
app.use(Toast)
app.use(PrimeVue);

app.component('Dropdown', Dropdown);
app.component('Button', Button);
app.component('FloatLabel', FloatLabel);
app.component('InputText', InputText);
app.component('Menubar', Menubar);
// app.component('Sidebar', Sidebar);
app.component('SplitButton', SplitButton);
app.component('Card', Card);

app.mount('#app')
