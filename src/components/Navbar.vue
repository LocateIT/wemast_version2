<template>
  <div class="nav flex gap-2">

    <div class="projjj flex gap-2">
      <img class="sasscal h-3rem" src="../assets/logos/WeMAST.png" alt="">

      <div class="project_title flex  flex-wrap">
        <span class="project_title1 font-bold text-bluegray-700">{{ $t("home.wemast_title") }}
        </span>
        <br>
        <span class="wemast_span" style="color:steelblue;font-weight:bold">(WeMAST)</span>
      </div>


    </div>

    <div class="endd flex flex-row gap-8">
      <div class="patners flex flex-row gap-1">
        <img src="../assets/logos/SASSCAL.png" alt="" class="WeMast_Dashboard_logos h-3rem">
        <img src="../assets/logos/Gmes.png" alt="" class="WeMast_Dashboard_logos h-3rem">
        <img src="../assets/logos/Au.png" alt="" class="WeMast_Dashboard_logos h-3rem">
        <img src="../assets/logos/EU.png" alt="" class="WeMast_Dashboard_logos h-3rem">
      </div>

      <!-- <CustomLanguage/> -->
      <div class="languages -mt-3">
        <LanguageSwitch />
      </div>

    </div>


  </div>

</template>

<script setup>

import 'primeflex/primeflex.css'
import LanguageSwitch from './LanguageSwitch.vue';
// const { t } = useI18n({
//             inheritLocale: true,
//             useScope: 'local'
//         })



</script>

<style scoped>
/* @media (min-width: 1366px) { */
.nav {
  width: 100vw;
  height: 10vh;
  margin: 0em 1em;
  font-family: Poppins;
}


</style>