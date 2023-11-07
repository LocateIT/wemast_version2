import { defineStore } from 'pinia'
import axios from 'axios'

export const useAdvancedStore = defineStore({
    id: "advanced_filter",
    state: () => ({
        country_list: [],
        country_placeholder: 'South Africa',
        selected_country:'',
        wetland_list: [],
        wetland_placeholder: '',
      selected_wetland:'',
      platform_list:['SENTINEL', 'LANDSAT'],
      platform_placeholder: '',
      selected_platform:'',
      current_geojson:{},
      current_wetland_geojson:{},
      bounding_box:[]



    }),
    actions: {
        fetchCountriesList(){
            this.country_list = ['South Africa','Tanzania', 'Zimbabwe', 'Malawi', 'Angola', 'Botswana', 'Mozambique', 'Namibia','Zambia']
        },
        fetchWetlandsList(){
            this.wetland_list = ['Nyslvlei','Modemolle', 'Intunjambili','Driefontein','Lake Ngami', 'Barotse','Morapeng','Makuleke']
        },

        showSelectedCountry(option) {
            this.country_placeholder = option;
         
            this.selected_country =  option
            console.log(this.selected_country , 'changed selected country')

            var data = this.selected_country
            if(data) {
              const sendGetRequest = async () => {
                try {
                  // this.loading = true;
                    const resp = await  axios.get(`http://66.42.65.87:8080/geoserver/WEMAST/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=WEMAST%3AWemast_Countries&maxFeatures=50&outputFormat=application%2Fjson&CQL_FILTER=Name=%27${data}%27`
                    );
                    
      
                    this.current_geojson = resp.data
                    
                    console.log(resp.data.features, 'advanced countries geojson');
                    // var object = resp.data.features.map( (item) => {
                    //   console.log(item, 'object items')
                    //   return item
                    // })
                    
                    // this.loading = false;
                   
                    return resp.data
                } catch (err) {
                    // Handle Error Here
                    console.error('an error occured'+err);
                }
                // finally  { if (this.current_geojson)this.loading = false
              
                // }
            };
      
            sendGetRequest();
      
            }
      
          },
          showSelectedWetland(option) {
            this.wetland_placeholder = option;
         
            this.selected_wetland =  option
            console.log(this.selected_wetland , 'changed selected wetland')

            //load individual wetlands
            var data = this.selected_wetland
            if(data) {
              const sendGetRequest = async () => {
                try {
                  // this.loading = true;
                    const resp = await  axios.get(`http://66.42.65.87:8080/geoserver/wetlands/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=wetlands%3Afinal_wetland_wemast&outputFormat=application%2Fjson&CQL_FILTER=WETLANDS=%27${data}%27`
                    );
                    
      
                    this.current_geojson = resp.data
                    
                    console.log(resp.data.features[0].bbox, 'advanced bbox');
                    this.bounding_box = resp.data.features[0].bbox
                    // var object = resp.data.features.map( (item) => {
                    //   console.log(item, 'object items')
                    //   return item
                    // })
                    
                    // this.loading = false;
                   
                    return resp.data
                } catch (err) {
                    // Handle Error Here
                    console.error('an error occured'+err);
                }
                // finally  { if (this.current_geojson)this.loading = false
              
                // }
            };
      
            sendGetRequest();
      
            }
          },
          showSelectedPlatform(option) {
            this.platform_placeholder = option;
         
            this.selected_platform=  option
            console.log(this.selected_platform , 'changed selected wetland')
          },
      
      
      


    },
    getters: {
      getSelectedCountry:(state) => state.selected_country,
      getSelectedRegion:(state) => state.current_geojson,
      getSelectedWetland:(state) => state.selected_wetland,
      getSelectedWetlandGeojson:(state)=> state.current_wetland_geojson,
      getSelectedBoundingBox:(state) => state.bounding_box,

    }
})