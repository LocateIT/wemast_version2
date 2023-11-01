<template>
    <div  class="app">
  
      <div class="navbar">
         <Navbar />
      </div>
      <div class="selections">
        
       <DashboardSelections
        @fetchData="fetchWmsData" 
        />
      
      </div> 

      
     
      <div class="advanced_filter" @click="show_advanced_filter" >
        <img class="filter_icon" src=" /mapIcons/filter.svg" alt="">
            <img class="filter_open" src=" /mapIcons/right.svg" alt="">
        <p style="display:flex; flex-direction: column;">{{ $t("home.advanced") }}<br>{{ $t("home.filter") }}</p> </div>
      <div class="compare"  @click="show_compare"> 
  
        <img class="compare_icon" src=" /mapIcons/compare.svg" alt="">
        <img class="compare_open" src=" /mapIcons/compare_right.svg" alt="">
        <p>{{ $t("home.compare") }}</p>
      </div>
  
      <!-- <button class="request" type="button" @click="getRegion2" >REQUEST</button> -->
  
  
      <div  class="spinner" v-if="loading">
              <img src="/uiIcons/loader_white.svg" alt="">
          </div>
  
      <!-- <h1 class="header_countries">{{storeUserSelections.indicator_list}}</h1> -->
      
        <div id="map">  </div>

   
  
      
      <!-- <div class="clip" style="position: absolute; left: 67vw; top: 10vh;">
        <button @click="clip_custom">clip custom</button>
      </div> -->
        <div class="opacity" v-if="wmsLayer != null"  :class="{mainopen: sidenavigationbar}">
          <span id="opacity">{{ $t("home.opacity") }}:</span>
          <span id="image-opacity"> </span>
          <input type="range" id="sldOpacity" min="0" max="1" step="0.1" value="1" />
         </div>


         <div class="swap" v-if="wmsCompareLayer != null"  title="Compare Layers" @click="close_swipe">
          <img src="/uiIcons/swap.svg" alt="">
         </div>
         <div class="map_controls_wrapper" :class="{mainopen: sidenavigationbar}" >

         </div>
         
    
          <!-- leaflet side bar -->
    <!-- <div class="side-bar-view"> -->
      <SideBarView />
    <!-- </div> -->

    <!-- sidenav goes here -->
    <div id="sidenav" class="sidenav">
      <div id="mySidenav" style="height: 100%">
        <div id="protrusion" class="protrusion">
          <div class="toggle_icon" @click.stop="toggle_nav">
            <img style="margin-left:-5vw; margin-top:1.5vw" id="open" src=" /uiIcons/drawer.svg" v-if="show_sidenav" />
            <img :class="{'toggle_is_open':(!show_sidenav)}" id="close" src=" /uiIcons/drawer.svg" v-if="!show_sidenav" />
          </div>
        </div>
        <div class="sidenav_body" v-if="!show_sidenav">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
              <div class="row" v-if="show_search">
                <div class="col-xs-6 offset-3">
                  <input dense outlined v-model="search" label="Search" />
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="q-pa-xs">
                    <div class="data_analysis_text"
                     
                      @click="handleAnalysisMetaSwap2()"
                      style="cursor: pointer"
                    >
                      <span
                        :class="
                          analysis_swap_toggle === 'data_analysis'
                            ? 'side_nav_swap'
                            : ''
                        "
                        >Data Analysis</span
                      >
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="q-pa-xs">
                    <div
                      class="metadata_text"
                      @click="handleAnalysisMetaSwap()"
                      style=""
                    >
                      <span
                        :class="
                          analysis_swap_toggle === 'metadata'
                            ? 'side_nav_swap'
                            : ''
                        "
                        >Metadata </span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div  v-if="analysis_swap_toggle === 'data_analysis'" >
            <!-- <q-btn flat label="get WMS" @click="getWMS_Layer" />    -->

            <p style="margin-top:40px " :class="storeUserSelections.selected_sub_indicator === 'Burnt Area FIRMS' || 'Undulation' ? 'burnt_summary': ''" >
              <label style="margin-top:40px; font-weight: 700; font-size:14px">Summary</label>
              <br>
              {{ storeUserSelections.selected_parameter === 'Wetland Status' ? $t("summaries.wetland_status") : 
              storeUserSelections.selected_parameter === 'Wetland Extent' ? $t("summaries.wetland_extent"): 
              storeUserSelections.selected_sub_indicator === 'Soil Moisure Index' ? $t("summaries.smi_index"):
               storeUserSelections.selected_sub_indicator === 'Burnt Area FIRMS' ? $t("summaries.burnt_firms"): 
               storeUserSelections.selected_sub_indicator === 'Undulation' ? $t("summaries.undulation"):
              storeUserSelections.selected_sub_indicator === 'Precipitation Index' ? $t("summaries.prec_index"): 
              storeUserSelections.selected_parameter === 'Turbidity' ? $t("summaries.turbidity"): 
              storeUserSelections.selected_parameter === 'Sus Sediments' ? $t("summaries.susp_sediments"): 
                   storeUserSelections.selected_sub_indicator === 'Land Cover' ? $t("summaries.landcover") : 
                    storeUserSelections.selected_sub_indicator === 'Vegetation Cover' ? $t("summaries.vegcover"):
                    storeUserSelections.selected_indicator === 'Basin Vulnerability Index' ? $t("summaries.bvi_index"):
                    
           
                   storeUserSelections.selected_sub_indicator === '' ? 'please select a parameter' : '' }}
            </p>
            <br />
            <label class="text-bold" style="font-family: Montserrat; font-weight: 800;">
              <!-- <div class="chart_title_sidebar"  style="font-family: 'Trebuchet MS'; font-weight: 800;">{{storeUserSelections.selected_cause}} blackspots in {{storeUserSelections.selected_region}}  </div> -->
            </label>
            
            <div class="charts_sidebar"  >
            <!-- <img class="close_chart" src="../assets/images/close_small.svg" alt="" @click="close_chart()"> ref="charts"   v-if="charts" to be added later -->
            <div v-if=" show_zambezi_stats === true " class="default_layer_title"> Zambezi LULC 2016</div>
            
            <div v-if=" year && sub_indicator " class="chart_title" :class="{'hide' : (compareUserSelections.selected_year != '' )}">{{ `${basin} ${sub_indicator}-${year}` }}</div>
            <div v-if=" compareUserSelections.selected_year != '' && sub_indicator" class="chart_title" >{{  `${basin} ${sub_indicator}-${compare_year}` }}</div>
            <div v-if=" compareUserSelections.selected_year != '' && indicator" class="chart_title" >{{  `${basin} ${indicator}-${compare_year}` }}</div>
            <div v-if="indicator === 'Basin Vulnerability Index' && compareUserSelections.selected_year == ''" class="bar_chart_title">{{ `${basin} ${indicator}-${year}` }}</div>
            <img src="/mapIcons/download_map.svg" alt="" 
            title="Download Png"
            class="chart_download_png" 
            style="position: absolute; top: -2.5vh; left: 28vw; height: 25px;"
            @click="chart_png"
            > 
            <img id="chart_csv" src="/mapIcons/file_download-24px.svg" 
            alt="" class="chart_download_png" 
            title="Download CSV"
            style="position: absolute; top: -2.5vh; left: 29.5vw; height: 25px; width: 25px;"
            @click="downloadcsv"
            >
            <!--  v-if="sub_indicator != 'Precipitation Index'" -->
            <div id="chart_pie" v-if="sub_indicator === 'Land Cover' || indicator === 'Basin Vulnerability Index' || sub_indicator === 'Wetland Inventory' 
            || sub_indicator === 'Burnt Area FIRMS' ||  sub_indicator === 'Undulation'  ">
              <LulcPie :class=" sub_indicator === 'Undulation' ? 'flood_chart' : 'lulc_chart'"
           
            :chartData=" compare_year ? compareUserSelections.lulcChartData : storeUserSelections.lulcChartData"
            :options="options"
            />

            </div>

            
            <div id="chart_pie" v-if=" show_zambezi_stats === true ">
              <LulcPie class="lulc_chart"
            
            :chartData=" storeUserSelections.lulcChartData "
            :options="options"
            />

            </div>


            
          </div>

         
            <br />
            <label class="text-bold" style="font-family: Montserrat; font-weight: 800;">
              <!-- <div class="chart2_title_sidebar"  style="font-family: 'Trebuchet MS'; font-weight: 800;">  {{storeUserSelections.selected_cause}} blackspots in {{storeUserSelections.selected_region}}</div> -->
            </label>
            
            <div class="charts2_sidebar"  >
            <!-- <img class="close_chart" src="../assets/images/close_small.svg" alt="" @click="close_chart()">  ref="charts"   v-if="charts" to be added later -->

            <div v-if=" show_zambezi_stats === true " class="default_layer_title"> Zambezi LULC 2016</div>
            <div  v-if=" basin && sub_indicator && year"  class="chart_dynamic_titles">
              <div  v-if="sub_indicator != 'Water Quality'" class="bar_chart_title" :class="{'hide' : (compareUserSelections.selected_year != '' )}">{{ `${basin} ${sub_indicator}-${year}` }}</div>
              <div v-if=" compareUserSelections.selected_year != ''" class="bar_chart_title" >{{  `${basin} ${sub_indicator}-${compare_year}` }}</div>
              <div  v-if="sub_indicator === 'Water Quality'" class="bar_chart_title">{{ `${basin} ${parameter}-${year}` }}</div>
            </div>
            <div  v-if="indicator === 'Basin Vulnerability Index' && year && compareUserSelections.selected_year == ''" class="bar_chart_title">{{ `${basin} ${indicator}-${year}` }}</div>
            <div v-if=" compareUserSelections.selected_year != '' && indicator" class="chart_title" >{{  `${basin} ${indicator}-${compare_year}` }}</div>
           
            <img src="/mapIcons/download_map.svg" alt="" title="Download Png"
            class="chart_download_png" style="position: absolute; top: -2.5vh; left: 28vw; height: 25px;"
            @click="bar_chart_png"
            v-if="sub_indicator !='Precipitation Index'" 
            >
            <img id="chart_csv" src="/mapIcons/file_download-24px.svg" 
            alt="" class="chart_download_png" 
            title="Download CSV"
            style="position: absolute; top: -2.5vh; left: 29.5vw; height: 25px; width: 25px;"
            @click="downloadcsv"
            v-if="sub_indicator !=='Precipitation Index'"
            >
            <div id="bar"  :class=" sub_indicator === 'Vegetation Cover'  
                            ? 'bar_veg_cover' :
                            sub_indicator === 'Precipitation Index'  ? 'bar_veg_cover' :
                            sub_indicator === 'Soil Moisure Index'   ? 'bar_veg_cover' :
                            
                            sub_indicator === 'Water Quality'      ? 'bar_veg_cover'
                            : '' ">
                            <!-- class="lulc_bar_chart"  sub_indicator === 'Water Quality'      ? 'prec_bar' -->
              <LulcBar   :class="storeUserSelections.selected_sub_indicator === 'Burnt Area FIRMS'|| 'Undulation' ? 'burnt_bar_chart' : 'lulc_bar_chart'"
            :height="200"
            :chartData=" compare_year ? compareUserSelections.lulcChartData : storeUserSelections.lulcChartData"
            :options="sub_indicator === 'Vegetation Cover' ? veg_barchart_options : sub_indicator === 'Precipitation Index' ? spi_barchart_options :  sub_indicator=== 'Soil Moisure Index' ? smi_barchart_options : barchart_options"
            />

           
            </div>
            <p class="time_series_title" v-if="storeUserSelections.selected_sub_indicator === 'Vegetation Cover'
             || storeUserSelections.selected_sub_indicator === 'Precipitation Index' 
             || storeUserSelections.selected_sub_indicator === 'Soil Moisure Index' 
              || storeUserSelections.selected_sub_indicator === 'Water Quality'"> Time Series </p>


<div :class="sub_indicator === 'Vegetation Cover'   || storeUserSelections.selected_sub_indicator === 'Soil Moisure Index' ?  'ancillary_title' : 'ancillary_title2'"
         v-if="storeUserSelections.selected_sub_indicator === 'Vegetation Cover'
             || storeUserSelections.selected_sub_indicator === 'Precipitation Index' 
             || storeUserSelections.selected_sub_indicator === 'Soil Moisure Index' 
              || storeUserSelections.selected_sub_indicator === 'Water Quality'"> 
             <p class="ancil_data"> Ancillary data </p>
              
              <CloudRain width="18" height="18"  color="#164b75" @click="addPRECIPTimeSeriesLayer" />
              <ThermometerHalf width="18" height="18"  color="#164b75" @click="addTEMPTimeSeriesLayer" />
              </div>

            <LulcLine  class="lulc_line_chart" v-if="storeUserSelections.selected_sub_indicator === 'Vegetation Cover'
             || storeUserSelections.selected_sub_indicator === 'Precipitation Index' 
             || storeUserSelections.selected_sub_indicator === 'Soil Moisure Index' 
             || storeUserSelections.selected_sub_indicator === 'Water Quality'"
            
            :chartData="storeUserSelections.lineChartData"
           :options="linechartOptions"
            
            />


  
          </div>
          
          </div>
          <div class="meta" v-if="analysis_swap_toggle === 'metadata'">
          


              <table style="width:100%">
                  <tr>
                    <th>{{ $t("metadata.title") }}</th>
                    <td> {{ 
                     storeUserSelections.selected_indicator === 'Basin Vulnerability Index' ?
                    `Basin Vulnerability Index for ${storeUserSelections.selected_basin} basin`:
                    storeUserSelections.selected_sub_indicator === 'Wetland Inventory' &&  storeUserSelections.selected_parameter === 'Wetland Extent' ?
                      `${storeUserSelections.selected_parameter} for ${storeUserSelections.selected_basin} basin` :
                      storeUserSelections.selected_sub_indicator === 'Wetland Inventory' &&  storeUserSelections.selected_parameter === 'Wetland Status' ?
                      `${storeUserSelections.selected_parameter} for ${storeUserSelections.selected_basin} basin`:
                      storeUserSelections.selected_sub_indicator === 'Water Quality' &&  storeUserSelections.selected_parameter === 'Turbidity' ?
                      `${storeUserSelections.selected_parameter} for ${storeUserSelections.selected_basin} basin`:

                      storeUserSelections.selected_sub_indicator === 'Water Quality' &&  storeUserSelections.selected_parameter === 'Sus Sediments' ?
                      `${storeUserSelections.selected_parameter} for ${storeUserSelections.selected_basin} basin`:
                   sub_indicator === 'Land Cover' || 'Vegetation Cover' ||
                     'Precipitation Index' || 'Undulation'|| 'Burnt Area FIRMS' || 'Soil Moisure Index' ?
                    `${storeUserSelections.selected_sub_indicator} for ${storeUserSelections.selected_basin} basin`:
                   
                    
                  //  sub_indicator === 'Land Cover' || 'Vegetation Cover' ||
                  //    'Precipitation Index' || 'Undulation'|| 'Burnt Area FIRMS' || 'Soil Moisure Index' ?
                  // storeUserSelections.selected_sub_indicator === 'Wetland Inventory' &&  storeUserSelections.selected_parameter === 'Wetland Status' ?
                  //     `${storeUserSelections.selected_parameter} for ${storeUserSelections.selected_basin} basin` :
                       ''
                       }}</td>
                    
                  </tr>
                  <tr>
                    <th>{{ $t("metadata.description") }}</th>
      
                    <td>{{
                        storeUserSelections.selected_indicator === 'Basin Vulnerability Index' ? $t("indicators.bvi_index"):
                     storeUserSelections.selected_sub_indicator === 'Precipitation Index' ? $t("metadata.prec_desc"):
                     storeUserSelections.selected_parameter === 'Turbidity' ? $t("metadata.turb_desc"): 
              storeUserSelections.selected_parameter === 'Sus Sediments' ? $t("metadata.sus_desc"): 
              storeUserSelections.selected_sub_indicator === 'Burnt Area FIRMS' ? $t("metadata.firms_desc"):
              storeUserSelections.selected_sub_indicator === 'Undulation' ? $t("metadata.undulation_desc"): 
                     storeUserSelections.selected_parameter === 'Wetland Status' ? $t("metadata.status_desc"): 
                   storeUserSelections.selected_sub_indicator === 'Land Cover' ? $t("metadata.lulc_desc"): 
                    storeUserSelections.selected_sub_indicator === 'Vegetation Cover' ? $t("metadata.vegcover_desc"):
                    storeUserSelections.selected_sub_indicator === 'Wetland Inventory' ? $t("metadata.extent_desc"):
                   storeUserSelections.selected_sub_indicator === '' ? 'please select a parameter' : ''
            

                     }}</td>
                  </tr>

                  <tr>
                    <th>{{ $t("metadata.extent") }}
                      
                    </th>
                    
                    <td>
                      <table>
                        <tr>
                          <th>{{ $t("metadata.west_lon") }}</th>
                          <td>{{storeUserSelections.western_lon +'°'}}</td>
                        </tr>
                        <tr>
                          <th>{{ $t("metadata.north_lat") }}</th>
                          <td>{{storeUserSelections.northern_lat +'°'}}</td>
                        </tr>
                        <tr>
                          <th>{{ $t("metadata.east_lon") }}</th>
                          <td>{{storeUserSelections.eastern_lon +'°'}}</td>
                        </tr>
                        <tr>
                          <th>{{ $t("metadata.south_lat") }}</th>
                          <td>{{storeUserSelections.southern_lat +'°'}}</td>
                        </tr>
                      </table>
                    </td>
                    
                    
                  </tr>
                  <tr>
                    <th>{{ $t("metadata.resolution") }}</th>
                    <td>{{`${storeUserSelections.resolution} Meters`}}</td>
                    
                  </tr>
                  <tr>
                    <th>{{ $t("metadata.crs") }}</th>
                    <td> {{$t("metadata.crs_text")}}</td>
                    
                  </tr>
                  <tr>
                    <th>{{ $t("metadata.date_created") }}</th>
      
                    <td>{{storeUserSelections.selected_year}}</td>
                  </tr>
                  <tr>
                    <th>{{ $t("metadata.region") }}</th>
                    <td>{{storeUserSelections.selected_basin}}</td>
                    
                  </tr>
                  <tr>
                    <th>{{ $t("metadata.tags") }}</th>
                    <td> {{storeUserSelections.selected_sub_indicator === 'Land Cover' ? $t("metadata.lulc_theme") + ' '+ storeUserSelections.selected_season : 
                     storeUserSelections.selected_sub_indicator === 'Precipitation Index' ? `${ $t("metadata.prec_theme")}, ${storeUserSelections.selected_season} `:
                    storeUserSelections.selected_sub_indicator === 'Vegetation Cover' ? $t("metadata.veg_cover_theme") + ' '+ storeUserSelections.selected_season + ' ' :
                    storeUserSelections.selected_sub_indicator === 'Wetland Inventory' ? $t("metadata.wetland_inventory_theme") + ' '+ storeUserSelections.selected_season + ' ':
                    storeUserSelections.selected_indicator === 'Basin Vulnerability Index' ? $t("indicators.bvi_index") + ' '+ storeUserSelections.selected_season + ' ':
                   storeUserSelections.selected_parameter === 'Wetland Status' ? $t("metadata.status_theme") + ' '+ storeUserSelections.selected_season + ' ' : ''}}</td>
                    
                  </tr>
                  <tr>
                    <th>{{$t("metadata.encoding")}}</th>
      
                    <td>{{$t("metadata.encoding_text")}}</td>
                  </tr>
                  <tr>
                    <th>{{$t("metadata.encoding_format")}}</th>
      
                    <td>{{$t("metadata.tif")}}</td>
                  </tr>
                  <tr>
                    <th>{{$t("metadata.data_type")}}</th>
      
                    <td>{{$t("metadata.raster")}}</td>
                  </tr>
                  <tr>
                    <th>{{$t("metadata.position")}}</th>
      
                    <td>{{geoposition}}</td>
                  </tr>
                  <tr>
                    <th>{{$t("metadata.theme")}}</th>
      
                    <td>{{
                   storeUserSelections.selected_parameter === 'Wetland Status' ? $t("metadata.status_theme"):
                   storeUserSelections.selected_sub_indicator === 'Precipitation Index' ? `${$t("metadata.prec_theme")}_${$t("metadata.season")} season`:
                   storeUserSelections.selected_sub_indicator === 'Land Cover' ? $t("metadata.lulc_theme") : 
                    storeUserSelections.selected_sub_indicator === 'Vegetation Cover' ? $t("metadata.veg_cover_theme") :
                    storeUserSelections.selected_sub_indicator === 'Wetland Inventory' ? $t("metadata.wetland_inventory_theme"):
                    storeUserSelections.selected_indicator === 'Basin Vulnerability Index' ? $t("indicators.bvi_index") + ' '+ storeUserSelections.selected_season + ' ':
                   storeUserSelections.selected_sub_indicator === '' ? 'please select a parameter' : ''}}</td>
                  </tr>
                  
                  <tr>
                    <th>{{ $t("metadata.keyword") }}</th>
      
                    <td>{{storeUserSelections.selected_sub_indicator === 'Land Cover' ?  $t("metadata.lulc_theme") + ' ' : 
                    storeUserSelections.selected_sub_indicator === 'Vegetation Cover' ? $t("metadata.veg_cover_theme") + ' '+ storeUserSelections.selected_season + ' ' +'season':
                    storeUserSelections.selected_sub_indicator === 'Wetland Inventory' ? $t("metadata.veg_cover_theme") :
                   storeUserSelections.selected_parameter === 'Wetland Status' ? $t("metadata.status_theme") + ' '+ storeUserSelections.selected_season + ' ' +'season': ''}}</td>
                  </tr>
                </table>
          </div>
          <!-- <LineChart :height="250" :width="250" /> -->
          <p class="partners" style="font-weight:bold; font-size:16px; position: relative; top:2vh; left: 12vw;" >Technical Partners</p>
          <div class="logos_container row">
            <!-- <SideNavLogos /> -->
            <img src="../assets/logos/bottom.png" alt="" :class="{ 'analysis_logos' : (analysis_swap_toggle === 'data_analysis'),
             'metadata_logos' : (analysis_swap_toggle === 'metadata') }">
          </div>
        </div>
      </div>
    </div>


      
  
      <!-- advanced filter -->
    
      <div v-if="advanced_filter" class="advanced_filter_container">
        <img class="close_advanced_filter" src=" /uiIcons/close.png" alt="" @click="close_advanced_filter">
        <AdvancedFilter />
      </div>
  
  
      <!-- compare -->
      <div v-if="compare" class="compare_container">
        <img class="close_compare" src=" /uiIcons/close.png" alt="" @click="close_compare">
        <Compare
        @fetchCompareData="compareLayers" />
      </div>
  
      <!-- login icons @click="$router.push('/')"-->
      <div class="nav_icons" id="nav_icons">
             
                
                <RouterLink to="/">
                  <img class="home" src=" /uiIcons/home-landing.svg" alt="" title="Home"  />
                </RouterLink>
           
              <img class="dashboard" src=" /uiIcons/dashboard-24px.svg" alt="" title="Dashboard">
    
              <!-- <a href="http://169.1.31.169/bkeadmin/#/search" target="_blank" rel="noopener noreferrer"> -->
                <RouterLink to="/signup">
                <img class="person" src=" /uiIcons/person.svg" alt="" title="Profile">
              </RouterLink>
              <!-- </a> -->
          

              <!-- <a href="https://github.com/sethgis/WeMAST_LTG2-Documentation/wiki" target="_blank" rel="noopener noreferrer"> -->
                    <img class="search" src=" /uiIcons/book.svg" alt="" title="Documentation" @click="show_docs_select" >
              <!-- </a> -->

              <!-- <RouterLink to="/datacollection"> -->
                  <img class="home" @click="show_mobile_panel" src=" /uiIcons/mobile_app.svg" alt="" title="Data Collection" style="margin-left: -5px;" />
                <!-- </RouterLink> -->
              
            
          
          </div>
          <RouterView />

          <div class="doc_select" v-if="documentation">
            <CustomDocumentation
            :options="['Mapographics', 'Documentation']"
      :default="'Manuals'"
      class="select"
      @input="displayToKey($event)"/>
          </div>
          
          
          <div  class="spinner"  v-if="loading">
              <img src="/uiIcons/loader_white.svg" alt="">
          </div>
          <div class="mobile_filter" v-if="show_mobile_data">
            <button @click="fetchMobileData" class="fetch_mobile">Fetch Data</button>
            <img style="cursor:pointer; position: absolute; top: 0.5vh; right:0.5vw;" @click="close_mobile_panel" src="/uiIcons/close.png"/>

          </div>

          <!-- <button type="button" @click="change_zoom">zoom</button> -->
          
  
       
  
    </div>
   
  </template>
  
  
  <script setup>
  // import { RouterLink, RouterView } from 'vue-router'
  import Navbar from '../components/Navbar.vue';
  import DashboardSelections from '../components/DashboardSelections.vue';
  import "leaflet";
  import L from "leaflet";
  import "leaflet/dist/leaflet.css";
  import "leaflet.browser.print/dist/leaflet.browser.print"
  import "leaflet-sidebar-v2";
  import "leaflet/dist/leaflet.css";
  import "leaflet-draw/dist/leaflet.draw-src.css";
  import "leaflet-draw";
  import "leaflet.wms"
  import $ from "jquery";
  import sideByside from "leaflet-side-by-side";
  import "leaflet-side-by-side/layout.css"
  import "leaflet-side-by-side/range.css"
  import { GeoSearchControl, OpenStreetMapProvider }  from "leaflet-geosearch"
  import "leaflet-geosearch/dist/geosearch.css"
  import domtoimage from "dom-to-image";
  import "dom-to-image/src/dom-to-image.js";
  import "dom-to-image/dist/dom-to-image.min.js"
  import { saveAs } from "file-saver";
  import * as wkt from 'wkt'


  import "../CustomMapControls/measure/measure.css";
  import "../CustomMapControls/measure/MeasureTool.js";
  import "leaflet-easyprint"
  import html2canvas from "html2canvas/dist/html2canvas.min.js"
  import "leaflet.export/leaflet_export.js"

 
  import SideBarView from "./SideBarView.vue"
  import { close_nav, open_nav } from "../Helpers/SideNavControls";
  import { leaflet_custom_controls } from "../CustomMapControls/LeafletCustomControls"
  import { onMounted, ref, watch, computed } from '@vue/runtime-core';
  import { useCounterStore } from '@/stores/counter';
  import { useCompareStore } from '../stores/compareSelections/compare';
  import { useAdvancedStore } from '../stores/compareSelections/advanced_filter'
  import AdvancedFilter from '../components/AdvancedFilter.vue';
  import Compare from '../components/Compare.vue';
  import sideNavigationbar from '../components/sidenavigationbar.vue'
  import axios from 'axios'
  
  import LulcPie from '../components/Charts/LulcPie.vue'
  import LulcBar from '../components/Charts/LulcBar.vue'
  import LulcLine from '../components/Charts/LulcLine.vue'
  import { downloadCSV } from '../Downloads/CSV'
  import PrecBar from '../components/Charts/PrecBar.vue';
  import CustomDocumentation from '../components/CustomDocumentation.vue'
  import { CloudRain } from "@vicons/fa"
  import { ThermometerHalf } from "@vicons/fa"
  


  
  //refs go here
  let baseurl = 'http://66.42.65.87'
  let documentation = ref(false)
  let advanced_filter = ref(false)
  let compare = ref(false)
  let map;
  let sidebar = ref(null)
  let show_sidenav = ref(false)
  let analysis_swap_toggle = ref("data_analysis") 
  let show_search = ref(false)
  let search = ref("")
  let summary_text =  ` Land use land cover maps monitor the land use in a specific year. The
        integration of the biophysical and human factors plays a leading role in
        causing land-use changes, and is used to explain the dynamics of land use
        that occur within a river basin or a wetland. The study of land cover may
        also be used to predict future trends of an ecosystem while understanding
        its sustainability.`
  let show_base_layers = ref(true)
  let baseMaps =ref({}) 
  let base_map_ctrl_selections= ref(false) //show or hide base layers
  let base_map_ctrl_cliked = ref(false)
  let current_top_base_layer= ref(null) //holds the current later at the top
  let previous_wemast_ctrl_id = ref(null)  //holds the id of the element clicked  prevously
  let current_raster_layer = ref(null) //holds curren requested layer geoserver
  let show_draw_control= ref(false) //toggles draw control visibility
  let editableLayers = ref(null) //draw control
  window.type = true;
  var current_geojson = ref(null)
  let loading = ref(false)
  let wmsLayer= ref(null);
  let basin = ref(null)
  let indicator = ref(null)
  let sub_indicator = ref(null)
  let year = ref(null)
  let season = ref(null)
  let parameter = ref(null)
  let satellite = ref(null)

  let compare_year = ref(null)
  let compare_satellite = ref(null)
  let compare_season = ref()
  let styles = ref(null)
  let band_1 = ref(null)
  let lulc_legend = ref(false)
  let prec_legend = ref(false)
  let ndwi_legend = ref(false)
  let ndvi_legend = ref(false)
  let status_legend = ref(null)
  let flood_legend = ref(null)
  let smi_legend = ref(null)
  let modis_legend = ref(null)
  let firms_legend = ref(null)
  let bvi_legend = ref(null)

  let lulc_compare_legend = ref(false)
  let prec_compare_legend = ref(false)
  let ndwi_compare_legend = ref(false)
  let ndvi_compare_legend = ref(false)
  let status_compare_legend = ref(null)
  let flood_compare_legend = ref(null)
  let smi_compare_legend = ref(null)
  let bvi_compare_legend = ref(null)
  let modis_compare_legend = ref(null)
  let firms_compare_legend = ref(null)

  let sidenavigationbar = ref(false)
  let swipe_control = ref(null)
  let wmsCompareLayer = ref(null)
  let custom_geojson = ref(null)
  let search_marker = ref(null)
  let controls_container = ref(null)
  let search_control = ref(null)
  let geoposition = ref(null)
  let wmsTimeseriesLayer = ref(null)
  let wmsPrecTimeseriesLayer = ref(null)

  let customWmsLayer = ref(null)
  let year_2013 = ref(null)
  let year_2014 = ref(null)
  let year_2015 = ref(null)
  let year_2016 = ref(null)
  let year_2017 = ref(null)
  let year_2018 = ref(null)
  let year_2019 = ref(null)
  let year_2020 = ref(null)
  let year_2021 = ref(null)
  let year_2022 = ref(null)

  let geometry = {}
  let chartData = ref([])
  let stats = ref({})
  let indexx = ref('')
  let show_mobile_data = ref(false)
  let default_zambezi_region = ref({})
  let default_stats = ref({})
  let show_zambezi_stats = ref(true)
  let latlon = ref(null)
  let group = ref(null)
  let marker = ref(null)
  let cmd_= ref('')
  let printPlugin = ref(null)
  let browserZoomLevel = ref()


  //advanced filter variables
  let country = ref(null)
    //variables
  const storeUserSelections = useCounterStore()
  const compareUserSelections = useCompareStore()
  const advancedUserSelections = useAdvancedStore()
  
  // console.log(storeUserSelections.fetchCountriesList)
  
  console.log(storeUserSelections.getLoadingState, 'getLoadingState')


  window.html2canvas = html2canvas;
  

  let lineChartData = {
      labels: [],
      datasets: [
        {
          data: [],
          fill: false,
          borderColor: '#1eb301',
          backgroundColor: '#ffbb33',
          borderWidth: 3
          
       
       
        },
      ],
    }
    let lineData = ref({})
    const createIndices = () => {
    if(sub_indicator.value === 'Vegetation Cover'){
    indexx.value = 'NDVI'
  }
  if(sub_indicator.value === 'Soil Moisure Index'){
    indexx.value = 'SMI'
  }
  if(sub_indicator.value === 'Precipitation Index'){
    indexx.value = 'SPI'
  }
  console.log(indexx.value, 'indices')
  return indexx.value


  }

    let linechartOptions = {
      scales: {
            yAxes: [{
              scaleLabel: {
                    display: true,
                    fontStyle: "bold",
                    fontFamily: "Helvetica",
                    labelString: 'Values',
                    color: 'red'
                },
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [ {
              scaleLabel: {
                    display: true,
                    fontStyle: "bold",
                    fontFamily: "Helvetica",
                    labelString: 'Years'
                },
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: false,
          
            
          },
          responsive: true,
          maintainAspectRatio: false
        }
      

    
  
  
  let options =  {
          
          legend: {
              display: true,
              position: 'right',
              margin: 20,
              labels:{
                 fontColor: '#000',
                 fontWeight: 'bolder',
                 padding: 10,
                 usePointStyle: true,
                 pointStyle: 'circle'
              }
           },
           tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
        	var dataset = storeUserSelections.lulcChartData.datasets[tooltipItem.datasetIndex];
          var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
            return previousValue + currentValue;
          });
          var currentValue = dataset.data[tooltipItem.index];
          var precentage = Math.floor(((currentValue/total) * 100)+0.5);         
          return precentage + "%";
        }
      }
    },
           
           responsive: true,
           maintainAspectRatio: false,
         
        }

      
let barchart_options= {
        scales: {
           xAxes: [{
            //   stacked: true,
         
              
              
              ticks: {
                 beginAtZero: true,
               
                 fontColor: '#000',
              },
              gridLines: {
                 display: false,
                  color: '#eee',
                  // padding: 2
              }
           }],
           yAxes: [{
            //   stacked: true,
            // stepSize: 10000,
            scaleLabel: {
                    display: true,
                    fontStyle: "bold",
                    fontFamily: "Helvetica",
                    labelString: sub_indicator === 'Precipitation Index' ? 'Values' : 'Area in Hectares (Ha)'
                },
                   barPercentage: 0.95,
                 
               ticks: {
                  beginAtZero: true,
                   
                 // fontColor: '#2FA036',
                 fontSize: 10,
              },
              gridLines: {
                 display: true,
                 color: '#d9dcd6'
                 
              }
           }]
        },
 
       legend: {
           display: false,
       
        },
        
        responsive: true,
        maintainAspectRatio: false,
      
     }
     let veg_barchart_options= {
        scales: {
           xAxes: [{
            //   stacked: true,
         
              
              
              ticks: {
                 beginAtZero: true,
               
                 fontColor: '#000',
              },
              gridLines: {
                 display: false,
                  color: '#eee',
                  // padding: 2
              }
           }],
           yAxes: [{
            //   stacked: true,
            // stepSize: 10000,
            scaleLabel: {
                    display: true,
                    fontStyle: "bold",
                    labelString: 'NDVI Values'
                },
                   barPercentage: 0.95,
                 
               ticks: {
                  beginAtZero: true,
                   
                 // fontColor: '#2FA036',
                 fontSize: 10,
              },
              gridLines: {
                 display: true,
                 color: '#d9dcd6'
                 
              }
           }]
        },
 
       legend: {
           display: false,
       
        },
        
        responsive: true,
        maintainAspectRatio: false,
      
     }
     let spi_barchart_options= {
        scales: {
           xAxes: [{
            //   stacked: true,
         
              
              
              ticks: {
                 beginAtZero: true,
               
                 fontColor: '#000',
              },
              gridLines: {
                 display: false,
                  color: '#eee',
                  // padding: 2
              }
           }],
           yAxes: [{
            //   stacked: true,
            // stepSize: 10000,
            scaleLabel: {
                    display: true,
                    fontStyle: "bold",
                    labelString: 'SPI Values'
                },
                   barPercentage: 0.95,
                 
               ticks: {
                  beginAtZero: true,
                   
                 // fontColor: '#2FA036',
                 fontSize: 10,
              },
              gridLines: {
                 display: true,
                 color: '#d9dcd6'
                 
              }
           }]
        },
 
       legend: {
           display: false,
       
        },
        
        responsive: true,
        maintainAspectRatio: false,
      
     }

     let smi_barchart_options= {
        scales: {
           xAxes: [{
            //   stacked: true,
         
              
              
              ticks: {
                 beginAtZero: true,
               
                 fontColor: '#000',
              },
              gridLines: {
                 display: false,
                  color: '#eee',
                  // padding: 2
              }
           }],
           yAxes: [{
            //   stacked: true,
            // stepSize: 10000,
            scaleLabel: {
                    display: true,
                    fontStyle: "bold",
                    labelString: 'SMI Values'
                },
                   barPercentage: 0.95,
                 
               ticks: {
                  beginAtZero: true,
                   
                 // fontColor: '#2FA036',
                 fontSize: 10,
              },
              gridLines: {
                 display: true,
                 color: '#d9dcd6'
                 
              }
           }]
        },
 
       legend: {
           display: false,
       
        },
        
        responsive: true,
        maintainAspectRatio: false,
      
     }
  
  
  
  


  // const chartData = storeUserSelections.getLulcChartData
  
  const show_advanced_filter = () =>{
    advanced_filter.value = true
    compare.value = false
    // console.log('clicked advanced filter')
    // alert('clicked advanced filter')
  }
  const show_compare = () =>{
    compare.value = true
    advanced_filter.value = false
  }
  const close_advanced_filter = () =>{
    advanced_filter.value = false
  }
  const close_compare = () =>{
    compare.value = false
    if(swipe_control.value)map.removeControl(swipe_control.value)
    if(lulc_compare_legend.value)map.removeControl(lulc_compare_legend.value)
        if(firms_compare_legend.value)map.removeControl(firms_compare_legend.value)
        if(smi_compare_legend.value)map.removeControl(smi_compare_legend.value)
        if(modis_legend.value)map.removeControl(modis_legend.value)
        if(flood_compare_legend.value)map.removeControl(flood_compare_legend.value)
        if(status_compare_legend.value)map.removeControl(status_compare_legend.value)
        if(ndvi_compare_legend.value)map.removeControl(ndvi_compare_legend.value)
        if(ndwi_compare_legend.value)map.removeControl(ndwi_compare_legend.value)
        if(prec_compare_legend.value)map.removeControl(prec_compare_legend.value)
        if(bvi_compare_legend.value)map.removeControl(bvi_compare_legend.value)
  }

  const show_docs_select = () => {
    documentation.value = !documentation.value
  }

  
  
  const displayToKey = ($event) => {
    // var selection = $event.target.value
    console.log($event, 'documentation selection')
    if($event === 'Documentation'){
      window.open("https://github.com/sethgis/WeMAST_LTG2-Documentation/wiki");
    }
    if($event === 'Mapographics'){
      window.open("https://drive.google.com/file/d/1pH1TgiyP1JpT3tl7U9ZOYDS2iLJ22Cw1/view?pli=1");
    }

  }
  //sidebar functionality
  const toggle_nav = (e)  => {
        console.log(" toggle_nav ", e.target.id);
        const cmd = e.target.id;
        cmd_.value = e.target.id;
        if(cmd === "close") return closeNav();
          // document.querySelector("#download_tiff").style.backgroundColor = "absolute"
          document.querySelector("#download_tiff").style.left = "-2vw"

          
          document.querySelector("#download_map").style.position = "absolute"
          document.querySelector("#download_map").style.left = "-2vw"

         
          document.querySelector("#measure").style.position = "absolute"
          document.querySelector("#measure").style.left = "-2vw"

         
          document.querySelector("#wemast_base_layers").style.position = "absolute"
          document.querySelector("#wemast_base_layers").style.left = "-2vw"

         
          document.querySelector("#draw_polygon").style.position = "absolute"
          document.querySelector("#draw_polygon").style.left = "-2vw"

          
          document.querySelector("#zoom_in").style.position = "absolute"
          document.querySelector("#zoom_in").style.left = "-2vw"

         
          document.querySelector("#zoom_out").style.position = "absolute"
          document.querySelector("#zoom_out").style.left = "-2vw"

         
          document.querySelector("#help").style.position = "absolute"
          document.querySelector("#help").style.left = "-2vw"
       

        

       
        if(cmd === "open"){

          document.querySelector("#download_tiff").style.position = "absolute"
          document.querySelector("#download_tiff").style.left = "4vw"

          
          document.querySelector("#download_map").style.position = "absolute"
          document.querySelector("#download_map").style.left = "4vw"

         
          document.querySelector("#measure").style.position = "absolute"
          document.querySelector("#measure").style.left = "4vw"

         
          document.querySelector("#wemast_base_layers").style.position = "absolute"
          document.querySelector("#wemast_base_layers").style.left = "4vw"

         
          document.querySelector("#draw_polygon").style.position = "absolute"
          document.querySelector("#draw_polygon").style.left = "4vw"

          
          document.querySelector("#zoom_in").style.position = "absolute"
          document.querySelector("#zoom_in").style.left = "4vw"

         
          document.querySelector("#zoom_out").style.position = "absolute"
          document.querySelector("#zoom_out").style.left = "4vw"

         
          document.querySelector("#help").style.position = "absolute"
          document.querySelector("#help").style.left = "4vw"


          // if(wmsLayer != null){
          //     document.querySelector(".opacity").style.position = "absolute"
          //   document.querySelector(".opacity").style.left = "50vw"
            
          // }


          // if(wmsCompareLayer != null){
          //    document.querySelector(".swap").style.position = "absolute"
          //   document.querySelector(".swap").style.left = "62vw"
          // }
          

        } 
        
        return openNav();
      }
  
     const openNav = () => {
        sidebar.value.open("home1");
        show_sidenav.value = false;


        
        open_nav();
      }
  
      const closeNav = () => {
        sidebar.value.close("home1");
        close_nav();
       
        show_sidenav.value= true;

     
        document.querySelector("#download_tiff").style.left = "-2vw"

          
            document.querySelector("#download_map").style.position = "absolute"
            document.querySelector("#download_map").style.left = "-2vw"


            document.querySelector("#measure").style.position = "absolute"
            document.querySelector("#measure").style.left = "-2vw"


            document.querySelector("#wemast_base_layers").style.position = "absolute"
            document.querySelector("#wemast_base_layers").style.left = "-2vw"


            document.querySelector("#draw_polygon").style.position = "absolute"
            document.querySelector("#draw_polygon").style.left = "-2vw"


            document.querySelector("#zoom_in").style.position = "absolute"
            document.querySelector("#zoom_in").style.left = "-2vw"


            document.querySelector("#zoom_out").style.position = "absolute"
            document.querySelector("#zoom_out").style.left = "-2vw"


            document.querySelector("#help").style.position = "absolute"
            document.querySelector("#help").style.left = "-2vw"




      }
      const handleAnalysisMetaSwap = () => {
        analysis_swap_toggle.value = 'metadata';
      }
      const handleAnalysisMetaSwap2 = () => {
        analysis_swap_toggle.value = 'data_analysis';
      }
  
  
      const AddSideLeafletSideBar = () => {
        sidebar.value = L.control.sidebar({
          container: "sidebar",
          position: "right",
        });
        map.addControl(sidebar.value);
      }
      const zoom_in = () => {
        map.setZoom(map.getZoom() + 1);
      }
      const zoom_out = () => {
        map.setZoom(map.getZoom() - 1);
      }
  const close_swipe = () => {
    if(swipe_control.value)map.removeControl(swipe_control.value)
    if(swipe_control.value = null)swipe_control.value.addTo(map)
    if(wmsCompareLayer.value)map.removeLayer(wmsCompareLayer.value)


        if(lulc_compare_legend.value)map.removeControl(lulc_compare_legend.value)
        if(firms_compare_legend.value)map.removeControl(firms_compare_legend.value)
        if(smi_compare_legend.value)map.removeControl(smi_compare_legend.value)
        if(modis_legend.value)map.removeControl(modis_legend.value)
        if(flood_compare_legend.value)map.removeControl(flood_compare_legend.value)
        if(status_compare_legend.value)map.removeControl(status_compare_legend.value)
        if(ndvi_compare_legend.value)map.removeControl(ndvi_compare_legend.value)
        if(ndwi_compare_legend.value)map.removeControl(ndwi_compare_legend.value)
        if(prec_compare_legend.value)map.removeControl(prec_compare_legend.value)

   

  }
      const handle_baseLayers = () =>{
        setTimeout(() => {
          if (base_map_ctrl_cliked.value === false)
            base_map_ctrl_selections.value = false;
        }, 500);
      }
      const change_base_map = (base_map) => {
        const index = Object.keys(baseMaps.value).indexOf(base_map);
  
        let layerControlElement = document.getElementsByClassName(
          "leaflet-control-layers"
        )[0];
        layerControlElement.getElementsByTagName("input")[index].click();
      }
      //draw control
      const draw_polygon = () => {
        if (!show_draw_control.value) {
          const draw_ctrl = document.getElementsByClassName("leaflet-draw");
          draw_ctrl[0].style.visibility = "visible";
        } else {
          const draw_ctrl = document.getElementsByClassName("leaflet-draw");
          draw_ctrl[0].style.visibility = "hidden";
        }
        show_draw_control.value = !show_draw_control.value;
      }
  
     const addDrawCtrl = () => {
        //we add the polygon draw feature to map as seen  below
        editableLayers.value = new L.FeatureGroup();
        map.addLayer(editableLayers.value);
        let options = {
          position: "bottomright",
          draw: {
            polyline: false,
            polygon: {
              allowIntersection: false, // Restricts shapes to simple polygons
              showArea: true,
              drawError: {
                color: "#e1e100", // Color the shape will turn when intersects
                message: "<strong>Oopsie!<strong> lines cannot intersect!", // Message that will show when intersect
              },
              shapeOptions: {
                color: "black",
                fillColor: "none",
              },
            },
            circle: false, // Turns off this drawing tool
            rectangle: false,
            marker: false,
            circlemarker: false,
          },
          edit: {
            featureGroup: editableLayers.value, //REQUIRED!!
            edit: {},
            // delete:true
          },
        };
        let drawControl = new L.Control.Draw(options);
        map.addControl(drawControl);
  
        map.on(L.Draw.Event.CREATED, (e) => {

          if(custom_geojson.value !=null) {
            editableLayers.value.removeLayer(custom_geojson.value)
          }
          
          
          const layer = e.layer;
          custom_geojson.value = layer.bringToFront()
        
          editableLayers.value.addLayer(custom_geojson.value);
          console.log(JSON.stringify(custom_geojson.value.toGeoJSON().geometry), 'stringified custom drawn geojson');
          //link custom geojson in store to this geojson
          console.log(storeUserSelections.custom_geojson.custom, 'accessed store custom?') //true
          storeUserSelections.custom_geojson.geojson = custom_geojson.value.toGeoJSON().geometry
          console.log(storeUserSelections.custom_geojson.geojson, 'UPDATED STORE CUSTOM GEOJSON')
          // if (process.env.DEV)
          //   
        });
  
      map.on(L.Draw.Event.EDITSTOP, (e) => {
          // if (process.env.DEV) 
          console.log("stop edit", e);
        //   var layers = e.layers;
        //  layers.eachLayer(function (layer) {
        //      //do whatever you want; most likely save back to db
        //      console.log(layer, 'edit mode')
        //  });
        });
        map.on(L.Draw.Event.DELETED, (e) => {
          // if (process.env.DEV) 
          console.log(" deleted ", e);
          //remove the control from map and remove focus on the draw icon by changing color
          draw_polygon();
          document.getElementById("draw_polygon").style.backgroundColor = "white";
        });
      }
  
  //switch between base layers
     const wemast_base_layers = () => {
        if (!show_base_layers.value)
          document.getElementById("show_base_layers").style.display = "none";
        if (show_base_layers.value) {
          document.getElementById("show_base_layers").style.display = "block";
          document.getElementById("show_base_layers").style.marginRight = "-4px";
  
          //create the base map list and render
          const base_layers = Object.keys(baseMaps.value);
          let layer_html = `<ul class=base_layer_list>`;
          base_layers.forEach((layer, i) => {
            layer_html += `<li id=base_layer-${layer}>
            <div class=base_map>
            <div class="base_map_name" ><input type="radio" name="base_map" id="checkbox-${layer}" ${
              current_top_base_layer.value === layer ? "checked" : ""
            } ></div>
            <div class="col-xs-10 q-ml-sm">
             ${layer} ${
              base_layers.length - 1 != i ? "<hr class=full-width> <br> " : ""
            }
             </div>
            </div>
             </li>`;
          });
          layer_html += `</ul>`;
          document.getElementById("show_base_layers").innerHTML = layer_html;
  
          document
            .getElementById("show_base_layers")
            .addEventListener("mouseleave", (e) => {
              document.getElementById("show_base_layers").style.display = "none";
            });
        }
  
        show_base_layers.value = !show_base_layers.value;
      }
  
  
      const change_base_layer = (id) => {
        current_top_base_layer.value = id;
        const base_map = id.split("-")[1];
        current_top_base_layer.value = base_map;
        console.log("change base map ", base_map);
        const index = Object.keys(baseMaps.value).indexOf(base_map);
  
        let layerControlElement = document.getElementsByClassName(
          "leaflet-control-layers"
        )[0];
        layerControlElement.getElementsByTagName("input")[index].click();
  
        map.eachLayer(function (layer) {
          console.log("layer ", layer);
        });
      }
  
     const AddCustomRightControls = () => {
        const leaflet_controls = L.control({ position: "topright"});
        leaflet_controls.onAdd = () => {
          let div = L.DomUtil.create("div", "WeMAST_zoom");
          div.innerHTML = leaflet_custom_controls;
        
          return div;
        };
  
        leaflet_controls.addTo(map);
        // document.getElementsByClassName('map_controls_wrapper').appendChild(leaflet_controls)
        const right_ctrls = document.querySelector(".map_controls");
        // if (show_sidenav.value === true){
        //   // document.querySelector(".map_controls").style.position="absolute"
        //   document.querySelector(".map_controls").style.backgroundColor = "red"
        // }
        right_ctrls.addEventListener("click", (event) => {
          const id = event.target.id;
          event.stopPropagation();
           console.log("target id ", id);
  
           if (id === "measure") {
            document
              .getElementsByClassName("leaflet-control-measure")[0]
              .dispatchEvent(new Event("click"));
          }
          if ([`${id}`]) {
            [id];
          }
          if (id.startsWith("checkbox")) {
            change_base_layer(id);
          }
          if (
            (previous_wemast_ctrl_id.value &&
              previous_wemast_ctrl_id.value != id) ||
            (previous_wemast_ctrl_id.value && previous_wemast_ctrl_id.value === id)
          ) {
            document.getElementById(
              previous_wemast_ctrl_id.value
            ).style.backgroundColor = "white";
          }
          if (
            ![
              "zoom_in",
              "zoom_out",
              "download_map",
              'download_tiff',
              "wemast_base_layers",
            ].includes(id)
          ) {
            try {
              document.getElementById(`${id}`).style.backgroundColor =
                "white";
            } catch (err) {}
          }
          if (
            ![
              "zoom_in",
              "zoom_out",
              "download_map",
              'download_tiff',
              "wemast_base_layers",
            ].includes(id) && show_sidenav == true
          ){
           
            console.log('sidenav is open')

          }
  
          
  
         
          
  
          previous_wemast_ctrl_id.value = id;
        });
      }
const opensidenavigationbar = () => {
    sidenavigationbar.value = true
    
}
const lulc_style = () => {
//  if(basin.value === 'Cuvelai'){
//   styles.value = 'cuvelai_lulc' 
//  }
//  if(basin.value === 'Zambezi' ) styles.value = 'zambezi_lulc'
//  if(basin.value === 'Limpopo') styles.value = 'limpopo_lulc'
//  if(basin.value === 'Okavango') styles.value = 'okavango_lulc'
basin.value === 'Cuvelai' ?  styles.value ='cuvelai_lulc' :  basin.value === 'Zambezi' ? styles.value = 'zambezi_lulc':  basin.value === 'Limpopo' ? styles.value = 'limpopo_lulc': 'okavango_lulc'

}
const prec_style = () => {
  basin.value === 'Cuvelai' ?  styles.value ='cuvelai_spi' :  basin.value === 'Zambezi' ? styles.value = 'zambezi_spi':  basin.value === 'Limpopo' ? styles.value = 'limpopo_spi': 'okavango_spi'
}

const wetland_extent_style = () => {
  basin.value === 'Cuvelai' ? styles.value = 'cuvelai_water' :  basin.value === 'Zambezi' ? styles.value = 'zambezi_water':  basin.value === 'Limpopo' ? styles.value = 'limpopo_water': 'okavango_water'
}
const vegcover_style = () => {
  basin.value === 'Cuvelai' ? styles.value  = 'cuvelai_ndvi' :  basin.value === 'Zambezi' ? styles.value  = 'zambezi_ndvi':  basin.value === 'Limpopo' ? styles.value  = 'limpopo_ndvi': 'okavango_ndvi'
}
const status_style = () => {
  basin.value === 'Cuvelai' ? styles.value = 'cuvelai_status' :  basin.value === 'Zambezi' ?  styles.value ='zambezi_status':  basin.value === 'Limpopo' ? styles.value = 'limpopo_status': 'okavango_status'
}
const bvi_style = () => {
  basin.value === 'Cuvelai' ? styles.value = 'cuvelai_bvi' :  basin.value === 'Zambezi' ? styles.value = 'zambezi_bvi':  basin.value === 'Limpopo' ? styles.value = 'limpopo_bvi': 'okavango_bvi'
}

const download_tiff = () => {
  
 
  var url = ""
  if(sub_indicator.value === 'Land Cover' ) {
    lulc_style()
    url = `${baseurl}:8080/geoserver/LULC/wms?service=WMS&version=1.1.0&request=GetMap&layers=LULC%3A${year.value}&bbox=13.869987986805413%2C-26.536233492890666%2C36.48956684093497%2C-8.947220229830435&width=768&height=597&srs=EPSG%3A4326&styles=${styles.value}&format=image%2Fgeotiff`
  }
  if(sub_indicator.value === 'Precipitation Index' && season.value === 'WET' ){
    prec_style()
    url = `${baseurl}:8080/geoserver/SPI_WET/wms?service=WMS&version=1.1.0&request=GetMap&layers=SPI_WET%3A${year.value}&bbox=13.869987986805413%2C-26.536233492890666%2C36.48956684093497%2C-8.947220229830435&width=768&height=597&srs=EPSG%3A4326&styles=${styles.value}&format=image%2Fgeotiff`
  }
  if(sub_indicator.value === 'Precipitation Index' && season.value === 'DRY' ){
    prec_style()
    url = `${baseurl}:8080/geoserver/SPI_DRY/wms?service=WMS&version=1.1.0&request=GetMap&layers=SPI_WET%3A${year.value}&bbox=13.869987986805413%2C-26.536233492890666%2C36.48956684093497%2C-8.947220229830435&width=768&height=597&srs=EPSG%3A4326&styles=${styles.value}&format=image%2Fgeotiff`
  }
  if(sub_indicator.value === 'Wetland Inventory' && parameter.value === 'Wetland Extent'){
    wetland_extent_style()
    url = `${baseurl}:8080/geoserver/NDWI/wms?service=WMS&version=1.1.0&request=GetMap&layers=NDWI%3A${year.value}&bbox=13.869987986805413%2C-26.536233492890666%2C36.48956684093497%2C-8.947220229830435&width=768&height=597&srs=EPSG%3A4326&styles=${styles.value}&format=image%2Fgeotiff`

  }
  if(sub_indicator.value === 'Vegetation Cover' ){
    vegcover_style()
    url = `${baseurl}:8080/geoserver/${satellite.value}_NDVI_${season.value}/wms?service=WMS&version=1.1.0&request=GetMap&layers=${satellite.value}_NDVI_${season.value}%3A${year.value}&bbox=13.869987986805413%2C-26.536233492890666%2C36.48956684093497%2C-8.947220229830435&width=768&height=597&srs=EPSG%3A4326&styles=${styles.value}&format=image%2Fgeotiff`
  }

  if(sub_indicator.value === 'Wetland Inventory' && parameter.value === 'Wetland Status' ){
     
  status_style()
    url = `${baseurl}:8080/geoserver/${satellite.value}_NDVI_${season.value}/wms?service=WMS&version=1.1.0&request=GetMap&layers=${satellite.value}_NDVI_${season.value}%3A${year.value}&bbox=13.869987986805413%2C-26.536233492890666%2C36.48956684093497%2C-8.947220229830435&width=768&height=597&srs=EPSG%3A4326&styles=${styles.value}&format=image%2Fgeotiff`
  }
  if(sub_indicator.value === 'Burnt Area FIRMS') {
    url = `${baseurl}:8080/geoserver/FIRMS_DRY/wms?service=WMS&version=1.1.0&request=GetMap&layers=FIRMS_DRY%3A${year.value}&bbox=13.869987986805413%2C-26.536233492890666%2C36.48956684093497%2C-8.947220229830435&width=768&height=597&srs=EPSG%3A4326&styles=${basin.value}_firms&format=image%2Fgeotiff`
  }
  if(sub_indicator.value === 'Soil Moisure Index') {
    url = `${baseurl}:8080/geoserver/SMI_${season.value}/wms?service=WMS&version=1.1.0&request=GetMap&layers=SMI_${season.value}%3A${year.value}&bbox=13.869987986805413%2C-26.536233492890666%2C36.48956684093497%2C-8.947220229830435&width=768&height=597&srs=EPSG%3A4326&styles=${basin.value}_smi&format=image%2Fgeotiff`
  }
  if(sub_indicator.value === 'Undulation') {
    url = `${baseurl}:8080/geoserver/FLOOD/wms?service=WMS&version=1.1.0&request=GetMap&layers=FLOOD%3AFLOOD&bbox=13.869987986805413%2C-26.536233492890666%2C36.48956684093497%2C-8.947220229830435&width=768&height=597&srs=EPSG%3A4326&styles=${basin.value}_flood&format=image%2Fgeotiff`
  }
  if(indicator.value === 'Basin Vulnerability Index') {
    bvi_style()
    url = `${baseurl}:8080/geoserver/BVI_${season.value}/wms?service=WMS&version=1.1.0&request=GetMap&layers=BVI_${season.value}%3A${year.value}&bbox=13.869987986805413%2C-26.536233492890666%2C36.48956684093497%2C-8.947220229830435&width=768&height=597&srs=EPSG%3A4326&styles=${styles.value}&format=image%2Fgeotiff`
  }
  if(sub_indicator.value === 'Water Quality' && parameter.value === 'Turbidity'){
    url = `${baseurl}:8080/geoserver/NDWI/wms?service=WMS&version=1.1.0&request=GetMap&layers=NDWI%3A${year.value}&bbox=13.869987986805413%2C-26.536233492890666%2C36.48956684093497%2C-8.947220229830435&width=768&height=597&srs=EPSG%3A4326&styles=${styles.value}&format=image%2Fgeotiff`

  }
  if(sub_indicator.value === 'Water Quality' && parameter.value === 'Sus Sediments'){
    url = `${baseurl}:8080/geoserver/NDWI/wms?service=WMS&version=1.1.0&request=GetMap&layers=NDWI%3A${year.value}&bbox=13.869987986805413%2C-26.536233492890666%2C36.48956684093497%2C-8.947220229830435&width=768&height=597&srs=EPSG%3A4326&styles=${styles.value}&format=image%2Fgeotiff`

  }

  var a = document.createElement("a");
  a.href = url;
  a.title = `${basin.value}`;
  a.download = `Raster.tiff`;
  document.body.appendChild(a);
  a.click();
  a.remove();
 

}
const help = () => {
        var url = 'https://github.com/sethgis/WeMAST_LTG2-Documentation/wiki'
        var a = document.createElement("a");
        a.setAttribute("href", url);
        a.setAttribute("target", '_blank');
        a.click();      
}

     const afterRender = (result) => {
      return result;
    }

   const afterExport = (result) => {
      return result;
    }
     const  downloadMap = (caption) => {
      var downloadOptions = {
        container: map._container,
        caption: {
          text: caption,
          font: '30px Arial',
          fillStyle: 'black',
          position: [100, 200]
        },
        exclude: ['.leaflet-control-zoom', '.leaflet-control-attribution'],
        format: 'image/png',
        fileName: `${basin.value} ${sub_indicator.value} Map.png`,
        afterRender: afterRender,
        afterExport: afterExport
      };
      var promise = map.downloadExport(downloadOptions);
      var data = promise.then(function (result) {
        return result;
      });
    }
      const setLeafletMap = () => {

        let osm = L.tileLayer(
          "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          {
            maxZoom: 10,
            attribution:
              '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
          }
        );
  const mapboxSatellite =  L.tileLayer(
         "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}{r}?access_token={accessToken}",
         {
           attribution:
             'Map data (c) <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  
           id: "mapbox/satellite-v9",
           accessToken:
             "pk.eyJ1IjoiY2hyaXNiYXJ0IiwiYSI6ImNrZTFtb3Z2bDAweTMyem1zcmthMGY0ejQifQ.3PzoCgSiG-1-sV1qJvO9Og",
         }
       );
  
       const mapbox =  L.tileLayer(
         "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
         {
           attribution:
             'Map data (c) <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
           maxZoom: 10,
           id: "mapbox/streets-v11",
           accessToken:
             "pk.eyJ1IjoiY2hyaXNiYXJ0IiwiYSI6ImNrZTFtb3Z2bDAweTMyem1zcmthMGY0ejQifQ.3PzoCgSiG-1-sV1qJvO9Og",
         }
       );
  
        baseMaps.value = {
          OpenStreetMap: osm,
          MapBox: mapbox,
          MapBoxSatellite: mapboxSatellite,
        };
    map = L.map("map", {
          zoomControl: false,
          layersControl: false,
          center: [-19.004029959874842, 23.989915476106987],
          // minZoom: 6.5,
          // maxZoom: 20,
          zoom: 5,
          measureControl: true,
          // defaultExtentControl: true,
          layers: [mapboxSatellite]
        }); // add the basemaps to the controls
  
        L.control.layers(baseMaps.value).addTo(map);
    
         ///////////////////hide layers control
        //  var layerControl = document.getElementsByClassName(
        //   "leaflet-control-layers"
        // );
        // layerControl[0].style.visibility = "hidden";
  
      current_top_base_layer.value = "MapBoxSatellite";

//        var printer = L.easyPrint({
// 	// title: 'My awesome print button',
//   tileLayer: mapboxSatellite,
// 	position: 'bottomright',
// 	sizeModes: ['A4Portrait', 'A4Landscape'],
//   filename: 'mymap',
//   exportOnly: true,
//       		hideControlContainer: true
// }).addTo(map);
// printPlugin.value = printer


// printPlugin.value.printMap('A4Portrait', 'MyFileName');


      }
      
  //hooks

  onMounted( () => {
    setLeafletMap()
//     console.log('screen scale', window.devicePixelRatio) //1, 1.25 etc
//    var device_scale = window.devicePixelRatio
//    browserZoomLevel.value = Math.round(window.devicePixelRatio * 100);
//   //  alert(browserZoomLevel.value)
//   //  console.log('browser zoom',browserZoomLevel)
//    if(device_scale === 1.25){
//     // document.body.style.zoom = "99%";
//   //  alert(browserZoomLevel)
//   // window.devicePixelRatio = 1
// // browserZoomLevel.value = 80
 
//  browserZoomLevel.value = Math.round(browserZoomLevel.value - 45)
//  window.devicePixelRatio = 1
//  alert(browserZoomLevel.value)


//    }

    //load zambezi
    const fetchZambezi = async () => {
      const resp = await  axios.get(`${baseurl}:8080/geoserver/aoi/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=aoi%3AZambezi&maxFeatures=50&outputFormat=application%2Fjson`
              );
           var zambezi_region = resp.data
           default_zambezi_region.value =  resp.data

              map.createPane("pane1000").style.zIndex = 300;
   current_geojson.value = L.geoJSON(zambezi_region, {
           style: {
             color: "black",
             opacity: 1,
             fillOpacity:0,
             weight: 4
           },
           pane: 'pane1000'
            })
   
  
   current_geojson.value.addTo(map)

  
  
             map.fitBounds(current_geojson.value.getBounds(), {
                             padding: [50, 50],
                           }); 
              
    }

    fetchZambezi()



    const changeDefaultOpacity = () => {
    $('#sldOpacity').on('change', function(){
                                    //   $('#image-opacity').html(this.value); //i might revesit
                                      console.log(this.value, 'opacity value')
                                     
                                        wmsLayer.value.setOpacity(this.value)
                                      
                                    
                                     
                                    
                    
                                  });
  }



  

    //loadd lulc
    const addLulcLayer = () => {
  
  
  // console.log('just to see if request is accessed') //accessed
  map.createPane("pane400").style.zIndex = 200;


 




wmsLayer.value =  L.tileLayer.wms(`${baseurl}:8080/geoserver/LULC/wms?`, {
     pane: 'pane400', 
     layers: `LULC:2017`,
     crs:L.CRS.EPSG4326,
     styles:'zambezi_lulc',
     format: 'image/png',
     transparent: true,
     opacity:1.0,
      // CQL_FILTER: "Name='Zambezi'",
      // CQL_FILTER:"BBOX(the_geom, 13, -19, 19, -15 )"
    //  CQL_FILTER: "INTERSECTS(the_geom, MULTIPOLYGON (((16.3419 -15.1163, 16.3418 -15.1255, 16.351 -15.1255, 16.3509 -15.1346, 16.36 -15.1346, 16.3692 -15.1346, 16.3693 -15.1255, 16.3785 -15.1255, 16.3876 -15.1255, 16.3875 -15.1346, 16.3967 -15.1346, 16.4059 -15.1346, 16.406 -15.1255, 16.4151 -15.1255, 16.4243 -15.1255, 16.4242 -15.1346, 16.4334 -15.1346, 16.4425 -15.1346, 16.4424 -15.1437, 16.4423 -15.1528, 16.4422 -15.162, 16.4514 -15.162, 16.4606 -15.162, 16.4697 -15.162, 16.4696 -15.1711, 16.4695 -15.1802, 16.4787 -15.1802, 16.4786 -15.1893, 16.4785 -15.1984, 16.4877 -15.1984, 16.4876 -15.2076, 16.4967 -15.2076, 16.4966 -15.2167, 16.5058 -15.2167, 16.515 -15.2167, 16.5241 -15.2167, 16.524 -15.2258, 16.5332 -15.2258, 16.5331 -15.2349, 16.5423 -15.2349, 16.5422 -15.244, 16.5513 -15.244, 16.5605 -15.244, 16.5604 -15.2532, 16.5696 -15.2532, 16.5697 -15.244, 16.5698 -15.2349, 16.5699 -15.2258, 16.57 -15.2167, 16.5791 -15.2167, 16.5883 -15.2167, 16.5975 -15.2167, 16.6067 -15.2167, 16.6066 -15.2258, 16.6157 -15.2258, 16.6249 -15.2258, 16.6341 -15.2258, 16.634 -15.2349, 16.6431 -15.2349, 16.6523 -15.2349, 16.6522 -15.2441, 16.6614 -15.2441, 16.6613 -15.2532, 16.6521 -15.2532, 16.652 -15.2623, 16.6519 -15.2714, 16.6518 -15.2805, 16.661 -15.2805, 16.6702 -15.2805, 16.6701 -15.2897, 16.6792 -15.2897, 16.6884 -15.2897, 16.6976 -15.2897, 16.7067 -15.2897, 16.7159 -15.2897, 16.7158 -15.2988, 16.725 -15.2988, 16.7249 -15.3079, 16.7248 -15.317, 16.7156 -15.317, 16.7065 -15.317, 16.7064 -15.3262, 16.7063 -15.3353, 16.7062 -15.3444, 16.7153 -15.3444, 16.7152 -15.3535, 16.7244 -15.3535, 16.7336 -15.3535, 16.7428 -15.3535, 16.7427 -15.3627, 16.7518 -15.3627, 16.7519 -15.3535, 16.7611 -15.3535, 16.761 -15.3627, 16.7702 -15.3627, 16.7794 -15.3627, 16.7793 -15.3718, 16.7884 -15.3718, 16.7883 -15.3809, 16.7882 -15.39, 16.7881 -15.3992, 16.7881 -15.4083, 16.788 -15.4174, 16.7971 -15.4174, 16.8063 -15.4174, 16.8062 -15.4265, 16.8154 -15.4265, 16.8153 -15.4357, 16.8245 -15.4357, 16.8336 -15.4357, 16.8428 -15.4357, 16.8427 -15.4448, 16.8426 -15.4539, 16.8518 -15.4539, 16.8517 -15.463, 16.8609 -15.463, 16.8701 -15.463, 16.87 -15.4722, 16.8699 -15.4813, 16.8791 -15.4813, 16.8882 -15.4813, 16.8974 -15.4813, 16.8973 -15.4904, 16.9065 -15.4904, 16.9064 -15.4995, 16.9156 -15.4995, 16.9248 -15.4995, 16.9339 -15.4995, 16.934 -15.4904, 16.9432 -15.4904, 16.9431 -15.4995, 16.9523 -15.4995, 16.9522 -15.5087, 16.9521 -15.5178, 16.9613 -15.5178, 16.9705 -15.5178, 16.9704 -15.5269, 16.9795 -15.5269, 16.9887 -15.5269, 16.9979 -15.5269, 17.0071 -15.5269, 17.0163 -15.5269, 17.0254 -15.5269, 17.0346 -15.5269, 17.0438 -15.5269, 17.0437 -15.5361, 17.0529 -15.5361, 17.062 -15.5361, 17.0712 -15.5361, 17.0713 -15.5269, 17.0805 -15.5269, 17.0806 -15.5178, 17.0898 -15.5178, 17.0989 -15.5178, 17.0988 -15.5269, 17.108 -15.527, 17.1172 -15.527, 17.1171 -15.5361, 17.1263 -15.5361, 17.1355 -15.5361, 17.1446 -15.5361, 17.1538 -15.5361, 17.1537 -15.5452, 17.1629 -15.5452, 17.1721 -15.5452, 17.1813 -15.5452, 17.1905 -15.5452, 17.1904 -15.5543, 17.1903 -15.5635, 17.1902 -15.5726, 17.1994 -15.5726, 17.2086 -15.5726, 17.2085 -15.5817, 17.2177 -15.5817, 17.2177 -15.5726, 17.2269 -15.5726, 17.2361 -15.5726, 17.236 -15.5817, 17.2359 -15.5909, 17.2451 -15.5909, 17.245 -15.6, 17.2542 -15.6, 17.2541 -15.6091, 17.254 -15.6182, 17.2632 -15.6182, 17.2631 -15.6274, 17.2631 -15.6365, 17.263 -15.6456, 17.2721 -15.6456, 17.2813 -15.6456, 17.2905 -15.6456, 17.2904 -15.6548, 17.2996 -15.6548, 17.2995 -15.6639, 17.3087 -15.6639, 17.3086 -15.673, 17.3178 -15.673, 17.3177 -15.6822, 17.3176 -15.6913, 17.3176 -15.7004, 17.3084 -15.7004, 17.3083 -15.7095, 17.3175 -15.7095, 17.3174 -15.7187, 17.3173 -15.7278, 17.3265 -15.7278, 17.3357 -15.7278, 17.3356 -15.7369, 17.3355 -15.7461, 17.3447 -15.7461, 17.3446 -15.7552, 17.3538 -15.7552, 17.3537 -15.7643, 17.3537 -15.7735, 17.3628 -15.7735, 17.372 -15.7735, 17.3721 -15.7643, 17.3722 -15.7552, 17.3814 -15.7552, 17.3814 -15.7461, 17.3906 -15.7461, 17.3905 -15.7552, 17.3997 -15.7552, 17.4089 -15.7552, 17.4088 -15.7643, 17.4088 -15.7735, 17.4087 -15.7826, 17.4179 -15.7826, 17.4178 -15.7917, 17.427 -15.7917, 17.4362 -15.7917, 17.4453 -15.7917, 17.4453 -15.8009, 17.4452 -15.81, 17.4451 -15.8191, 17.4543 -15.8191, 17.4635 -15.8191, 17.4636 -15.81, 17.4727 -15.81, 17.4819 -15.81, 17.4911 -15.81, 17.491 -15.8191, 17.50))) )"
     
     
    
});


wmsLayer.value.addTo(map);

wmsLayer.value.on('load', function (event) {
  changeDefaultOpacity()
});




// console.log(wmsLayer.value, 'wms')


// addLulcLegend()

lulclegendContent()





 }

 addLulcLayer()
// addCQLFilter()

 
 

 //load stats for zambezi ndwi

 storeUserSelections.getDefaultStats()
default_stats.value =  storeUserSelections.getDefaultStats()

 
  

      AddCustomRightControls();
  
         //add sidebar
         AddSideLeafletSideBar();
  
  
  
  document
        .getElementById("wemast_base_layers")
        .addEventListener("click", (e) => {
          console.log("click ");
          show_base_layers.value = true;
          wemast_base_layers();
        })
  
        document
        .getElementById("zoom_in")
        .addEventListener("click", (e) => {
          console.log("click ");
          
          zoom_in();
        });
  
        document
        .getElementById("zoom_out")
        .addEventListener("click", (e) => {
          console.log("click ");
          
          zoom_out();
        });

        document
        .getElementById("download_tiff")
        .addEventListener("click", (e) => {
          console.log("click ");
          
          download_tiff();
        });

        // document
        // .getElementById("measure")
        // .addEventListener("click", (e) => {
        //  document.getElementsByClassName("leaflet-control-measure")[0]
        // //  .dispatchEvent(new Event("click"))
        //   // console.log("click ");
          
        //   // download_tiff();
        // });
        document
        .getElementById("help")
        .addEventListener("click", (e) => {
          console.log("click ");
          
          help();
        });
        document
        .getElementById("download_map")
        .addEventListener("click", (e) => {
          console.log("click ");
          
          downloadMap('My leaflet map');
        });
  
        document
        .getElementById("draw_polygon")
        .addEventListener("click", (e) => {
          console.log("click ");
          
          addDrawCtrl();
          draw_polygon();
        });
  
        
  
      // addDrawCtrl(); //adds draw control to map
      // draw_polygon(); //hides draw controls
  
      // map.on("baselayerchange", (e) => {
      //   console.log("Layer in basechange ", current_raster_layer.value);
      //   if (current_raster_layer.value) {
      //     current_raster_layer.value.bringToFront(); //current_raster can be tracked and brought to front
      //   }
      // });
  
  
     

      closeNav();

      const plugin = L.control
      .measure({
        //  control position
        position: "topleft",
        //  weather to use keyboard control for this plugin
        keyboard: true,
        //  shortcut to activate measure
        activeKeyCode: "M".charCodeAt(0),
        //  shortcut to cancel measure, defaults to 'Esc'
        cancelKeyCode: 27,
        //  line color
        lineColor: "red",
        //  line weight
        lineWeight: 2,
        //  line dash
        lineDashArray: "6, 6",
        //  line opacity
        lineOpacity: 1,
        formatDistance: "km"
        //  distance formatter
        // formatDistance: function (val) {
        //   return Math.round(1000 * val / 1609.344) / 1000 + 'mile';
        // }
      })
      .addTo(map);



  
  
  })//OnMounted end



  
  //change browser zoom on click
//   const change_zoom = () => {
//     // console.log('screen scale', window.devicePixelRatio) //1, 1.25 etc
//    var device_scale = window.devicePixelRatio
// //    browserZoomLevel.value = Math.round(window.devicePixelRatio * 100);
// //   //  alert(browserZoomLevel.value)
// // //   //  alert(browserZoomLevel.value)
// // //   //  console.log('browser zoom',browserZoomLevel)
// //    if(device_scale === 1.25){
// //     document.body.style.zoom = "80%";
// //     // document.body.style.zoom = "99%";
// //   //  alert(browserZoomLevel.value)
// //   // device_scale = 1
// // // browserZoomLevel.value = 80
 
// // //  browserZoomLevel.value = Math.round(browserZoomLevel.value - 45)
// // //  window.devicePixelRatio = 1
// // //  alert(browserZoomLevel.value)


// //    }
// var currFFZoom = 1;
//     var currIEZoom = 100;

//     if(device_scale === 1.25) {

      
//             var step = 10;
//             currIEZoom -= step;
//             $('body').css('zoom', ' ' + currIEZoom + '%');
        

//     }

       
 
//   }


  
      //function to get regions 
  
      const getRegion = () => {  
        
  //  close_nav()
 
   if(current_geojson.value)map.removeLayer(current_geojson.value)
   if(wmsLayer.value)map.removeLayer(wmsLayer.value)
   if(wmsCompareLayer.value)map.removeLayer(wmsCompareLayer.value)
   if(wmsPrecTimeseriesLayer.value)map.removeLayer(wmsPrecTimeseriesLayer.value)
   if(group.value)group.value.clearLayers()
   if(lulc_legend.value)map.removeControl(lulc_legend.value)
  //  if(current_point_geojson.value)map.removeLayer(current_point_geojson.value)

  removeDefaultStats()
  
  
   var selecteRegion = storeUserSelections.getSelectedRegion
   geometry = selecteRegion
   console.log(selecteRegion, 'selected region app')
  
   map.createPane("pane1000").style.zIndex = 300;
   current_geojson.value = L.geoJSON(selecteRegion, {
           style: {
             color: "black",
             opacity: 1,
             fillOpacity:0,
             weight: 4
           },
           crs:L.CRS.EPSG4326,
           pane: 'pane1000'
            })
   
  
   current_geojson.value.addTo(map)

   var drawn_polygon = selecteRegion
  console.log(drawn_polygon.features[0].geometry, 'drawnpoly convert')
  var object_geojson = drawn_polygon.features[0].geometry
  var str = wkt.stringify(object_geojson)
  console.log(str, 'wkt custom str')
  
  
            //  map.fitBounds(current_geojson.value.getBounds(), {
            //                  padding: [50, 50],
            //                }); 
            // console.log('bounds',current_geojson.value.getBounds())
            // map.flyToBounds(current_geojson.value.getBounds())
            if(current_top_base_layer.value === 'MapBoxSatellite'){
              map.flyToBounds(current_geojson.value.getBounds())
            } else{
              map.setView(current_geojson.value.getBounds().getCenter());

            }
            
         

                          
                           if(cmd_.value === 'open')return closeNav()


                           
      const provider = new OpenStreetMapProvider();
search_marker.value = {
    // optional: L.Marker    - default L.Icon.Default
    icon: new L.icon({
      iconUrl: "/mapIcons/point.svg",
      iconSize: [40, 40],
      iconAnchor: [15,15]
    }),
    draggable: false,
  }



const searchControl = new GeoSearchControl({
  provider: provider,
  stle: 'bar',
  marker: search_marker.value,
  popupFormat: ({ query, result }) => result.label,
  resultFormat: ({ result}) => result.label
  //  console.log(result, 'result')
  
});
if(search_control.value)map.removeControl(search_control.value)


const showResult = ({result}) => {
      console.log(result, result)
      return result.label

    }
    search_control.value = searchControl
    
map.addControl(search_control.value );


    
    document.getElementById('location_search').appendChild(
      document.querySelector(".geosearch")
    );

   
  }
 
  //watch for changes
  
  const setSelectedRegion = computed( () => {
    console.log(storeUserSelections.selected_basin, 'selected_basin app')
    
    return storeUserSelections.getSelectedRegion
  })
  watch( setSelectedRegion , () => {
    getRegion()
    
  })

 
   
  const removeDefaultStats = () => {
    show_zambezi_stats.value = false
  }
  
  const getBasinName = () => {
    removeDefaultStats()
    var selected_basin = storeUserSelections.getSelectedBasin
    
    basin.value = selected_basin
    console.log(selected_basin, 'selected basin app')


  // show_zambezi_stats.value == false
 }

  
  
  
  const setSelectedBasin = computed ( () => {
    console.log(storeUserSelections.selected_basin, 'selected basin app')
  
    return storeUserSelections.getSelectedBasin
  
  })
  watch( setSelectedBasin , () => {
    getBasinName()
    
  })


  //indicator 
  const getIndicator = () => {
    var selectedIndicator= storeUserSelections.getSelectedIndcator
   console.log(selectedIndicator, 'selected indicator app')
   indicator.value = selectedIndicator
  
  }
  
  
  const setSelectedIndicator = computed ( () => {
    console.log(storeUserSelections.selected_indicator, 'selected_indicator app')
    return storeUserSelections.getSelectedIndcator
  
  })
  watch( setSelectedIndicator , () => {
    getIndicator()
    
  })
  
  //access subindicator
  
  const getSubIndicator = () => {
    var selectedSubIndicator= storeUserSelections.getSelectedSubIndcator
   console.log(selectedSubIndicator, 'selected sub indicator app')
   sub_indicator.value = selectedSubIndicator



  
  }
  
  
  const setSelectedSubIndicator = computed ( () => {
    console.log(storeUserSelections.selected_sub_indicator, 'selected sub_indicator app')
    return storeUserSelections.getSelectedSubIndcator
  
  })
  watch( setSelectedSubIndicator , () => {
    getSubIndicator()
    
  })
  
  
  //access year
  
  const getYear = () => {
    var selectedYear= storeUserSelections.getSelectedYear
  
   year.value = selectedYear
   console.log(year.value, 'selected year app')
  
  }
  
  
  const setSelectedYear = computed ( () => {
    console.log(storeUserSelections.selected_year, 'selected year app')
    return storeUserSelections.getSelectedYear
  
  })
  watch( setSelectedYear , () => {
    getYear()
    
  })
  const getSeason = () => {
    var selectedSeason = storeUserSelections.getSelectedSeason
    season.value = selectedSeason
    console.log(season.value, 'selected season app')
  
  }
  const setSelectedSeason = computed ( () => {
    console.log(storeUserSelections.selected_season, 'selected season app')
    return storeUserSelections.getSelectedSeason
  
  })
  watch( setSelectedSeason , () => {
    getSeason()
    
  })
  
  
  const getParameter = () => {
    var selectedParameter = storeUserSelections.getSelectedParameter
    parameter.value = selectedParameter
    console.log(parameter.value, 'selected parameter app')
  
  }
  const setSelectedParameter = computed ( () => {
    console.log(storeUserSelections.selected_parameter, 'selected parameter app')
    return storeUserSelections.getSelectedParameter
  
  })
  watch( setSelectedParameter , () => {
    getParameter()
    
  })

  const getSatellite = () => {
    var selectedSatellite = storeUserSelections.getSelectedSatellite
    satellite.value = selectedSatellite
    console.log(satellite.value, 'selected satellite app')

  }
  const setSelectedSatellite = computed ( () => {
    console.log(storeUserSelections.selected_satellite, 'selected satellite app')
    return storeUserSelections.getSelectedSatellite
  
  })
  watch( setSelectedSatellite , () => {
    getSatellite()
    
  })

 
  const addBVILayer = () => {
  if(indicator.value === 'Basin Vulnerability Index') {
  
  // console.log('just to see if request is accessed') //accessed
  map.createPane("pane400").style.zIndex = 200;

wmsLayer.value =  L.tileLayer.wms(`${baseurl}:8080/geoserver/BVI_${season.value}/wms?`, {
     pane: 'pane400', 
     layers: `BVI_${season.value}:${year.value}`,
     crs:L.CRS.EPSG4326,
     styles: basin.value === 'Cuvelai' ? 'cuvelai_bvi' :  basin.value === 'Zambezi' ? 'zambezi_bvi':  basin.value === 'Limpopo' ? 'limpopo_bvi': 'okavango_bvi',
     format: 'image/png',
     transparent: true,
     opacity:1.0
     
     
    
});


wmsLayer.value.addTo(map);




// console.log(wmsLayer.value, 'wms')


// addLulcLegend()
// lulclegendContent()
BVIlegendContent()

changeOpacity()

}
 }

 const addLulcLayer = () => {
  if(sub_indicator.value === 'Land Cover') {
  
  // console.log('just to see if request is accessed') //accessed
  map.createPane("pane400").style.zIndex = 200;

  //create params object
  // var lulc_params = {
  //                       // ...lulc_params,
  //                       geometry: geometry,
  //                       //.geometry.coordinates[0] ,
  //                       indicator: indicator.value,
  //                      sub_indicator: sub_indicator.value,
  //                       year: year.value,
  //                     };
  //                     console.log(lulc_params, 'LULC_PARAMETERS')

  
  

wmsLayer.value =  L.tileLayer.wms(`${baseurl}:8080/geoserver/LULC/wms?`, {
     pane: 'pane400', 
     layers: `LULC:${year.value}`,
     crs:L.CRS.EPSG4326,
     styles: basin.value === 'Cuvelai' ? 'cuvelai_lulc' :  basin.value === 'Zambezi' ? 'zambezi_lulc':  basin.value === 'Limpopo' ? 'limpopo_lulc': 'okavango_lulc',
     format: 'image/png',
     transparent: true,
     opacity:1.0
     
     
    
});


wmsLayer.value.addTo(map);




// console.log(wmsLayer.value, 'wms')


// addLulcLegend()
lulclegendContent()

changeOpacity()

}
 }

//  const clip_custom = () => {
  
//     // if(wmsLayer.value)map.removeLayer(wmsLayer.value)
  
//   // console.log('just to see if request is accessed') //accessed
//   map.createPane("pane400").style.zIndex = 600;

//   var drawn_polygon = storeUserSelections.custom_geojson.geojson.coordinates
//   console.log(drawn_polygon, 'drawn polygon')
//   //get bounds
//   var custom_bounds = custom_geojson.value.getBounds()
//   console.log(custom_bounds, 'custom bounds')
//   var north_east = custom_bounds._northEast
//   var south_west = custom_bounds._southWest

  
//   // var latlng1 = L.latLng(drawn_polygon[0]);
//   // var latlng2 = L.latLng(drawn_polygon[2]);
//   // const myLatLngBounds = L.latLngBounds(latlng1, latlng2);


//   // var str = wkt.stringify(drawn_polygon)
//   // console.log(str, 'wkt custom str')

  

// customWmsLayer.value =  L.tileLayer.wms("${baseurl}:8080/geoserver/LULC/wms?", {
//      pane: 'pane400', 
//      layers: `LULC:${year.value}`,
//      crs:L.CRS.EPSG4326,
//     //  styles: styles.value,
//      format: 'image/png',
//      bounds: custom_bounds,
//      transparent: true,
//      opacity:1.0
     
     
    
// });


// customWmsLayer.value.addTo(map);
// console.log(customWmsLayer.value, 'custom wms layer')








//  }



 const addPrecTimeSeries = () => {
  L.TileLayer.BetterWMS = L.TileLayer.WMS.extend({
    
    onAdd: function (map) {
      // Triggered when the layer is added to a map.
      //   Register a click listener, then do all the upstream WMS things
      L.TileLayer.WMS.prototype.onAdd.call(this, map);
      map.on('click' , this.getFeatureInfo, this);
    },
    
    onRemove: function (map) {
      // Triggered when the layer is removed from a map.
      //   Unregister a click listener, then do all the upstream WMS things
      L.TileLayer.WMS.prototype.onRemove.call(this, map);
      map.off('click', this.getFeatureInfo, this);
    },
    
    getFeatureInfo: function (evt) {
      // Make an AJAX request to the server and hope for the best
      var url = this.getFeatureInfoUrl(evt.latlng),
          showResults = L.Util.bind(this.showGetFeatureInfo, this);
      $.ajax({
        url: url,
        success: function (data, status, xhr) {
          var err = typeof data === 'string' ? null : data;
          showResults(err, evt.latlng, data);
        },
        error: function (xhr, status, error) {
          showResults(error);  
        }
      });
    },
    
    getFeatureInfoUrl: function (latlng) {
      // Construct a GetFeatureInfo request URL given a point
      var point = this._map.latLngToContainerPoint(latlng, this._map.getZoom()),
      
          size = this._map.getSize(),
          
          params = {
            request: 'GetFeatureInfo',
            service: 'WMS',
            srs: 'EPSG:4326',
            styles: this.wmsParams.styles,
            transparent: this.wmsParams.transparent,
            version: this.wmsParams.version,      
            format: this.wmsParams.format,
            bbox: this._map.getBounds().toBBoxString(),
            height: size.y,
            width: size.x,
            layers: this.wmsParams.layers,
            query_layers: this.wmsParams.layers,
            // X: point.x,
            // Y: point.y,
            info_format: 'application/json'
          };
      
      params[params.version === '1.3.0' ? 'i' : 'x'] = point.x;
      params[params.version === '1.3.0' ? 'j' : 'y'] = point.y;
      // console.log(point, 'point')
    
      // console.log(Math.floor(point.x),  Math.floor(point.y), 'math floor points' )
      
      return this._url + L.Util.getParamString(params, this._url, true);
    },
    
    showGetFeatureInfo: function (err, latlng, content) {
      if (err) {
        // console.log(latlng, 'lat long')
  
      
        ;
        // console.log(latlng, 'wms latlng')
        console.log(content.features[0].properties, "ndvi wms content")
        
        var bands = content.features[0].properties
        
        var band_names = Object.keys(bands)
        console.log(band_names.slice(15,23), 'band names')
          

        lineChartData.labels = band_names

        var band_values = Object.values(bands)
        console.log(band_values.slice(15,23), 'band values')
        lineChartData.datasets[0].data = band_values

        console.log(lineChartData, 'line chart data')

        storeUserSelections.lineChartData.labels = band_names.slice(15,22)
        storeUserSelections.lineChartData.labels = ['2016', '2017', '2018', '2019', '2020', '2021', '2022']
        console.log('band values', band_values )
        storeUserSelections.lineChartData.datasets[0].data = band_values
        console.log(storeUserSelections.lineChartData, 'store linechart data')



        storeUserSelections.latlon = [latlng.lat, latlng.lng]
        console.log(storeUserSelections.latlon, 'updated store lat lon')

        

      
          return  
          // console.log(latlng, 'lat long');
        
        } // do nothing if there's an error
     
        
      // Otherwise show the content in a popup, or something.
   
      // L.popup({ maxWidth: 800})
      //   .setLatLng(latlng)
      //   .setContent( content)
      //   .openOn(this._map);
  
    
    },
    
  }); //end of L.extend


  const getClickedLatLon = () => {
  latlon.value = storeUserSelections.latlon
   if(group.value !== null)group.value.clearLayers()
  //  if(search_marker.value !== null)search_marker.value.clearLayers()
  group.value = L.layerGroup().addTo(map);
  marker.value = L.icon({
                                                iconUrl: "/mapIcons/point.svg",
                                                iconSize: [30, 30],
                                                iconAnchor: [15,15]
                                              });
                                          
            var mark =  L.marker(latlon.value , {icon: marker.value})
            // .bindPopup('Hey')
                .addTo(group.value)
                return mark
}
  

  
  
  L.tileLayer.betterWms = function (url, options) {
    return new L.TileLayer.BetterWMS(url, options);  
  };

  const setLatLon = computed( () => {
  return storeUserSelections.getLatLon
})
watch( setLatLon, () => {
   getClickedLatLon ()
})

 }

  const addPRECIPTimeSeries = () => {
  L.TileLayer.BetterWMS = L.TileLayer.WMS.extend({
    
    onAdd: function (map) {
      // Triggered when the layer is added to a map.
      //   Register a click listener, then do all the upstream WMS things
      L.TileLayer.WMS.prototype.onAdd.call(this, map);
      map.on('click' , this.getFeatureInfo, this);
    },
    
    onRemove: function (map) {
      // Triggered when the layer is removed from a map.
      //   Unregister a click listener, then do all the upstream WMS things
      L.TileLayer.WMS.prototype.onRemove.call(this, map);
      map.off('click', this.getFeatureInfo, this);
    },
    
    getFeatureInfo: function (evt) {
      // Make an AJAX request to the server and hope for the best
      var url = this.getFeatureInfoUrl(evt.latlng),
          showResults = L.Util.bind(this.showGetFeatureInfo, this);
      $.ajax({
        url: url,
        success: function (data, status, xhr) {
          var err = typeof data === 'string' ? null : data;
          showResults(err, evt.latlng, data);
        },
        error: function (xhr, status, error) {
          showResults(error);  
        }
      });
    },
    
    getFeatureInfoUrl: function (latlng) {
      // Construct a GetFeatureInfo request URL given a point
      var point = this._map.latLngToContainerPoint(latlng, this._map.getZoom()),
      
          size = this._map.getSize(),
          
          params = {
            request: 'GetFeatureInfo',
            service: 'WMS',
            srs: 'EPSG:4326',
            styles: this.wmsParams.styles,
            transparent: this.wmsParams.transparent,
            version: this.wmsParams.version,      
            format: this.wmsParams.format,
            bbox: this._map.getBounds().toBBoxString(),
            height: size.y,
            width: size.x,
            layers: this.wmsParams.layers,
            query_layers: this.wmsParams.layers,
            // X: point.x,
            // Y: point.y,
            info_format: 'application/json'
          };
      
      params[params.version === '1.3.0' ? 'i' : 'x'] = point.x;
      params[params.version === '1.3.0' ? 'j' : 'y'] = point.y;
      // console.log(point, 'point')
    
      // console.log(Math.floor(point.x),  Math.floor(point.y), 'math floor points' )
      
      return this._url + L.Util.getParamString(params, this._url, true);
    },
    
    showGetFeatureInfo: function (err, latlng, content) {
      if (err) {
        // console.log(latlng, 'lat long')
  
      
        ;
        // console.log(latlng, 'wms latlng')
        console.log(content.features[0].properties, "PRECIP timeseries content")
        
        var bands = content.features[0].properties
        
        var band_names = Object.keys(bands)
        console.log(band_names, 'PRECIP band names')
          

        lineChartData.labels = band_names

        var band_values = Object.values(bands)
        console.log(band_values, 'PRECIP band values')

        var truncated_values = band_values.map((value_item) =>
       {
         parseInt(value_item).toFixed(2)
        // console.log(typeof(value_item, 'type of value item'))
      }
        )

        console.log(truncated_values, 'PRECIP truncated values')

        var renamed_band_names = band_names.map((band_item) => 
          band_item.replace(/Band/, "Pentad")
        )
        console.log(renamed_band_names)
        lineChartData.datasets[0].data = band_values

        console.log(lineChartData, 'PRECIP line chart data')

        storeUserSelections.lineChartData.labels = renamed_band_names
        // .slice(15,22)
        // storeUserSelections.lineChartData.labels = ['2016', '2017', '2018', '2019', '2020', '2021', '2022'] RENAME LATER
        // console.log('band values', band_values )
        storeUserSelections.lineChartData.datasets[0].data = band_values
        // console.log(storeUserSelections.lineChartData, 'store linechart data')



        storeUserSelections.latlon = [latlng.lat, latlng.lng]
        // console.log(storeUserSelections.latlon, 'updated store lat lon')

        

      
          return  
          // console.log(latlng, 'lat long');
        
        } // do nothing if there's an error
     
        
      // Otherwise show the content in a popup, or something.
   
      // L.popup({ maxWidth: 800})
      //   .setLatLng(latlng)
      //   .setContent( content)
      //   .openOn(this._map);
  
    
    },
    
  }); //end of L.extend


  const getClickedLatLon = () => {
  latlon.value = storeUserSelections.latlon
   if(group.value !== null)group.value.clearLayers()
  //  if(search_marker.value !== null)search_marker.value.clearLayers()
  group.value = L.layerGroup().addTo(map);
  marker.value = L.icon({
                                                iconUrl: "/mapIcons/point.svg",
                                                iconSize: [30, 30],
                                                iconAnchor: [15,15]
                                              });
                                          
            var mark =  L.marker(latlon.value , {icon: marker.value})
            // .bindPopup('Hey')
                .addTo(group.value)
                return mark
}
  

  
  
  L.tileLayer.betterWms = function (url, options) {
    return new L.TileLayer.BetterWMS(url, options);  
  };

  const setLatLon = computed( () => {
  return storeUserSelections.getLatLon
})
watch( setLatLon, () => {
   getClickedLatLon ()
})

 }

 const addTEMPTimeSeries = () => {
  L.TileLayer.BetterWMS = L.TileLayer.WMS.extend({
    
    onAdd: function (map) {
      // Triggered when the layer is added to a map.
      //   Register a click listener, then do all the upstream WMS things
      L.TileLayer.WMS.prototype.onAdd.call(this, map);
      map.on('click' , this.getFeatureInfo, this);
    },
    
    onRemove: function (map) {
      // Triggered when the layer is removed from a map.
      //   Unregister a click listener, then do all the upstream WMS things
      L.TileLayer.WMS.prototype.onRemove.call(this, map);
      map.off('click', this.getFeatureInfo, this);
    },
    
    getFeatureInfo: function (evt) {
      // Make an AJAX request to the server and hope for the best
      var url = this.getFeatureInfoUrl(evt.latlng),
          showResults = L.Util.bind(this.showGetFeatureInfo, this);
      $.ajax({
        url: url,
        success: function (data, status, xhr) {
          var err = typeof data === 'string' ? null : data;
          showResults(err, evt.latlng, data);
        },
        error: function (xhr, status, error) {
          showResults(error);  
        }
      });
    },
    
    getFeatureInfoUrl: function (latlng) {
      // Construct a GetFeatureInfo request URL given a point
      var point = this._map.latLngToContainerPoint(latlng, this._map.getZoom()),
      
          size = this._map.getSize(),
          
          params = {
            request: 'GetFeatureInfo',
            service: 'WMS',
            srs: 'EPSG:4326',
            styles: this.wmsParams.styles,
            transparent: this.wmsParams.transparent,
            version: this.wmsParams.version,      
            format: this.wmsParams.format,
            bbox: this._map.getBounds().toBBoxString(),
            height: size.y,
            width: size.x,
            layers: this.wmsParams.layers,
            query_layers: this.wmsParams.layers,
            // X: point.x,
            // Y: point.y,
            info_format: 'application/json'
          };
      
      params[params.version === '1.3.0' ? 'i' : 'x'] = point.x;
      params[params.version === '1.3.0' ? 'j' : 'y'] = point.y;
      // console.log(point, 'point')
    
      // console.log(Math.floor(point.x),  Math.floor(point.y), 'math floor points' )
      
      return this._url + L.Util.getParamString(params, this._url, true);
    },
    
    showGetFeatureInfo: function (err, latlng, content) {
      if (err) {
        // console.log(latlng, 'lat long')
  
      
        ;
        // console.log(latlng, 'wms latlng')
        console.log(content.features[0].properties, "TEMP timeseries content")
        
        var bands = content.features[0].properties
        
        var band_names = Object.keys(bands)
        console.log(band_names, 'TEMP band names')
          

        lineChartData.labels = band_names

        var band_values = Object.values(bands)
        console.log(band_values, 'PRECIP band values')

      //   var truncated_values = band_values.map((value_item) =>
      //  {
      //    parseInt(value_item).toFixed(2)
      //   // console.log(typeof(value_item, 'type of value item'))
      // }
      //   )

      //   console.log(truncated_values, 'PRECIP truncated values')

      //   var renamed_band_names = band_names.map((band_item) => 
      //     band_item.replace(/Band/, "Pentad")
      //   )
      //   console.log(renamed_band_names)
        lineChartData.datasets[0].data = band_values

        console.log(lineChartData, 'TEMP line chart data')

        storeUserSelections.lineChartData.labels = band_names
      //   // .slice(15,22)
        storeUserSelections.lineChartData.labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
      //   // console.log('band values', band_values )
        storeUserSelections.lineChartData.datasets[0].data = band_values
      //   // console.log(storeUserSelections.lineChartData, 'store linechart data')



        storeUserSelections.latlon = [latlng.lat, latlng.lng]
        // console.log(storeUserSelections.latlon, 'updated store lat lon')

        

      
          return  
          // console.log(latlng, 'lat long');
        
        } // do nothing if there's an error
     
        
      // Otherwise show the content in a popup, or something.
   
      // L.popup({ maxWidth: 800})
      //   .setLatLng(latlng)
      //   .setContent( content)
      //   .openOn(this._map);
  
    
    },
    
  }); //end of L.extend


  const getClickedLatLon = () => {
  latlon.value = storeUserSelections.latlon
   if(group.value !== null)group.value.clearLayers()
  //  if(search_marker.value !== null)search_marker.value.clearLayers()
  group.value = L.layerGroup().addTo(map);
  marker.value = L.icon({
                                                iconUrl: "/mapIcons/point.svg",
                                                iconSize: [30, 30],
                                                iconAnchor: [15,15]
                                              });
                                          
            var mark =  L.marker(latlon.value , {icon: marker.value})
            // .bindPopup('Hey')
                .addTo(group.value)
                return mark
}
  

  
  
  L.tileLayer.betterWms = function (url, options) {
    return new L.TileLayer.BetterWMS(url, options);  
  };

  const setLatLon = computed( () => {
  return storeUserSelections.getLatLon
})
watch( setLatLon, () => {
   getClickedLatLon ()
})

 }


 const addPRECIPTimeSeriesLayer = () => {
  if(wmsTimeseriesLayer.value)map.removeLayer(wmsTimeseriesLayer.value)
  if(wmsPrecTimeseriesLayer.value)map.removeLayer(wmsPrecTimeseriesLayer.value)
    //add precip time series
    map.createPane("pane400").style.zIndex = 800;

  addPRECIPTimeSeries()

wmsTimeseriesLayer.value =  L.tileLayer.betterWms(`${baseurl}:8080/geoserver/PRECIP/wms?`, {
  pane: 'pane400', 
   layers: 'PRECIP:PRECIP_2',
   crs:L.CRS.EPSG4326,
  //  styles: basin.value === 'Cuvelai' ? 'cuvelai_bvi' :  basin.value === 'Zambezi' ? 'zambezi_bvi':  basin.value === 'Limpopo' ? 'limpopo_bvi': 'okavango_bvi',
   format: 'image/png',
   transparent: true,
   opacity:0.05
   
  
});
wmsTimeseriesLayer.value.addTo(map).bringToFront()

  }

  const addTEMPTimeSeriesLayer = () => {
    if(wmsTimeseriesLayer.value)map.removeLayer(wmsTimeseriesLayer.value)
  if(wmsPrecTimeseriesLayer.value)map.removeLayer(wmsPrecTimeseriesLayer.value)
    //add TEMP time series
    map.createPane("pane400").style.zIndex = 800;

    addTEMPTimeSeries()

wmsTimeseriesLayer.value =  L.tileLayer.betterWms(`${baseurl}:8080/geoserver/TEMP/wms?`, {
  pane: 'pane400', 
   layers: 'TEMP:TEMP',
   crs:L.CRS.EPSG4326,
  //  styles: basin.value === 'Cuvelai' ? 'cuvelai_bvi' :  basin.value === 'Zambezi' ? 'zambezi_bvi':  basin.value === 'Limpopo' ? 'limpopo_bvi': 'okavango_bvi',
   format: 'image/png',
   transparent: true,
   opacity:0.05
   
  
});
wmsTimeseriesLayer.value.addTo(map).bringToFront()

  }




 const addPrecIndexWet = () => {
  if(sub_indicator.value === 'Precipitation Index' && season.value === 'WET' ) {
  
  // console.log('just to see if request is accessed') //accessed
  map.createPane("pane800").style.zIndex = 200;
  
  wmsLayer.value =  L.tileLayer.wms(`${baseurl}:8080/geoserver/SPI_WET/wms?`, {
     pane: 'pane800',
     layers: `SPI_WET:${year.value}`,
     crs:L.CRS.EPSG4326,
     styles: basin.value === 'Cuvelai' ? 'cuvelai_spi' :  basin.value === 'Zambezi' ? 'zambezi_spi':  basin.value === 'Limpopo' ? 'limpopo_spi': 'okavango_spi',
     format: 'image/png',
     transparent: true,
     opacity:1.0
     // CQL_FILTER: "Band1='1.0'"
     
    
  });




  wmsLayer.value.addTo(map);
  // console.log(wmsLayer.value, 'wms')
  //remove spinner when layer loads
  wmsLayer.value.on('load', function (event) {
    loading.value = false
  });


   //adding timeseries layer
   addPrecTimeSeries()
  //  addTemp()
   wmsPrecTimeseriesLayer.value =  L.tileLayer.betterWms(`http://45.32.233.93:8085/geoserver/SPI_${season.value}/wms?`, {
     pane: 'pane800',
     layers: `SPI_${season.value}:SPI`,
     crs:L.CRS.EPSG4326,
     styles: basin.value === 'Cuvelai' ? 'cuvelai_spi' :  basin.value === 'Zambezi' ? 'zambezi_spi':  basin.value === 'Limpopo' ? 'limpopo_spi': 'okavango_spi',
     format: 'image/png',
     transparent: true,
     opacity:0.1
     // CQL_FILTER: "Band1='1.0'"
     
    
  });
  wmsPrecTimeseriesLayer.value.addTo(map).bringToFront()



  




  
 

  const getDefaultLatLon = () => {
 
 if(group.value !== null)group.value.clearLayers()
//  if(search_marker.value !== null)search_marker.value.clearLayers()
group.value = L.layerGroup().addTo(map);
marker.value = L.icon({
                                              iconUrl: "/mapIcons/point.svg",
                                              iconSize: [30, 30],
                                              iconAnchor: [15,15]
                                            });
                                        
          var mark =  L.marker( basin.value === 'Cuvelai'? [-18.852976338898927,16.092944688071 ] : basin.value === 'Limpopo' ? [-23.361704477797623, 29.067713023209976]
           : basin.value === 'Okavango' ? [-19.971381658947745, 21.81442486792866] :[-14.70984684783236, 28.0764983010178] , {icon: marker.value})
          // .bindPopup('Hey')
              .addTo(group.value)
              return mark
}

getDefaultLatLon()

  wmsPrecTimeseriesLayer.value.on('load', function (event) {
    loading.value = false
});
  preclegendContent()
  changeOpacity()
  
  
  }
  
 }

 const addPrecIndexDry = () => {
  if(sub_indicator.value === 'Precipitation Index' && season.value === 'DRY' ) {
  
  // console.log('just to see if request is accessed') //accessed
  map.createPane("pane800").style.zIndex = 200;
  
  wmsLayer.value =  L.tileLayer.wms(`${baseurl}:8080/geoserver/SPI_DRY/wms?`, {
     pane: 'pane800',
     layers: `SPI_DRY:${year.value}`,
     crs:L.CRS.EPSG4326,
     styles: basin.value === 'Cuvelai' ? 'cuvelai_spi' :  basin.value === 'Zambezi' ? 'zambezi_spi':  basin.value === 'Limpopo' ? 'limpopo_spi': 'okavango_spi',
     format: 'image/png',
     transparent: true,
     opacity:1.0
     // CQL_FILTER: "Band1='1.0'"
     
    
  });
  
  
  wmsLayer.value.addTo(map);
  // console.log(wmsLayer.value, 'wms')
  //remove spinner when layer loads
  wmsLayer.value.on('load', function (event) {
    loading.value = false
  });

  //adding timeseries layer
  addPrecTimeSeries()
  wmsPrecTimeseriesLayer.value =  L.tileLayer.betterWms(`http://45.32.233.93:8085/geoserver/SPI_${season.value}/wms?`, {
     pane: 'pane800',
     layers: `SPI_${season.value}:SPI`,
     crs:L.CRS.EPSG4326,
     styles: basin.value === 'Cuvelai' ? 'cuvelai_spi' :  basin.value === 'Zambezi' ? 'zambezi_spi':  basin.value === 'Limpopo' ? 'limpopo_spi': 'okavango_spi',
     format: 'image/png',
     transparent: true,
     opacity:0.1
     // CQL_FILTER: "Band1='1.0'"
     
    
  });
  wmsPrecTimeseriesLayer.value.addTo(map).bringToFront()

  const getDefaultLatLon = () => {
 
 if(group.value !== null)group.value.clearLayers()
//  if(search_marker.value !== null)search_marker.value.clearLayers()
group.value = L.layerGroup().addTo(map);
marker.value = L.icon({
                                              iconUrl: "/mapIcons/point.svg",
                                              iconSize: [30, 30],
                                              iconAnchor: [15,15]
                                            });
                                        
          var mark =  L.marker( basin.value === 'Cuvelai'? [-18.852976338898927,16.092944688071 ] : basin.value === 'Limpopo' ? [-23.361704477797623, 29.067713023209976]
           : basin.value === 'Okavango' ? [-19.971381658947745, 21.81442486792866] :[-14.70984684783236, 28.0764983010178] , {icon: marker.value})
          // .bindPopup('Hey')
              .addTo(group.value)
              return mark
}

getDefaultLatLon()

  wmsPrecTimeseriesLayer.value.on('load', function (event) {
    loading.value = false
});
  preclegendContent()
  changeOpacity()
  
  }
 }


 const addWetlandExtent = () => {
  if(sub_indicator.value === 'Wetland Inventory' && parameter.value === 'Wetland Extent') {
  
  // console.log('just to see if request is accessed') //accessed
  map.createPane("pane800").style.zIndex = 200;
  
  wmsLayer.value =  L.tileLayer.wms(`${baseurl}:8080/geoserver/NDWI/wms?`, {
     pane: 'pane800',
     layers: `NDWI:${year.value}`,
     crs:L.CRS.EPSG4326,
     styles: basin.value === 'Cuvelai' ? 'cuvelai_water' :  basin.value === 'Zambezi' ? 'zambezi_water':  basin.value === 'Limpopo' ? 'limpopo_water': 'okavango_water',
     format: 'image/png',
     transparent: true,
     opacity:1.0
     // CQL_FILTER: "Band1='1.0'"
     
    
  });
  
  
  wmsLayer.value.addTo(map);
  
  
  // console.log(wmsLayer.value, 'wms')
  //remove spinner when layer loads
  wmsLayer.value.on('load', function (event) {
    loading.value = false
  });
  
  
    NDWIlegendContent()

  
  
  
  changeOpacity()
  
  
  
  
  
  }

 }

 const addVegCover = () => {
  if(sub_indicator.value === 'Vegetation Cover' ) { //&& season.value === 'DRY'
  
  // console.log('just to see if request is accessed') //accessed
  map.createPane("pane800").style.zIndex = 200;
  map.createPane("timeseries").style.zIndex = 300;



  L.TileLayer.BetterWMS = L.TileLayer.WMS.extend({
    
    onAdd: function (map) {
      // Triggered when the layer is added to a map.
      //   Register a click listener, then do all the upstream WMS things
      L.TileLayer.WMS.prototype.onAdd.call(this, map);
      map.on('click' , this.getFeatureInfo, this);
    },
    
    onRemove: function (map) {
      // Triggered when the layer is removed from a map.
      //   Unregister a click listener, then do all the upstream WMS things
      L.TileLayer.WMS.prototype.onRemove.call(this, map);
      map.off('click', this.getFeatureInfo, this);
    },
    
    getFeatureInfo: function (evt) {
      // Make an AJAX request to the server and hope for the best
      var url = this.getFeatureInfoUrl(evt.latlng),
          showResults = L.Util.bind(this.showGetFeatureInfo, this);
      $.ajax({
        url: url,
        success: function (data, status, xhr) {
          var err = typeof data === 'string' ? null : data;
          showResults(err, evt.latlng, data);
        },
        error: function (xhr, status, error) {
          showResults(error);  
        }
      });
    },
    
    getFeatureInfoUrl: function (latlng) {
      // Construct a GetFeatureInfo request URL given a point
      var point = this._map.latLngToContainerPoint(latlng, this._map.getZoom()),
      
          size = this._map.getSize(),
          
          params = {
            request: 'GetFeatureInfo',
            service: 'WMS',
            srs: 'EPSG:4326',
            styles: this.wmsParams.styles,
            transparent: this.wmsParams.transparent,
            version: this.wmsParams.version,      
            format: this.wmsParams.format,
            bbox: this._map.getBounds().toBBoxString(),
            height: size.y,
            width: size.x,
            layers: this.wmsParams.layers,
            query_layers: this.wmsParams.layers,
            // X: point.x,
            // Y: point.y,
            info_format: 'application/json'
          };
      
      params[params.version === '1.3.0' ? 'i' : 'x'] = point.x;
      params[params.version === '1.3.0' ? 'j' : 'y'] = point.y;
      // console.log(point, 'point')
    
      // console.log(Math.floor(point.x),  Math.floor(point.y), 'math floor points' )
      
      return this._url + L.Util.getParamString(params, this._url, true);
    },
    
    showGetFeatureInfo: function (err, latlng, content) {
      if (err) {
        // console.log(latlng, 'lat long')
  
      
        ;
        // console.log(latlng, 'wms latlng')
        console.log(content.features[0].properties, "ndvi wms content")
        
        var bands = content.features[0].properties
        
        var band_names = Object.keys(bands)
        console.log(band_names, 'band names')

        lineChartData.labels = band_names

        var band_values = Object.values(bands)
        console.log(band_values, 'band values')
        lineChartData.datasets[0].data = band_values

        console.log(lineChartData, 'line chart data')

        storeUserSelections.lineChartData.labels = band_names
        storeUserSelections.lineChartData.labels = ['2016', '2017', '2018', '2019', '2020', '2021', '2022']
        storeUserSelections.lineChartData.datasets[0].data = band_values
        console.log(storeUserSelections.lineChartData, 'store linechart data')

        storeUserSelections.latlon = [latlng.lat, latlng.lng]
        console.log(storeUserSelections.latlon, 'updated store lat lon')

          return  
          // console.log(latlng, 'lat long');
        
        } // do nothing if there's an error
     
        
      // Otherwise show the content in a popup, or something.
   
      // L.popup({ maxWidth: 800})
      //   .setLatLng(latlng)
      //   .setContent( content)
      //   .openOn(this._map);
  
    
    },
    
  }); //end of L.extend


   const getClickedLatLon = () => {
  latlon.value = storeUserSelections.latlon
   if(group.value !== null)group.value.clearLayers()
  //  if(search_marker.value !== null)search_marker.value.clearLayers()
  group.value = L.layerGroup().addTo(map);
  marker.value = L.icon({
                                                iconUrl: "/mapIcons/point.svg",
                                                iconSize: [30, 30],
                                                iconAnchor: [15,15]
                                              });
                                          
            var mark =  L.marker(latlon.value , {icon: marker.value})
            // .bindPopup('Hey')
                .addTo(group.value)
                return mark
}
  
  
 
  L.tileLayer.betterWms = function (url, options) {
    return new L.TileLayer.BetterWMS(url, options);  
  };

    const setLatLon = computed( () => {
  return storeUserSelections.getLatLon
})
watch( setLatLon, () => {
   getClickedLatLon ()
})



wmsLayer.value =  L.tileLayer.wms(`${baseurl}:8080/geoserver/${satellite.value}_NDVI_${season.value}/wms?`, {
     pane: 'pane800',
     layers: `${satellite.value}_NDVI_${season.value}:${year.value}`,
     crs:L.CRS.EPSG4326,
     styles: basin.value === 'Cuvelai' ? 'cuvelai_ndvi' :  basin.value === 'Zambezi' ? 'zambezi_ndvi':  basin.value === 'Limpopo' ? 'limpopo_ndvi': 'okavango_ndvi',
     format: 'image/png',
     transparent: true,
     opacity:1.0
     // CQL_FILTER: "Band1='1.0'"
     
    
});


wmsLayer.value.addTo(map);



wmsPrecTimeseriesLayer.value =  L.tileLayer.betterWms(`http://45.32.233.93:8085/geoserver/NDVI_${season.value}/wms?`, {
     pane: 'timeseries',
     layers: `NDVI_${season.value}:NDVI_${season.value}`,
     crs:L.CRS.EPSG4326,
     styles: basin.value === 'Cuvelai' ? 'cuvelai_ndvi' :  basin.value === 'Zambezi' ? 'zambezi_ndvi':  basin.value === 'Limpopo' ? 'limpopo_ndvi': 'okavango_ndvi',
     format: 'image/png',
     transparent: true,
     opacity:0.1
     // CQL_FILTER: "Band1='1.0'"
     
    
});


wmsPrecTimeseriesLayer.value.addTo(map).bringToFront();


const getDefaultLatLon = () => {
 
   if(group.value !== null)group.value.clearLayers()
  //  if(search_marker.value !== null)search_marker.value.clearLayers()
  group.value = L.layerGroup().addTo(map);
  marker.value = L.icon({
                                                iconUrl: "/mapIcons/point.svg",
                                                iconSize: [30, 30],
                                                iconAnchor: [15,15]
                                              });
                                          
            var mark =  L.marker( basin.value === 'Cuvelai'? [-18.852976338898927,16.092944688071 ] : basin.value === 'Limpopo' ? [-23.361704477797623, 29.067713023209976]
             : basin.value === 'Okavango' ? [-19.971381658947745, 21.81442486792866] :[-14.70984684783236, 28.0764983010178] , {icon: marker.value})
            // .bindPopup('Hey')
                .addTo(group.value)
                return mark
}

getDefaultLatLon()




// console.log(wmsLayer.value, 'wms')
//remove spinner when layer loads
wmsLayer.value.on('load', function (event) {
    loading.value = false
});

wmsPrecTimeseriesLayer.value.on('load', function (event) {
    loading.value = false
});


NDVIlegendContent()
changeOpacity()
}

 }
 const addWetlandStatus = () => {
  // if(wmsLayer.value)map.removeControl(ndwi_legend.value)
  if(sub_indicator.value === 'Wetland Inventory' && parameter.value === 'Wetland Status' ) { //&& season.value === 'DRY'
  
  // console.log('just to see if request is accessed') //accessed
  map.createPane("pane800").style.zIndex = 200;

wmsLayer.value =  L.tileLayer.wms(`${baseurl}:8080/geoserver/${satellite.value}_NDVI_${season.value}/wms?`, {
     pane: 'pane800',
     layers: `${satellite.value}_NDVI_${season.value}:${year.value}`,
     crs:L.CRS.EPSG4326,
     styles: basin.value === 'Cuvelai' ? 'cuvelai_status' :  basin.value === 'Zambezi' ? 'zambezi_status':  basin.value === 'Limpopo' ? 'limpopo_status': 'okavango_status',
     format: 'image/png',
     transparent: true,
     opacity:1.0
     // CQL_FILTER: "Band1='1.0'"
     
    
});


wmsLayer.value.addTo(map);


// console.log(wmsLayer.value, 'wms')
//remove spinner when layer loads
wmsLayer.value.on('load', function (event) {
    loading.value = false
});


statuslegendContent()
changeOpacity()
}
 }


 const addBurntLayer = () => {
  if(sub_indicator.value === 'Burnt Area MODIS') {
  
  // console.log('just to see if request is accessed') //accessed
  map.createPane("pane400").style.zIndex = 200;

 
  

wmsLayer.value =  L.tileLayer.wms(`${baseurl}:8080/geoserver/FIRE/wms?`, {
     pane: 'pane400',
     layers: `FIRE:${year.value}`,
     crs:L.CRS.EPSG4326,
     styles: `${basin.value}_fire`,
     format: 'image/png',
     transparent: true,
     opacity:1.0
     // CQL_FILTER: "Band1='1.0'"
     
    
});


wmsLayer.value.addTo(map);




console.log(wmsLayer.value, 'wms')


modislegendContent()

changeOpacity()

}
 }
 
 const addFirmsLayer = () => {
  if(sub_indicator.value === 'Burnt Area FIRMS') {
  
  // console.log('just to see if request is accessed') //accessed
  map.createPane("pane400").style.zIndex = 200;

 
  

wmsLayer.value =  L.tileLayer.wms(`${baseurl}:8080/geoserver/FIRMS_DRY/wms?`, {
     pane: 'pane400',
     layers: `FIRMS_DRY:${year.value}`,
     crs:L.CRS.EPSG4326,
     styles: `${basin.value}_firms`,
     format: 'image/png',
     transparent: true,
     opacity:1.0
     // CQL_FILTER: "Band1='1.0'"
     
    
});


wmsLayer.value.addTo(map);




console.log(wmsLayer.value, 'wms')



firmslegendContent()
changeOpacity()

}
 }


//  const addSMITimeSeries = () => {
//   L.TileLayer.BetterWMS = L.TileLayer.WMS.extend({
    
//     onAdd: function (map) {
//       // Triggered when the layer is added to a map.
//       //   Register a click listener, then do all the upstream WMS things
//       L.TileLayer.WMS.prototype.onAdd.call(this, map);
//       map.on('click' , this.getFeatureInfo, this);
//     },
    
//     onRemove: function (map) {
//       // Triggered when the layer is removed from a map.
//       //   Unregister a click listener, then do all the upstream WMS things
//       L.TileLayer.WMS.prototype.onRemove.call(this, map);
//       map.off('click', this.getFeatureInfo, this);
//     },
    
//     getFeatureInfo: function (evt) {
//       // Make an AJAX request to the server and hope for the best
//       var url = this.getFeatureInfoUrl(evt.latlng),
//           showResults = L.Util.bind(this.showGetFeatureInfo, this);
//       $.ajax({
//         url: url,
//         success: function (data, status, xhr) {
//           var err = typeof data === 'string' ? null : data;
//           showResults(err, evt.latlng, data);
//         },
//         error: function (xhr, status, error) {
//           showResults(error);  
//         }
//       });
//     },
    
//     getFeatureInfoUrl: function (latlng) {
//       // Construct a GetFeatureInfo request URL given a point
//       var point = this._map.latLngToContainerPoint(latlng, this._map.getZoom()),
      
//           size = this._map.getSize(),
          
//           params = {
//             request: 'GetFeatureInfo',
//             service: 'WMS',
//             srs: 'EPSG:4326',
//             styles: this.wmsParams.styles,
//             transparent: this.wmsParams.transparent,
//             version: this.wmsParams.version,      
//             format: this.wmsParams.format,
//             bbox: this._map.getBounds().toBBoxString(),
//             height: size.y,
//             width: size.x,
//             layers: this.wmsParams.layers,
//             query_layers: this.wmsParams.layers,
//             // X: point.x,
//             // Y: point.y,
//             info_format: 'application/json'
//           };
      
//       params[params.version === '1.3.0' ? 'i' : 'x'] = point.x;
//       params[params.version === '1.3.0' ? 'j' : 'y'] = point.y;
//       // console.log(point, 'point')
    
//       // console.log(Math.floor(point.x),  Math.floor(point.y), 'math floor points' )
      
//       return this._url + L.Util.getParamString(params, this._url, true);
//     },
    
//     showGetFeatureInfo: function (err, latlng, content) {
//       if (err) {
//         // console.log(latlng, 'lat long')
  
      
//         ;
//         // console.log(latlng, 'wms latlng')
//         console.log(content.features[0].properties, "smi wms content")
        
//         var bands = content.features[0].properties
        
//         var band_names = Object.keys(bands)
//         console.log(band_names.slice(15,23), 'band names')
          

//         lineChartData.labels = band_names

//         var band_values = Object.values(bands)
//         console.log(band_values.slice(15,23), 'band values')
//         lineChartData.datasets[0].data = band_values

//         console.log(lineChartData, 'line chart data')

//         storeUserSelections.lineChartData.labels = band_names.slice(15,22)
//         storeUserSelections.lineChartData.labels = ['2016', '2017', '2018', '2019', '2020', '2021', '2022']
//         storeUserSelections.lineChartData.datasets[0].data = band_values.slice(15,22)
//         console.log(storeUserSelections.lineChartData, 'store linechart data')

        

      
//           return  
//           // console.log(latlng, 'lat long');
        
//         } // do nothing if there's an error
     
        
//       // Otherwise show the content in a popup, or something.
   
//       // L.popup({ maxWidth: 800})
//       //   .setLatLng(latlng)
//       //   .setContent( content)
//       //   .openOn(this._map);
  
    
//     },
    
//   }); //end of L.extend
  
  
  
  
//   L.tileLayer.betterWms = function (url, options) {
//     return new L.TileLayer.BetterWMS(url, options);  
//   };

//  }
  
 const addSMILayer = () => {
  if(sub_indicator.value === 'Soil Moisure Index') {
  
  // console.log('just to see if request is accessed') //accessed
  map.createPane("pane400").style.zIndex = 200;

 
  

wmsLayer.value =  L.tileLayer.wms(`${baseurl}:8080/geoserver/SMI_${season.value}/wms?`, {
     pane: 'pane400',
     layers: `SMI_${season.value}:${year.value}`,
     crs:L.CRS.EPSG4326,
     styles: `${basin.value}_smi`,
     format: 'image/png',
     transparent: true,
     opacity:1.0
     // CQL_FILTER: "Band1='1.0'"
     
    
});


wmsLayer.value.addTo(map);
SMIlegendContent()
changeOpacity()




//Add SMI Timeseries 

addPrecTimeSeries()
wmsPrecTimeseriesLayer.value =  L.tileLayer.betterWms(`http://45.32.233.93:8085/geoserver/SMI_${season.value}/wms?`, {
     pane: 'pane800',
     layers: `SMI_${season.value}:SMI`,
     crs:L.CRS.EPSG4326,
     styles: `${basin.value}_smi`,
     format: 'image/png',
     transparent: true,
     opacity:0.1
     
     
    
  });
  wmsPrecTimeseriesLayer.value.addTo(map).bringToFront()

//   wmsPrecTimeseriesLayer.value.on('load', function (event) {
//     loading.value = false
// });

const getDefaultLatLon = () => {
 
 if(group.value !== null)group.value.clearLayers()
//  if(search_marker.value !== null)search_marker.value.clearLayers()
group.value = L.layerGroup().addTo(map);
marker.value = L.icon({
                                              iconUrl: "/mapIcons/point.svg",
                                              iconSize: [30, 30],
                                              iconAnchor: [15,15]
                                            });
                                        
          var mark =  L.marker( basin.value === 'Cuvelai'? [-18.852976338898927,16.092944688071 ] : basin.value === 'Limpopo' ? [-23.361704477797623, 29.067713023209976]
           : basin.value === 'Okavango' ? [-19.971381658947745, 21.81442486792866] :[-14.70984684783236, 28.0764983010178] , {icon: marker.value})
          // .bindPopup('Hey')
              .addTo(group.value)
              return mark
}

getDefaultLatLon()






}
 }

 const addFloodLayer = () => {
  if(sub_indicator.value === 'Undulation') {
  
  // console.log('just to see if request is accessed') //accessed
  map.createPane("pane400").style.zIndex = 200;

 
  

wmsLayer.value =  L.tileLayer.wms(`${baseurl}:8080/geoserver/FLOOD/wms`, {
     pane: 'pane400',
     layers: `FLOOD:FLOOD`,
     crs:L.CRS.EPSG4326,
     styles: `${basin.value}_flood`,
     format: 'image/png',
     transparent: true,
     opacity:1.0
     // CQL_FILTER: "Band1='1.0'"
     
    
});


wmsLayer.value.addTo(map);




console.log(wmsLayer.value, 'wms')



floodlegendContent()
changeOpacity()

}
 }




 const addSuspendedSediments = () => {
  if(sub_indicator.value === 'Water Quality' && parameter.value === 'Sus Sediments') {
  
  // console.log('just to see if request is accessed') //accessed
  map.createPane("pane800").style.zIndex = 200;
  
  wmsLayer.value =  L.tileLayer.wms(`${baseurl}:8080/geoserver/NDWI/wms?`, {
     pane: 'pane800',
     layers: `NDWI:${year.value}`,
     crs:L.CRS.EPSG4326,
     styles: basin.value === 'Cuvelai' ? 'cuvelai_water' :  basin.value === 'Zambezi' ? 'zambezi_water':  basin.value === 'Limpopo' ? 'limpopo_water': 'okavango_water',
     format: 'image/png',
     transparent: true,
     opacity:1.0
     // CQL_FILTER: "Band1='1.0'"
     
    
  });
  
  
  wmsLayer.value.addTo(map);
  
  
  // console.log(wmsLayer.value, 'wms')
  //remove spinner when layer loads
  wmsLayer.value.on('load', function (event) {
    loading.value = false
  });


 


  
  NDWIlegendContent()
  changeOpacity()

 //ADDTIMESERIES
  addPrecTimeSeries()
wmsPrecTimeseriesLayer.value =  L.tileLayer.betterWms(`http://45.32.233.93:8085/geoserver/NDSSI/wms?`, {
     pane: 'pane800',
     layers: `NDSSI:NDSSI_DRY`,
     crs:L.CRS.EPSG4326,
    //  styles: basin.value === 'Cuvelai' ? 'cuvelai_water' :  basin.value === 'Zambezi' ? 'zambezi_water':  basin.value === 'Limpopo' ? 'limpopo_water': 'okavango_water',value,
     format: 'image/png',
     transparent: true,
     opacity:0.1
     
     
    
  });
  wmsPrecTimeseriesLayer.value.addTo(map).bringToFront()

  const getDefaultLatLon = () => {
 
 if(group.value !== null)group.value.clearLayers()
//  if(search_marker.value !== null)search_marker.value.clearLayers()
group.value = L.layerGroup().addTo(map);
marker.value = L.icon({
                                              iconUrl: "/mapIcons/point.svg",
                                              iconSize: [30, 30],
                                              iconAnchor: [15,15]
                                            });
                                        
          var mark =  L.marker( basin.value === 'Cuvelai'? [-18.852976338898927,16.092944688071 ] : basin.value === 'Limpopo' ? [-23.361704477797623, 29.067713023209976]
           : basin.value === 'Okavango' ? [-19.971381658947745, 21.81442486792866] :[-14.70984684783236, 28.0764983010178] , {icon: marker.value})
          // .bindPopup('Hey')
              .addTo(group.value)
              return mark
}

getDefaultLatLon()

  wmsPrecTimeseriesLayer.value.on('load', function (event) {
    console.log('sus sediments loaded')
    loading.value = false
});

  
  
  
  
  
  }

 }


 const addTurbidity = () => {
  if(sub_indicator.value === 'Water Quality' && parameter.value === 'Turbidity') {
  
  // console.log('just to see if request is accessed') //accessed
  map.createPane("pane800").style.zIndex = 200;
  
  wmsLayer.value =  L.tileLayer.wms(`${baseurl}:8080/geoserver/NDWI/wms?`, {
     pane: 'pane800',
     layers: `NDWI:${year.value}`,
     crs:L.CRS.EPSG4326,
     styles: basin.value === 'Cuvelai' ? 'cuvelai_water' :  basin.value === 'Zambezi' ? 'zambezi_water':  basin.value === 'Limpopo' ? 'limpopo_water': 'okavango_water',
     format: 'image/png',
     transparent: true,
     opacity:1.0
     // CQL_FILTER: "Band1='1.0'"
     
    
  });
  
  
  wmsLayer.value.addTo(map);
  
  
  // console.log(wmsLayer.value, 'wms')
  //remove spinner when layer loads
  wmsLayer.value.on('load', function (event) {
    loading.value = false
  });


 


  
  NDWIlegendContent()
  changeOpacity()

 //ADDTIMESERIES
  addPrecTimeSeries()
wmsPrecTimeseriesLayer.value =  L.tileLayer.betterWms(`http://45.32.233.93:8085/geoserver/NDTI/wms?`, {
     pane: 'pane800',
     layers: `NDTI:NDTI_DRY`,
     crs:L.CRS.EPSG4326,
    //  styles: basin.value === 'Cuvelai' ? 'cuvelai_water' :  basin.value === 'Zambezi' ? 'zambezi_water':  basin.value === 'Limpopo' ? 'limpopo_water': 'okavango_water',value,
     format: 'image/png',
     transparent: true,
     opacity:0.1
     
     
    
  });
  wmsPrecTimeseriesLayer.value.addTo(map).bringToFront()

  const getDefaultLatLon = () => {
 
 if(group.value !== null)group.value.clearLayers()
//  if(search_marker.value !== null)search_marker.value.clearLayers()
group.value = L.layerGroup().addTo(map);
marker.value = L.icon({
                                              iconUrl: "/mapIcons/point.svg",
                                              iconSize: [30, 30],
                                              iconAnchor: [15,15]
                                            });
                                        
          var mark =  L.marker( basin.value === 'Cuvelai'? [-18.852976338898927,16.092944688071 ] : basin.value === 'Limpopo' ? [-23.361704477797623, 29.067713023209976]
           : basin.value === 'Okavango' ? [-19.971381658947745, 21.81442486792866] :[-14.70984684783236, 28.0764983010178] , {icon: marker.value})
          // .bindPopup('Hey')
              .addTo(group.value)
              return mark
}

getDefaultLatLon()

  wmsPrecTimeseriesLayer.value.on('load', function (event) {
    console.log('sus sediments loaded')
    loading.value = false
});

  
  
  
  
  
  }

 }
 
  //function to request wms
  
  const fetchWmsData = () => {
   
    // loading.value = true
    if(wmsLayer.value)map.removeLayer(wmsLayer.value)
    if(wmsCompareLayer.value)map.removeLayer(wmsCompareLayer.value)
    if(wmsTimeseriesLayer.value)map.removeLayer(wmsTimeseriesLayer.value)


           

  // lulc_style()
  // prec_style()
  // wetland_inventory_style()
  // ndvi_style()
  // status_style()
  // sus_style()
   
  
  addLulcLayer()
  addBVILayer()
  addPrecIndexWet()
  addPrecIndexDry()
  addWetlandExtent()
  addVegCover()
  addWetlandStatus()
  addBurntLayer()
  addFirmsLayer()
  addSMILayer()
  addFloodLayer()
  addSuspendedSediments()
  addTurbidity()

  createIndices()

  //remove spinner when layer loads
wmsLayer.value.on('load', function (event) {
 
  changeOpacity()

});



// console.log(map.getCenter(), 'center')
var center = map.getCenter()
var lat = center.lat.toFixed(2)
var lon = center.lng.toFixed(2)
geoposition.value = `${lat}, ${lon}`






// getStatistics()

 
  }

  const show_mobile_panel = () => {
    show_mobile_data.value = true
  }
  const close_mobile_panel  = ()  => {
  show_mobile_data.value = false
  }

  const fetchMobileData = async () => {
    try {
            
              const resp = await axios.get('http://45.32.233.93:81/wemast/fieldtableData.geojson')
              

              // // this.current_geojson = resp.data
              
              console.log(resp.data, 'mobile geojson');
              // // var object = resp.data.features.map( (item) => {
              // //   console.log(item, 'object items')
              // //   return item
              // // })
              
             
              // return resp.data

             

          } catch (err) {
              // Handle Error Here
              console.error('an error occured'+ err);
          }



      


  }


  const loadXMLDoc = async () => {
  // var xhttp = new XMLHttpRequest();
  
  // xhttp.open("GET", "http://45.32.233.93:81/wemast/fieldtableData.geojson", true);
  // xhttp.send();
  // xhttp.onreadystatechange = () => {
  //   if(xhttp.readyState === 4) {
  //     console.log('XHTTP RESPONSE', xhttp.responseText)

  //   }
  // }

//   await fetch("http://45.32.233.93:81/wemast/fieldtableData.geojson", {
//   method: "get", //put your method
//   headers: {
//     "Content-Type": "application/json",
//     "X-Requested-With": "XMLHttpRequest",
//     "Access-Control-Allow-Origin": "*"
//   },
//   mode: 'no-cors'
// })
// .then(response =>  response.json())
//   .then(data => console.log(data, 'mobile data'))
//   .catch(error => console.error('Fetch error:', error));;
try {
    const response = await fetch('http://45.32.233.93:81/wemast/fieldtableData.geojson' , {
  method: "get", //put your method
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "Access-Control-Allow-Origin": "*"
  },
  mode: 'no-cors'
})

    if (!response.ok) {
      throw new Error('Network response was not ok');
      // console.log('Fetch error:', response);
    }

    const data = await response.json();
    console.log(data, 'mobile data');
  } catch (error) {
    console.error('Fetch error:', error);
  }


}
const addCQLFilter = () => {
  map.createPane("pane400").style.zIndex = 200;
  wmsLayer.value =  L.tileLayer.wms(`${baseurl}:8080/geoserver/LULC/wms?`, {
     pane: 'pane400', 
     layers: `LULC:2017`,
     crs:L.CRS.EPSG4326,
    //  styles:'zambezi_lulc',
     format: 'image/png',
     transparent: true,
     opacity:1.0,
    //  CQL_FILTER: "CQL_FILTER=Name=%27Zambezi%27"
    //  CQL_FILTER:"INTERSECTS(corr_cell, collectGeometries(queryCollection('data_api_adminlevelzero', 'geometry', 'country_name = ''Angola''')))"
     
     
    
});


wmsLayer.value.addTo(map);


}

const ajaxCall = () => {
  $.get("http://45.32.233.93:81/wemast/fieldtableData.geojson", function(data, status){
    console.log("mobile Data: " + data + "\nStatus: " + status);
  });
  


}




 const downloadcsv = () => {
 
      let csv_data = [];

      const getChartData= () => {
    var selectedchartdata= storeUserSelections.getLulcChartData
   console.log(selectedchartdata, 'chart data app')
  // chartData.value = selectedchartdata
  // console.log(chartData.value, 'chartData.value')
  
  }
  
  
  const setChartdata = computed ( () => {
    console.log(storeUserSelections.stats_array, 'lulc chart data app')
    chartData.value = storeUserSelections.stats_array
    console.log(chartData.value.labels, 'chart data value')
    return storeUserSelections.getStatsArray
  
  })
  watch( setChartdata , () => {
    getChartData()
    
  })
      // console.log(storeUserSelections.lulcChartData.labels, 'chart data app')
      
       console.log("downloadcsv ", chartData.value);
      // console.log(chartData.value, 'chart data type')
      console.log(chartData.value.data_figures, 'datafigures')
       var figures = chartData.value.data_figures
      chartData.value.labels.map((data, i) => {
       
        csv_data.push({
          Class: data,
          // Color: `${chartData.value.datasets[i].backgroundColor.split("#")[1]}`,
          "Values": figures[i]
        });
      });
 
      let name = `${basin.value}_${sub_indicator.value}_${year.value}.csv`;
      downloadCSV({ filename: name, data: csv_data });
      
    }


    const chart_png =  () => {
  
  loading.value = true;
      //  domtoimage.toBlob(document.getElementById("map")).then(function (blob) {
        
      //   saveAs(blob, `${basin.value}.png`);

      // });
 

      let mapElement = document.getElementById("doughnut-chart");
      
      setTimeout(async () => {
        const dataURL = await domtoimage.toPng(mapElement, {
          width: mapElement.width,
          height: mapElement.height
        });

        let link = document.createElement("a");
        link.setAttribute("href", dataURL);
        link.setAttribute("download", `${basin.value}_${sub_indicator.value}_${year.value}.png`);
        document.body.appendChild(link); // Required for FF
        link.click();
        document.body.removeChild(link);
       loading.value = false
      }, 1500);

    }

    const bar_chart_png =  () => {
  
  loading.value = true;
      //  domtoimage.toBlob(document.getElementById("map")).then(function (blob) {
        
      //   saveAs(blob, `${basin.value}.png`);

      // });
 

      let mapElement = document.getElementById("bar-chart");
      
      setTimeout(async () => {
        const dataURL = await domtoimage.toPng(mapElement, {
          width: mapElement.width,
          height: mapElement.height
        });

        let link = document.createElement("a");
        link.setAttribute("href", dataURL);
        link.setAttribute("download", `${basin.value}_${sub_indicator.value}_${year.value}.png`);
        document.body.appendChild(link); // Required for FF
        link.click();
        document.body.removeChild(link);
       loading.value = false
      }, 1500);

    }
    
    

  const setLoadingState= computed( () => {
    return storeUserSelections.getLoadingState
  })
  
   watch( setLoadingState , () => {
    console.log(storeUserSelections.getLoadingState, 'getLoadingState')
    loading.value = storeUserSelections.getLoadingState
    
  })

  const BVIlegendContent = () => {

if(firms_legend.value)map.removeControl(firms_legend.value)
if(smi_legend.value)map.removeControl(smi_legend.value)
if(smi_compare_legend.value)map.removeControl(smi_compare_legend.value)
if(modis_legend.value)map.removeControl(modis_legend.value)
if(flood_legend.value)map.removeControl(flood_legend.value)
if(status_legend.value)map.removeControl(status_legend.value)
if(ndvi_legend.value)map.removeControl(ndvi_legend.value)
if(ndwi_legend.value)map.removeControl(ndwi_legend.value)
if(prec_legend.value)map.removeControl(prec_legend.value)
if(lulc_legend.value)map.removeControl(lulc_legend.value)
if(bvi_legend.value)map.removeControl(bvi_legend.value)


if(lulc_compare_legend.value)map.removeControl(lulc_compare_legend.value)
if(firms_compare_legend.value)map.removeControl(firms_compare_legend.value)
if(smi_compare_legend.value)map.removeControl(smi_compare_legend.value)
if(modis_legend.value)map.removeControl(modis_legend.value)
if(flood_compare_legend.value)map.removeControl(flood_compare_legend.value)
if(status_compare_legend.value)map.removeControl(status_compare_legend.value)
if(ndvi_compare_legend.value)map.removeControl(ndvi_compare_legend.value)
if(ndwi_compare_legend.value)map.removeControl(ndwi_compare_legend.value)
if(prec_compare_legend.value)map.removeControl(prec_compare_legend.value)
if(bvi_compare_legend.value)map.removeControl(bvi_compare_legend.value)


if(wmsLayer.value){
var legend = L.control({ position: "bottomleft" });
bvi_legend.value = legend
//       var colors = colors_array
//       var labels = label_array

bvi_legend.value.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    
    div.innerHTML += (`<p>${basin.value} BVI ${year.value}</p>`) + '<img src="' + `${baseurl}:8080/geoserver/BVI_DRY/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image%2Fpng&WIDTH=20&HEIGHT=20&LAYER=BVI_DRY%3A2000&legend_options=fontName:poppins;fontAntiAliasing:true;fontColor:0x000033;fontSize:7;bgColor:0xFFFFFF;dpi:150` + '" />' ;

    
   

      let draggable = new L.Draggable(div); //the legend can be dragged around the div
draggable.enable();

return div;
};

bvi_legend.value.addTo(map);
}




}
  
  
  const lulclegendContent = () => {
    const getLegendContent = async () => {
      try {
        const response = await axios.get(`${baseurl}:8080/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=application/json&WIDTH=30&HEIGHT=30&LAYER=LULC:2010&legend_options=fontName:poppins;fontAntiAliasing:true;fontColor:0x000033;fontSize:10;bgColor:0xFFFFEE;dpi:180`
        )
        console.log(response.data.Legend[0].rules[0].symbolizers[0].Raster.colormap.entries, 'legend response')
        var object_array = response.data.Legend[0].rules[0].symbolizers[0].Raster.colormap.entries
       var label_array =  object_array.map( (item) => {
         console.log(item.label, 'labels items array') 
         return item.label
        })
        console.log(label_array, 'label array')
  
        var colors_array = object_array.map( (item)=> {
         return item.color
        })
        console.log(colors_array, 'colors array')
        if(firms_legend.value)map.removeControl(firms_legend.value)
        if(smi_legend.value)map.removeControl(smi_legend.value)
        if(modis_legend.value)map.removeControl(modis_legend.value)
        if(flood_legend.value)map.removeControl(flood_legend.value)
        if(status_legend.value)map.removeControl(status_legend.value)
        if(ndvi_legend.value)map.removeControl(ndvi_legend.value)
        if(ndwi_legend.value)map.removeControl(ndwi_legend.value)
        if(prec_legend.value)map.removeControl(prec_legend.value)
        if(lulc_legend.value)map.removeControl(lulc_legend.value)
        if(bvi_legend.value)map.removeControl(bvi_legend.value)

        if(lulc_compare_legend.value)map.removeControl(lulc_compare_legend.value)
        if(firms_compare_legend.value)map.removeControl(firms_compare_legend.value)
        if(smi_compare_legend.value)map.removeControl(smi_compare_legend.value)
        if(modis_legend.value)map.removeControl(modis_legend.value)
        if(flood_compare_legend.value)map.removeControl(flood_compare_legend.value)
        if(status_compare_legend.value)map.removeControl(status_compare_legend.value)
        if(ndvi_compare_legend.value)map.removeControl(ndvi_compare_legend.value)
        if(ndwi_compare_legend.value)map.removeControl(ndwi_compare_legend.value)
        if(prec_compare_legend.value)map.removeControl(prec_compare_legend.value)
        if(bvi_compare_legend.value)map.removeControl(bvi_compare_legend.value)

  
        if(wmsLayer.value) {
          var legend = L.control({ position: 'bottomleft', className: 'legend_lulc' });
        lulc_legend.value = legend
        var colors = colors_array
        var labels = label_array
  
        lulc_legend.value.onAdd = function(map) {
            var div = L.DomUtil.create("div", "legend");
          if(basin.value && sub_indicator.value && year.value) {
            div.innerHTML += `<p> ${basin.value} ${sub_indicator.value} ${year.value}</p>`;

          } else{
            div.innerHTML += `<p>Zambezi LULC 2017</p>`;

          }
            for (var i = 0; i < colors.length; i++) {
                  div.innerHTML +=
                      ('<i style="background:'+ colors[i] + '" ></i>') + labels[i] +'<br>';
              }
    
              let draggable = new L.Draggable(div); //the legend can be dragged 
        draggable.enable();
  
    return div;
  };
  
  lulc_legend.value.addTo(map);
        }

       
      } catch (error) {
        console.log(error)
        
      }
    }
    getLegendContent()
  }

  const compareLulcLegend = () => {
    const getLegendContent = async () => {
      try {
        const response = await axios.get(`${baseurl}:8080/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=application/json&WIDTH=30&HEIGHT=30&LAYER=LULC:2010&legend_options=fontName:poppins;fontAntiAliasing:true;fontColor:0x000033;fontSize:10;bgColor:0xFFFFEE;dpi:180`
        )
        console.log(response.data.Legend[0].rules[0].symbolizers[0].Raster.colormap.entries, 'legend response')
        var object_array = response.data.Legend[0].rules[0].symbolizers[0].Raster.colormap.entries
       var label_array =  object_array.map( (item) => {
         console.log(item.label, 'labels items array') 
         return item.label
        })
        console.log(label_array, 'label array')
  
        var colors_array = object_array.map( (item)=> {
         return item.color
        })
        console.log(colors_array, 'colors array')
        

        if(lulc_compare_legend.value)map.removeControl(lulc_compare_legend.value)
        if(firms_compare_legend.value)map.removeControl(firms_compare_legend.value)
        if(smi_compare_legend.value)map.removeControl(smi_compare_legend.value)
        if(modis_legend.value)map.removeControl(modis_legend.value)
        if(flood_compare_legend.value)map.removeControl(flood_compare_legend.value)
        if(status_compare_legend.value)map.removeControl(status_compare_legend.value)
        if(ndvi_compare_legend.value)map.removeControl(ndvi_compare_legend.value)
        if(ndwi_compare_legend.value)map.removeControl(ndwi_compare_legend.value)
        if(prec_compare_legend.value)map.removeControl(prec_compare_legend.value)
        if(bvi_compare_legend.value)map.removeControl(bvi_compare_legend.value)
        

  
       

        if(wmsCompareLayer.value){
          var legend = L.control({ position: 'bottomright', className: 'legend_lulc' });
        lulc_compare_legend.value = legend
        var colors = colors_array
        var labels = label_array
  
        lulc_compare_legend.value.onAdd = function(map) {
            var div = L.DomUtil.create("div", "legend");
            div.innerHTML += `<p> ${basin.value} ${sub_indicator.value} ${compare_year.value}</p>`;
            for (var i = 0; i < colors.length; i++) {
                  div.innerHTML +=
                      ('<i style="background:'+ colors[i] + '" ></i>') + labels[i] +'<br>';
              }
    
              let draggable = new L.Draggable(div); //the legend can be dragged 
        draggable.enable();
  
    return div;
  };
  
  lulc_compare_legend.value.addTo(map);
        }
        
      } catch (error) {
        console.log(error)
        
      }
    }
    getLegendContent()

  }
  
  const preclegendContent = () => {

if(firms_legend.value)map.removeControl(firms_legend.value)
if(smi_legend.value)map.removeControl(smi_legend.value)
if(modis_legend.value)map.removeControl(modis_legend.value)
if(flood_legend.value)map.removeControl(flood_legend.value)
if(status_legend.value)map.removeControl(status_legend.value)
if(ndvi_legend.value)map.removeControl(ndvi_legend.value)
if(ndwi_legend.value)map.removeControl(ndwi_legend.value)
if(prec_legend.value)map.removeControl(prec_legend.value)
if(lulc_legend.value)map.removeControl(lulc_legend.value)
if(smi_compare_legend.value)map.removeControl(smi_compare_legend.value)
if(bvi_legend.value)map.removeControl(bvi_legend.value)

        if(lulc_compare_legend.value)map.removeControl(lulc_compare_legend.value)
        if(firms_compare_legend.value)map.removeControl(firms_compare_legend.value)
        if(smi_compare_legend.value)map.removeControl(smi_compare_legend.value)
        if(modis_legend.value)map.removeControl(modis_legend.value)
        if(flood_compare_legend.value)map.removeControl(flood_compare_legend.value)
        if(status_compare_legend.value)map.removeControl(status_compare_legend.value)
        if(ndvi_compare_legend.value)map.removeControl(ndvi_compare_legend.value)
        if(ndwi_compare_legend.value)map.removeControl(ndwi_compare_legend.value)
        if(prec_compare_legend.value)map.removeControl(prec_compare_legend.value)


                  if(wmsLayer.value){
                    var legend = L.control({ position: "bottomleft" });
                  smi_legend.value = legend

                  smi_legend.value.onAdd = function(map) {
                  var div = L.DomUtil.create("div", "legend");
                      
                  div.innerHTML += (`<p>${basin.value} SPI ${year.value}</p>`) + '<img src="' + `${baseurl}:8080/geoserver/SMI_DRY/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image%2Fpng&WIDTH=20&HEIGHT=20&LAYER=SMI_DRY%3A2000&legend_options=fontName:poppins;fontAntiAliasing:true;fontColor:0x000033;fontSize:7;bgColor:0xFFFFFF;dpi:150` + '" />' ;

                      
                  let draggable = new L.Draggable(div); //the legend can be dragged around the div
                  draggable.enable();

                  return div;
                  };

                  smi_legend.value.addTo(map);
                  }


              



}
const comparePrecLegend = () => {


        if(lulc_compare_legend.value)map.removeControl(lulc_compare_legend.value)
        if(firms_compare_legend.value)map.removeControl(firms_compare_legend.value)
        if(smi_compare_legend.value)map.removeControl(smi_compare_legend.value)
        if(modis_legend.value)map.removeControl(modis_legend.value)
        if(flood_compare_legend.value)map.removeControl(flood_compare_legend.value)
        if(status_compare_legend.value)map.removeControl(status_compare_legend.value)
        if(ndvi_compare_legend.value)map.removeControl(ndvi_compare_legend.value)
        if(ndwi_compare_legend.value)map.removeControl(ndwi_compare_legend.value)
        if(prec_compare_legend.value)map.removeControl(prec_compare_legend.value)


                

                  if(wmsCompareLayer.value){
                    var legend = L.control({ position: "bottomright" });
                  smi_compare_legend.value = legend

                  smi_compare_legend.value.onAdd = function(map) {
                  var div = L.DomUtil.create("div", "legend");
                      
                  div.innerHTML += (`<p>${basin.value} SPI ${compare_year.value}</p>`) + '<img src="' + `${baseurl}:8080/geoserver/SMI_DRY/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image%2Fpng&WIDTH=20&HEIGHT=20&LAYER=SMI_DRY%3A2000&legend_options=fontName:poppins;fontAntiAliasing:true;fontColor:0x000033;fontSize:7;bgColor:0xFFFFFF;dpi:150` + '" />' ;

                      
                  let draggable = new L.Draggable(div); //the legend can be dragged around the div
                  draggable.enable();

                  return div;
                  };

                  smi_compare_legend.value.addTo(map);
                  }



}

  const NDWIlegendContent = () => {
    const getLegendContent = async () => {
      try {
        const response = await axios.get(`${baseurl}:8080/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=application/json&WIDTH=30&HEIGHT=30&LAYER=NDWI:1990&legend_options=fontName:poppins;fontAntiAliasing:true;fontColor:0x000033;fontSize:10;bgColor:0xFFFFEE;dpi:180`
        )
        console.log(response.data.Legend[0].rules[0].symbolizers[0].Raster.colormap.entries, 'legend response')
        var object_array = response.data.Legend[0].rules[0].symbolizers[0].Raster.colormap.entries
       var label_array =  object_array.map( (item) => {
         console.log(item.label, 'labels items array') 
         return item.label
        })
        console.log(label_array, 'label array')
  
        var colors_array = object_array.map( (item)=> {
         return item.color
        })
        console.log(colors_array, 'colors array')
  
        if(firms_legend.value)map.removeControl(firms_legend.value)
        if(smi_legend.value)map.removeControl(smi_legend.value)
        if(modis_legend.value)map.removeControl(modis_legend.value)
        if(flood_legend.value)map.removeControl(flood_legend.value)
        if(status_legend.value)map.removeControl(status_legend.value)
        if(ndvi_legend.value)map.removeControl(ndvi_legend.value)
        if(ndwi_legend.value)map.removeControl(ndwi_legend.value)
        if(ndwi_compare_legend.value)map.removeControl(ndwi_compare_legend.value)
        if(prec_legend.value)map.removeControl(prec_legend.value)
        if(lulc_legend.value)map.removeControl(lulc_legend.value)
        if(bvi_legend.value)map.removeControl(bvi_legend.value)


        if(lulc_compare_legend.value)map.removeControl(lulc_compare_legend.value)
        if(firms_compare_legend.value)map.removeControl(firms_compare_legend.value)
        if(smi_compare_legend.value)map.removeControl(smi_compare_legend.value)
        if(modis_legend.value)map.removeControl(modis_legend.value)
        if(flood_compare_legend.value)map.removeControl(flood_compare_legend.value)
        if(status_compare_legend.value)map.removeControl(status_compare_legend.value)
        if(ndvi_compare_legend.value)map.removeControl(ndvi_compare_legend.value)
        if(ndwi_compare_legend.value)map.removeControl(ndwi_compare_legend.value)
        if(prec_compare_legend.value)map.removeControl(prec_compare_legend.value)

        
       if(wmsLayer.value){
        var legend = L.control({ position: "bottomleft" });
        ndwi_legend.value = legend
        var colors = colors_array
        var labels = label_array
  
        ndwi_legend.value.onAdd = function(map) {
            var div = L.DomUtil.create("div", "legend");
           
              div.innerHTML += `<p>${basin.value} ${parameter.value} ${year.value}</p>`;
             

            
            
            for (var i = 0; i < colors.length; i++) {
                  div.innerHTML +=
                      ('<i style="background:'+ colors[i] + '" ></i>') + labels[i] +'<br>';
              }
    
              let draggable = new L.Draggable(div); //the legend can be dragged around the div
        draggable.enable();
  
    return div;
  };
  
  ndwi_legend.value.addTo(map);
       }


       
        
      } catch (error) {
        console.log(error)
        
      }
    }
    getLegendContent()
  }
  const compareNDWIlegendContent = () => {
    const getLegendContent = async () => {
      try {
        const response = await axios.get(`${baseurl}:8080/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=application/json&WIDTH=30&HEIGHT=30&LAYER=NDWI:1990&legend_options=fontName:poppins;fontAntiAliasing:true;fontColor:0x000033;fontSize:10;bgColor:0xFFFFEE;dpi:180`
        )
        console.log(response.data.Legend[0].rules[0].symbolizers[0].Raster.colormap.entries, 'legend response')
        var object_array = response.data.Legend[0].rules[0].symbolizers[0].Raster.colormap.entries
       var label_array =  object_array.map( (item) => {
         console.log(item.label, 'labels items array') 
         return item.label
        })
        console.log(label_array, 'label array')
  
        var colors_array = object_array.map( (item)=> {
         return item.color
        })
        console.log(colors_array, 'colors array')
  


        if(lulc_compare_legend.value)map.removeControl(lulc_compare_legend.value)
        if(firms_compare_legend.value)map.removeControl(firms_compare_legend.value)
        if(smi_compare_legend.value)map.removeControl(smi_compare_legend.value)
        if(modis_legend.value)map.removeControl(modis_legend.value)
        if(flood_compare_legend.value)map.removeControl(flood_compare_legend.value)
        if(status_compare_legend.value)map.removeControl(status_compare_legend.value)
        if(ndvi_compare_legend.value)map.removeControl(ndvi_compare_legend.value)
        if(ndwi_compare_legend.value)map.removeControl(ndwi_compare_legend.value)
        if(prec_compare_legend.value)map.removeControl(prec_compare_legend.value)

        
      


       if(wmsCompareLayer.value){
        var legend = L.control({ position: "bottomright" });
        ndwi_compare_legend.value = legend
        var colors = colors_array
        var labels = label_array
  
        ndwi_compare_legend.value.onAdd = function(map) {
            var div = L.DomUtil.create("div", "legend");
            div.innerHTML += `<p>${basin.value} ${parameter.value} ${compare_year.value}</p>`;
            for (var i = 0; i < colors.length; i++) {
                  div.innerHTML +=
                      ('<i style="background:'+ colors[i] + '" ></i>') + labels[i] +'<br>';
              }
    
              let draggable = new L.Draggable(div); //the legend can be dragged around the div
        draggable.enable();
  
    return div;
  };
  
  ndwi_compare_legend.value.addTo(map);
       }
        
      } catch (error) {
        console.log(error)
        
      }
    }
    getLegendContent()
  }

  const NDVIlegendContent = () => {
    const getLegendContent = async () => {
      try {
        const response = await axios.get(`${baseurl}:8080/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=application/json&WIDTH=20&HEIGHT=20&LAYER=SENTINEL_NDVI_WET%3A2021`
        )
        console.log(response.data.Legend[0].rules[0].symbolizers[0].Raster.colormap.entries, 'legend response')
        var object_array = response.data.Legend[0].rules[0].symbolizers[0].Raster.colormap.entries
       var label_array =  object_array.map( (item) => {
         console.log(item.label, 'labels items array') 
         return item.label
        })
        console.log(label_array, 'label array')
  
        var colors_array = object_array.map( (item)=> {
         return item.color
        })
        console.log(colors_array, 'colors array')
        if(firms_legend.value)map.removeControl(firms_legend.value)
        if(smi_legend.value)map.removeControl(smi_legend.value)
        if(modis_legend.value)map.removeControl(modis_legend.value)
        if(flood_legend.value)map.removeControl(flood_legend.value)
        if(status_legend.value)map.removeControl(status_legend.value)
        if(ndvi_legend.value)map.removeControl(ndvi_legend.value)
        if(ndvi_compare_legend.value)map.removeControl(ndvi_compare_legend.value)
        if(ndwi_legend.value)map.removeControl(ndwi_legend.value)
        if(prec_legend.value)map.removeControl(prec_legend.value)
        if(lulc_legend.value)map.removeControl(lulc_legend.value)
        if(bvi_legend.value)map.removeControl(bvi_legend.value)


        if(lulc_compare_legend.value)map.removeControl(lulc_compare_legend.value)
        if(firms_compare_legend.value)map.removeControl(firms_compare_legend.value)
        if(smi_compare_legend.value)map.removeControl(smi_compare_legend.value)
        if(modis_legend.value)map.removeControl(modis_legend.value)
        if(flood_compare_legend.value)map.removeControl(flood_compare_legend.value)
        if(status_compare_legend.value)map.removeControl(status_compare_legend.value)
        if(ndvi_compare_legend.value)map.removeControl(ndvi_compare_legend.value)
        if(ndwi_compare_legend.value)map.removeControl(ndwi_compare_legend.value)
        if(prec_compare_legend.value)map.removeControl(prec_compare_legend.value)

  
       if(wmsLayer.value){
        var legend = L.control({ position: "bottomleft" });
        ndvi_legend.value = legend
        var colors = colors_array
        var labels = label_array
  
        ndvi_legend.value.onAdd = function(map) {
            var div = L.DomUtil.create("div", "legend");
            div.innerHTML += `<p>${basin.value} ${sub_indicator.value} ${year.value}</p>`;
            for (var i = 0; i < colors.length; i++) {
                  div.innerHTML +=
                      ('<i style="background:'+ colors[i] + '" ></i>') + labels[i] +'<br>';
              }
    
    
              let draggable = new L.Draggable(div); //the legend can be dragged around the div
        draggable.enable();
    return div;
  };
  
  ndvi_legend.value.addTo(map);
       }

  
      } catch (error) {
        console.log(error)
        
      }
    }
    getLegendContent()
  }
  const compareNDVIlegendContent = () => {
    const getLegendContent = async () => {
      try {
        const response = await axios.get(`${baseurl}:8080/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=application/json&WIDTH=20&HEIGHT=20&LAYER=SENTINEL_NDVI_WET%3A2021`
        )
        console.log(response.data.Legend[0].rules[0].symbolizers[0].Raster.colormap.entries, 'legend response')
        var object_array = response.data.Legend[0].rules[0].symbolizers[0].Raster.colormap.entries
       var label_array =  object_array.map( (item) => {
         console.log(item.label, 'labels items array') 
         return item.label
        })
        console.log(label_array, 'label array')
  
        var colors_array = object_array.map( (item)=> {
         return item.color
        })
        console.log(colors_array, 'colors array')
        


        if(lulc_compare_legend.value)map.removeControl(lulc_compare_legend.value)
        if(firms_compare_legend.value)map.removeControl(firms_compare_legend.value)
        if(smi_compare_legend.value)map.removeControl(smi_compare_legend.value)
        if(modis_legend.value)map.removeControl(modis_legend.value)
        if(flood_compare_legend.value)map.removeControl(flood_compare_legend.value)
        if(status_compare_legend.value)map.removeControl(status_compare_legend.value)
        if(ndvi_compare_legend.value)map.removeControl(ndvi_compare_legend.value)
        if(ndwi_compare_legend.value)map.removeControl(ndwi_compare_legend.value)
        if(prec_compare_legend.value)map.removeControl(prec_compare_legend.value)

  
     

       if(wmsCompareLayer.value){
        var legend = L.control({ position: "bottomright" });
        ndvi_compare_legend.value = legend
        var colors = colors_array
        var labels = label_array
  
        ndvi_compare_legend.value.onAdd = function(map) {
            var div = L.DomUtil.create("div", "legend");
            div.innerHTML += `<p>${basin.value} ${sub_indicator.value} ${compare_year.value}</p>`;
            for (var i = 0; i < colors.length; i++) {
                  div.innerHTML +=
                      ('<i style="background:'+ colors[i] + '" ></i>') + labels[i] +'<br>';
              }
    
    
              let draggable = new L.Draggable(div); //the legend can be dragged around the div
        draggable.enable();
    return div;
  };
  
  ndvi_compare_legend.value.addTo(map);
       }
        
      } catch (error) {
        console.log(error)
        
      }
    }
    getLegendContent()
  }

  const statuslegendContent = () => {
    const getLegendContent = async () => {
      try {
        const response = await axios.get(`${baseurl}:8080/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=application/json&WIDTH=20&HEIGHT=20&LAYER=SENTINEL_NDVI_WET%3A2022&legend_options=fontName:poppins;fontAntiAliasing:true;fontColor:0x000033;fontSize:7;bgColor:0xFFFFEE;dpi:150`
        )
        console.log(response.data.Legend[0].rules[0].symbolizers[0].Raster.colormap.entries, 'legend response')
        var object_array = response.data.Legend[0].rules[0].symbolizers[0].Raster.colormap.entries
       var label_array =  object_array.map( (item) => {
         console.log(item.label, 'labels items array') 
         return item.label
        })
        console.log(label_array, 'label array')
  
        var colors_array = object_array.map( (item)=> {
         return item.color
        })
        console.log(colors_array, 'colors array')
        if(firms_legend.value)map.removeControl(firms_legend.value)
        if(smi_legend.value)map.removeControl(smi_legend.value)
        if(modis_legend.value)map.removeControl(modis_legend.value)
        if(flood_legend.value)map.removeControl(flood_legend.value)
        if(status_legend.value)map.removeControl(status_legend.value)
        if(status_compare_legend.value)map.removeControl(status_compare_legend.value)
        if(ndvi_legend.value)map.removeControl(ndvi_legend.value)
        if(ndwi_legend.value)map.removeControl(ndwi_legend.value)
        if(prec_legend.value)map.removeControl(prec_legend.value)
        if(lulc_legend.value)map.removeControl(lulc_legend.value)
        if(bvi_legend.value)map.removeControl(bvi_legend.value)


        if(lulc_compare_legend.value)map.removeControl(lulc_compare_legend.value)
        if(firms_compare_legend.value)map.removeControl(firms_compare_legend.value)
        if(smi_compare_legend.value)map.removeControl(smi_compare_legend.value)
        if(modis_legend.value)map.removeControl(modis_legend.value)
        if(flood_compare_legend.value)map.removeControl(flood_compare_legend.value)
        if(status_compare_legend.value)map.removeControl(status_compare_legend.value)
        if(ndvi_compare_legend.value)map.removeControl(ndvi_compare_legend.value)
        if(ndwi_compare_legend.value)map.removeControl(ndwi_compare_legend.value)
        if(prec_compare_legend.value)map.removeControl(prec_compare_legend.value)
  
        if(wmsLayer.value){
          var legend = L.control({ position: "bottomleft" });
        status_legend.value = legend
        var colors = colors_array
        var labels = label_array
  
        status_legend.value.onAdd = function(map) {
            var div = L.DomUtil.create("div", "legend");
            div.innerHTML += `<p>${basin.value} ${parameter.value} ${year.value}</p>`;
            for (var i = 0; i < colors.length; i++) {
                  div.innerHTML +=
                      ('<i style="background:'+ colors[i] + '" ></i>') + labels[i] +'<br>';
              }
    
    
              let draggable = new L.Draggable(div); //the legend can be dragged around the div
        draggable.enable();

    return div;
  };
  
  status_legend.value.addTo(map);
        }

       
        
      } catch (error) {
        console.log(error)
        
      }
    }
    getLegendContent()
  }

  const comparestatuslegendContent = () => {
    const getLegendContent = async () => {
      try {
        const response = await axios.get(`${baseurl}:8080/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=application/json&WIDTH=20&HEIGHT=20&LAYER=SENTINEL_NDVI_WET%3A2022&legend_options=fontName:poppins;fontAntiAliasing:true;fontColor:0x000033;fontSize:7;bgColor:0xFFFFEE;dpi:150`
        )
        console.log(response.data.Legend[0].rules[0].symbolizers[0].Raster.colormap.entries, 'legend response')
        var object_array = response.data.Legend[0].rules[0].symbolizers[0].Raster.colormap.entries
       var label_array =  object_array.map( (item) => {
         console.log(item.label, 'labels items array') 
         return item.label
        })
        console.log(label_array, 'label array')
  
        var colors_array = object_array.map( (item)=> {
         return item.color
        })
        console.log(colors_array, 'colors array')
        


        if(lulc_compare_legend.value)map.removeControl(lulc_compare_legend.value)
        if(firms_compare_legend.value)map.removeControl(firms_compare_legend.value)
        if(smi_compare_legend.value)map.removeControl(smi_compare_legend.value)
        if(modis_legend.value)map.removeControl(modis_legend.value)
        if(flood_compare_legend.value)map.removeControl(flood_compare_legend.value)
        if(status_compare_legend.value)map.removeControl(status_compare_legend.value)
        if(ndvi_compare_legend.value)map.removeControl(ndvi_compare_legend.value)
        if(ndwi_compare_legend.value)map.removeControl(ndwi_compare_legend.value)
        if(prec_compare_legend.value)map.removeControl(prec_compare_legend.value)
  
    

        if(wmsCompareLayer.value) {
          var legend = L.control({ position: "bottomright" });
        status_compare_legend.value = legend
        var colors = colors_array
        var labels = label_array
  
        status_compare_legend.value.onAdd = function(map) {
            var div = L.DomUtil.create("div", "legend");
            div.innerHTML += `<p>${basin.value} ${parameter.value} ${compare_year.value}</p>`;
            for (var i = 0; i < colors.length; i++) {
                  div.innerHTML +=
                      ('<i style="background:'+ colors[i] + '" ></i>') + labels[i] +'<br>';
              }
    
    
              let draggable = new L.Draggable(div); //the legend can be dragged around the div
        draggable.enable();

    return div;
  };
  
  status_compare_legend.value.addTo(map);
        }
        
      } catch (error) {
        console.log(error)
        
      }
    }
    getLegendContent()
  }
  
  

  const floodlegendContent = () => {
    const getLegendContent = async () => {
      try {
        const response = await axios.get(`${baseurl}:8080/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=application/json&WIDTH=20&HEIGHT=20&LAYER=FLOOD%3AFLOOD&legend_options=fontName:poppins;fontAntiAliasing:true;fontColor:0x000033;fontSize:7;bgColor:0xFFFFEE;dpi:150`
        )
        console.log(response.data.Legend[0].rules[0].symbolizers[0].Raster.colormap.entries, 'legend response')
        var object_array = response.data.Legend[0].rules[0].symbolizers[0].Raster.colormap.entries
       var label_array =  object_array.map( (item) => {
         console.log(item.label, 'labels items array') 
         return item.label
        })
        console.log(label_array, 'label array')
  
        var colors_array = object_array.map( (item)=> {
         return item.color
        })
        console.log(colors_array, 'colors array')
        if(firms_legend.value)map.removeControl(firms_legend.value)
        if(smi_legend.value)map.removeControl(smi_legend.value)
        if(modis_legend.value)map.removeControl(modis_legend.value)
        if(flood_legend.value)map.removeControl(flood_legend.value)
        if(status_legend.value)map.removeControl(status_legend.value)
        if(ndvi_legend.value)map.removeControl(ndvi_legend.value)
        if(ndwi_legend.value)map.removeControl(ndwi_legend.value)
        if(prec_legend.value)map.removeControl(prec_legend.value)
        if(lulc_legend.value)map.removeControl(lulc_legend.value)
        if(bvi_legend.value)map.removeControl(bvi_legend.value)

        if(lulc_compare_legend.value)map.removeControl(lulc_compare_legend.value)
        if(firms_compare_legend.value)map.removeControl(firms_compare_legend.value)
        if(smi_compare_legend.value)map.removeControl(smi_compare_legend.value)
        if(modis_legend.value)map.removeControl(modis_legend.value)
        if(flood_compare_legend.value)map.removeControl(flood_compare_legend.value)
        if(status_compare_legend.value)map.removeControl(status_compare_legend.value)
        if(ndvi_compare_legend.value)map.removeControl(ndvi_compare_legend.value)
        if(ndwi_compare_legend.value)map.removeControl(ndwi_compare_legend.value)
        if(prec_compare_legend.value)map.removeControl(prec_compare_legend.value)
  
        var legend = L.control({ position: "bottomleft" });
        flood_legend.value = legend
        var colors = colors_array
        var labels = label_array
  
        flood_legend.value.onAdd = function(map) {
            var div = L.DomUtil.create("div", "legend");
            div.innerHTML += `<p>${basin.value} ${sub_indicator.value}</p>`;
            for (var i = 0; i < colors.length; i++) {
                  div.innerHTML +=
                      ('<i style="background:'+ colors[i] + '" ></i>') + labels[i] +'<br>';
              }
    
    
              let draggable = new L.Draggable(div); //the legend can be dragged around the div
        draggable.enable();

    return div;
  };
  
  flood_legend.value.addTo(map);
        
      } catch (error) {
        console.log(error)
        
      }
    }
    getLegendContent()
  }

  const modislegendContent = () => {
    const getLegendContent = async () => {
      try {
        const response = await axios.get(`${baseurl}:8080/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=application/json&WIDTH=20&HEIGHT=20&LAYER=FIRE%3A2000&legend_options=fontName:poppins;fontAntiAliasing:true;fontColor:0x000033;fontSize:7;bgColor:0xFFFFEE;dpi:150`
        )
        console.log(response.data.Legend[0].rules[0].symbolizers[0].Raster.colormap.entries, 'legend response')
        var object_array = response.data.Legend[0].rules[0].symbolizers[0].Raster.colormap.entries

        
       var label_array =  object_array.map( (item) => {
         console.log(item.label, 'labels items array') 
         return item.label
        })
        console.log(label_array, 'label array')
  
        var colors_array = object_array.map( (item)=> {
         return item.color
        })
        console.log(colors_array, 'colors array')
        if(firms_legend.value)map.removeControl(firms_legend.value)
        if(smi_legend.value)map.removeControl(smi_legend.value)
        if(modis_legend.value)map.removeControl(modis_legend.value)
        if(flood_legend.value)map.removeControl(flood_legend.value)
        if(status_legend.value)map.removeControl(status_legend.value)
        if(ndvi_legend.value)map.removeControl(ndvi_legend.value)
        if(ndwi_legend.value)map.removeControl(ndwi_legend.value)
        if(prec_legend.value)map.removeControl(prec_legend.value)
        if(lulc_legend.value)map.removeControl(lulc_legend.value)
  
        var legend = L.control({ position: "bottomright" });
        modis_legend.value = legend
        var colors = colors_array
        var labels = label_array
  
        modis_legend.value.onAdd = function(map) {
            var div = L.DomUtil.create("div", "legend");
            div.innerHTML += `<p>${basin.value} ${sub_indicator.value}</p>`;
            for (var i = 0; i < colors.length; i++) {
                  div.innerHTML +=
                      ('<i style="background:'+ colors[i] + '" ></i>') + labels[i] +'<br>';
              }
    
    
              let draggable = new L.Draggable(div); //the legend can be dragged around the div
        draggable.enable();

    return div;
  };
  
  modis_legend.value.addTo(map);
        
      } catch (error) {
        console.log(error)
        
      }
    }
    getLegendContent()
  }
  const firmslegendContent = () => {
    const getLegendContent = async () => {
      try {
        const response = await axios.get(`${baseurl}:8080/geoserver/FIRMS_WET/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=application/json&WIDTH=20&HEIGHT=20&LAYER=FIRMS_WET%3A2000&legend_options=fontName:poppins;fontAntiAliasing:true;fontColor:0x000033;fontSize:7;bgColor:0xFFFFEE;dpi:150`
        )
        console.log(response.data.Legend[0].rules[0].symbolizers[0].Raster.colormap.entries, 'legend response')
        var object_array = response.data.Legend[0].rules[0].symbolizers[0].Raster.colormap.entries

        
       var label_array =  object_array.map( (item) => {
         console.log(item.label, 'labels items array') 
         return item.label
        })
        console.log(label_array, 'label array')
  
        var colors_array = object_array.map( (item)=> {
         return item.color
        })
        console.log(colors_array, 'colors array')
        if(firms_legend.value)map.removeControl(firms_legend.value)
        if(firms_compare_legend.value)map.removeControl(firms_compare_legend.value)
        if(smi_legend.value)map.removeControl(smi_legend.value)
        if(modis_legend.value)map.removeControl(modis_legend.value)
        if(flood_legend.value)map.removeControl(flood_legend.value)
        if(status_legend.value)map.removeControl(status_legend.value)
        if(ndvi_legend.value)map.removeControl(ndvi_legend.value)
        if(ndwi_legend.value)map.removeControl(ndwi_legend.value)
        if(prec_legend.value)map.removeControl(prec_legend.value)
        if(lulc_legend.value)map.removeControl(lulc_legend.value)
        if(bvi_legend.value)map.removeControl(bvi_legend.value)


        if(lulc_compare_legend.value)map.removeControl(lulc_compare_legend.value)
        if(firms_compare_legend.value)map.removeControl(firms_compare_legend.value)
        if(smi_compare_legend.value)map.removeControl(smi_compare_legend.value)
        if(modis_legend.value)map.removeControl(modis_legend.value)
        if(flood_compare_legend.value)map.removeControl(flood_compare_legend.value)
        if(status_compare_legend.value)map.removeControl(status_compare_legend.value)
        if(ndvi_compare_legend.value)map.removeControl(ndvi_compare_legend.value)
        if(ndwi_compare_legend.value)map.removeControl(ndwi_compare_legend.value)
        if(prec_compare_legend.value)map.removeControl(prec_compare_legend.value)
  
        if(wmsLayer.value){
          var legend = L.control({ position: "bottomleft" });
        firms_legend.value = legend
        var colors = colors_array
        var labels = label_array
  
        firms_legend.value.onAdd = function(map) {
            var div = L.DomUtil.create("div", "legend");
            div.innerHTML += `<p>${basin.value} FIRMS ${year.value}</p>`;
            for (var i = 0; i < colors.length; i++) {
                  div.innerHTML +=
                      ('<i style="background:'+ colors[i] + '" ></i>') + labels[i] +'<br>';
              }
    
    
              let draggable = new L.Draggable(div); //the legend can be dragged around the div
        draggable.enable();

    return div;
  };
  
  firms_legend.value.addTo(map);
        }


        
      } catch (error) {
        console.log(error)
        
      }
    }
    getLegendContent()
  }
  const comparefirmslegendContent = () => {
    const getLegendContent = async () => {
      try {
        const response = await axios.get(`${baseurl}:8080/geoserver/FIRMS_WET/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=application/json&WIDTH=20&HEIGHT=20&LAYER=FIRMS_WET%3A2000&legend_options=fontName:poppins;fontAntiAliasing:true;fontColor:0x000033;fontSize:7;bgColor:0xFFFFEE;dpi:150`
        )
        console.log(response.data.Legend[0].rules[0].symbolizers[0].Raster.colormap.entries, 'legend response')
        var object_array = response.data.Legend[0].rules[0].symbolizers[0].Raster.colormap.entries

        
       var label_array =  object_array.map( (item) => {
         console.log(item.label, 'labels items array') 
         return item.label
        })
        console.log(label_array, 'label array')
  
        var colors_array = object_array.map( (item)=> {
         return item.color
        })
        console.log(colors_array, 'colors array')
      


        if(lulc_compare_legend.value)map.removeControl(lulc_compare_legend.value)
        if(firms_compare_legend.value)map.removeControl(firms_compare_legend.value)
        if(smi_compare_legend.value)map.removeControl(smi_compare_legend.value)
        if(modis_legend.value)map.removeControl(modis_legend.value)
        if(flood_compare_legend.value)map.removeControl(flood_compare_legend.value)
        if(status_compare_legend.value)map.removeControl(status_compare_legend.value)
        if(ndvi_compare_legend.value)map.removeControl(ndvi_compare_legend.value)
        if(ndwi_compare_legend.value)map.removeControl(ndwi_compare_legend.value)
        if(prec_compare_legend.value)map.removeControl(prec_compare_legend.value)
  


        if(wmsCompareLayer.value) {
          var legend = L.control({ position: "bottomright" });
        firms_compare_legend.value = legend
        var colors = colors_array
        var labels = label_array
  
        firms_compare_legend.value.onAdd = function(map) {
            var div = L.DomUtil.create("div", "legend");
            div.innerHTML += `<p>${basin.value} FIRMS ${compare_year.value}</p>`;
            for (var i = 0; i < colors.length; i++) {
                  div.innerHTML +=
                      ('<i style="background:'+ colors[i] + '" ></i>') + labels[i] +'<br>';
              }
    
    
              let draggable = new L.Draggable(div); //the legend can be dragged around the div
        draggable.enable();

    return div;
  };
  
  firms_compare_legend.value.addTo(map);
        }
        
      } catch (error) {
        console.log(error)
        
      }
    }
    getLegendContent()
  }
  
  const SMIlegendContent = () => {

        if(firms_legend.value)map.removeControl(firms_legend.value)
        if(smi_legend.value)map.removeControl(smi_legend.value)
        if(smi_compare_legend.value)map.removeControl(smi_compare_legend.value)
        if(modis_legend.value)map.removeControl(modis_legend.value)
        if(flood_legend.value)map.removeControl(flood_legend.value)
        if(status_legend.value)map.removeControl(status_legend.value)
        if(ndvi_legend.value)map.removeControl(ndvi_legend.value)
        if(ndwi_legend.value)map.removeControl(ndwi_legend.value)
        if(prec_legend.value)map.removeControl(prec_legend.value)
        if(lulc_legend.value)map.removeControl(lulc_legend.value)
        if(bvi_legend.value)map.removeControl(bvi_legend.value)


        if(lulc_compare_legend.value)map.removeControl(lulc_compare_legend.value)
        if(firms_compare_legend.value)map.removeControl(firms_compare_legend.value)
        if(smi_compare_legend.value)map.removeControl(smi_compare_legend.value)
        if(modis_legend.value)map.removeControl(modis_legend.value)
        if(flood_compare_legend.value)map.removeControl(flood_compare_legend.value)
        if(status_compare_legend.value)map.removeControl(status_compare_legend.value)
        if(ndvi_compare_legend.value)map.removeControl(ndvi_compare_legend.value)
        if(ndwi_compare_legend.value)map.removeControl(ndwi_compare_legend.value)
        if(prec_compare_legend.value)map.removeControl(prec_compare_legend.value)

    if(wmsLayer.value){
      var legend = L.control({ position: "bottomleft" });
        smi_legend.value = legend
  //       var colors = colors_array
  //       var labels = label_array
  
        smi_legend.value.onAdd = function(map) {
            var div = L.DomUtil.create("div", "legend");
            
            div.innerHTML += (`<p>${basin.value} SMI ${year.value}</p>`) + '<img src="' + `${baseurl}:8080/geoserver/SMI_DRY/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image%2Fpng&WIDTH=20&HEIGHT=20&LAYER=SMI_DRY%3A2000&legend_options=fontName:poppins;fontAntiAliasing:true;fontColor:0x000033;fontSize:7;bgColor:0xFFFFFF;dpi:150` + '" />' ;

            
           
    
              let draggable = new L.Draggable(div); //the legend can be dragged around the div
        draggable.enable();

    return div;
  };
  
  smi_legend.value.addTo(map);
    }

    
  
  
  }

  const compareSMIlegendContent = () => {

if(lulc_compare_legend.value)map.removeControl(lulc_compare_legend.value)
if(firms_compare_legend.value)map.removeControl(firms_compare_legend.value)
if(smi_compare_legend.value)map.removeControl(smi_compare_legend.value)
if(modis_legend.value)map.removeControl(modis_legend.value)
if(flood_compare_legend.value)map.removeControl(flood_compare_legend.value)
if(status_compare_legend.value)map.removeControl(status_compare_legend.value)
if(ndvi_compare_legend.value)map.removeControl(ndvi_compare_legend.value)
if(ndwi_compare_legend.value)map.removeControl(ndwi_compare_legend.value)
if(prec_compare_legend.value)map.removeControl(prec_compare_legend.value)



if(wmsCompareLayer.value) {
var legend = L.control({ position: "bottomright" });
smi_compare_legend.value = legend
//       var colors = colors_array
//       var labels = label_array

smi_compare_legend.value.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    
    div.innerHTML += (`<p>${basin.value} SMI ${compare_year.value}</p>`) + '<img src="' + `${baseurl}:8080/geoserver/SMI_DRY/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image%2Fpng&WIDTH=20&HEIGHT=20&LAYER=SMI_DRY%3A2000&legend_options=fontName:poppins;fontAntiAliasing:true;fontColor:0x000033;fontSize:7;bgColor:0xFFFFFF;dpi:150` + '" />' ;

    
   

      let draggable = new L.Draggable(div); //the legend can be dragged around the div
draggable.enable();

return div;
};

smi_compare_legend.value.addTo(map);
}



}
const compareBVIlegendContent = () => {

if(lulc_compare_legend.value)map.removeControl(lulc_compare_legend.value)
if(firms_compare_legend.value)map.removeControl(firms_compare_legend.value)
if(smi_compare_legend.value)map.removeControl(smi_compare_legend.value)
if(bvi_compare_legend.value)map.removeControl(bvi_compare_legend.value)
if(modis_legend.value)map.removeControl(modis_legend.value)
if(flood_compare_legend.value)map.removeControl(flood_compare_legend.value)
if(status_compare_legend.value)map.removeControl(status_compare_legend.value)
if(ndvi_compare_legend.value)map.removeControl(ndvi_compare_legend.value)
if(ndwi_compare_legend.value)map.removeControl(ndwi_compare_legend.value)
if(prec_compare_legend.value)map.removeControl(prec_compare_legend.value)



if(wmsCompareLayer.value) {
var legend = L.control({ position: "bottomright" });
bvi_compare_legend.value = legend
//       var colors = colors_array
//       var labels = label_array

bvi_compare_legend.value.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    
    div.innerHTML += (`<p>${basin.value} BVI ${compare_year.value}</p>`) + '<img src="' + `${baseurl}:8080/geoserver/BVI_DRY/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image%2Fpng&WIDTH=20&HEIGHT=20&LAYER=BVI_DRY%3A2000&legend_options=fontName:poppins;fontAntiAliasing:true;fontColor:0x000033;fontSize:7;bgColor:0xFFFFFF;dpi:150` + '" />' ;

    
   

      let draggable = new L.Draggable(div); //the legend can be dragged around the div
draggable.enable();

return div;
};

bvi_compare_legend.value.addTo(map);
}



}



  
  

  //change opacity
  const changeOpacity = () => {
    $('#sldOpacity').on('change', function(){
                                    //   $('#image-opacity').html(this.value); //i might revesit
                                      console.log(this.value, 'opacity value')
                                      if(wmsLayer.value){
                                        wmsLayer.value.setOpacity(this.value)
                                      }
                                      if(wmsCompareLayer){
                                        wmsCompareLayer.value.setOpacity(this.value)
                                      }
                                    
                                     
                                    
                    
                                  });
  }

  //get compare selections
  const getCompareIndicator = () => {
    var selectedIndicator= compareUserSelections.getSelectedIndcator
   console.log(selectedIndicator, 'compare indicator app')
   indicator.value = selectedIndicator
  
  }
  
  
  const setCompareIndicator = computed ( () => {
    console.log(compareUserSelections.selected_indicator, 'compare indicator app')
    return compareUserSelections.getSelectedIndcator
  
  })
  watch( setCompareIndicator , () => {
    getCompareIndicator()
    
  })
  
  //access subindicator
  
  const getCompareSubIndicator = () => {
    var selectedSubIndicator = compareUserSelections.getSelectedSubIndcator
   console.log(selectedSubIndicator, 'compare sub indicator app')
   sub_indicator.value = selectedSubIndicator
  
  }
  
  
  const setCompareSubIndicator = computed ( () => {
    console.log(compareUserSelections.selected_sub_indicator, 'selected sub_indicator app')
    return compareUserSelections.getSelectedSubIndcator
  
  })
  watch( setCompareSubIndicator , () => {
    getCompareSubIndicator()
    
  })
  
  
  //access year
  
  const getCompareYear = () => {
    var selectedYear= compareUserSelections.getSelectedYear
  
    compare_year.value = selectedYear
   console.log(compare_year.value, 'compare year app')
  
  }
  
  
  const setCompareYear = computed ( () => {
    console.log(compareUserSelections.selected_year, 'compare year app')
    return compareUserSelections.getSelectedYear
  
  })
  watch( setCompareYear , () => {
    getCompareYear()
    
  })
  const getCompareSeason = () => {
    var selectedSeason = compareUserSelections.getSelectedSeason
    compare_season.value = selectedSeason
    console.log(season.value, 'selected season app')
  
  }
  const setCompareSeason = computed ( () => {
    console.log(compareUserSelections.selected_season, 'selected season app')
    return compareUserSelections.getSelectedSeason
  
  })
  watch( setCompareSeason , () => {
    getCompareSeason()
    
  })
  
  
  const getCompareParameter = () => {
    var selectedParameter = compareUserSelections.getSelectedParameter
    parameter.value = selectedParameter
    console.log(parameter.value, 'compare parameter app')
  
  }
  const setCompareParameter = computed ( () => {
    console.log(compareUserSelections.selected_parameter, 'selected parameter app')
    return compareUserSelections.getSelectedParameter
  
  })
  watch( setCompareParameter , () => {
    getCompareParameter()
    
  })

  const getCompareSatellite = () => {
    var selectedSatellite = compareUserSelections.getSelectedSatellite
    compare_satellite.value = selectedSatellite
    console.log(compare_satellite.value, 'compare satellite app')

  }
  const setCompareSatellite = computed ( () => {
    console.log(compareUserSelections.selected_satellite, 'selected satellite app')
    return compareUserSelections.getSelectedSatellite
  
  })
  watch( setCompareSatellite , () => {
    getCompareSatellite()
    
  })
  

  const addCompareLulcLayer = () => {
  if(sub_indicator.value === 'Land Cover') {
  
  // console.log('just to see if request is accessed') //accessed
  map.createPane("pane800").style.zIndex = 200;
  

wmsCompareLayer.value =  L.tileLayer.wms(`${baseurl}:8080/geoserver/LULC/wms?`, {
     pane: 'pane800',
     layers: `LULC:${compare_year.value}`,
     crs:L.CRS.EPSG4326,
     styles: basin.value === 'Cuvelai' ? 'cuvelai_lulc' :  basin.value === 'Zambezi' ? 'zambezi_lulc':  basin.value === 'Limpopo' ? 'limpopo_lulc': 'okavango_lulc',
     format: 'image/png',
     transparent: true,
     opacity:1.0
     // CQL_FILTER: "Band1='1.0'"
     
    
});


wmsCompareLayer.value.addTo(map);


// console.log(wmsLayer.value, 'wms')
//remove spinner when layer loads
wmsCompareLayer.value.on('load', function (event) {
    loading.value = false
});

swipe_control.value = L.control.sideBySide(wmsLayer.value, wmsCompareLayer.value).addTo(map)

// addLulcLegend()
// lulclegendContent()
compareLulcLegend()

changeOpacity()

}
 }
 const addCompareBVILayer = () => { 
  if(indicator.value === 'Basin Vulnerability Index') {
  
  // console.log('just to see if request is accessed') //accessed
  map.createPane("pane800").style.zIndex = 200;
  

wmsCompareLayer.value =  L.tileLayer.wms(`${baseurl}:8080/geoserver/BVI_${compare_season.value}/wms?`, {
     pane: 'pane800',
     layers: `BVI_${compare_season.value}:${compare_year.value}`,
     crs:L.CRS.EPSG4326,
     styles: basin.value === 'Cuvelai' ? 'cuvelai_bvi' :  basin.value === 'Zambezi' ? 'zambezi_bvi':  basin.value === 'Limpopo' ? 'limpopo_bvi': 'okavango_bvi',
     format: 'image/png',
     transparent: true,
     opacity:1.0
     // CQL_FILTER: "Band1='1.0'"
     
    
});


wmsCompareLayer.value.addTo(map);


// console.log(wmsLayer.value, 'wms')
//remove spinner when layer loads
wmsCompareLayer.value.on('load', function (event) {
    loading.value = false
});

swipe_control.value = L.control.sideBySide(wmsLayer.value, wmsCompareLayer.value).addTo(map)

// addLulcLegend()
// lulclegendContent()
// compareLulcLegend()
compareBVIlegendContent()

changeOpacity()

}
 }


  
 const addComparePrecIndexWet = () => {
  if(sub_indicator.value === 'Precipitation Index' && season.value === 'WET' ) {
  
  // console.log('just to see if request is accessed') //accessed
  map.createPane("pane800").style.zIndex = 200;
  
  wmsCompareLayer.value =  L.tileLayer.wms(`${baseurl}:8080/geoserver/SPI_WET/wms?`, {
     pane: 'pane800',
     layers: `SPI_WET:${compare_year.value}`,
     crs:L.CRS.EPSG4326,
     styles: basin.value === 'Cuvelai' ? 'cuvelai_spi' :  basin.value === 'Zambezi' ? 'zambezi_spi':  basin.value === 'Limpopo' ? 'limpopo_spi': 'okavango_spi',
     format: 'image/png',
     transparent: true,
     opacity:1.0
     // CQL_FILTER: "Band1='1.0'"
     
    
  });
  
  
  wmsCompareLayer.value.addTo(map);
  // console.log(wmsLayer.value, 'wms')
  //remove spinner when layer loads
  wmsCompareLayer.value.on('load', function (event) {
    loading.value = false
  });
  swipe_control.value = L.control.sideBySide(wmsLayer.value, wmsCompareLayer.value).addTo(map)
  // preclegendContent()
  comparePrecLegend()
  changeOpacity()
  
  
  }
  
 }

 const addComparePrecIndexDry = () => {
  if(sub_indicator.value === 'Precipitation Index' && season.value === 'DRY' ) {
  
  // console.log('just to see if request is accessed') //accessed
  map.createPane("pane800").style.zIndex = 200;
  
  wmsCompareLayer.value =  L.tileLayer.wms(`${baseurl}:8080/geoserver/SPI_DRY/wms?`, {
     pane: 'pane800',
     layers: `SPI_DRY:${compare_year.value}`,
     crs:L.CRS.EPSG4326,
     styles: basin.value === 'Cuvelai' ? 'cuvelai_spi' :  basin.value === 'Zambezi' ? 'zambezi_spi':  basin.value === 'Limpopo' ? 'limpopo_spi': 'okavango_spi',
     format: 'image/png',
     transparent: true,
     opacity:1.0
     // CQL_FILTER: "Band1='1.0'"
     
    
  });
  
  
  wmsCompareLayer.value.addTo(map);
  // console.log(wmsLayer.value, 'wms')
  //remove spinner when layer loads
  wmsCompareLayer.value.on('load', function (event) {
    loading.value = false
  });
  swipe_control.value = L.control.sideBySide(wmsLayer.value, wmsCompareLayer.value).addTo(map)
  preclegendContent()
  changeOpacity()
  
  }
 }
 const addCompareWetlandExtent = () => {
  if(sub_indicator.value === 'Wetland Inventory' && parameter.value === 'Wetland Extent') {
  
  // console.log('just to see if request is accessed') //accessed
  map.createPane("pane800").style.zIndex = 200;
  
  wmsCompareLayer.value =  L.tileLayer.wms(`${baseurl}:8080/geoserver/NDWI/wms?`, {
     pane: 'pane800',
     layers: `NDWI:${compare_year.value}`,
     crs:L.CRS.EPSG4326,
     styles: basin.value === 'Cuvelai' ? 'cuvelai_water' :  basin.value === 'Zambezi' ? 'zambezi_water':  basin.value === 'Limpopo' ? 'limpopo_water': 'okavango_water',
     format: 'image/png',
     transparent: true,
     opacity:1.0
     // CQL_FILTER: "Band1='1.0'"
     
    
  });
  
  
  wmsCompareLayer.value.addTo(map);
  
  
  // console.log(wmsLayer.value, 'wms')
  //remove spinner when layer loads
  wmsCompareLayer.value.on('load', function (event) {
    loading.value = false
  });
  swipe_control.value = L.control.sideBySide(wmsLayer.value, wmsCompareLayer.value).addTo(map)
  
  // NDWIlegendContent()
  compareNDWIlegendContent()
  changeOpacity()
  
  
  
  
  
  }

 }
 const addCompareVegCover = () => {
  if(sub_indicator.value === 'Vegetation Cover' ) { //&& season.value === 'DRY'
  
  // console.log('just to see if request is accessed') //accessed
  map.createPane("pane800").style.zIndex = 200;

wmsCompareLayer.value =  L.tileLayer.wms(`${baseurl}:8080/geoserver/${compare_satellite.value}_NDVI_${season.value}/wms?`, {
     pane: 'pane800',
     layers: `${compare_satellite.value}_NDVI_${season.value}:${compare_year.value}`,
     crs:L.CRS.EPSG4326,
     styles: basin.value === 'Cuvelai' ? 'cuvelai_ndvi' :  basin.value === 'Zambezi' ? 'zambezi_ndvi':  basin.value === 'Limpopo' ? 'limpopo_ndvi': 'okavango_ndvi',
     format: 'image/png',
     transparent: true,
     opacity:1.0
     
     
    
});


wmsCompareLayer.value.addTo(map);


// console.log(wmsLayer.value, 'wms')
//remove spinner when layer loads
wmsCompareLayer.value.on('load', function (event) {
    loading.value = false
});

swipe_control.value = L.control.sideBySide(wmsLayer.value, wmsCompareLayer.value).addTo(map)
  
// NDVIlegendContent()
compareNDVIlegendContent()
changeOpacity()
}
 }

 const addCompareWetlandStatus = () => {
  // if(wmsLayer.value)map.removeControl(ndwi_legend.value)
  if(sub_indicator.value === 'Wetland Inventory' && parameter.value === 'Wetland Status' ) { //&& season.value === 'DRY'
  
  // console.log('just to see if request is accessed') //accessed
  map.createPane("pane800").style.zIndex = 200;

wmsCompareLayer.value =  L.tileLayer.wms(`${baseurl}:8080/geoserver/${compare_satellite.value}_NDVI_${season.value}/wms?`, {
     pane: 'pane800',
     layers: `${compare_satellite.value}_NDVI_${season.value}:${compare_year.value}`,
     crs:L.CRS.EPSG4326,
     styles: basin.value === 'Cuvelai' ? 'cuvelai_status' :  basin.value === 'Zambezi' ? 'zambezi_status':  basin.value === 'Limpopo' ? 'limpopo_status': 'okavango_status',
     format: 'image/png',
     transparent: true,
     opacity:1.0
     // CQL_FILTER: "Band1='1.0'"
     
    
});


wmsCompareLayer.value.addTo(map);


// console.log(wmsLayer.value, 'wms')
//remove spinner when layer loads
wmsCompareLayer.value.on('load', function (event) {
    loading.value = false
});

swipe_control.value = L.control.sideBySide(wmsLayer.value, wmsCompareLayer.value).addTo(map)
// statuslegendContent()
comparestatuslegendContent()
changeOpacity()
}
 }
 const addCompareFirmsLayer = () => {
  // if(wmsLayer.value)map.removeControl(ndwi_legend.value)
  if(sub_indicator.value === 'Burnt Area FIRMS' ) { //&& season.value === 'DRY'
  
  // console.log('just to see if request is accessed') //accessed
  map.createPane("pane800").style.zIndex = 200;

wmsCompareLayer.value =  L.tileLayer.wms(`${baseurl}:8080/geoserver/FIRMS_DRY/wms?`, {
     pane: 'pane400',
     layers: `FIRMS_DRY:${compare_year.value}`,
     crs:L.CRS.EPSG4326,
     styles: `${basin.value}_firms`,
     format: 'image/png',
     transparent: true,
     opacity:1.0
     // CQL_FILTER: "Band1='1.0'"
     
    
});


wmsCompareLayer.value.addTo(map);


// console.log(wmsLayer.value, 'wms')
//remove spinner when layer loads
wmsCompareLayer.value.on('load', function (event) {
    loading.value = false
});

swipe_control.value = L.control.sideBySide(wmsLayer.value, wmsCompareLayer.value).addTo(map)
// firmslegendContent()
comparefirmslegendContent()
changeOpacity()
}
 }
 
 const addCompareSMILayer = () => {
  // if(wmsLayer.value)map.removeControl(ndwi_legend.value)
  if(sub_indicator.value === 'Soil Moisure Index') { //&& season.value === 'DRY'
  
  // console.log('just to see if request is accessed') //accessed
  map.createPane("pane800").style.zIndex = 200;

wmsCompareLayer.value =   L.tileLayer.wms(`${baseurl}:8080/geoserver/SMI_${season.value}/wms?`, {
     pane: 'pane400',
     layers: `SMI_${season.value}:${compare_year.value}`,
     crs:L.CRS.EPSG4326,
     styles: `${basin.value}_smi`,
     format: 'image/png',
     transparent: true,
     opacity:1.0
     // CQL_FILTER: "Band1='1.0'"
     
    
});


wmsCompareLayer.value.addTo(map);


// console.log(wmsLayer.value, 'wms')
//remove spinner when layer loads
wmsCompareLayer.value.on('load', function (event) {
    loading.value = false
});

swipe_control.value = L.control.sideBySide(wmsLayer.value, wmsCompareLayer.value).addTo(map)
// SMIlegendContent()
compareSMIlegendContent()
changeOpacity()
}
 }

 const addCompareSusSediments = () => {
  // if(wmsLayer.value)map.removeControl(ndwi_legend.value)
  
  if(sub_indicator.value === 'Water Quality' && parameter.value === 'Sus Sediments') { //&& season.value === 'DRY'
  
  // console.log('just to see if request is accessed') //accessed
  map.createPane("pane800").style.zIndex = 200;

wmsCompareLayer.value =  L.tileLayer.wms(`${baseurl}:8080/geoserver/NDWI/wms?`, {
     pane: 'pane800',
     layers: `NDWI:${compare_year.value}`,
     crs:L.CRS.EPSG4326,
     styles: basin.value === 'Cuvelai' ? 'cuvelai_water' :  basin.value === 'Zambezi' ? 'zambezi_water':  basin.value === 'Limpopo' ? 'limpopo_water': 'okavango_water',
     format: 'image/png',
     transparent: true,
     opacity:1.0
     // CQL_FILTER: "Band1='1.0'"
     
    
  });


wmsCompareLayer.value.addTo(map);


// console.log(wmsLayer.value, 'wms')
//remove spinner when layer loads
wmsCompareLayer.value.on('load', function (event) {
    loading.value = false
});

swipe_control.value = L.control.sideBySide(wmsLayer.value, wmsCompareLayer.value).addTo(map)
compareNDWIlegendContent()
changeOpacity()
}
 }
  const compareLayers = () => {
    // console.log('compare!')
    if(wmsCompareLayer.value)map.removeLayer(wmsCompareLayer.value)
    if(swipe_control.value)map.removeControl(swipe_control.value)
    

    // lulc_style()
    // prec_style()
    // wetland_inventory_style()
    // ndvi_style()
    // status_style()

    addCompareLulcLayer()
    addComparePrecIndexWet()
    addComparePrecIndexDry()
    addCompareWetlandExtent()
    addCompareVegCover()
    addCompareWetlandStatus()
    addCompareFirmsLayer()
    addCompareSMILayer()
    addCompareSusSediments()
    addCompareBVILayer()
    changeOpacity()
    

  }








  //advanced filter functionalities
  const getAdvancedCountryName = () => {
    var selected_country = advancedUserSelections.getSelectedCountry
    
    country.value = selected_country
    // console.log(selected_country, 'selected country app')
  
  }
  
  const setSelectedCountry = computed ( () => {
    // console.log(advancedUserSelections.selected_country, 'selected country app')
  
    return advancedUserSelections.getSelectedCountry
  
  })
  watch( setSelectedCountry , () => {
    getAdvancedCountryName()
    
  })


  const getAdvancedCountry = async () => {

    if(current_geojson.value)map.removeLayer(current_geojson.value)
    if(wmsCompareLayer.value)map.removeLayer(wmsCompareLayer.value)
    if(wmsLayer.value)map.removeLayer(wmsLayer.value)
    if(lulc_legend.value)map.removeControl(lulc_legend.value)
    if(group.value)group.value.clearLayers()

        if(lulc_compare_legend.value )map.removeControl(lulc_compare_legend.value)
        if(firms_compare_legend.value || firms_legend.value )map.removeControl(firms_compare_legend.value || firms_legend.value)
        if(smi_compare_legend.value || smi_legend.value)map.removeControl(smi_compare_legend.value || smi_legend.value)
        if(flood_compare_legend.value || flood_legend.value)map.removeControl(flood_compare_legend.value || flood_legend.value)
        if(status_compare_legend.value || status_legend.value )map.removeControl(status_compare_legend.value  || status_legend.value)
        if(ndvi_compare_legend.value || ndvi_legend.value )map.removeControl(ndvi_compare_legend.value || ndvi_legend.value)
        if(ndwi_compare_legend.value || ndwi_legend.value )map.removeControl(ndwi_compare_legend.value || ndwi_legend.value)
        if(prec_compare_legend.value || prec_legend.value)map.removeControl(prec_compare_legend.value || prec_legend.value)



 
   
    var selectedCountry = advancedUserSelections.getSelectedRegion
  //  geometry = selecteRegion
   console.log(selectedCountry, 'selected country app')
  
   map.createPane("pane1000").style.zIndex = 300;
   current_geojson.value = L.geoJSON(selectedCountry, {
           style: {
             color: "steelblue",
             opacity: 1,
             fillOpacity:0,
             weight: 4
           },
           pane: 'pane1000'
            })
   
  
   current_geojson.value.addTo(map)
  
  
            //  map.fitBounds(current_geojson.value.getBounds(), {
            //                  padding: [50, 50],
            //                }); 


                           if(current_top_base_layer.value === 'MapBoxSatellite'){
              map.fitBounds(current_geojson.value.getBounds())
            } else{
              map.setView(current_geojson.value.getBounds().getCenter());

            }
            

  }

    //watch for changes
  
    const setSelectedAdvancedCountry = computed( () => {
    console.log(advancedUserSelections.selected_country, 'selected_country app')
    
    return advancedUserSelections.getSelectedRegion
  })
  watch( setSelectedAdvancedCountry , () => {
    getAdvancedCountry()
    
  })


    

   

  
  </script>
  
  <style scoped>
    @import "../assets/main.css";
    
  
  </style>
  