<template>
  <div class="about">
    <h1>3D MapboxGL</h1>
    <button @click="show_random">show random</button>

    <div v-if="random_container" class="random">
      <random />
    </div>

    <div id="map" style="width: 70vw; height: 60vh;">

    </div>


    
  </div>
</template>

<script setup>

import { ref } from 'vue'
import random from '../components/random.vue'
import "leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "mapbox-gl"
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js"
// import { OSMBuildings } from "osmbuildings/dist/OSMBuildings-Leaflet.js"
// import OSMBuildings from "https://cdn.osmbuildings.org/4.0.0/OSMBuildings.js"


let random_container = ref(false)
const show_random = () => {
  random_container.value = true





  mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXNiYXJ0IiwiYSI6ImNrZTFtb3Z2bDAweTMyem1zcmthMGY0ejQifQ.3PzoCgSiG-1-sV1qJvO9Og';
    const map = new mapboxgl.Map({
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-74.0066, 40.7135],
        zoom: 15.5,
        pitch: 45,
        bearing: -17.6,
        container: 'map',
        antialias: true
    });

    map.on('style.load', () => {
        // Insert the layer beneath any symbol layer.
        const layers = map.getStyle().layers;
        const labelLayerId = layers.find(
            (layer) => layer.type === 'symbol' && layer.layout['text-field']
        ).id;

        // The 'building' layer in the Mapbox Streets
        // vector tileset contains building height data
        // from OpenStreetMap.
        map.addLayer(
            {
                'id': 'add-3d-buildings',
                'source': 'composite',
                'source-layer': 'building',
                'filter': ['==', 'extrude', 'true'],
                'type': 'fill-extrusion',
                'minzoom': 15,
                'paint': {
                    'fill-extrusion-color': '#aaa',

                    // Use an 'interpolate' expression to
                    // add a smooth transition effect to
                    // the buildings as the user zooms in.
                    'fill-extrusion-height': [
                        'interpolate',
                        ['linear'],
                        ['zoom'],
                        15,
                        0,
                        15.05,
                        ['get', 'height']
                    ],
                    'fill-extrusion-base': [
                        'interpolate',
                        ['linear'],
                        ['zoom'],
                        15,
                        0,
                        15.05,
                        ['get', 'min_height']
                    ],
                    'fill-extrusion-opacity': 0.6
                }
            },
            labelLayerId
        );
    });


  
}

</script>

<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
