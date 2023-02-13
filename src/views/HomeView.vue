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
            <div class="nav_labels">
                  <p>Home</p>
                  <p>Dashboard</p>
                  <p>Profile</p>
                  <p>Documentation</p>
                  <p>Contact</p>
            </div>
      </div>

      <div class="banner">
            <img src="uiIcons/challenge.svg" alt="">
            <div class="title">
                  WETLAND MONITORING AND ASSESSMENT SERVICE FOR TRANSBOUNDARY
                BASINS IN SOUTHERN AFRICA <span class="abbreviation">(WeMAST)</span>
            </div>
            <button>Visit Geo-Portal</button>

      </div>
    
     </div>
    
      
       
    
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
#home{
      font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
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
      gap: 4.5rem;
}
.nav_labels{
      position: absolute;
      top: 5vh;
      left: 70vw;
      display: flex;
      flex-direction: row;
      gap: 3.5rem;

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
.banner{
      position: absolute;
      width: 95vw;
      height: 47vh;
      top: 10vh;
     left: 0;
      margin-left: 50px;
      margin-right: 50px;
      background-color: #2e3192;
}
.title{
      font-family: Roboto;
  font-size: 64px;
  margin: 51.6px 0 19px 53.6px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  margin-left: 5vw;
}
.abbreviation {
  font-weight: bold;
  color: #1481c3;
}

</style>