import i18n from "@/i18n"

const Trans = {
    get supportedLocales() {
        return import.meta.env.VITE_SUPPORTED_LOCALES.split(",")
    },

    get defaultLocale() {
        return import.meta.env.VITE_DEFAULT_LOCALE
    },

    set currentLocale(newLocale) {
        i18n.global.locale.value = newLocale

    },
    isLocaleSupported(locale) {
        return Trans.supportedLocales.includes(locale)

    },

    getUserLocale() {
        const locale = window.navigator.language || window.navigator.userLanguage|| Trans.defaultLocale
        return {
            locale: locale,
            localeNoRegion: locale.split('-')[0]
        }
    },

    getPersistedLocale() {
        const persistedLocale = localStorage.getItem("user-locale")
        if(Trans.isLocaleSupported(persistedLocale)){
            return persistedLocale
        } else{
            return null
        }

    },

    guessDefaultLocale(){
        const userPersistedLocale = Trans.getPersistedLocale()
        if(userPersistedLocale){
            return userPersistedLocale
        }
        const userPeferredLocale = Trans.getUserLocale()
        if(Trans.isLocaleSupported(userPeferredLocale.locale)){
            return userPeferredLocale.locale
        }
        if(Trans.isLocaleSupported(userPeferredLocale.localeNoRegion)){
            return userPeferredLocale.localeNoRegion
        }

        return Trans.defaultLocale
    },

    async switchLanguage(newLocale){
        Trans.currentLocale = newLocale
        document.querySelector("html").setAttribute("lang", newLocale)
        localStorage.setItem("user-locale", newLocale)
    }
}

export default Trans