<template>
      <div class="home" id="homepage">


            <!-- <RouterLink to="/">home</RouterLink>
      <br>
      <RouterLink to="/dashboard">dash</RouterLink>  @click="$router.push('/dashboard')"
      <RouterView /> -->
            <div class="nav flex flex-row justify-content-between flex-wrap">
                  <div class="logos">
                        <img src="../assets/logos/SASSCAL.png" class="WeMast_Dashboard_logos"/>
                        <img src='../assets/logos/Gmes.png' class="WeMast_Dashboard_logos" />
                        <img src="../assets/logos/Au.png" class="WeMast_Dashboard_logos" />
                        <img src="../assets/logos/EU.png" class="WeMast_Dashboard_logos" />
                        <div class="languages -mt-3">
                              <LanguageSwitch />
                        </div>

                  </div>


                  <!-- 
                  <div class="nav_icons flex justify-content-between ">
                        <div class="flex flex-column">
                              <img src="/uiIcons/home-inactive.svg" alt="">
                              <p>{{ $t("home.home") }}</p>
                        </div>

                        <div class="flex flex-column">

                              <img src="/uiIcons/person-inactive.svg" @click="$router.push('/dashboard')" alt="">
                              <p>{{ $t("home.dashboard") }}</p>
                        </div>

                        <div class="flex flex-column">
                              <img src="/uiIcons/person-inactive.svg" alt="" @click="$router.push('/signup')">
                              <p>{{ $t("home.profile") }}</p>
                        </div>

                        <div class="flex flex-column">
                              <a href="https://github.com/sethgis/WeMAST_LTG2-Documentation/wiki" target="_blank"
                                    rel="noopener noreferrer">


                                    <img src="/uiIcons/article-inactive.svg" alt="">
                                    <p>{{ $t("home.documentation") }}</p>

                              </a>
                        </div>

                        <div class="flex flex-column">
                              <a href="#">

                                    <img src="/uiIcons/contacts-inactive.svg" alt="">
                                    <p class="">{{ $t("home.contact") }}</p>


                              </a>
                        </div>


                  </div> -->

                  <div class="cardd">
                        <Menubar :model="items" />


                  </div>
                  <!-- <RouterView /> -->
                  <!-- <div class="nav_labels mt-2">
                        <p>{{ $t("home.home") }}</p>
                        <p>{{ $t("home.dashboard") }}</p>
                        <p>{{ $t("home.profile") }}</p>
                        <p>{{ $t("home.documentation") }}</p>
                        <p class="nav_contact">{{ $t("home.contact") }}</p>
                  </div> -->
                  <!-- <RouterView /> -->


            </div>



            <div class="banner flex flex-wrap  ">
                  <div class="bannercontent flex flex-row gap-2 ">
                        <img class="bulb" src="/uiIcons/challenge.svg" alt="">
                        <div class="title">
                              {{ $t("home.wemast_title") }} <span class="abbreviation">(WeMAST)</span>
                        </div>
                  </div>
                  <!-- @click="$router.push('/dashboard')" -->
                  <RouterLink to="/dashboard">
                        <button class="visit ">{{ $t("home.visit_portal") }}</button>
                  </RouterLink>
                  <RouterView />



            </div>



            <div class="flex flex-wrap justify-content-center align-items-center summary_cards" style="margin-top: 27em">
                  <div class="col-12 md:col-6 xl:col-3 ">

                        <div class="section p-3 ">
                              <Card>

                                    <template #title>
                                          <div class="card_header flex flex-row gap-1">
                                                <img src="/uiIcons/challenge_hightlight.svg" alt="Icon 1">
                                                <p style="color: #2e3192;font-weight: bold">{{ $t("home.geodata") }}</p>
                                          </div>
                                    </template>
                                    <template #subtitle>{{ $t("home.geodata_text") }}</template>
                                    <template #content>



                                          <img alt="user header" src="/images/bvi_home.png" class="hightlight-item" />
                                    </template>
                              </Card>



                        </div>


                  </div>
                  <div class="col-12 md:col-6 lg:col-3">
                        <div class="section p-3 ">

                              <Card>

                                    <template #title>
                                          <div class="card_header flex flex-row gap-1">
                                                <img class="-mt-2" src="/uiIcons/watch.svg" alt="Icon 1">
                                                <p style="color: #2e3192;font-weight: bold">{{ $t("home.docs_manuals")
                                                      }}</p>
                                          </div>
                                    </template>
                                    <template #subtitle>{{ $t("home.manual_text") }}</template>
                                    <template #content>



                                          <img alt="user header" src="/uiIcons/documents.png" class="hightlight-item" />
                                    </template>
                              </Card>
                        </div>
                  </div>
                  <div class="col-12 md:col-6 lg:col-3">
                        <div class="section p-3 ">

                              <Card>

                                    <template #title>
                                          <div class="card_header flex flex-row gap-1">
                                                <img class="-mt-2" src="/uiIcons/article.svg" alt="Icon 1">
                                                <p style="color: #2e3192;font-weight: bold">{{ $t("home.timeseries") }}
                                                </p>
                                          </div>
                                    </template>
                                    <template #subtitle>{{ $t("home.timeseries_text") }}</template>
                                    <template #content>



                                          <img alt="user header" src="/images/timeseries2.png"
                                                class="hightlight-item" />
                                    </template>
                              </Card>
                        </div>
                  </div>
                  <div class="col-12 md:col-6 lg:col-3">
                        <div class="section p-3  ">


                              <Card>

                                    <template #title>
                                          <div class="card_header flex flex-row gap-1">
                                                <img src="/uiIcons/challenge_hightlight.svg" alt="Icon 1">
                                                <p style="color: #2e3192;font-weight: bold">{{ $t("home.analytics") }}
                                                </p>
                                          </div>
                                    </template>
                                    <template #subtitle>{{ $t("home.analytics_text") }}</template>
                                    <template #content>



                                          <img alt="user header" src="/uiIcons/analytics.png" class="hightlight-item" />
                                    </template>
                              </Card>
                        </div>
                  </div>
            </div>


            <Wetlands />


            <RiverBasin />


            <!-- <div class="footer">
                  <div class="partners flex flex-wrap justify-content-between px-4  -mt-7">
                        <div class="footer_logos flex flex-row gap-2">
                              <img src="../assets/logos/SASSCAL.png" class="partner-logos" />
                              <img src='../assets/logos/Gmes.png' class="partner-logos" />
                              <img src="../assets/logos/Au.png" class="partner-logos" />
                              <img src="../assets/logos/EU.png" class="partner-logos" />

                        </div>

                        <div class="project">
                              <p class="project_name font-bold">{{ $t("home.project_name") }}</p>
                              <img class="project_logo h-4rem" src="/images/project_logo.png" alt="">
                        </div>

                  </div>

            </div> -->


            <div class="logo-container">
                  <div class="logo-item">
                        <img src="../assets/logos/SASSCAL.png" alt="Logo 1" class="partner-logos">
                  </div>
                  <div class="logo-item">
                        <img src="../assets/logos/Gmes.png" alt="Logo 2" class="partner-logos">
                  </div>
                  <div class="logo-item">
                        <img src="../assets/logos/Au.png" alt="Logo 3" class="partner-logos">
                  </div>
                  <div class="logo-item">
                        <img src="../assets/logos/EU.png" alt="Logo 4" class="partner-logos">
                  </div>
                  <div class="logo-item logo-item-right">
                        <p class="project_name font-bold">{{ $t("home.project_name") }}</p>
                        <img src="/images/project_logo.png" alt="Logo 5" class="project_logo h-4rem">
                  </div>
            </div>

            <div class="flex flex-wrap  gap-8 px-8 py-5 justify-content-between" style="background-color: #151548;">
                  <div class="basin_list">
                        <div class="cuv_basin" @click="scrollToCuvelaiBasin">{{ $t("home.cuvelai_basin") }}</div>
                        <div class="basin_underline"></div>

                        <div class="lim_basin" @click="scrollToLimpopoBasin">{{ $t("home.limpopo_basin") }}</div>
                        <div class="basin_underline"></div>

                        <div class="oka_basin" @click="scrollToOkavangoBasin">{{ $t("home.okavango_basin") }}
                        </div>
                        <div class="basin_underline"></div>

                        <div class="zam_basin" @click="scrollToZambeziBasin">{{ $t("home.zambezi_basin") }}</div>
                        <div class="basin_underline"></div>

                  </div>

                  <div class="contact_list" ref="ContactsRef" id="contact_id">
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


            <div class="flex justify-content-between py-5 px-8   text-50 " style="background-color: #151548;">
                  <div class="rights">{{ $t("home.copyright") }}</div>


                  <div class="policy">{{ $t("home.privacy") }}</div>
                  <div class="terms">{{ $t("home.terms") }}</div>


            </div>





      </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
import LanguageSwitch from '../components/LanguageSwitch.vue';
import Wetlands from '../views/Wetlands.vue';
import RiverBasin from '../views/RiverBasins.vue';
import { useI18n } from 'vue-i18n'
import RiverBasinsVue from './RiverBasins.vue';

const router = useRouter();
const { t } = useI18n()
const items = ref([
      {
            label: t("home.home"),
            icon: 'pi pi-home',


      },
      {
            label: t("home.dashboard"),
            icon: 'pi pi-map',

            command: () => {
                  router.push('/dashboard')

            }
      },
      {
            label: t("home.profile"),
            icon: 'pi pi-user',

            command: () => {
                  router.push('/signup')

            }
      },


      {
            label: t("home.documentation"),
            icon: 'pi pi-file',

            command: () => {
                  window.open("https://github.com/sethgis/WeMAST_LTG2-Documentation/wiki")

            }
      },
      {
            label: t("home.contact"),
            icon: 'pi pi-envelope',

            command: () => {
                  // scrollToContacts()
                  window.open('https://sasscal.org/contact-2/')



            }
      }
]);
const menuItems = ref([

      {
            label: 'Home',
            icon: 'pi pi-home',


      },
      {
            label: 'Dashboard',
            icon: 'pi pi-map',

            command: () => {
                  router.push('/dashboard')

            }
      },
      {
            label: 'Profile',
            icon: 'pi pi-user',

            command: () => {
                  router.push('/signup')

            }
      },


      {
            label: 'Documentation',
            icon: 'pi pi-file',

            command: () => {
                  window.open("https://github.com/sethgis/WeMAST_LTG2-Documentation/wiki")

            }
      },
      {
            label: 'Contact',
            icon: 'pi pi-envelope',

            command: () => {
                  // scrollToContacts()
                  window.open('https://sasscal.org/contact-2/')



            }
      }
]
)

let scale_div = ref(
      window.devicePixelRatio !== 1 || window.innerWidth !== screen.width
);

// let cuv_ref = ref('Cuvelai')
const opendisplaysettings = () => {
      var displaySettingsURI = "ms-settings:display";

      // Open the display settings page
      window.location.href = displaySettingsURI;
};

// Check if the user's screen scale is not 100% (1.0) or the screen layout is not as expected  || window.innerWidth !== screen.width
// if (window.devicePixelRatio !== 1 ) {
//       // Prompt the user to adjust their screen settings
//       if (
//             confirm(
//                   "For the best experience, please change your screen scale and layout to 100%. Go to display setting, Under Scale and layout, select 100% (recommended)"
//             )




//       ) {
//             opendisplaysettings()
//             // You can provide instructions on how to change these settings here, but you can't change them directly from JavaScript
//             // Example instructions:
//             // confirm("Follow the next instructions");
//             // opendisplaysettings()
//             // var displaySettingsURI = "ms-settings:display";
//             //         // Open the display settings page
//             //         window.location.href = displaySettingsURI;
//       } else {
//             // The user chose not to change their settings
//             alert(
//                   "You can change your screen scale and layout settings later for a better experience."
//             );
//       }
// }

// const scrollToElement = (refName) => {
//       const el = document.getElementById(ref[refName]);

//       if (el) {
//             el.scrollIntoView();
//             console.log(ref[refName], 'ref name')
//       }
// }




const scrollToContacts = () => {
      document.getElementById('contact_id').scrollIntoView();
}
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
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.home {
      font-family: Poppins;
      overflow: hidden !important;
      /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
}

#homepage {
      overflow-x: hidden !important;
}

.nav {
      height: 10vh;
      width: 100vw;
      padding: 0 4em;

      /* background-color: #eb9292; */

}

@media screen and (max-width:1500px) {
        .logos{
           
        display: none !important;
   
        }
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

      min-height: 46vh;
      max-width: 100%;
      top: 10vh;
      left: 0;
      margin: 0 3em;
      background-color: #2e3192;
      padding: 4em 2em;


}



.title {

      font-size: 3em;
      color: #ffffff;
      /* font-weight: bold; */


      @media (max-width: 768px) {
            font-size: 2em !important;
            /* padding-top: 6em; */
            margin-left: -.5rem !important;
      }

      @media (max-width: 480px) {
            font-size: 1.2em !important;
      }

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

      border-radius: 3em;
      font-size: 1.2em;
      margin-left: 6vw;
      padding: 0.7em 1em;


      @media (max-width: 768px) {
            font-size: 1em !important;

            margin-left: 5rem !important;
      }

      @media (-webkit-min-device-pixel-ratio: 1.25) {
            margin: 0.7em 6em;
      }


}

.grid {
      position: absolute;
      top: 56vh;
      margin: -4em;
}


.container {
      position: absolute;
      top: 56vh;
      display: flex;
      /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); Adjust minmax and min-width as needed */
      gap: 12em;
      max-width: 95vw;
      /* margin: 0 auto; */
      margin-left: 2.2vw;
      /* background-color: #f5f5f5;  */
}

.section {
      /* background-color: #f5f5f5;  */
      /* padding: 20px; */
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      gap: 0.5em;
}


@media  screen and (min-width: 769px) and (max-width: 975px) {

      .banner{
            padding-bottom: 0;
            font-size: 0.7em;
      }

      .cardd{
            width:100%;
      }
      .summary_cards{
            margin-left:2em;
      }
    
}

.icon img {
      max-width: 100%;
      height: auto;
}

p {
      margin: 0 0 10px 0;
      /* Adjust paragraph margin */
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

      width: 100%;
      height: 100%;
      object-fit: fill;
}




.caption_icons {
      /* position: absolute;
      top: 1860px;
      left: 3.5vw; */
      margin-top: 35em;
      background-color: darksalmon;
      gap: 27em;



}




.caption2 {
      position: relative;
      top: -1.5vh;
      left: -10.5vw;

}



.footer {
      margin-top: 5em;
      display: flex;
      flex-direction: row;
      gap: 50rem;
      /* background-color: #1481c3; */
      /* padding: 7em; */
}



.partners {
      gap: 62em;
}

.partner-logos {
      height: 4em;
      /* object-fit: contain; */
}

.project_info {
      position: absolute;
      top: 95vh;
      background-color: #151548;

}


.logo-container {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      /* Align items to the top */
      flex-wrap: wrap;
      margin: 2em;
}

.logo-item {
      flex: 0 0 calc(25% - 10px);
      /* Adjust the width as per your requirement */
      margin-bottom: 10px;
}

.logo-item:last-child {
      margin-bottom: 0;
      /* Remove margin from the last item */
}

@media only screen and (max-width: 768px) {
      .logo-item {
            flex-basis: calc(50% - 10px);
            /* Adjust the width for smaller screens */
      }
}

@media (-webkit-min-device-pixel-ratio: 1.25) {
      .partners {
            gap: 30em;
      }

      .project_info {
            /* padding: 1em 0em; */
            /* gap: 2em; */
            /* width: 65%; */
            background-color: #151548;

      }

      .final_footer {

            background-color: transparent !important;



      }

      .cuvelai_text {

            font-size: 1em;

            color: #707995;
            margin-top: -1em;
      }

      .limpopo_text {
            font-size: 1em;
            padding: 0.5em 2em;
            margin-top: -1em;

            color: #ffffff;

      }

      .okavango_text {
            font-size: 1em;
            padding: 2em;
            margin-top: -1em;
            color: #707070;

      }

      .zambezi_text {
            font-size: 1em;
            padding: 2em;
            margin-top: -1em;
            color: #ffffff;

      }




}

@media (-webkit-min-device-pixel-ratio: 1.5) {
      .partners {
            gap: 30em;
      }
}



.project_info {



      gap: 30em;

      /* padding: 1em 14em; */
      background-color: #151548;

}

.basin_list {
      cursor: pointer;

      font-size: 1.5;
      font-weight: 300;

      color: #ffffff;
      /* padding-right: 2em; */
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
      color: #fff;
}

#coord {
      font-weight: 800;
}

.final_footer {
      position: absolute;
      color: #ffffff;

      /* left: -.5vw; */
      padding: 2em 10em;
      margin-top: 24.5em;
      background-color: #151548;
      ;
      gap: 15em;
      width: 100%;
}
</style>