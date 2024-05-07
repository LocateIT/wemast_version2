// composable.js
import { ref } from 'vue';
import "leaflet";
import L from "leaflet";
import "leaflet.wms";

export default function useAddLulcLayer() {
  const addLulcLayerComposable = (sub_indicator,  baseurl, year, basin, wetland_basin, wetland_sld, map, wmsLayer) => {
   
   
    // if (current_geojson.value) map.removeLayer(current_geojson.value);
    if (wmsLayer.value) map.removeLayer(wmsLayer.value);
     if (sub_indicator === "Land Cover") {
      map.createPane("pane400").style.zIndex = 200;

      wmsLayer.value = L.tileLayer.wms(`${baseurl}:8080/geoserver/LULC/wms?`, {
        pane: "pane400",
        layers: `LULC:${year}`,
        crs: L.CRS.EPSG4326,
        styles:
            basin === "Cuvelai"
            ? "cuvelai_lulc"
            : basin === "Zambezi"
            ? "zambezi_lulc"
            : basin === "Limpopo"
            ? "limpopo_lulc"
            : basin === "Okavango"
            ? "okavango_lulc"
            : wetland_basin
            ? wetland_sld
            : wetland_sld,
        format: "image/png",
        transparent: true,
        opacity: 1.0,
      });

      wmsLayer.value.addTo(map);

      // You may need to return some values or methods here if needed
    }
  };

  return { addLulcLayerComposable };
}
