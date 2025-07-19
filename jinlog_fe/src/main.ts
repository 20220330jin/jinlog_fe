import './assets/base.css';
import './assets/main.css';
import './assets/theme.css'; // [추가됨] theme.css 임포트

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');
