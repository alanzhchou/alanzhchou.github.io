import { createI18n } from 'vue-i18n'

import zh from './zh';
import en from './en'


const messages = {
  zh: zh,
  en: en
}

const i18n = createI18n({
  locale: 'zh',
  fallbackLocale: 'en',
  messages
})


export {
  i18n
}