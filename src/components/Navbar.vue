<template>
  <div class="nav flex gap-2">

    <div class="projjj flex gap-2">
      <img class="sasscal h-3rem" src="../assets/logos/WeMAST.png" alt="">

      <div class="project_title flex  flex-wrap">
        <span class="project_title1 font-bold text-bluegray-700" >{{ $t("home.wemast_title") }}
        </span>
        <br>
        <span class="wemast_span" style="color:steelblue;font-weight:bold">(WeMAST)</span>
      </div>

      
    </div>

    <div class="endd flex flex-row gap-8" >
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
  /* .languages {
    position: absolute;
    top: 0vh;
    left: 86vw;
    z-index: 1000;

  } */

  /* .sasscal {
    height: 50px;
    margin-left: 5vw;
    margin-right: 35px;
    margin-top: 2vh;


  }

  .project_title {
    margin-top: -6vh !important;
    position: relative;
    left: 12vw;



  }

  .project_title1 {
    font-size: 13px;
    font-weight: 500;

  }

  .patners {
    position: absolute;
    top: 1vh;
    z-index: 1000;
    left: 59vw;

  }

  .WeMast_Dashboard_logos {

    height: 42px;

    margin: 2px;

  }

  .languages {
    position: absolute;
    top: 0vh;
    left: 86vw;
    z-index: 1000;

  } */
/* } */

/* @media (min-width: 1920px) {
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
left: 12vw;



}
.project_title1{
font-size: 16px;
font-weight: 500;

}

.patners{
position: absolute;
top: 1vh;
z-index: 1000;
left: 64vw;

}
.WeMast_Dashboard_logos {

height: 50px;

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
  top: 0vh;
  left:90vw;
  z-index: 1000;

}

} */
</style>