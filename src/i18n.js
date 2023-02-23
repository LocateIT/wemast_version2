import { createI18n } from 'vue-i18n'

import en from './locales/en/index.js'
import fr from './locales/fr/index.js'
import pt from './locales/pt/index.js'
// import messages from '@intlify/vite-plugin-vue-i18n/messages'

/**
 * Load locale messages
 *
 * The loaded `JSON` locale messages is pre-compiled by `@intlify/vue-i18n-loader`, which is integrated into `vue-cli-plugin-i18n`.
 * See: https://github.com/intlify/vue-i18n-loader#rocket-i18n-resource-pre-compilation
 */
// function loadLocaleMessages() {
//   const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
//   const messages = {}
//   locales.keys().forEach(key => {
//     const matched = key.match(/([A-Za-z0-9-_]+)\./i)
//     if (matched && matched.length > 1) {
//       const locale = matched[1]
//       messages[locale] = locales(key).default
//     }
//   })
//   return messages
// }

const i18n = createI18n({
  legacy: false,
  missingWarn: false, 
  fallbackWarn: false,
  locale: import.meta.env.VITE_I18N_LOCALE || 'en',
  fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || 'pt',
  messages: {
    en,
    fr,
    pt
  }
})

export default i18n