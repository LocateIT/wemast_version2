<template>
    <div class="nav">
        
            <img class="sasscal" src="../assets/logos/WeMAST.png" alt="">
      
        <div class="project_title">

           <span class="project_title1">{{ t('wemast_title') }} {{ t('wemast_subtitle') }}</span> 
          <br>
          <span class="wemast_span" style="color:steelblue;font-weight:bold">(WeMAST)</span>
        </div>
     
        <div class="patners">
            <img src="../assets/logos/SASSCAL.png" alt="" class="WeMast_Dashboard_logos">
            <img src="../assets/logos/Gmes.png" alt="" class="WeMast_Dashboard_logos">
            <img src="../assets/logos/Au.png" alt="" class="WeMast_Dashboard_logos">
            <img src="../assets/logos/EU.png" alt="" class="WeMast_Dashboard_logos">
        </div>

        <div class="languages">
          
          <!-- <CustomLanguage/> -->
        </div>
        

    </div>
  
</template>

<script setup>
// import Misc from '../misc.vue';

// import HelloI18n from './HelloI18n.vue';
import { useI18n } from "vue-i18n"
  import i18n from '../i18n.js';
// import Languages from './Languages.vue'

import CustomLanguage from './CustomLanguage.vue';
const { t } = useI18n({
            inheritLocale: true,
            useScope: 'local'
        })



</script>

<style scoped>
    .nav{
        width: 100vw;
        height: 10vh;
    }
    .sasscal {
      height: 50px;
  margin-left: 5vw;
  margin-right: 35px;
  margin-top: 2vh;

  
}
.project_title {
  margin-top: -6vh !important;
  position: relative;
  left: 15vw;
  /* text-transform: uppercase; */
 
  
}
.project_title1{
  font-size: 16px;
  font-weight: 500;
  /* font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; */
}

.patners{
  position: absolute;
  top: 2vh;
  z-index: 1000;
  left: 58vw;
  
}
.WeMast_Dashboard_logos {
 
 height: 45px;

 margin: 2px;

}
.partners_logos{
    position: absolute;
    top:1.5vh;
    left:41vw ;
  
}
.gmes{
    width:120px;
  height: 45px;
  margin: 1px;
}
.au{
    width:85px;
  height: 45px;
}
.eu{
    width:69px;
  height: 45px;
}
.wemast_logo{
    position: absolute;
    top:.8vh;
    left:32vw ;
    width:80px;
  height: 45px;
  
}

.nav_icons{
    position: absolute;
    top:2vh;
    left:85vw; 
    display: flex;
    gap: 2em;
    /* margin: 20px; */
}
.icon_titles{
    position: absolute;
    top: 4vh;
    left:82vw; 
    display: flex;
    gap: 2em;
    margin: 20px;
    width: 36px;
}

.languages{
  position: absolute;
    top: 2.7vh;
    left:85vw;
    z-index: 1000;

}



</style>