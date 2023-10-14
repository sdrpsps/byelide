import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { setup as blockSetup } from './setup';

import App from './App.vue';
import router from './router';

import './assets/style.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);

blockSetup(app);

app.mount('#app');
