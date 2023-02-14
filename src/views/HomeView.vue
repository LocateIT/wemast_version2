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
            <img class="bulb" src="uiIcons/challenge.svg" alt="">
            <div class="title">
                  WETLAND MONITORING AND ASSESSMENT SERVICE <br> FOR TRANSBOUNDARY
                BASINS IN SOUTHERN AFRICA <span class="abbreviation">(WeMAST)</span>
            </div>
            <button class="visit">Visit Geo-Portal</button>

      </div>
      <div class="showcase">
            <div class="image_icons">
                  <img src="uiIcons/challenge_hightlight.svg" alt="">
                  <img src="uiIcons/watch.svg" alt="">
                  <img class="manuals" src="uiIcons/article.svg" alt="">
                  <img class="analytics_bulb" src="uiIcons/challenge_hightlight.svg" alt="">
            </div>
            <div class="image_text">
                  <p class="geodata">Geo-Data</p>
                  <p class="timeseries">Time-Series</p>
                  <p class="documentation">Documenatation & Manuals</p>
                  <p class="analytics">Analytics</p>
            </div>

            <div class="img_subtext">
                  <p class="geodata_subtext">Geo-Spatial data covering the River Basins</p>
                  <p class="timeseries_subtext">Historical analytics of Geo- Spatial data</p>
                  <p class="documentation_subtext">Chronological instructions & processing chains</p>
                  <p class="analytics_subtext">Statistical visualisation of Geo- Spatial data</p>
            </div>
            <div class="screenshot_carosel">
                  <img src="images/geodata.png" alt="" class="hightlight-item">
                  <img src="images/timeseries.png" alt="" class="hightlight-item">
                  <img src="uiIcons/documents.png" alt="" class="hightlight-item">
                  <img src="uiIcons/analytics.png" alt="" class="hightlight-item">
            </div>

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
      /* padding: 2vh; */
}
.title{
      /* font-family: Roboto; */
  font-size: 64px;
  margin: 51.6px 0 19px 53.6px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  margin-left: 8vw;
  margin-top: -6vh;
}
.abbreviation {
  font-weight: bold;
  color: #1481c3;
}
.visit{
      text-decoration:none;
       color:white; 
       cursor:pointer;
       background-color: #2e3192;
       border:  #1481c3 4px solid;
       width: 250px;
       height: 50px;
       border-radius: 50px;
       font-size: 20px;
       margin-left: 8vw;

}
.bulb{
      margin-top: 2vh;
}
.image_icons{
      position: absolute;
      top:62vh ;
      left: 3.5vw;
      display: flex;
     flex-direction: row;
     gap: 25rem;
}
.manuals{
      position: relative;
      left: 2.5vw;
}
.analytics_bulb{
      position: relative;
      left: 2.5vw;   
}
.image_text{
      position: absolute;
      top:60.5vh ;
      left: 5vw;
      display: flex;
     flex-direction: row;
  gap: 25rem;
  /* font-family: Montserrat; */
  font-size: 17px;
  font-weight: bold;
  /* font-stretch: normal; */
  font-style: normal;
  /* line-height: 1.18; */
  letter-spacing: normal;

  color: #2e3192;
}
.geodata{
      position: relative;
  
      left: 0.5vw;   
}
.timeseries{
      position: relative;
  
      left: -1.3vw;   
}
.documentation{
      position: relative;
  
      left: -1.8vw;   
}
.analytics{
      position: relative;
  
      left: -11.5vw;   
}


.img_subtext{
      position: absolute;
      top:63vh ;
      left: 3.5vw;
      display: flex;
     flex-direction: row;
     gap: 25rem;
     /* font-family: Montserrat; */
  font-size: 14px;
  font-weight: normal;
  /* font-stretch: normal; */
  font-style: normal;
  /* line-height: 1.18; */
  letter-spacing: normal;
  /* text-align: left; */
  color: #707070;

 
}

.geodata_subtext{
      position: relative;
      left: 1.8vw;  
      /* background-color: #f89999;  */
      width: 500px;
}
.timeseries_subtext{
      position: relative;
      left: -22vw;  
      /* background-color: #f89999;  */
      width: 500px;
}
.documentation_subtext{
      position: relative;
      left: -43.6vw;  
      /* background-color: #f89999;  */
      width: 500px;
}
.analytics_subtext{
      position: relative;
      left: -67.6vw;  
      /* background-color: #f89999;  */
      width: 400px;
}
.screenshot_carosel{
      position: absolute;
      top:68vh ;
      left: 3.5vw;
      display: flex;
     flex-direction: row;
     gap: 3rem;
}
.hightlight-item {
     
  width: 40%;
  height: 200px;
  object-fit: fill;
}

</style>