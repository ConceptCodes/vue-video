import { createApp } from 'vue'
import App from './App.vue'
import embed from 'v-video-embed'


createApp(App)
    .use(embed)
    .mount('#app')
