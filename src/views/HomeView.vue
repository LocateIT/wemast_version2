<template>
      <div class="home" id="homepage">


            <!-- <RouterLink to="/">home</RouterLink>
      <br>
      <RouterLink to="/dashboard">dash</RouterLink>  @click="$router.push('/dashboard')"
      <RouterView /> -->
            <div class="nav">
                  <div class="logos">
                        <img src="../assets/logos/SASSCAL.png" class="WeMast_Dashboard_logos" />
                        <img src='../assets/logos/Gmes.png' class="WeMast_Dashboard_logos" />
                        <img src="../assets/logos/Au.png" class="WeMast_Dashboard_logos" />
                        <img src="../assets/logos/EU.png" class="WeMast_Dashboard_logos" />

                  </div>

                  <div class="languages">
                        <LanguageSwitch />
                  </div>

                  <div class="nav_icons">
                        <img src="/uiIcons/home-inactive.svg" alt="">
                        <img src="/uiIcons/dashboard-inactive.svg" @click="$router.push('/dashboard')" alt="">
                        <img src="/uiIcons/person-inactive.svg" alt="" @click="$router.push('/signup')">
                        <a href="https://github.com/sethgis/WeMAST_LTG2-Documentation/wiki" target="_blank"
                              rel="noopener noreferrer">
                              <img src="/uiIcons/article-inactive.svg" alt="">
                        </a>
                        <a href="#contact">
                              <img style="position: relative; top: 0.7vh" src="/uiIcons/contacts-inactive.svg" alt="">
                        </a>


                  </div>
                  <RouterView />
                  <div class="nav_labels">
                        <p>{{ $t("home.home") }}</p>
                        <p>{{ $t("home.dashboard") }}</p>
                        <p>{{ $t("home.profile") }}</p>
                        <p>{{ $t("home.documentation") }}</p>
                        <p class="nav_contact">{{ $t("home.contact") }}</p>
                  </div>
                  <RouterView />
            </div>



            <div class="banner">
                  <img class="bulb" src="/uiIcons/challenge.svg" alt="">
                  <div class="title">
                        {{ $t("home.wemast_title") }} <span class="abbreviation">(WeMAST)</span>
                  </div>
                  <!-- @click="$router.push('/dashboard')" -->
                  <RouterLink to="/dashboard">
                        <button class="visit">{{ $t("home.visit_portal") }}</button>
                  </RouterLink>
                  <RouterView />



            </div>

            <div class="showcase">
                  <div class="image_icons">
                        <img src="/uiIcons/challenge_hightlight.svg" alt="">
                        <img src="/uiIcons/watch.svg" alt="">
                        <img class="manuals" src="/uiIcons/article.svg" alt="" id="docs_icon">
                        <img class="analytics_bulb" src="/uiIcons/challenge_hightlight.svg" alt="">
                  </div>
                  <div class="image_text">
                        <p class="geodata">{{ $t("home.geodata") }}</p>
                        <p class="timeseries">{{ $t("home.timeseries") }}</p>
                        <p class="documentation">{{ $t("home.docs_manuals") }}</p>
                        <p class="analytics">{{ $t("home.analytics") }}</p>
                  </div>

                  <div class="img_subtext">
                        <p class="geodata_subtext">{{ $t("home.geodata_text") }}</p>
                        <p class="timeseries_subtext">{{ $t("home.timeseries_text") }}</p>
                        <p class="documentation_subtext">{{ $t("home.manual_text") }}</p>
                        <p class="analytics_subtext">{{ $t("home.analytics_text") }}</p>
                  </div>
                  <div class="screenshot_carosel">
                        <img src="/images/geodata.png" alt="" class="hightlight-item">
                        <img src="/images/timeseries2.png" alt="" class="hightlight-item">
                        <img src="/uiIcons/documents.png" alt="" class="hightlight-item">
                        <img src="/uiIcons/analytics.png" alt="" class="hightlight-item">
                  </div>

            </div>
            <div class="wetlands">
                  <p class="wetlands_sadc">{{ $t("home.wetlands_sadc") }}</p>
                  <p class="eo_products">{{ $t("home.eo_products") }}</p>
                  <p class="sadc-text">{{ $t("home.sadc_text") }}</p>
                  <div class="sadc_images">
                        <img class="sadc-img" src="/images/sadc1.png" alt="">
                        <img class="sadc-img" src="/images/sadc2.png" alt="">
                  </div>
                  <div class="caption_icons">
                        <img src="/uiIcons/sadc_arrow_left.svg" alt="">
                        <img src="/uiIcons/sadc_arrow_left.svg" alt="">
                  </div>
                  <div class="captions">
                        <p class="caption1">{{ $t("home.status_analytics") }}</p>
                        <p class="caption2"> {{ $t("home.status_analytics") }}</p>
                  </div>
            </div>
            <div id="river_basins">
                  <p class="river_basins_title">{{ $t("home.river") }}</p>
                  <p class="river_basins_infographics">{{ $t("home.infographics") }}</p>
                  <div class="basins">
                        <div class="basin" id="flamingo">
                              <!-- <img class="basin_img1" src="images/sadc2.png" alt=""> -->
                        </div>
                        <div class="basin" ref="Cuvelai" id="cuvelai_basin_id">
                              <p class="cuvelai_basin">{{ $t("home.cuvelai_basin") }}</p>
                              <p class="cuvelai_text">
                                    {{ $t("home.cuv_text") }}
                              </p>
                        </div>
                        <div class="basin" id="limpopo">
                              <p class="limpopo_basin" id="limpopo_basin_id">{{ $t("home.limpopo_basin") }}</p>
                              <p class="limpopo_text">
                                    {{ $t("home.lim_text") }}
                              </p>
                        </div>
                        <div class="basin" id="hippo"></div>
                        <div class="basin" id="waterfall"></div>
                        <div class="basin" id="okavango">
                              <div class="okavango_basin" id="okavango_basin_id">{{ $t("home.okavango_basin") }}</div>
                              <div class="okavango_text">
                                    {{ $t("home.oka_text") }}
                              </div>
                        </div>
                        <div class="basin" id="zambezi">
                              <p class="zambezi_basin" id="zambezi_basin_id">{{ $t("home.zambezi_basin") }}</p>
                              <p class="zambezi_text">{{ $t("home.zam_text") }} </p>
                        </div>
                        <div class="basin" id="lion"></div>

                  </div>
            </div>

            <div class="footer">
                  <div class="partners">
                        <div class="footer_logos">
                              <img src="../assets/logos/SASSCAL.png" class="partner-logos" />
                              <img src='../assets/logos/Gmes.png' class="partner-logos" />
                              <img src="../assets/logos/Au.png" class="partner-logos" />
                              <img src="../assets/logos/EU.png" class="partner-logos" />

                        </div>

                  </div>
                  <div class="project">
                        <p class="project_name">{{ $t("home.project_name") }}</p>
                        <img class="project_logo" src="/images/project_logo.png" alt="">
                  </div>
                  <div class="project_info">
                        <div class="basin_list">
                              <div class="cuv_basin" @click="scrollToCuvelaiBasin">{{ $t("home.cuvelai_basin") }}</div>
                              <div class="basin_underline"></div>

                              <div class="lim_basin" @click="scrollToLimpopoBasin">{{ $t("home.limpopo_basin") }}</div>
                              <div class="basin_underline"></div>

                              <div class="oka_basin" @click="scrollToOkavangoBasin">{{ $t("home.okavango_basin") }}</div>
                              <div class="basin_underline"></div>

                              <div class="zam_basin" @click="scrollToZambeziBasin">{{ $t("home.zambezi_basin") }}</div>
                              <div class="basin_underline"></div>

                        </div>

                        <div class="contact_list" id="contact_flex">
                              <p id="coord">{{ $t("home.coord_team") }}</p>
                              <p>{{ $t("home.secretariat") }}</p>
                              <p>28 Robert Mugabe Avenue, (c/o Robert Mugabe and Newton street)</p>
                              <p>Windhoek</p>
                              <p>Namibia</p>
                              <p>Tel 1: +264-(0)-61-223-997</p>
                              <p>Tel 2: +264-(0)-61-248-693</p>
                              <p>Email: info.wemast@sasscal.org</p>

                        </div>
                  </div>

                  <div class="final_footer">
                        <div class="rights">{{ $t("home.copyright") }}</div>

                        <div class="policy_terms">
                              <div class="policy">{{ $t("home.privacy") }}</div>
                              <div class="terms">{{ $t("home.terms") }}</div>
                        </div>

                  </div>
            </div>


      </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
import LanguageSwitch from '../components/LanguageSwitch.vue';
import RescaleScreen from '../components/RescaleScreen.vue';



let scale_div = ref(
      window.devicePixelRatio !== 1 || window.innerWidth !== screen.width
);

// let cuv_ref = ref('Cuvelai')
const opendisplaysettings = () => {
      var displaySettingsURI = "ms-settings:display";

      // Open the display settings page
      window.location.href = displaySettingsURI;
};

// Check if the user's screen scale is not 100% (1.0) or the screen layout is not as expected
if (window.devicePixelRatio !== 1 || window.innerWidth !== screen.width) {
      // Prompt the user to adjust their screen settings
      if (
            confirm(
                  "For the best experience, please change your screen scale and layout to 100%. Go to display setting, Under Scale and layout, select 100% (recommended)"
            )




      ) {
            opendisplaysettings()
            // You can provide instructions on how to change these settings here, but you can't change them directly from JavaScript
            // Example instructions:
            // confirm("Follow the next instructions");
            // opendisplaysettings()
            // var displaySettingsURI = "ms-settings:display";
            //         // Open the display settings page
            //         window.location.href = displaySettingsURI;
      } else {
            // The user chose not to change their settings
            alert(
                  "You can change your screen scale and layout settings later for a better experience."
            );
      }
}

const scrollToElement = (refName) => {
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
const scrollToCuvelaiBasin = () => {
      document.getElementById('cuvelai_basin_id').scrollIntoView();
}
const scrollToLimpopoBasin = () => {
      document.getElementById('limpopo_basin_id').scrollIntoView();
}
const scrollToZambeziBasin = () => {
      document.getElementById('zambezi_basin_id').scrollIntoView();
}
const scrollToOkavangoBasin = () => {
      document.getElementById('okavango_basin_id').scrollIntoView();
}

</script>

<style scoped>
.home {

      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

#homepage {
      overflow: hidden;
}

.nav {
      height: 10vh;
      width: 100vw;
      display: flex;
      flex-direction: row;
      /* background-color: #eb9292; */

}

.languages {
      margin-left: 2vw;
      margin-top: -1vh;
}

.nav_icons {
      position: absolute;
      top: 1vh;
      left: 70vw;
      display: flex;
      flex-direction: row;
      gap: 4.5rem;
}

.nav_labels {
      position: absolute;
      top: 5vh;
      left: 70vw;
      display: flex;
      flex-direction: row;
      gap: 3.5rem;

}

.nav_contact {
      position: absolute;
      left: 24.5vw;
}

.logos {
      display: flex;
      flex-direction: row;
      gap: 1rem;
}

.WeMast_Dashboard_logos {

      height: 45px;

      margin: 2px;

}

.banner {
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

.title {
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

.visit {
      text-decoration: none;
      color: white;
      cursor: pointer;
      background-color: #2e3192;
      border: #1481c3 4px solid;
      width: 250px;
      height: 50px;
      border-radius: 50px;
      font-size: 20px;
      margin-left: 8vw;

}

@media screen and (max-width: 1400px) {
      .nav_icons {
            position: absolute;
            top: 1vh;
            left: 54vw;
            display: flex;
            flex-direction: row;
            gap: 4.5rem;
      }

      .nav_labels {
            position: absolute;
            top: 5vh;
            left: 54vw;
            display: flex;
            flex-direction: row;
            gap: 3.5rem;

      }

      .nav_contact {
            position: absolute;
            left: 33.5vw;
      }

      .title {
            /* font-family: Roboto; */
            width: 1150px !important;
            font-size: 48px;
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

      .image_icons {
            position: absolute;
            top: 62vh;
            left: 3.5vw;
            display: flex;
            flex-direction: row;
            gap: 18rem !important;
      }

      .image_text {
            position: absolute;
            top: 60.5vh;
            left: 5vw;
            display: flex;
            flex-direction: row;
            gap: 18rem !important;
            /* font-family: Montserrat; */
            font-size: 17px;
            font-weight: bold;
            /* font-stretch: normal; */
            font-style: normal;
            /* line-height: 1.18; */
            letter-spacing: normal;

            color: #2e3192;
      }

      .geodata {
            position: absolute;
            white-space: nowrap;
            left: 5vw;
      }

      .timeseries {
            position: absolute;
            white-space: nowrap;
            /* background-color: #a82121; */
            margin-left: -0.5vw;
      }

      .documentation {
            position: absolute;
            white-space: nowrap;
            /* background-color: #a82121; */
            margin-left: -3.5vw;
      }

      #docs_icon {
            margin-left: -2.5vw;
      }

      p.analytics {
            position: relative;
            white-space: nowrap;
            left: -15vw;
      }

      .screenshot_carosel {
            position: absolute;
            top: 68vh;
            left: 3.5vw;
            width: 50vw;
            display: flex;
            flex-direction: row;
            gap: 0.2rem;
      }

      .hightlight-item {

            width: 150px;
            height: 150px !important;
            object-fit: fill;
      }

      .geodata_subtext {
            position: relative;
            left: 1.8vw;
            /* background-color: #f89999;  */
            width: 500px;
            font-size: 13px;
      }


      p.timeseries_subtext {
            position: relative;
            margin-left: -16.5vw;
            /* background-color: #f89999;  */
            width: 500px;
            font-size: 13px;
      }

      .documentation_subtext {
            position: relative;
            margin-left: -19.5vw;
            /* background-color: #f89999;  */
            width: 500px;
            font-size: 13px;
      }

      .analytics_subtext {
            position: relative;
            margin-left: -17.3vw;
            /* background-color: #f89999;  */
            width: 400px;
            font-size: 13px;
      }

      /* .wetlands{
  
      overflow-wrap: break-word !important;
      padding: 5px;
     
      background-color: #f89999;
} */

      .sadc-text {
            /* font-family: Roboto; */
            position: absolute;
            top: 1070px;
            left: 3.5vw;
            right: 2vw !important;
            width: 90% !important;
            /* word-break: break-word; */
            font-size: 24px !important;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.3;
            letter-spacing: normal;
            text-align: left;
            color: #707070;
      }

      .sadc_images {
            position: absolute;
            top: 1270px;
            left: 3.5vw;
            display: flex;
            flex-direction: row;
            gap: 8px;
      }

      .sadc-img {
            width: 45% !important;

            object-fit: contain;

      }

      .caption_icons {
            position: absolute;
            top: 1660px !important;
            ;
            left: 3.5vw;
            display: flex;
            flex-direction: row;
            gap: 37rem !important;



      }

      .captions {
            position: absolute;
            top: 1660px !important;
            left: 3.5vw;
            display: flex;
            flex-direction: row;
            gap: 37rem !important;
            font-size: 16px;
            margin-bottom: 2px;
      }

      .caption1 {
            position: relative;
            top: -1.5vh;
            left: 2vw !important;

      }

      .caption2 {
            position: relative;
            top: -1.5vh;
            left: -14.5vw !important;

      }


      #river_basins {
            position: absolute;
            top: 1700px !important;
            left: 3.5vw;
      }

      .basins {
            position: absolute;
            top: 250px;

            max-width: 1200px;
            margin: 0 auto;
            display: grid;



      }

      .basin {
            background-color: rgb(214, 217, 219);
            color: white;
            padding: 1rem;
            height: 37rem;
            width: 38rem !important;
      }

      /* @media (min-width: 900px) {
  .basins { grid-template-columns: repeat(2, 1fr) !important;
}
} */

      #flamingo {
            background-image: url('/images/sadc2.png');
            background-repeat: no-repeat;
            background-size: 42rem 39rem !important;

      }

      .cuvelai_basin {
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
            padding: 20px 0px 0px 20px !important;
      }

      .cuvelai_text {
            position: relative;
            top: -9vh !important;
            width: 500px;
            font-size: 19.5px !important;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.22;
            letter-spacing: normal;
            text-align: left;
            color: #707995;
            padding: 20px !important;
      }

      .limpopo_text {
            /* font-family: Roboto; */
            position: relative;
            top: -10vh !important;
            font-size: 22px !important;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.22;
            letter-spacing: normal;
            text-align: left;
            color: #ffffff;
            padding: 30px;
      }

      #hippo {
            background-image: url('/images/hippo.png');
            background-repeat: no-repeat;
            background-size: 40rem 52rem !important;
            height: 50rem;

      }

      .okavango_text {
            position: relative;
            top: 2vh !important;
            width: 500px;
            font-size: 22px !important;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.22;
            letter-spacing: normal;
            text-align: left;
            color: #707995;
            padding: 20px !important;
      }

      .zambezi_text {
            position: relative;
            top: -4vh;
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

      .footer {
            position: absolute;
            top: 5200px !important;
            left: 3.5vw;
            display: flex;
            flex-direction: row !important;
            gap: 20rem !important;
      }

      .partner-logos {
            height: 93.8px;
            object-fit: contain;
      }

      .project_info {
            position: absolute;
            top: 15vh;
            left: -.5vw;
            display: flex;
            flex-direction: row;
            gap: 22rem !important;
            height: 35vh;
            width: 92.5vw;
            background-color: #151548;

      }

      #contact_flex {
            height: 290px !important;
            width: 350px;
            /* background-color: #d35454; */
      }

      .contact_list {
            position: relative;
            left: 12vw;
            display: flex;
            flex-direction: column;
            gap: -2.5rem !important;
            color: #ffffff;
            font-size: 12px;
      }

      .final_footer {
            position: absolute;
            top: 460px;
            left: -.5vw;
            height: 15vh;
            width: 92.5vw;
            background-color: #05051f;
            display: flex;
            flex-direction: row;
            gap: 22rem !important;
      }



}



.bulb {
      margin-top: 2vh;
}

.image_icons {
      position: absolute;
      top: 62vh;
      left: 3.5vw;
      display: flex;
      flex-direction: row;
      gap: 25rem;
}

.manuals {
      position: relative;
      left: 2.5vw;
}

.analytics_bulb {
      position: relative;
      left: 2.5vw;
}

.image_text {
      position: absolute;
      top: 60.5vh;
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

.geodata {
      position: relative;

      left: 0.5vw;
}

.timeseries {
      position: relative;

      left: -1.3vw;
}

.documentation {
      position: relative;

      left: -1.8vw;
}

.analytics {
      position: relative;

      left: -11.5vw;
}

.img_subtext {
      position: absolute;
      top: 63vh;
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

.geodata_subtext {
      position: relative;
      left: 1.8vw;
      /* background-color: #f89999;  */
      width: 500px;
}

.timeseries_subtext {
      position: relative;
      left: -22vw;
      /* background-color: #f89999;  */
      width: 500px;
}

.documentation_subtext {
      position: relative;
      left: -43.6vw;
      /* background-color: #f89999;  */
      width: 500px;
}

.analytics_subtext {
      position: relative;
      left: -67.6vw;
      /* background-color: #f89999;  */
      width: 400px;
}

.screenshot_carosel {
      position: absolute;
      top: 68vh;
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

.wetlands_sadc {
      position: absolute;
      top: 95vh;
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

.eo_products {
      position: absolute;
      top: 1000px;
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
      top: 1070px;
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

.sadc_images {
      position: absolute;
      top: 1270px;
      left: 3.5vw;
      display: flex;
      flex-direction: row;
      gap: 10px;
}

.caption_icons {
      position: absolute;
      top: 1860px;
      left: 3.5vw;
      display: flex;
      flex-direction: row;
      gap: 56rem;



}

.captions {
      position: absolute;
      top: 1857px;
      left: 3.5vw;
      display: flex;
      flex-direction: row;
      gap: 56rem;
      font-size: 16px;
      margin-bottom: 2px;
}

.caption1 {
      position: relative;
      top: -1.5vh;
      left: 1.5vw;

}

.caption2 {
      position: relative;
      top: -1.5vh;
      left: -10.5vw;

}

#river_basins {
      position: absolute;
      top: 1900px;
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

.river_basins_infographics {
      font-size: 30px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.3;
      letter-spacing: normal;
      text-align: left;
      color: #050000;
}

.basins {
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
      .basins {
            grid-template-columns: repeat(2, 1fr);
      }
}

#flamingo {
      background-image: url('/images/sadc2.png');
      background-repeat: no-repeat;
      background-size: 55rem 39rem;

}

.cuvelai_basin {
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

.cuvelai_text {
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

.limpopo_basin {
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

#limpopo {
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

#hippo {
      background-image: url('/images/hippo.png');
      background-repeat: no-repeat;
      background-size: 55rem 52rem;
      height: 50rem;

}

#waterfall {
      background-image: url('/images/waterfall.png');
      background-repeat: no-repeat;
      background-size: 55rem 52rem;
      height: 50rem;

}

.okavango_basin {
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

.okavango_text {
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

#okavango {
      height: 50rem;

}

#zambezi {
      background-color: #1481c3;
      height: 50rem;

}

.zambezi_basin {
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

.zambezi_text {
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

#lion {
      background-image: url('/images/lion.png');
      background-repeat: no-repeat;
      background-size: 55rem 52rem;
      height: 50rem;
}

.footer {
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
      font-weight: 800;
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
            font-weight: 600;
      }
}

.project_info {
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

.basin_list {
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

.contact_list {
      position: relative;
      left: 12vw;
      display: flex;
      flex-direction: column;
      gap: -5rem;
      color: #ffffff;
      font-size: 12px;
}

#coord {
      font-weight: 800;
}

.final_footer {
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

.rights {
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

.policy_terms {
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
}</style>