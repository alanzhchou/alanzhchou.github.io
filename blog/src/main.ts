import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import './common.scss'

import { router } from './router';
import { i18n } from './i18n'


createApp(App)
.use(router)
.use(i18n)
.use(ElementPlus)
.mount('#app')
