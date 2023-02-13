<template>

     <div id="home">

      
      <!-- <RouterLink to="/">home</RouterLink>
      <br>
      <RouterLink to="/dashboard">dash</RouterLink>
      <RouterView /> -->
      <div class="nav">
            <div class="logos">
                  <img
            src="../assets/logos/SASSCAL.png"
            class="WeMast_Dashboard_logos"
          />
          <img
              src='../assets/logos/Gmes.png'
              class="WeMast_Dashboard_logos"
            />
            <img
              src="../assets/logos/Au.png"
              class="WeMast_Dashboard_logos"
            />
            <img
              src="../assets/logos/EU.png"
              class="WeMast_Dashboard_logos"
            />

            </div>

            <div class="nav_icons">
                  <img src="uiIcons/home-inactive.svg" alt="">
                  <img src="uiIcons/dashboard-inactive.svg" alt="">
                  <img src="uiIcons/person-inactive.svg" alt="">
                  <img src="uiIcons/article-inactive.svg" alt="">
                  <img src="uiIcons/contacts-inactive.svg" alt="">

            </div>
      </div>
    
     </div>
    
      
       
    
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
.nav{
      height: 10vh;
      width: 100vw;
      display: flex;
      flex-direction: row;
      /* background-color: #eb9292; */

}
.nav_icons{
      position: absolute;
      top: 1vh;
      left: 70vw;
      display: flex;
      flex-direction: row;
      gap: 3rem;
}
.logos{
      display: flex;
      flex-direction: row;
      gap: 1rem;
}
.WeMast_Dashboard_logos {
 
 height: 45px;
       
 margin: 2px;

}

</style>