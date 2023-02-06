import { defineStore } from 'pinia'
import axios from 'axios'

export const useAdvancedStore = defineStore({
    id: "advanced_filter",
    state: () => ({
        country_list: [],
        country_placeholder: 'South Africa',
        selected_country:'',
        wetland_list: [],
        wetland_placeholder: 'Modemolle',
      selected_wetland:'',
      platform_list:[],
      platform_placeholder: '',
      selected_platform:''



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
          },
          showSelectedWetland(option) {
            this.wetland_placeholder = option;
         
            this.selected_wetland =  option
            console.log(this.selected_wetland , 'changed selected wetland')
          },
          showSelectedPlatform(option) {
            this.platform_placeholder = option;
         
            this.selected_platform=  option
            console.log(this.selected_platform , 'changed selected wetland')
          },
      
      
      


    },
    getters: {

    }
})