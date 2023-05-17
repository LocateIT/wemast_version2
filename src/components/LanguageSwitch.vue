<template>
   
    <p class="select_language"> Select Language</p>
    <select
    @change="switchLanguage"
    
    >
    <option 
    v-for="sLocale in supportedLocales"
    :key="`locale-${sLocale}`"
    :value="sLocale">
    
    {{ t(`locale.${sLocale}`) }}
    </option>

</select>
  
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import Tr from "@/i18n/translation"


const { t, locale, availableLocales } = useI18n()
const supportedLocales = Tr.supportedLocales

// watch(locale, (newLocale) => {

// })
const switchLanguage = async (e) => {
const newLocale = e.target.value
await Tr.switchLanguage(newLocale)
}

</script>

<style scoped>
.select_language{
    /* font-weight: 600; */
    line-height: 0.5rem;
}

</style>