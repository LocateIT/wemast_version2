<template>

     <div class="home">

      
      <!-- <RouterLink to="/">home</RouterLink>
      <br>
      <RouterLink to="/dashboard">dash</RouterLink>  @click="$router.push('/dashboard')"
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
                  <img src="/uiIcons/home-inactive.svg" alt="">
                  <img src="/uiIcons/dashboard-inactive.svg" @click="$router.push('/dashboard')" alt="">
                  <img src="/uiIcons/person-inactive.svg" alt="" @click="$router.push('/about')"  >
                  <a href="https://github.com/sethgis/WeMAST_LTG2-Documentation/wiki" target="_blank" rel="noopener noreferrer">
                        <img src="/uiIcons/article-inactive.svg" alt="">
                  </a>
                  <a href="#contact">
                        <img style="position: relative; top: 0.7vh" src="/uiIcons/contacts-inactive.svg" alt="">
                  </a>
                  

            </div>
            <RouterView />
            <div class="nav_labels">
                  <p >Home</p>
                  <p >Dashboard</p>
                  <p>Profile</p>
                  <p>Documentation</p>
                  <p class="nav_contact">Contact</p>
            </div>
            <RouterView />
      </div>

      <div class="banner">
            <img class="bulb" src="/uiIcons/challenge.svg" alt="">
            <div class="title">
                  WETLAND MONITORING AND ASSESSMENT SERVICE <br> FOR TRANSBOUNDARY
                BASINS IN SOUTHERN AFRICA <span class="abbreviation">(WeMAST)</span>
            </div>
            <!-- @click="$router.push('/dashboard')" -->
            <RouterLink to="/dashboard"> 
                  <button class="visit"  >Visit Geo-Portal</button>
            </RouterLink>
           <RouterView />
           
            

      </div>
      
      <div class="showcase">
            <div class="image_icons">
                  <img src="/uiIcons/challenge_hightlight.svg" alt="">
                  <img src="/uiIcons/watch.svg" alt="">
                  <img class="manuals" src="/uiIcons/article.svg" alt="">
                  <img class="analytics_bulb" src="/uiIcons/challenge_hightlight.svg" alt="">
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
                  <img src="/images/geodata.png" alt="" class="hightlight-item">
                  <img src="/images/timeseries.png" alt="" class="hightlight-item">
                  <img src="/uiIcons/documents.png" alt="" class="hightlight-item">
                  <img src="/uiIcons/analytics.png" alt="" class="hightlight-item">
            </div>

      </div>
      <div class="wetlands">
            <p class="wetlands_sadc">Wetlands in SADC</p>
            <p class="eo_products">Earth Observation Products and Services for Sustainable Wetland Management</p>
            <p class="sadc-text">Earth Observation Products and Services for Sustainable Wetland Management The Wetland Monitoring and Assessment Service for Transboundary Basins (WeMAST) Project in Southern African Development Community (SADC) Project was developed and implemented with Earth Observation (EO) data to supports Sustainable Wetland Assessment and Monitoring Services, in order to support policy implementation and management practices in the region</p>
            <div class="sadc_images">
                  <img class="sadc-img" src="/images/sadc1.png" alt="">
                  <img class="sadc-img" src="/images/sadc2.png" alt="">
            </div>
            <div class="caption_icons">
                  <img src="/uiIcons/sadc_arrow_left.svg" alt="">
                  <img src="/uiIcons/sadc_arrow_left.svg" alt="">
            </div>
            <div class="captions">
                  <p  class="caption1">Wetland coverage & status analytics</p>
                  <p class="caption2" > Wetland coverage & status analytics</p>
            </div>
      </div>
      <div id="river_basins">
            <p class="river_basins_title">RIVER BASINS</p>
            <p class="river_basins_infographics">River Basins infographics</p>
            <div class="basins">
                  <div class="basin" id="flamingo">
                         <!-- <img class="basin_img1" src="images/sadc2.png" alt=""> -->
                  </div>
                  <div class="basin" ref="Cuvelai">
                        <p class="cuvelai_basin">The Cuvelai Basin</p>
                        <p class="cuvelai_text">The Cuvelai drainage system channels runoff from Angola’s summer rainfall through a complex system of ephemeral river channels,
                               referred to as the Oshanas.
                                When the system floods, the runoff flows through the shallow channels in a southerly direction to the Etosha pan in Namibia. <br>
                                 <br>
                                    During the wet season, the Oshanas of the Cuvelai drainage system are estimated to support 
                                    around 30 to 40 % of Namibia’s population with subsistence farming and fishing on the seasonal wetlands. 
                                    In addition, the flooded wetlands contain small fish, carried with the runoff from the North, which are joined by 
                                    various pond fauna and draw various bird species, including flamingo, that will also breed in the Fischer’s Pan of the Etosha pan,
                                    and the threatened blue crane. Most of the Etosha pan itself is contained in the Etosha National Park, which hosts a number of rare and
                                    endangered mammals, including the black rhinoceros, and consequently contributes substantially to the local economy with tourism.
                                    The Etosha pan and the Cuvelai drainage system in Namibia are a Ramsar site.
</p>
                  </div>
                  <div class="basin" id="limpopo">
                        <p class="limpopo_basin">The Limpopo Basin</p>
                        <p class="limpopo_text">
                              The majority of wetlands along the Limpopo basin are located in Mozambique and along the Changane River. There are three Ramsar wetland sites in the Limpopo basin: The Makuleke Wetlands, the Nylsvley Nature Reserve and the Verloren Valei Nature Reserve. All three wetland sites have conservation status and therefore contribute to the local economies with tourism. Most of the Makuleke wetlands are situated within the Kruger National Park. The wetlands are of floodplain vlei type and are intermittently filled by floods and rain. They sustain riverine ecosystems, including wildlife, well into the dry season. The floodplains also serve to attenuate floods, thereby reducing flood damage downstream. <br>

                              <br>
                              The Nylsvley Nature Reserve serves as a breeding ground for eight red-listed waterbirds and hosts the endangered roan antelope. It is also the only site where wild rice is found in South Africa. The Verloren Valei Nature Reserve is hydrologically significant as it functions like a sponge in the upper catchment, ensuring the gradual release of water to downstream areas during and after the rainy season. The area provides a refuge for the Wattled Crane and further hosts various vulnerable and threatened plant and mammal species.
                        </p>
                  </div>
                  <div class="basin" id="hippo"></div>
                  <div class="basin" id="waterfall"></div>
                  <div class="basin" id="okavango">
                        <div class="okavango_basin">The Okavango Basin</div>
                        <div class="okavango_text">
                              The Okavango Basin’s main stream, the Okavango River, is southern Africa’s fourth longest river and is produced by seasonal flooding during the summer months. It begins as the Rio Cubango in Angola, flows south to form the border between Angola and Namibia and, in Botswana, it reaches the large swampy inland delta called the Okavango Delta, a UNESCO World Heritage Site.
                              <br>
                              <br>
                              The Okavango River and the delta attract great concentrations of wildlife, including huge elephant and buffalo herds, and consequently fuel a lucrative tourism industry in Namibia and Botswana.
                              <br>
                              <br>
                              Along all rivers and tributaries, the river-based communities rely on the perennial river for small-scale irrigation, subsistence farming and fishing.
                        </div>
                  </div>
                  <div class="basin" id="zambezi">
                        <p class="zambezi_basin">The Zambezi Basin</p>
                        <p class="zambezi_text">The Zambezi basin is the fourth-largest river basin of Africa with a large area covered by wetlands. These include the Barotse Floodplains in Zambia, the Chobe Swamps in northeastern Namibia, the Linyanti Swamp in Botswana, the Busanga Swamps on the Lunga River, the Lukanga Swamps and the Kafue Flats on the Luangwa River, and the Elephant Marsh near the town of Chiromo in Malawi. These wetlands are used for fisheries, including commercial fisheries, agriculture, wildlife management and transportation services. Moreover, these wetlands are important habitats for fish, and its riverine woodlands supports support wildlife and birds, by providing vegetative cover and suitable breeding and feeding grounds, which drive tourism activities, that include photography, bird watching and hunting. Furthermore, the wetlands provide hydrological services by decreasing downstream flood risks. <br>

                              <br>
The construction of the Kariba and Cahora Bassa dams has decreased the size of the floodplain of the lower Zambezi, and consequently the wetlands, but flooding remains perennial</p>
                  </div>
                  <div class="basin" id="lion"></div>

            </div>
      </div>

      <div class="footer">
            <div class="partners">
                  <div class="footer_logos">
                  <img
            src="../assets/logos/SASSCAL.png"
            class="partner-logos"
          />
          <img
              src='../assets/logos/Gmes.png'
              class="partner-logos"
            />
            <img
              src="../assets/logos/Au.png"
              class="partner-logos"
            />
            <img
              src="../assets/logos/EU.png"
              class="partner-logos"
            />

            </div>

            </div>
            <div class="project">
                  <p class="project_name">Project Name</p>
                  <img class="project_logo" src="/images/project_logo.png" alt="">
            </div>
            <div class="project_info">
                  <div class="basin_list">
                        <div class="cuv_basin" @click="scrollToElement('Cuvelai')">The Cuvelai Basin</div>
                        <div class="basin_underline" ></div>

                        <div class="lim_basin">The Limpopo Basin</div>
                        <div class="basin_underline"></div>

                        <div class="oka_basin">The Okavango Basin</div>
                        <div class="basin_underline"></div>

                        <div class="zam_basin">The Zambezi Basin</div>
                        <div class="basin_underline"></div>

                  </div>

                  <div class="contact" id="contact">
                        <p id="coord">WeMAST Project Coordination Team</p>
                        <p>SASSCAL Regional Secretariat</p>
                        <p>28 Robert Mugabe Avenue, (c/o Robert Mugabe and Newton street)</p>
                        <p>Windhoek</p>
                        <p>Namibia</p>
                        <p>Tel 1: +264-(0)-61-223-997</p>
                        <p>Tel 2: +264-(0)-61-248-693</p>
                        <p>Email: info.wemast@sasscal.org</p>

                  </div>
            </div>

            <div class="final_footer">
                  <div class="rights">Copyright All Rights Reserved @2021</div>

                  <div class="policy_terms">
                        <div class="policy">Privacy Policy</div>
                        <div class="terms">Terms of Use</div>
                  </div>

            </div>
      </div>
      
    
     </div>
    
      
       
    
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
// let cuv_ref = ref('Cuvelai')

const scrollToElement = (refName) =>  {
  const el = document.getElementById(ref[refName]);

  if (el) {
    el.scrollIntoView();
    console.log(ref[refName], 'ref name')
  }
}
// const scrollMeTo = (refName) => {
//       let element = ref[refName];

//       let top = element.offsetTop;

//       window.scrollTo(0, top);
//     }

</script>

<style scoped>
.home{
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
.nav_contact{
      position: absolute;
      left: 24.5vw;
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
.wetlands_sadc{
      position: absolute;
      top:95vh ;
      left: 3.5vw; 
      /* font-family: Montserrat; */
  font-size: 50px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #323690;   
}
.eo_products{
      position: absolute;
      top:1000px ;
      left: 3.5vw;  
      /* font-family: Roboto; */
  font-size: 30px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: normal;
  text-align: left;
  color: #050000;
}
.sadc-text {
  /* font-family: Roboto; */
  position: absolute;
      top:1070px ;
      left: 3.5vw;
  font-size: 30px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: normal;
  text-align: left;
  color: #707070;
}
.sadc-img {
  width: 50%;

  object-fit: contain;
  
}
.sadc_images{
      position: absolute;
      top:1270px ;
      left: 3.5vw;
      display: flex;
      flex-direction: row;
      gap: 10px;
}
.caption_icons{
      position: absolute;
      top:1860px ;
      left: 3.5vw;
      display: flex;
      flex-direction: row;
      gap: 56rem;

     

}
.captions{
      position: absolute;
      top:1857px ;
      left: 3.5vw;
      display: flex;
      flex-direction: row;
      gap: 56rem;
      font-size: 16px;
  margin-bottom: 2px;
}
.caption1{
      position: relative;
      top:-1.5vh;
      left: 1.5vw;

}
.caption2{
      position: relative;
      top:-1.5vh;
      left: -10.5vw;

}
#river_basins{
   position: absolute;
   top: 2000px;
   left: 3.5vw;
}
.river_basins_title {
 
 
  font-size: 50px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #323690;
}
.river_basins_infographics{
      font-size: 30px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: normal;
  text-align: left;
  color: #050000;
}

.basins{
      position: absolute;
   top: 250px;
   /* left: 3.5vw;    */
   
   
   
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: rem;


}



.basin {
  background-color: rgb(214, 217, 219);
  color: white;
  padding: 1rem;
  height: 37rem;
  width: 53rem;
}

@media (min-width: 900px) {
  .basins { grid-template-columns: repeat(2, 1fr); }
}

#flamingo{
      background-image: url('/images/sadc2.png');
      background-repeat: no-repeat ;
      background-size: 55rem 39rem;
   
}
.cuvelai_basin{
      position: relative;
      top: -4vh;
      font-size: 40px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: left;
  color: #323690;
  margin-top: 20px;
  padding: 30px 0px 0px 30px;
}
.cuvelai_text{
      position: relative;
      top: -8vh;
      font-size: 23px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: normal;
  text-align: left;
  color: #707995;
  padding: 30px;
}
.limpopo_basin{
      position: relative;
      top: -3vh;
      font-size: 40px;
      font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: left;
  color: #1c80c3;
  margin-top: 20px;
  padding: 30px 0px 0px 30px;

}
#limpopo{
      background-color: #353996;
      height: 50rem;
}
.limpopo_text {
  /* font-family: Roboto; */
  position: relative;
      top: -8vh;
  font-size: 23px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  padding: 30px;
}
#hippo{
      background-image: url('/images/hippo.png');
      background-repeat: no-repeat ;
      background-size: 55rem 52rem;
      height: 50rem;

}
#waterfall{
      background-image: url('/images/waterfall.png');
      background-repeat: no-repeat ;
      background-size: 55rem 52rem;
      height: 50rem;

}
.okavango_basin{
      position: relative;
      top: -4vh;
      font-size: 40px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: left;
  color: #323690;
  margin-top: 20px;
  padding: 30px 0px 0px 30px;
}
.okavango_text{
      font-size: 23px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: normal;
  text-align: left;
  color: #707070;
  padding: 30px;
}
#okavango{
      height: 50rem;

}
#zambezi{
     background-color:  #1481c3;
     height: 50rem;

}
.zambezi_basin{
      /* position: relative;
      top: -4vh; */
      font-size: 40px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: left;
  color: #323690;
  margin-top: 20px;
  padding: 30px 0px 0px 30px;

}
.zambezi_text{
      font-size: 23px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  padding: 30px;
}
#lion{
      background-image: url('/images/lion.png');
      background-repeat: no-repeat ;
      background-size: 55rem 52rem;
      height: 50rem;
}
.footer{
      position: absolute;
      top: 5400px;
      left: 3.5vw;   
      display: flex;
      flex-direction: row;
      gap: 50rem;
}
@media screen and (max-width: 600px) {
  .partner-logos {
    height: 93.8px;
    width: 100%;
    object-fit: contain;
  }
}
.partner-logos {
  height: 93.8px;
  object-fit: contain;
}
.project-name {
    /* float: right; */
    position: relative;
    top: -3vh;
    font-weight:800;
  }
  .project_logo {
  height: 73.8px;
  object-fit: contain;
}
@media screen and (min-width: 769px) {
  .project_logo {
      position: relative;
    top: -3vh;
    height: 93.8px;

    object-fit: contain;
  }
  .project_name {
    /* float: right; */
    position: relative;
    top: -3vh;
    font-weight:600;
  }
}

.project_info{
      position: absolute;
      top: 15vh;
      left: -.5vw;   
      display: flex;
      flex-direction: row;
      gap: 50rem;
      height: 35vh;
      width: 92.5vw;
      background-color: #151548;

}
.basin_list{
      cursor: pointer;
  /* font-family: Roboto; */
  font-size: 30px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff; 
  padding: 20px; 
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.basin_underline {
  width: 324.4px;
  height: 0;
  margin: 1.7px 3.6px 0 0;
  border: solid 1px #ffffff;
}
.contact{
      position: relative;
      left: 12vw;
      display: flex;
      flex-direction: column;
      gap: -10px;
      color: #ffffff;
      font-size: 12px;
}
#coord{
      font-weight: 800;
}
.final_footer{
      position: absolute; 
      top: 460px;
      left: -.5vw; 
      height: 15vh;
      width: 92.5vw;
      background-color: #05051f;
      display: flex;
      flex-direction: row;
      gap: 50rem;
}
.rights{
      position: relative;
      top: 2vh;
      left: 1vw;
      font-size: 21px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
}
.policy_terms{
      position: relative;
      top: 2vh;
      left: 15vw;
      display: flex;
      flex-direction: row;
      gap: 7rem;
      color: #ffffff;
      font-size: 21px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: left;
}
</style>