<template>
    <div id="app" class="app">
  
      <div class="navbar">
         <Navbar />
      </div>
      <div class="selections">
        <DashboardSelections
        @fetchData="fetchWmsData" 
        @fetchRegion="getWemastRegion"/>
      </div>
      <div class="advanced_filter" @click="show_advanced_filter" >
        <img class="filter_icon" src=" /mapIcons/filter.svg" alt="">
            <img class="filter_open" src=" /mapIcons/right.svg" alt="">
        <p>Advanced <br> Filter</p> </div>
      <div class="compare"  @click="show_compare"> 
  
        <img class="compare_icon" src=" /mapIcons/compare.svg" alt="">
        <img class="compare_open" src=" /mapIcons/compare_right.svg" alt="">
        <p>Compare</p>
      </div>
  
      <!-- <button class="request" type="button" @click="getRegion2" >REQUEST</button> -->
  
  
      <div  class="spinner" v-if="loading">
              <img src="/uiIcons/loader_white.svg" alt="">
          </div>
  
      <!-- <h1 class="header_countries">{{storeUserSelections.indicator_list}}</h1> -->
  
      <div id="map" >
        <div class="opacity" v-if="wmsLayer != null"  :class="{mainopen: sidenavigationbar}">
          <span id="opacity">Opacity:</span>
          <span id="image-opacity"> </span>
          <input type="range" id="sldOpacity" min="0" max="1" step="0.1" value="1" />
         </div>


         <div class="swap" v-if="wmsCompareLayer != null"  title="Compare Layers" @click="close_swipe">
          <img src="/uiIcons/swap.svg" alt="">
         </div>
         <div class="map_controls_wrapper" :class="{mainopen: sidenavigationbar}" >

         </div>
         
         <!-- map controls to be returned if need be -->
        <!-- <div class="map_controls"  > 
      
         <img  title="Download tif" id="map_icons" src="/mapIcons/download_tif.svg" alt="" class="download_tiff">
         <img title="Download Map" id="map_icons" src="/mapIcons/download_map.svg" alt="" class="download_map">
         <img title="Measure Distance" id="map_icons" src="/mapIcons/ruler.svg" alt="" class="measure">
         <img title="" id="map_icons" src="/mapIcons/layers-24px.svg" alt="" class="layers"
          @mouseover="base_map_ctrl_selections = true"
          @mouseleave="handle_baseLayers">
         <img title="Draw Polygon" id="map_icons" src="/mapIcons/square.svg" alt="" class="draw_polygon">
         <img title="Zoom in" id="map_icons" src="/mapIcons/add-24px.svg" alt="" class="zoom_in" @click="zoom_in">
         <img title="Zoom out" id="map_icons" src="/mapIcons/remove-24px.svg" alt="" class="zoom_out" @click="zoom_out">
         <img title="Help" id="map_icons" src="/mapIcons/help.svg" alt="" class="help">
        </div> -->
  
        
        <!-- <div
          class="base_map_ctrl_selections"
          v-if="base_map_ctrl_selections"
          @mouseover="
            (base_map_ctrl_selections = true), (base_map_ctrl_cliked = true)
          "
          @mouseleave="
            (base_map_ctrl_selections = false), (base_map_ctrl_cliked = false)
          "
        >
          <div v-for="base_map in Object.keys(baseMaps)" :key="base_map">
            <div class="base_map" @click="change_base_map(base_map)">
              <div class="base_map_name">{{ base_map }}</div>
            </div>
          </div>
        </div> -->
  
      </div>

  <!-- will revisit -->
      <!-- leaflet side bar :class="{'request':(storeUserSelections.selected_sub_indicator === 'Prec Index') -->
      <!-- <div class="sideview" v-if="sidenavigationbar" :class="{sidenavopen: sidenavigationbar}">
        <sideNavigationbar  />
        
      
      </div> -->
  
      <!-- sidenav goes here -->
      <!-- <div class="" @click="sidenavigationbar = !sidenavigationbar">
        <img class="open_sidebar" src="/uiIcons/drawer.svg" alt="">
      </div> -->



          <!-- leaflet side bar -->
    <div class="side-bar-view">
      <SideBarView />
    </div>

    <!-- sidenav goes here -->
    <div id="sidenav" class="sidenav">
      <div id="mySidenav" style="height: 100%">
        <div id="protrusion" class="bg-white protrusion">
          <div class="toggle_icon" @click.stop="toggle_nav">
            <img style="margin-left:-5vw; margin-top:1.5vw" id="open" src=" /uiIcons/drawer.svg" v-if="show_sidenav" />
            <img style="margin-left:-5vw; margin-top:1.5vw" id="close" src=" /uiIcons/drawer.svg" v-if="!show_sidenav" />
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

            <p style="margin-top:40px">
              <label style="margin-top:40px; font-weight: 700;">Summary</label>
              <br>
              {{ summary_text }}
            </p>
            <br />
            <label class="text-bold" style="font-family: Montserrat; font-weight: 800;">
              <!-- <div class="chart_title_sidebar"  style="font-family: 'Trebuchet MS'; font-weight: 800;">{{storeUserSelections.selected_cause}} blackspots in {{storeUserSelections.selected_region}}  </div> -->
            </label>
            
            <div class="charts_sidebar"  >
            <!-- <img class="close_chart" src="../assets/images/close_small.svg" alt="" @click="close_chart()"> ref="charts"   v-if="charts" to be added later -->
            <!-- <div class="chart_title">No. of blackspots in {{storeUserSelections.selected_region}} that are {{storeUserSelections.selected_cause}}</div> -->
            <!-- <CausesChart 
            :height="200"
            :width="300"
            :chartData="chartData"
            :options="options"
            /> -->
          </div>

         
            <br />
            <label class="text-bold" style="font-family: Montserrat; font-weight: 800;">
              <!-- <div class="chart2_title_sidebar"  style="font-family: 'Trebuchet MS'; font-weight: 800;">  {{storeUserSelections.selected_cause}} blackspots in {{storeUserSelections.selected_region}}</div> -->
            </label>
            
            <div class="charts2_sidebar"  >
            <!-- <img class="close_chart" src="../assets/images/close_small.svg" alt="" @click="close_chart()">  ref="charts"   v-if="charts" to be added later -->
            <!-- <div class="chart_title">No. of blackspots in {{storeUserSelections.selected_region}} that are {{storeUserSelections.selected_cause}}</div> -->
            <!-- <CausesBar 
            :height="200"
            :width="300"
            :chartData="chartData"
            :options="barchart_options"
            /> -->
          </div>
           
          </div>
          <div class="meta" v-if="analysis_swap_toggle === 'metadata'">
          


              <table style="width:100%">
                  <tr>
                    <th>Region</th>
                    <td> {{storeUserSelections.selected_region}}</td>
                    
                  </tr>
                  <tr>
                    <th>Cause</th>
      
                    <td>{{storeUserSelections.selected_cause}}</td>
                  </tr>
                  <tr>
                    <th>CRS</th>
                    <td>{{storeUserSelections.crs}}</td>
                    
                  </tr>
                  <tr>
                    <th>Region</th>
                    <td> {{storeUserSelections.selected_region}}</td>
                    
                  </tr>
                  <tr>
                    <th>Cause</th>
      
                    <td>{{storeUserSelections.selected_cause}}</td>
                  </tr>
                  <tr>
                    <th>CRS</th>
                    <td>{{storeUserSelections.crs}}</td>
                    
                  </tr>
                  <tr>
                    <th>Region</th>
                    <td> {{storeUserSelections.selected_region}}</td>
                    
                  </tr>
                  <tr>
                    <th>Cause</th>
      
                    <td>{{storeUserSelections.selected_cause}}</td>
                  </tr>
                  <tr>
                    <th>CRS
                      
                    </th>
                    
                    <td>
                      <table>
                        <tr>
                          <th>Region</th>
                          <td>{{storeUserSelections.selected_region}}</td>
                        </tr>
                        <tr>
                          <th>Cause</th>
                          <td>{{storeUserSelections.selected_cause}}</td>
                        </tr>
                        <tr>
                          <th>CRS</th>
                          <td>{{storeUserSelections.crs}}</td>
                        </tr>
                      </table>
                    </td>
                    
                    
                  </tr>
                </table>
          </div>
          <!-- <LineChart :height="250" :width="250" /> -->
          <p class="partners" style="font-weight:bold;font-size:16px;position: relative;top:53vh;left: 8vw;" >Technical Partners</p>
          <div class="logos_container row">
            <!-- <SideNavLogos /> -->
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
  
      <!-- login icons -->
      <div class="nav_icons">
             
                <img class="home" src=" /uiIcons/home-landing.svg" alt=""/>
           
              <img class="dashboard" src=" /uiIcons/dashboard-24px.svg" alt="">
    
              <img class="person" src=" /uiIcons/person.svg" alt="">
              
              <img class="search" src=" /uiIcons/search.svg" alt="">
          
          </div>
          
          <div  class="spinner"  v-if="loading">
              <img src="/uiIcons/loader_white.svg" alt="">
          </div>
          
  
       
  
    </div>
    
    
    
  </template>
  
  
  <script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Navbar from '../components/Navbar.vue';
  import DashboardSelections from '../components/DashboardSelections.vue';
  import "leaflet";
  import L from "leaflet";
  import "leaflet/dist/leaflet.css";
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

  // import "leaflet-draw/dist/leaflet.draw";
  
  //trial custom shapefile upload
  // import "leaflet.draw-extension"
  // import "leaflet.draw-extension/lib/leaflet-src"
  // import "leaflet.draw-extension/lib/leaflet.draw-src"
  // import "leaflet.draw-extension/lib/leaflet.shapefile/shp"
  // import "leaflet.draw-extension/lib/leaflet.shapefile/leaflet.shapefile"
  // import "leaflet.draw-extension/leaflet.draw-shapefile"
  // import "leaflet.draw-extension/leaflet.draw-shapefile.css"
  import "../CustomMapControls/measure/MeasureTool";
  import "../CustomMapControls/measure/measure.css";
  import SideBarView from "./SideBarView.vue"
  import { close_nav, open_nav } from "../Helpers/SideNavControls";
  import { leaflet_custom_controls } from "../CustomMapControls/LeafletCustomControls"
  import { onMounted, ref, watch, computed } from '@vue/runtime-core';
  import { useCounterStore } from '@/stores/counter';
  import { useCompareStore } from '../stores/compareSelections/compare';
  import AdvancedFilter from '../components/AdvancedFilter.vue';
  import Compare from '../components/Compare.vue';
  import sideNavigationbar from '../components/sidenavigationbar.vue'
  import axios from 'axios'
  

  
  //refs go here
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
  let styles = ref(null)
  let band_1 = ref(null)
  let lulc_legend = ref(false)
  let prec_legend = ref(false)
  let ndwi_legend = ref(false)
  let ndvi_legend = ref(false)
  let status_legend = ref(null)
  let sidenavigationbar = ref(false)
  let swipe_control = ref(null)
  let wmsCompareLayer = ref(null)
  let custom_geojson = ref(null)
  let search_marker = ref(null)
  let controls_container = ref(null)
  
  
  
  
  //variables
  const storeUserSelections = useCounterStore()
  const compareUserSelections = useCompareStore()
  
  console.log(storeUserSelections.fetchCountriesList)
  
  console.log(storeUserSelections.getLoadingState, 'getLoadingState')
  
  const show_advanced_filter = () =>{
    advanced_filter.value = true
  }
  const show_compare = () =>{
    compare.value = true
  }
  const close_advanced_filter = () =>{
    advanced_filter.value = false
  }
  const close_compare = () =>{
    compare.value = false
  }
  
  //sidebar functionality
  const toggle_nav = (e)  => {
        console.log(" toggle_nav ", e.target.id);
        const cmd = e.target.id;
        if (cmd === "close") return closeNav();
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
          draw_ctrl[0].style.visibility = "hidden";
        } else {
          const draw_ctrl = document.getElementsByClassName("leaflet-draw");
          draw_ctrl[0].style.visibility = "visible";
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
          },
        };
        let drawControl = new L.Control.Draw(options);
        map.addControl(drawControl);
  
        map.on(L.Draw.Event.CREATED, (e) => {

          if(custom_geojson.value)
          editableLayers.value.removeLayer(custom_geojson.value)
          
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
        const leaflet_controls = L.control({ position: "topright" });
        leaflet_controls.onAdd = () => {
          let div = L.DomUtil.create("div", "WeMAST_zoom");
          div.innerHTML = leaflet_custom_controls;
          return div;
        };
  
        leaflet_controls.addTo(map);
        // document.getElementsByClassName('map_controls_wrapper').appendChild(leaflet_controls)
        const right_ctrls = document.querySelector(".map_controls");
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
  
          
  
         
          
  
          previous_wemast_ctrl_id.value = id;
        });
      }
const opensidenavigationbar = () => {
    sidenavigationbar.value = true
    
}
        
      const setLeafletMap = () => {

        let osm = L.tileLayer(
          "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          {
            maxZoom: 19,
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
           // maxZoom: 18,
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
          // measureControl: true,
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
      }
      
  //hooks
  onMounted( () => {
    setLeafletMap()
  

      AddCustomRightControls();
  
         //add sidebar
         AddSideLeafletSideBar();
  
  
  
  document
        .getElementById("wemast_base_layers")
        .addEventListener("mouseover", (e) => {
          console.log("mouseover ");
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
        .getElementById("draw_polygon")
        .addEventListener("click", (e) => {
          console.log("click ");
          
          addDrawCtrl();
          // draw_polygon();
        });
  
        
  
      // addDrawCtrl(); //adds draw control to map
      draw_polygon(); //hides draw controls
  
      // map.on("baselayerchange", (e) => {
      //   console.log("Layer in basechange ", current_raster_layer.value);
      //   if (current_raster_layer.value) {
      //     current_raster_layer.value.bringToFront(); //current_raster can be tracked and brought to front
      //   }
      // });
  
  
      //trial for custom shapefile upload
      var  drawControl, drawLayers;
      drawLayers = new L.FeatureGroup();
      drawControl = new L.Control.DrawPlus({
          position: 'topright',		
          draw: {
              circle: false,
              polyline: false,
              shapefile: {
                  shapeOptions:{
                      color: 'black',
                      weight: 3,
                      opacity: 1,
                      fillOpacity: 0					
                  }
              }, //Turn on my custom extension
              geojson: true,   //Could have options if needed.
          },
          edit: {
              featureGroup: drawLayers,
              edit: false
          }
      });
      
      map.addLayer(drawLayers);
      map.addControl(drawControl);
      
      map.on(L.Draw.Event.CREATED, function(e){
          drawLayers.addLayer(e.layer);
      });
      
      drawLayers.on('click',function(e){
          console.log(e.layer);
      });

      closeNav();





  
  
  })//OnMounted end
  
  
  
  
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
        // console.log(content, "wms content")
      //   var band1 = content.features[0].properties.Band1
      
      // band_1.value = band1
      
          return  
          // console.log(latlng, 'lat long');
        
        } // do nothing if there's an error
     
        
      // Otherwise show the content in a popup, or something.
   
      // L.popup({ maxWidth: 800})
      //   .setLatLng(latlng)
      //   .setContent( content)
      //   .openOn(this._map);
  
    
    }
  }); //end of L.extend
  
  
  
  L.tileLayer.betterWms = function (url, options) {
    return new L.TileLayer.BetterWMS(url, options);  
  };
  
      //function to get regions 
  
      const getRegion = () => {  
   
   if(current_geojson.value)map.removeLayer(current_geojson.value)
   if(wmsLayer.value)map.removeLayer(wmsLayer.value)
   if(wmsCompareLayer.value)map.removeLayer(wmsCompareLayer.value)
  //  if(current_point_geojson.value)map.removeLayer(current_point_geojson.value)
  
   var selecteRegion = storeUserSelections.getSelectedRegion
   console.log(selecteRegion, 'selected region app')
  
   map.createPane("pane1000").style.zIndex = 300;
   current_geojson.value = L.geoJSON(selecteRegion, {
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



                           
//       const provider = new OpenStreetMapProvider();
// // search_marker.value = {
// //     // optional: L.Marker    - default L.Icon.Default
// //     icon: new L.icon({
// //       iconUrl: "/src/assets/plant.svg",
// //       iconSize: [40, 40],
// //       iconAnchor: [15,15]
// //     }),
// //     draggable: false,
// //   }



// const searchControl = new GeoSearchControl({
//   provider: provider,
//   stle: 'bar',
//   // marker: search_marker.value,
//   popupFormat: ({ query, result }) => result.label,
//   resultFormat: ({ result}) => result.label
//   //  console.log(result, 'result')
  
// });


// const showResult = ({result}) => {
//       console.log(result, result)
//       return result.label

//     }
// map.addControl(searchControl);


    
//     document.getElementById('location_search').appendChild(
//       document.querySelector(".geosearch")
//     );

   
  }
 
  //watch for changes
  
  const setSelectedRegion = computed( () => {
    console.log(storeUserSelections.selected_basin, 'selected_basin app')
    // if(storeUserSelections.selected_region === 'Nyeri'){
    //     $("#select2").show();
    //   }else{
    //     $("#select2").hide();
    //   }
    return storeUserSelections.getSelectedRegion
  })
  watch( setSelectedRegion , () => {
    getRegion()
    
  })
  
  
  
  
  const getBasinName = () => {
    var selected_basin = storeUserSelections.getSelectedBasin
    
    basin.value = selected_basin
    console.log(selected_basin, 'selected basin app')
  
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

  //style functions
  const lulc_style = () => {
      if(basin.value === 'Cuvelai' && sub_indicator.value === 'Land Cover' ){
      styles.value = 'cuvelai_lulc'
    }
  
    if(basin.value === 'Limpopo' && sub_indicator.value === 'Land Cover' ){
      styles.value = 'limpopo_lulc'
    }
    if(basin.value === 'Zambezi' && sub_indicator.value === 'Land Cover' ){
      styles.value = 'zambezi_lulc'
    }
    if(basin.value === 'Okavango' && sub_indicator.value === 'Land Cover' ){
      styles.value = 'okavango_lulc'
    }
    }
const prec_style = () => {
    if(basin.value === 'Cuvelai' && sub_indicator.value === 'Prec Index' ){
      styles.value = 'cuvelai_spi'
    }
  
    if(basin.value === 'Limpopo' && sub_indicator.value === 'Prec Index' ){
      styles.value = 'limpopo_spi'
    }
    if(basin.value === 'Zambezi' && sub_indicator.value === 'Prec Index' ){
      styles.value = 'zambezi_spi'
    }
    if(basin.value === 'Okavango' && sub_indicator.value === 'Prec Index' ){
      styles.value = 'okavango_spi'
    }
  }
const wetland_inventory_style = () => {
    if(basin.value === 'Cuvelai' && sub_indicator.value === 'Wetland Inventory'){
      styles.value = 'cuvelai_water'
    }
    if(basin.value === 'Limpopo' && sub_indicator.value === 'Wetland Inventory'){
      styles.value = 'limpopo_water'
    }
    if(basin.value === 'Zambezi' && sub_indicator.value === 'Wetland Inventory'){
      styles.value = 'zambezi_water'
    }
    if(basin.value === 'Okavango' && sub_indicator.value === 'Wetland Inventory'){
      styles.value = 'okavango_water'
    }
  }
const ndvi_style = () => {
  if(basin.value === 'Cuvelai' && sub_indicator.value === 'Vegetation Cover'  ){
      styles.value = 'cuvelai_ndvi'
    }
    if(basin.value === 'Limpopo' && sub_indicator.value === 'Vegetation Cover' ){
      styles.value = 'limpopo_ndvi'
    }
    if(basin.value === 'Zambezi' && sub_indicator.value === 'Vegetation Cover'){
      styles.value = 'zambezi_ndvi'
    }
    if(basin.value === 'Okavango' && sub_indicator.value === 'Vegetation Cover' ){
      styles.value = 'okavango_ndvi'
    }
  
 }
  
 const status_style = () => {
  if(basin.value === 'Cuvelai' && sub_indicator.value === 'Wetland Inventory' && parameter.value === 'Wetland Status' ){
      styles.value = 'cuvelai_status'
    }
    if(basin.value === 'Limpopo' && sub_indicator.value === 'Wetland Inventory' && parameter.value === 'Wetland Status'){
      styles.value = 'limpopo_status'
    }
    if(basin.value === 'Zambezi' && sub_indicator.value === 'Wetland Inventory' && parameter.value === 'Wetland Status'){
      styles.value = 'zambezi_status'
    }
    if(basin.value === 'Okavango' && sub_indicator.value === 'VWetland Inventory' && parameter.value === 'Wetland Status' ){
      styles.value = 'okavango_status'
    }
  
 }

 const addLulcLayer = () => {
  if(sub_indicator.value === 'Land Cover') {
  
  // console.log('just to see if request is accessed') //accessed
  map.createPane("pane400").style.zIndex = 200;
  

wmsLayer.value =  L.tileLayer.betterWms("http://66.42.65.87:8080/geoserver/LULC/wms?", {
     pane: 'pane400',
     layers: `LULC:${year.value}`,
     crs:L.CRS.EPSG4326,
     styles: styles.value,
     format: 'image/png',
     transparent: true,
     opacity:0.8
     // CQL_FILTER: "Band1='1.0'"
     
    
});


wmsLayer.value.addTo(map);


// console.log(wmsLayer.value, 'wms')
//remove spinner when layer loads
wmsLayer.value.on('load', function (event) {
    loading.value = false
});

// addLulcLegend()
lulclegendContent()

changeOpacity()

}
 }
  
 const addPrecIndexWet = () => {
  if(sub_indicator.value === 'Prec Index' && season.value === 'Wet' ) {
  
  // console.log('just to see if request is accessed') //accessed
  map.createPane("pane800").style.zIndex = 200;
  
  wmsLayer.value =  L.tileLayer.betterWms("http://66.42.65.87:8080/geoserver/SPI_WET/wms?", {
     pane: 'pane800',
     layers: `SPI_WET:${year.value}`,
     crs:L.CRS.EPSG4326,
     styles: styles.value,
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
  preclegendContent()
  changeOpacity()
  
  
  }
  
 }

 const addPrecIndexDry = () => {
  if(sub_indicator.value === 'Prec Index' && season.value === 'DRY' ) {
  
  // console.log('just to see if request is accessed') //accessed
  map.createPane("pane800").style.zIndex = 200;
  
  wmsLayer.value =  L.tileLayer.betterWms("http://66.42.65.87:8080/geoserver/SPI_DRY/wms?", {
     pane: 'pane800',
     layers: `SPI_DRY:${year.value}`,
     crs:L.CRS.EPSG4326,
     styles: styles.value,
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
  preclegendContent()
  changeOpacity()
  
  }
 }
 const addWetlandExtent = () => {
  if(sub_indicator.value === 'Wetland Inventory' && parameter.value === 'Wetland Extent') {
  
  // console.log('just to see if request is accessed') //accessed
  map.createPane("pane800").style.zIndex = 200;
  
  wmsLayer.value =  L.tileLayer.betterWms("http://66.42.65.87:8080/geoserver/NDWI/wms?", {
     pane: 'pane800',
     layers: `NDWI:${year.value}`,
     crs:L.CRS.EPSG4326,
     styles: styles.value,
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

wmsLayer.value =  L.tileLayer.betterWms(`http://66.42.65.87:8080/geoserver/${satellite.value}_NDVI_${season.value}/wms?`, {
     pane: 'pane800',
     layers: `${satellite.value}_NDVI_${season.value}:${year.value}`,
     crs:L.CRS.EPSG4326,
     styles: styles.value,
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


NDVIlegendContent()
changeOpacity()
}

 }
 const addWetlandStatus = () => {
  if(wmsLayer.value)map.removeControl(ndwi_legend.value)
  if(sub_indicator.value === 'Wetland Inventory' && parameter.value === 'Wetland Status' ) { //&& season.value === 'DRY'
  
  // console.log('just to see if request is accessed') //accessed
  map.createPane("pane800").style.zIndex = 200;

wmsLayer.value =  L.tileLayer.betterWms(`http://66.42.65.87:8080/geoserver/${satellite.value}_NDVI_${season.value}/wms?`, {
     pane: 'pane800',
     layers: `${satellite.value}_NDVI_${season.value}:${year.value}`,
     crs:L.CRS.EPSG4326,
     styles: styles.value,
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
 
  //function to request wms
  
  const fetchWmsData = () => {
    loading.value = true
    if(wmsLayer.value)map.removeLayer(wmsLayer.value)
    if(wmsCompareLayer.value)map.removeLayer(wmsCompareLayer.value)

  lulc_style()
  prec_style()
  wetland_inventory_style()
  ndvi_style()
  status_style()
   
  
  addLulcLayer()
  addPrecIndexWet()
  addPrecIndexDry()
  addWetlandExtent()
  addVegCover()
  addWetlandStatus()
 
  
 

  
  }
  
  //watch state for loading
  
  const setLoadingState= computed( () => {
    return storeUserSelections.getLoadingState
  })
  
   watch( setLoadingState , () => {
    console.log(storeUserSelections.getLoadingState, 'getLoadingState')
    loading.value = storeUserSelections.getLoadingState
    
  })
  
  
  const lulclegendContent = () => {
    const getLegendContent = async () => {
      try {
        const response = await axios.get('http://66.42.65.87:8080/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=application/json&WIDTH=30&HEIGHT=30&LAYER=LULC:2010&legend_options=fontName:poppins;fontAntiAliasing:true;fontColor:0x000033;fontSize:10;bgColor:0xFFFFEE;dpi:180'
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
  
        if(status_legend.value)map.removeControl(status_legend.value)
        if(prec_legend.value)map.removeControl(prec_legend.value)
        if(ndwi_legend.value)map.removeControl(ndwi_legend.value)
        if(ndvi_legend.value)map.removeControl(ndvi_legend.value)
        if(lulc_legend.value)map.removeControl(lulc_legend.value)
  
        var legend = L.control({ position: "bottomright" });
        lulc_legend.value = legend
        var colors = colors_array
        var labels = label_array
  
        lulc_legend.value.onAdd = function(map) {
            var div = L.DomUtil.create("div", "legend");
            div.innerHTML += `<p> ${basin.value} ${sub_indicator.value} ${year.value}</p>`;
            for (var i = 0; i < colors.length; i++) {
                  div.innerHTML +=
                      ('<i style="background:'+ colors[i] + '" ></i>') + labels[i] +'<br>';
              }
    
    
  
    return div;
  };
  
  lulc_legend.value.addTo(map);
        
      } catch (error) {
        console.log(error)
        
      }
    }
    getLegendContent()
  }
  
  const preclegendContent = () => {
    const getLegendContent = async () => {
      try {
        const response = await axios.get('http://66.42.65.87:8080/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=application/json&WIDTH=20&HEIGHT=20&LAYER=SPI_WET:2000&legend_options=fontName:poppins;fontAntiAliasing:true;fontColor:0x000033;fontSize:7;bgColor:0xFFFFEE;dpi:150'
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
  
        if(status_legend.value)map.removeControl(status_legend.value)
        if(prec_legend.value)map.removeControl(prec_legend.value)
        if(ndvi_legend.value)map.removeControl(ndvi_legend.value)
        if(lulc_legend.value)map.removeControl(lulc_legend.value)
        if(ndwi_legend.value)map.removeControl(ndwi_legend.value)
  
        var legend = L.control({ position: "bottomright" });
        prec_legend.value = legend
        var colors = colors_array
        var labels = label_array
  
        prec_legend.value.onAdd = function(map) {
            var div = L.DomUtil.create("div", "legend");
            div.innerHTML += `<p>${basin.value} ${sub_indicator.value} ${year.value} ${season.value} Season</p>`;
            for (var i = 0; i < colors.length; i++) {
                  div.innerHTML +=
                      ('<i style="background:'+ colors[i] + '" ></i>') + labels[i] +'<br>';
              }
    
    
  
    return div;
  };
  
  prec_legend.value.addTo(map);
        
      } catch (error) {
        console.log(error)
        
      }
    }
    getLegendContent()
  }
  const NDWIlegendContent = () => {
    const getLegendContent = async () => {
      try {
        const response = await axios.get('http://66.42.65.87:8080/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=application/json&WIDTH=30&HEIGHT=30&LAYER=NDWI:1990&legend_options=fontName:poppins;fontAntiAliasing:true;fontColor:0x000033;fontSize:10;bgColor:0xFFFFEE;dpi:180'
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
  
        if(status_legend.value)map.removeControl(status_legend.value)
        if(ndwi_legend.value)map.removeControl(ndwi_legend.value)
        if(prec_legend.value)map.removeControl(prec_legend.value)
        if(lulc_legend.value)map.removeControl(lulc_legend.value)
        if(ndvi_legend.value)map.removeControl(ndvi_legend.value)
  
        var legend = L.control({ position: "bottomright" });
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
    
    
  
    return div;
  };
  
  ndwi_legend.value.addTo(map);
        
      } catch (error) {
        console.log(error)
        
      }
    }
    getLegendContent()
  }

  const NDVIlegendContent = () => {
    const getLegendContent = async () => {
      try {
        const response = await axios.get(`http://66.42.65.87:8080/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=application/json&WIDTH=20&HEIGHT=20&LAYER=SENTINEL_NDVI_WET%3A2021`
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
  
        if(ndvi_legend.value)map.removeControl(ndvi_legend.value)
        if(ndwi_legend.value)map.removeControl(ndwi_legend.value)
        if(prec_legend.value)map.removeControl(prec_legend.value)
        if(lulc_legend.value)map.removeControl(lulc_legend.value)
  
        var legend = L.control({ position: "bottomright" });
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
    
    
  
    return div;
  };
  
  ndvi_legend.value.addTo(map);
        
      } catch (error) {
        console.log(error)
        
      }
    }
    getLegendContent()
  }

  const statuslegendContent = () => {
    const getLegendContent = async () => {
      try {
        const response = await axios.get(`http://66.42.65.87:8080/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=application/json&WIDTH=20&HEIGHT=20&LAYER=SENTINEL_NDVI_WET%3A2022&legend_options=fontName:poppins;fontAntiAliasing:true;fontColor:0x000033;fontSize:7;bgColor:0xFFFFEE;dpi:150`
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
        if(status_legend.value)map.removeControl(status_legend.value)
        if(ndvi_legend.value)map.removeControl(ndvi_legend.value)
        if(ndwi_legend.value)map.removeControl(ndwi_legend.value)
        if(prec_legend.value)map.removeControl(prec_legend.value)
        if(lulc_legend.value)map.removeControl(lulc_legend.value)
  
        var legend = L.control({ position: "bottomright" });
        status_legend.value = legend
        var colors = colors_array
        var labels = label_array
  
        status_legend.value.onAdd = function(map) {
            var div = L.DomUtil.create("div", "legend");
            div.innerHTML += `<p>${basin.value} ${sub_indicator.value} ${year.value}</p>`;
            for (var i = 0; i < colors.length; i++) {
                  div.innerHTML +=
                      ('<i style="background:'+ colors[i] + '" ></i>') + labels[i] +'<br>';
              }
    
    
  
    return div;
  };
  
  status_legend.value.addTo(map);
        
      } catch (error) {
        console.log(error)
        
      }
    }
    getLegendContent()
  }
  

  //change opacity
  const changeOpacity = () => {
    $('#sldOpacity').on('change', function(){
                                    //   $('#image-opacity').html(this.value); //i might revesit
                                      console.log(this.value, 'opacity value')
                                      if(wmsLayer.value){
                                        wmsLayer.value.setOpacity(this.value)
                                      }
                                      if(wmsCompareLayer) wmsCompareLayer.value.setOpacity(this.value)
                                    
                                     
                                    
                    
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
  
   year.value = selectedYear
   console.log(year.value, 'compare year app')
  
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
    season.value = selectedSeason
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
    satellite.value = selectedSatellite
    console.log(satellite.value, 'compare satellite app')

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
  

wmsCompareLayer.value =  L.tileLayer.betterWms("http://66.42.65.87:8080/geoserver/LULC/wms?", {
     pane: 'pane800',
     layers: `LULC:${year.value}`,
     crs:L.CRS.EPSG4326,
     styles: styles.value,
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
lulclegendContent()

changeOpacity()

}
 }
  
 const addComparePrecIndexWet = () => {
  if(sub_indicator.value === 'Prec Index' && season.value === 'Wet' ) {
  
  // console.log('just to see if request is accessed') //accessed
  map.createPane("pane800").style.zIndex = 200;
  
  wmsCompareLayer.value =  L.tileLayer.betterWms("http://66.42.65.87:8080/geoserver/SPI_WET/wms?", {
     pane: 'pane800',
     layers: `SPI_WET:${year.value}`,
     crs:L.CRS.EPSG4326,
     styles: styles.value,
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

 const addComparePrecIndexDry = () => {
  if(sub_indicator.value === 'Prec Index' && season.value === 'DRY' ) {
  
  // console.log('just to see if request is accessed') //accessed
  map.createPane("pane800").style.zIndex = 200;
  
  wmsCompareLayer.value =  L.tileLayer.betterWms("http://66.42.65.87:8080/geoserver/SPI_DRY/wms?", {
     pane: 'pane800',
     layers: `SPI_DRY:${year.value}`,
     crs:L.CRS.EPSG4326,
     styles: styles.value,
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
  
  wmsCompareLayer.value =  L.tileLayer.betterWms("http://66.42.65.87:8080/geoserver/NDWI/wms?", {
     pane: 'pane800',
     layers: `NDWI:${year.value}`,
     crs:L.CRS.EPSG4326,
     styles: styles.value,
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
  
  NDWIlegendContent()
  changeOpacity()
  
  
  
  
  
  }

 }
 const addCompareVegCover = () => {
  if(sub_indicator.value === 'Vegetation Cover' ) { //&& season.value === 'DRY'
  
  // console.log('just to see if request is accessed') //accessed
  map.createPane("pane800").style.zIndex = 200;

wmsCompareLayer.value =  L.tileLayer.betterWms(`http://66.42.65.87:8080/geoserver/${satellite.value}_NDVI_${season.value}/wms?`, {
     pane: 'pane800',
     layers: `${satellite.value}_NDVI_${season.value}:${year.value}`,
     crs:L.CRS.EPSG4326,
     styles: styles.value,
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
  
NDVIlegendContent()
changeOpacity()
}
 }
  const compareLayers = () => {
    // console.log('compare!')
    if(wmsCompareLayer.value)map.removeLayer(wmsCompareLayer.value)
    if(swipe_control.value)map.removeControl(swipe_control.value)
    

    lulc_style()
    prec_style()
    wetland_inventory_style()
    ndvi_style()

    addCompareLulcLayer()
    addComparePrecIndexWet()
    addComparePrecIndexDry()
    addCompareWetlandExtent()
    addCompareVegCover()
    changeOpacity()
    

  }
 
   

  
  </script>
  
  <style scoped>
    @import "../assets/main.css";
    
  
  </style>
  