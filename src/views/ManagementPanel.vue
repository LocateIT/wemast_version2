<template>
   <div class="management" >
    <!-- <Navbar style="margin-left: -5vw;" /> -->
    <ResponsiveNav />
    <!-- <img src="/uiIcons/person-inactive.svg" alt="" @click="$router.push('/signup')"  > -->

    <div style="background-color: #fff; height: 90vh; position: absolute; width: 100vw; padding: 20px;">

      
      <div v-if="storeUserSelections.isLoggedIn == false" style="display: flex; flex-direction: row; gap: 1rem; margin-top: 50px;">
        <UserCircle width="100" height="100"  color="#164b75" />
        <span @click="$router.push('/signup')" style="font-size:20px; font-weight: 600; margin-top: 30px; color: #297EAE;">Please <span style="text-decoration: underline; cursor: pointer;">Log in </span>to view your data</span>

    </div>


      <div v-if="storeUserSelections.isLoggedIn == true" style="display: flex; flex-direction: row; gap: 1rem; margin-top: 50px;">
        <UserCircle width="100" height="100"  color="#164b75" />
        <span  style="font-size:40px; font-weight: 600; margin-top: 20px; color: #297EAE;">{{ storeUserSelections.user_details[0]._username }}</span>

    </div>


    <div class="features" style="position: relative; top:4vh">
      <span  style="font-size:20px; font-weight: 600; margin-top: 50px; color: #297EAE;">Total GeoFeatures: {{ storeUserSelections.user_features?.length }}</span>

    </div>
   

   <div class="container">
    <!-- <h1>User Table</h1> -->
    <table class="table">
      <thead>
        <tr style="color:#297EAE">
          <th>Name</th>
          <th>Email</th>
          <th>Status</th>
          <th>Role</th>
          <th>Export data</th>
        </tr>
      </thead>
      <tbody>
        <!-- Sample data to populate the table -->
        <tr v-for="(user, index) in users" :key="index">
          <td>{{ user._username }}</td>
          <td>{{  user._useremail }}</td>
          <td>{{ user._userstatus }}</td>
          <td>{{ user._userrole}}</td>
          <td>
            <!-- Actions (e.g., buttons) for each user -->
            <!-- <button @click="editUser(user)" class="btn btn-primary btn-sm">Edit</button>
            <button @click="deleteUser(user.id)" class="btn btn-danger btn-sm">Delete</button> -->
            <!-- <DownloadOutline width="40" height="20"  color="#164b75" style="cursor: pointer;"  @click="downloadShapefile"/> -->
            <img src="../../public/mapIcons/download_tif.svg" alt="download shapefile" style="cursor: pointer;"  @click="downloadShapefile" title="download shapefile">
            
          </td>
        </tr>
      </tbody>
    </table>
  </div>

    </div>

   


   </div>
  
</template>

<script setup>
import Navbar from "../components/Navbar.vue"
import ResponsiveNav from "../components/ResponsiveNav.vue";
import { UserCircle } from "@vicons/fa";
// import Download  from "@vicons/fa/Download";
import  DownloadOutline  from "@vicons/ionicons5/DownloadOutline";
import * as turf from '@turf/helpers'
import center from '@turf/center'
import booleanPointInPolygon from '@turf/boolean-point-in-polygon'
import shpwrite from '@mapbox/shp-write'
// import  shpwrite from 'shp-write'
import { featureCollection } from '@turf/helpers';    
// import { create } from 'shp-write';
import JSZip from 'jszip';
import { ref } from 'vue'

import { useCounterStore} from '../stores/counter'

const storeUserSelections = useCounterStore();

//access login cred from store

let login_cred = { "mail": { "name": storeUserSelections.user_email }, "passwd": { "name": storeUserSelections.user_password } }
console.log(login_cred)
console.log(storeUserSelections.user_details)

let users = storeUserSelections.user_details
let user_geofeatures = storeUserSelections.user_features



    
  
const downloadShapefile = () => {

  // console.log('download shp')
//   const featureCollection1 = {  
//   "type": "FeatureCollection",
//   "features": [
//     {
//       "type": "Feature",
//       "properties": {},
//       "geometry": {
//         "coordinates": [
//           36.5152457883251,
//           -0.4912572719726569
//         ],
//         "type": "Point"
//       }
//     },
//     {
//       "type": "Feature",
//       "properties": {},
//       "geometry": {
//         "coordinates": [
//           37.68758878690309,
//           -0.3224056022858832
//         ],
//         "type": "Point"
//       }
//     },
//     {
//       "type": "Feature",
//       "properties": {},
//       "geometry": {
//         "coordinates": [
//           38.69107579803108,
//           -0.8144744636909564
//         ],
//         "type": "Point"
//       }
//     },
//     {
//       "type": "Feature",
//       "properties": {},
//       "geometry": {
//         "coordinates": [
//           37.383648009493214,
//           -1.4463520978251978
//         ],
//         "type": "Point"
//       }
//     },
//     {
//       "type": "Feature",
//       "properties": {},
//       "geometry": {
//         "coordinates": [
//           38.64765568697254,
//           -2.174476524260484
//         ],
//         "type": "Point"
//       }
//     },
//     {
//       "type": "Feature",
//       "properties": {},
//       "geometry": {
//         "coordinates": [
//           37.25338767631911,
//           0.4205552646543822
//         ],
//         "type": "Point"
//       }
//     },
//     {
//       "type": "Feature",
//       "properties": {},
//       "geometry": {
//         "coordinates": [
//           39.03361222971523,
//           -1.0170756614406287
//         ],
//         "type": "Point"
//       }
//     }
//   ]

// }

// // const turfFeatureCollection = featureCollection(featureCollection1.features);

// // // Create shapefile
// const shapefileContent = shpwrite.zip(featureCollection1) //create(turfFeatureCollection);

const options = {
  // folder: "C:\Users\Locate04\Downloads",
  filename: "my_zip_folder",
  outputType: "blob",
  compression: "DEFLATE",
  types: {
    point: "mypoints",
    // polygon: "mypolygons",
    // polyline: "mylines",
  },
};

var geojson_features = storeUserSelections.user_features

// Convert the GeoJSON Feature Collection to a Turf FeatureCollection
const geoJsonToShp =  {
    type: "FeatureCollection",
    // features: [
    //   {
    //     type: "Feature",
    //     geometry: {
    //       type: "Point",
    //       coordinates:  [
    //       36.896170506729135,
    //       -0.4485754857087869
    //     ],
    //     },
    //     properties: {
    //       name: "Foo",
    //     },
    //   },
    //   {
    //     type: "Feature",
    //     geometry: {
    //       type: "Point",
    //       coordinates: [
    //       38.58635451163451,
    //       -1.4596433562075504
    //     ],
    //     },
    //     properties: {
    //       name: "Bar",
    //     },
    //   },
    //   {
    //     type: "Feature",
    //     geometry: {
    //       type: "Point",
    //       coordinates:  [
    //       38.00772281794906,
    //       1.0658909765227094
    //     ],
    //     },
    //     properties: {
    //       name: "another",
    //     },
    //   },
    // ],
    features: geojson_features
  }
const turfFeatureCollection = featureCollection(geoJsonToShp.features);


// Convert the GeoJSON to shapefile components
const features = turfFeatureCollection.features.map((feature) => ({
  type: 'Feature',
  geometry: feature.geometry,
  properties: feature.properties || {},
}));

const shapes = {
  type: 'FeatureCollection',
  features,
};

const shapefileContent = shpwrite.zip(shapes);
console.log(shapefileContent)
shpwrite.download(shapes, options)


  
}


</script>

<style scoped>
.management{
  overflow: hidden !important;
  font-family: sans-serif;
}
.table{
  width: 80vw;
}

table, th, td {
border: 1px solid #ddd;
  text-align: left;
  padding: 8px;
  margin-top: 40px;
}


th{
font-weight: bolder;
}

tr:nth-child(even) {
background-color: #ddd;
}
table {
  border-collapse: separate;
  text-indent: initial;
  border-spacing: 2px;
}


</style>