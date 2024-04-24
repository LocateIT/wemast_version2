<template>

    <div class="flex flex-column gap-1">
        <p class="">Select Language</p>
        <select class="lang" @change="switchLanguage">
            <option class="lang_options" v-for="sLocale in supportedLocales" :key="`locale-${sLocale}`"
                :value="sLocale">

                {{ t(`locale.${sLocale}`) }}
            </option>


        </select>
    </div>

</template>

<script setup>
import 'primeflex/primeflex.css'
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
.select_language {
    /* font-weight: 600; */
    line-height: 0.5rem;
}

.lang {
    outline: none;
    border: none;
    font-family: Poppins;
}

.lang_options {
    border-bottom: 1px;
    padding: 5px;

}
</style>