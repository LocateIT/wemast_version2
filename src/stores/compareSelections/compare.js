import { defineStore } from 'pinia'
import axios from 'axios'



export const useCompareStore = defineStore({
  id: 'compare',
    state: () => ({
         
      indicator_list: [], 
      sub_indicator_list:[],
      year_list:[],
      region_placeholder:'Cuvelai',
      selected_basin:'',
      indicator_placeholder:'Exposure',
      selected_indicator:'',

      sub_indicator_placeholder:'Land Cover',
      selected_sub_indicator:'',

      year_placeholder:'2019',
      selected_year:'',

      language_placeholder: 'English',
      language_list:[],
      season_list:[],
      season_placeholder: 'Wet',
      selected_season: '',
      parameter_list:[],
      parameter_placeholder: '',
      selected_parameter:'',
      satellite_list:[],
      satellite_placeholder:'',
      selected_satellite:'',

    }),


    actions: {
      fetchIndicatorList(){
        this.indicator_list = ['Exposure', 'Sensitivity','Resiliance']
      },
      fetchSubIndicatorList(){
        
        if(this.selected_indicator === 'Exposure'){
          this.sub_indicator_list = ['Land Cover', 'Vegetation Cover', "Wetland Inventory"]
        }
        if(this.selected_indicator === 'Sensitivity'){
          this.sub_indicator_list = ['Water Quality', 'Soil Moisure Index']
        }
        if(this.selected_indicator === 'Resiliance' ){
          this.sub_indicator_list = ['Burnt Area MODIS', 'Burnt Area FIRMS', 'Precipitation Index', 'Undulation']
        }
      },
      fetchYearList(){

        if(this.selected_sub_indicator === 'Water Quality' && this.selected_parameter === 'Sus Sediments'){
          this.year_list = ["2000","2001","2002","2003","2004","2005","2006",
          "2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017",
            '2018','2019','2020', '2021', "2022"]
        }
       
        if(this.selected_sub_indicator === 'Precipitation Index' 
         || this.selected_sub_indicator === 'Soil Moisure Index'){
          this.year_list = ["2000","2001","2002","2003","2004","2005","2006",
          "2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017",
            '2018','2019','2020', '2021', "2022"]
  
        }
        if(this.selected_sub_indicator === 'Land Cover') {
          this.year_list = ["1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006",
        "2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017",
          '2018','2019','2020', '2021', "2022"]
        }
        
        if(this.selected_sub_indicator === 'Burnt Area MODIS'
        || this.selected_sub_indicator === 'Burnt Area FIRMS') {
          this.year_list = ["2000","2001","2002","2003","2004","2005","2006",
        "2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017",
          '2018']
        }
        
        
        
  
        if( this.selected_sub_indicator === 'Wetland Inventory' || this.selected_sub_indicator === 'Water Quality') { //&& this.selected_parameter === 'Wetland Extent'
          this.year_list = ["2000","2001","2002","2003","2004","2005","2006",
          "2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017",
            '2018','2019','2020', '2021', "2022"]
          
        }
        if(this.selected_sub_indicator === 'Vegetation Cover'){ // && this.selected_satellite === 'LANDSAT' I will add this when i add satellite selection
          this.year_list = ["2000","2001","2002","2003","2004","2005","2006",
          "2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017",
            '2018','2019','2020', '2021', "2022"]
  
        }
        if( this.selected_satellite === 'LANDSAT'){
          this.year_list = ["2000","2001","2002","2003","2004","2005","2006",
          "2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017",
            '2018','2019','2020', '2021', "2022"]
        }
        if( this.selected_satellite === 'SENTINEL') {
          this.year_list = ["2016","2017", '2018','2019','2020', '2021', "2022"]
        }
       
      },
      fetchSeasonsList(){
        
        if(this.selected_satellite === 'SENTINEL'){
          this.season_list = ['DRY']
        }else{
          this.season_list = ['Wet', 'DRY']
        }
      },
      fetchParameterList(){
      
        if(this.selected_sub_indicator === 'Wetland Inventory'){
          this.parameter_list = ['Wetland Extent', 'Wetland Status']
  
        }
        if(this.selected_sub_indicator === 'Water Quality'){
          this.parameter_list = ['Turbidity', 'Sus Sediments']
        }
  
      },
      fetchSatelliteList(){
        this.satellite_list = ['SENTINEL', 'LANDSAT']
  
      },


      showSelectedIndicator(option) {
        this.indicator_placeholder = option;
        console.log(option, 'selected indicator ')
  
        this.selected_indicator =  option
        console.log(this.selected_indicator , 'changed selected indicator')
      },
  
      showSelectedSubIndicator(option) {
        this.sub_indicator_placeholder = option;
        console.log(option, 'selected sub-indicator ')
  
        this.selected_sub_indicator =  option
        console.log(this.selected_sub_indicator , 'changed selected sub-indicator')
      },
      showSelectedYear(option) {
        this.year_placeholder = option;
        console.log(option, 'selected year ')
  
        this.selected_year=  option
        console.log(this.selected_year , 'changed selected year')
      },
      showSelectedSeason(option) {
        this.season_placeholder = option;
        console.log(option, 'selected season ')
  
        this.selected_season=  option
        console.log(this.selected_season , 'changed selected season')
      },
      showSelectedParameter(option) {
        this.parameter_placeholder = option;
        this.selected_parameter=  option
        console.log(this.selected_parameter , 'changed selected satellite')
      },
      showSelectedSatellite(option) {
        this.satellite_placeholder = option;
        this.selected_satellite=  option
        console.log(this.selected_satellite , 'changed selected satellite')
      },
  

    },


    getters: {
    getSelectedIndcator: (state) => state.selected_indicator,
    getSelectedSubIndcator: (state) => state.selected_sub_indicator,
    getSelectedYear: (state) => state.selected_year,
    getSelectedSeason: (state) => state.selected_season,
    getSelectedParameter: (state) => state.selected_parameter,
    getSelectedSatellite: (state) => state.selected_satellite
    }
})
