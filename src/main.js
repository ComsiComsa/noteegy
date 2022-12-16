import { createApp, markRaw } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from '@/router/index.js';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/firebase';

const pinia = createPinia()

pinia.use(({ store }) => {
    store.router = markRaw(router)
})

let app

onAuthStateChanged(auth, () => {
    if (!app) {
        app = createApp(App)
            .use(pinia)
            .use(router)
            .mount('#app')
    }
})
