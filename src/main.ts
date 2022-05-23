import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'nprogress/nprogress.css'
import 'animate.css'
import elemenr_register from './global/register-element'
import { createPinia } from 'pinia'

import './util/css/reset.css'
import './util/css/font.css'
import './util/css/global.css'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(elemenr_register)
app.mount('#app')
