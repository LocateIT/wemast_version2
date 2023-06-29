import { defineStore } from 'pinia'
// import { usePinia } from 'pinia';
import axios from 'axios'
import { defineComponent } from 'vue'

import { useI18n } from 'vue-i18n'

import i18n from '../i18n'



// export default defineComponent({
//   setup() {
//     const i18n = useI18n();
//     return { i18n }
//   }
// })

// export const { t } = useI18n()
export const useCounterStore = defineStore({
  id: 'counter',
  // setup(){
  //   const { t } = useI18n();
  //   return {
  //    $t: { t }
  //   }
  // },
  
  state: () => ({
    counter: 0,
    placeholder: 'select region',
    countries: [],
    selected_region: '',
    current_geojson:{},
    cause_placeholder: 'select cause',
    causes:[],
    selected_cause:'',
    current_point_geojson:{},
      //chart
      testData:{
        color_info_fromServer:{},
          names_candidates:[],
          chartDataFromServer:[],
          chatData_restructure: {
             labels:[],
             datasets:[]

          },

          options: {
          
           legend: {
               display: true,
               position: 'right',
               margin: 20,
               labels:{
                  fontColor: '#000',
                  fontWeight: 'bolder',
                  padding: 15,
                  usePointStyle: true,
                  pointStyle: 'circle'
               }
            },
            
            responsive: true,
            maintainAspectRatio: false,
          
         }
      },

      barchart_options: {
        scales: {
           xAxes: [{
            //   stacked: true,
              
              
              ticks: {
                 beginAtZero: true,
              
                 fontColor: '#000',
              },
              gridLines: {
                 display: false,
                  color: '#9b9797'
              }
           }],
           yAxes: [{
            //   stacked: true,
              
                   barPercentage: 0.7,
                 
               ticks: {
                  beginAtZero: true,
                   
                 // fontColor: '#2FA036',
                 fontSize: 10,
              },
              gridLines: {
                 display: true,
                 color: '#9b9797'
                 
              }
           }]
        },
 
       legend: {
           display: false,
       
        },
        
        responsive: true,
        maintainAspectRatio: false,
      
     },

     stats_array: [ 
      {
        labels: [],
        data_figures: []
      }
     
     ],

     //lulc chart
     lulcChartData: {
      labels: [],
      datasets: [
        {
          data: [],

          backgroundColor: [],
          barThickness: 40,
       
       
        },
      ],
    },

    
     
      //spinner loader
      loading:false,
      kwale_geojson:{},
      kwale_raster: null,
      layers:[],
      selected_layer:'',
      selected_raster:null,
      geoserver_regions:[],
      selected_geoserver_region: '',
      current_geoserver_geojson:{},
      crs:"",
      
      indicator_list: [], 
      sub_indicator_list:[],
      year_list:[],
      region_placeholder:'',
      selected_basin:'',
      indicator_placeholder:'',
      selected_indicator:'',

      sub_indicator_placeholder:' ',
      selected_sub_indicator:'',

      year_placeholder:'',
      selected_year:'',

      language_placeholder: 'English',
      language_list:[],
      selected_language: '',
      season_list:[],
      season_placeholder: '',
      selected_season: '',
      parameter_list:[],
      parameter_placeholder: '',
      selected_parameter:'',
      satellite_list:[],
      satellite_placeholder:'',
      selected_satellite:'',
      custom_geojson: {
        label: 'AOI',
        custom: true,
        geojson: {}
      },


      lineChartData : {
      labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
      datasets: [
        {
          // label: 'NDVI Time Series', cuvelai
          data: [],
          fill: false,
          borderColor: '#1eb301',
          backgroundColor: '#ffbb33',
          borderWidth: 3
          
       
       
        },
      ],
    },


      //visibility for custom selects
      visible_region: null,
      visible_indicator: null,
      visible_sub_indicator: null,
      visible_year: null,
      visible_parameter: null,
      region_id:'',
      lulc_desc: 'The LULC is an ESA product. The integration of the biophysical and human factors plays a leading role in causing land cover changes and is used to explain the dynamics of land usage and trend that occur within an ecosystem.',
      veg_cover_desc: 'Product derived from indexing the Near Infrared (NIR) band and the Red band from satellite image. Used to assess the difference in seasonal vegetation characteristics',
      wetland_inventory_desc: 'NDWI is a satellite-derived product',
      status_desc:'The WWPI uses a proxy data of seasonal vegetation (NDVI) to display the dry',
      default_desc: 'STFU',
      prec_desc: 'Standardized Precipitation Index ',
      extent_summary: 'NDWI is a satellite-derived product',
      undulation_summary: 'Flood mapping is computed through the analysis of the Topographical Wetness Index (TWI). The Index categorises the areas that are susceptible to flooding (severe) to the areas that are less susceptible to flooding (less sensitive). Since the data used i.e. SRTM (DEM) does not change frequently',
      sus_summary: 'NSSDI is a satellite-derived product',
      prec_summary: 'SPI is the measure of standard deviation of the received rainfall from the long term observed rainfall. It is used to characterize the meteorological drought',
      turbidity_summary: 'NDTI is a satellite-derived product',
      burnt_summary: 'Acquired from the normalization of the NBR band, an index derived from Indexing SWIR and NIR bands from satellite imagery.  Used in assessing Fire intensity; energy released from organic matter and the burn severity as the degree an area is altered by fire.',
      status_theme: 'WWPI',
      lulc_theme: 'LULC',
      veg_cover_theme: 'NDVI',
      wetland_inventory_theme: 'NDWI',
      prec_theme: 'SPI',
      western_lon: '',
      northern_lat: '',
      eastern_lon: '',
      southern_lat: '',
      resolution: '',
      //multibands
      band_2013: null,
      band_2014: null,
      band_2015: null,
      band_2016: null,
      band_2017: null,
      band_2018: null,
      band_2019: null,
      band_2020: null,
      band_2021: null,
      band_2022: null,
      //usermanagement
      username: '',
      email: '',
      password: '',
      confirm_password: '',
      latlon:null,
  }),
 
  actions: {
    increment() {
      this.counter++
    },

    fetchCountriesList() {
      this.countries =  ["Limpopo","Cuvelai","Zambezi", "Okavango"]
      return this.countries.sort()

    },
    fetchIndicatorList(){
     
      // const pinia = defineStore()
      // pinia.$app.use(i18n)
     
      console.log(i18n, 'usei18n')
      this.indicator_list = [i18n.global.t('indicators.bvi_index'),i18n.global.t('indicators.exposure'), 'Sensitivity','Resiliance']
      // this.indicator_list = ['Basin Vulnerability Index','Exposure', 'Sensitivity','Resiliance']
      return this.indicator_list.sort()
    },
    fetchSubIndicatorList(){
      
      if(this.selected_indicator === 'Exposure'){
        this.sub_indicator_list = ['Land Cover', 'Vegetation Cover', "Wetland Inventory"]
      }
      if(this.selected_indicator === 'Sensitivity'){
        this.sub_indicator_list = ['Water Quality', 'Soil Moisure Index']
      }
      if(this.selected_indicator === 'Resiliance' ){
        this.sub_indicator_list = [ 'Burnt Area FIRMS', 'Precipitation Index', 'Undulation']
      }
    },
    fetchYearList(){
      if(this.selected_indicator === 'Basin Vulnerability Index' ) {
        this.year_list = ["2000", "2005", "2010", "2015", "2022"]
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
      
      
      

      if( this.selected_sub_indicator === 'Wetland Inventory' && this.selected_parameter === 'Wetland Extent'
       ||this.selected_sub_indicator === 'Water Quality' && this.selected_parameter === 'Sus Sediments'
       ||this.selected_sub_indicator === 'Water Quality' && this.selected_parameter === 'Turbidity' ) {
        this.year_list = ["2000","2001","2002","2003","2004","2005","2006",
        "2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017",
          '2018','2019','2020', '2021', "2022"]
        
      }
      if(this.selected_sub_indicator === 'Vegetation Cover' && this.selected_satellite === 'LANDSAT'){
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
      
      
        this.season_list = ['WET', 'DRY']
      
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
    fetchLanguagesList(){
      this.language_list = ['English', 'French', 'Portuguese']

    },
    showSelectedLanguage(option){
      this.language_placeholder = option;
      // console.log(option, 'selected language ')
      this.selected_language=  option
      // console.log(this.selected_language , 'changed selected language')
    },

   
    showSelectedCountry(option){
     this.region_placeholder = option;
				console.log(option, 'selected basin ')
      // var selected_country = $event.target.value
      // console.log(selected_country, 'selected country')
      // this.countries =  selected_country
      this.selected_basin =  option
      console.log(this.selected_basin , 'changed selected basin')
      // // return selected_country
      var data = this.selected_basin
      // this.showSelectedYear()
     
      // var year = this.selected_year
      // console.log(data, 'stats basin')
      // console.log(year, 'stats year')
      this.getstats()

      this.selected_basin === 'Cuvelai' ? this.lineChartData.datasets[0].data =
       [-0.01447658333927393, 0.04884440824389458, 0.11220075935125351, -0.004881010390818119, 0.02153138257563114, 0.02472458779811859, 0.01138385757803917]
          : this.selected_basin === 'Limpopo' ? this.lineChartData.datasets[0].data = [0.2372409850358963, 0.30510950088500977, 0.3155345320701599, 0.2692449986934662, 0.32692646980285645, 0.37108713388442993, 0.24783077836036682]
          :this.selected_basin === 'Okavango' ? this.lineChartData.datasets[0].data = [-0.5741702721432697, -0.30794540324063047, -0.5810454036349894, -0.518540560396056, -0.14411158922629183, 0.8932529695404121, -0.31515224199000985, 0.16157562486632776]
          :this.lineChartData.datasets[0].data = [-0.599117890703655, -0.19328715689221673, -0.19734816369571978, -0.5869670754638522, -0.5477375598878034, 0.9004630741378122, -0.49087602572904104, -0.4299607755230201] 

 
     
//using async await

      if(data) {
        const sendGetRequest = async () => {
          try {
            this.loading = true;
              const resp = await  axios.get(`http://66.42.65.87:8080/geoserver/aoi/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=aoi%3A${data}&maxFeatures=50&outputFormat=application%2Fjson`
              );
              

              this.current_geojson = resp.data
              
              console.log(resp.data.features, 'geoserver geojson');
              var object = resp.data.features.map( (item) => {
                console.log(item, 'object items')
                return item
              })
              
              this.loading = false;
             
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

      this.getstats()
    },
    showSelectedSeason(option) {
      this.season_placeholder = option;
      console.log(option, 'selected season ')

      this.selected_season=  option
      console.log(this.selected_season , 'changed selected season')

      this.getstats()

 
      
    },
    showSelectedParameter(option) {
      this.parameter_placeholder = option;
      this.selected_parameter=  option
      console.log(this.selected_parameter , 'changed selected parameter')
    },
    showSelectedSatellite(option) {
      this.satellite_placeholder = option;
      this.selected_satellite=  option
      console.log(this.selected_satellite , 'changed selected satellite')
      this.getstats()
    },

    showUsernameInput() {
      this.username = option;
     
      console.log(this.username , 'changed username')
      
    },


    getDefaultStats () {
      //   if(this.selected_sub_indicator === 'Wetland Inventory' && this.selected_parameter === 'Wetland Extent'
      //   || (this.selected_sub_indicator === 'Water Quality' && this.selected_parameter === 'Sus Sediments')
      //  || (this.selected_sub_indicator === 'Water Quality' && this.selected_parameter === 'Turbidity')) {

      const getStatistics = async () => {
        try {
          
          // console.log(this.selected_basin, 'BASIN FOR STATISTICS')
       var basin = this.selected_basin
      //  console.log(basin, 'ddaaaaaaaaattttttttttttttaaaaaaaaaaa')


       var year = this.selected_year
      //  console.log(year, 'year FOR SSSSTAAAAAAAAAAAATTTTTTTTTTS')
    
  
          const response = await axios.get('http://66.42.65.87:8080/geoserver/wfs?request=GetFeature&service=WFS&version=1.0.0&typeName=LULC_STATS:2016&outputFormat=application/json&CQL_FILTER=Name=%27Zambezi%27'
          );
          console.log(response.data.features[0].properties,'stats response')
          var obj = response.data.features[0].properties
          
          const newObj = Object.fromEntries(Object.entries(obj).filter(([key]) => !key.includes('MAJ_BAS') && !key.includes('Basin_Name') && !key.includes('Name') && !key.includes('0')))
          console.log(newObj, 'NEW OBJECT')
  
          var labels = Object.keys(newObj)
          console.log(labels, 'stats labels')
          this.lulcChartData.labels = labels
         
        
          var figures = Object.values(newObj)
          console.log(figures, 'stats figures')
          // var converted = figures.map( (item) => item/100)
          // console.log(converted, 'converted figres')
          this.lulcChartData.datasets[0].data = figures
          this.lulcChartData.datasets[0].backgroundColor = [
            "#a8a800",
            "#ccc",
            "#bd6860",
            "green",
            "#fff1d2",
            "#55ff00",
            '#4dd7ff',
            '#d2efff'
          ]


          //for new array
          this.stats_array.labels = labels
          this.stats_array.data_figures = figures


          //capture bbox
          var bbox = response.data.features[0].bbox
          console.log(bbox, 'BOUNDING BOX')
           this.western_lon = bbox[0]
           this.northern_lat = bbox[1]
           this.eastern_lon = bbox[2]
           this.southern_lat = bbox[3]

           this.resolution = '300'
         
       
          
        } catch (error) {
          console.error('an error occured'+error);
          
        }
      }
      getStatistics()
       
      
     //  }

    },
   
  
    getstats() {
      const getStatistics = async () => {

      
     
        if(this.selected_sub_indicator === 'Land Cover') {
          try {
          
            // console.log(this.selected_basin, 'BASIN FOR STATISTICS')
         var basin = this.selected_basin
        //  console.log(basin, 'ddaaaaaaaaattttttttttttttaaaaaaaaaaa')
  
  
         var year = this.selected_year
        //  console.log(year, 'year FOR SSSSTAAAAAAAAAAAATTTTTTTTTTS')
      
    
            const response = await axios.get('http://66.42.65.87:8080/geoserver/wfs?request=GetFeature&service=WFS&version=1.0.0&typeName=LULC_STATS:'+year+'&outputFormat=application/json&CQL_FILTER=Name=%27'+basin+'%27'
            );
            console.log(response.data.features[0].properties,'stats response')
            var obj = response.data.features[0].properties
            
            const newObj = Object.fromEntries(Object.entries(obj).filter(([key]) => !key.includes('MAJ_BAS') && !key.includes('Basin_Name') && !key.includes('Name') && !key.includes('0')))
            console.log(newObj, 'NEW OBJECT')
    
            var labels = Object.keys(newObj)
            console.log(labels, 'stats labels')
            this.lulcChartData.labels = labels
           
          
            var figures = Object.values(newObj)
            console.log(figures, 'stats figures')
            // var converted = figures.map( (item) => item/100)
            // console.log(converted, 'converted figres')
            this.lulcChartData.datasets[0].data = figures
            this.lulcChartData.datasets[0].backgroundColor = [
              "#a8a800",
              "#ccc",
              "#bd6860",
              "green",
              "#fff1d2",
              "#55ff00",
              '#4dd7ff',
              '#d2efff'
            ]


            //for new array
            this.stats_array.labels = labels
            this.stats_array.data_figures = figures


            //capture bbox
            var bbox = response.data.features[0].bbox
            console.log(bbox, 'BOUNDING BOX')
             this.western_lon = bbox[0]
             this.northern_lat = bbox[1]
             this.eastern_lon = bbox[2]
             this.southern_lat = bbox[3]

             this.resolution = '300'
           
         
            
          } catch (error) {
            console.error('an error occured'+error);
            
          }
        
        }



        if(this.selected_sub_indicator === 'Precipitation Index' && this.selected_season === 'DRY') {
          try {
          
            // console.log(this.selected_basin, 'BASIN FOR STATISTICS')
         var basin = this.selected_basin
        //  console.log(basin, 'ddaaaaaaaaattttttttttttttaaaaaaaaaaa')
  
  
         var year = this.selected_year
        //  console.log(year, 'year FOR SSSSTAAAAAAAAAAAATTTTTTTTTTS')
        var season = this.selected_season

        // console.log(season, 'season for stattttttttsssssss')
      
    
            const response = await axios.get(`http://66.42.65.87:8080/geoserver/SPI_MIN/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=SPI_MIN%3A${year}.shp&maxFeatures=50&outputFormat=application%2Fjson&CQL_FILTER=name=%27${basin}%27`
            );
            console.log(response.data.features[0].properties,'stats response')
            var obj = response.data.features[0].properties
            
            const newObj = Object.fromEntries(Object.entries(obj).filter(([key]) => !key.includes('id') && !key.includes('geom') && !key.includes('name') && !key.includes('0')&& !key.includes('count')))
            console.log(newObj, 'NEW OBJECT')
    
            var labels = Object.keys(newObj)
            console.log(labels, 'stats labels')
            this.lulcChartData.labels = labels
           
          
            var figures = Object.values(newObj)
            console.log(figures, 'stats figures')
            // var converted = figures.map( (item) => item/100)
            // console.log(converted, 'converted figres')
            this.lulcChartData.datasets[0].data = figures
            this.lulcChartData.datasets[0].backgroundColor = ['#6aff4e', '#13a147',  '#93be89']


             //for new array
             this.stats_array.labels = labels
             this.stats_array.data_figures = figures

             //capture bbox
             var bbox = response.data.features[0].bbox
             console.log(bbox, 'BOUNDING BOX')
              this.western_lon = bbox[0]
              this.northern_lat = bbox[1]
              this.eastern_lon = bbox[2]
              this.southern_lat = bbox[3]
              this.resolution = '300'
            
         
            
          } catch (error) {
            console.error('an error occured'+error);
            
          }
        
        }
        if(this.selected_sub_indicator === 'Precipitation Index' && this.selected_season === 'WET') {
          try {
          
            // console.log(this.selected_basin, 'BASIN FOR STATISTICS')
         var basin = this.selected_basin
        //  console.log(basin, 'ddaaaaaaaaattttttttttttttaaaaaaaaaaa')
  
  
         var year = this.selected_year
        //  console.log(year, 'year FOR SSSSTAAAAAAAAAAAATTTTTTTTTTS')
        var season = this.selected_season

        // console.log(season, 'season for stattttttttsssssss')
      
    
            const response = await axios.get(`http://66.42.65.87:8080/geoserver/SPI_MAX/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=SPI_MAX%3A${year}.shp&maxFeatures=50&outputFormat=application%2Fjson&CQL_FILTER=name=%27${basin}%27`
            );
            console.log(response.data.features[0].properties,'stats response')
            var obj = response.data.features[0].properties
            
            const newObj = Object.fromEntries(Object.entries(obj).filter(([key]) => !key.includes('id') && !key.includes('geom') && !key.includes('name') && !key.includes('0')&& !key.includes('count')))
            console.log(newObj, 'NEW OBJECT')
    
            var labels = Object.keys(newObj)
            console.log(labels, 'stats labels')
            this.lulcChartData.labels = labels
           
          
            var figures = Object.values(newObj)
            console.log(figures, 'stats figures')
            // var converted = figures.map( (item) => item/100)
            // console.log(converted, 'converted figres')
            this.lulcChartData.datasets[0].data = figures
            this.lulcChartData.datasets[0].backgroundColor = ['#6aff4e', '#13a147',  '#93be89']


             //for new array
             this.stats_array.labels = labels
             this.stats_array.data_figures = figures

             //capture bbox
             var bbox = response.data.features[0].bbox
             console.log(bbox, 'BOUNDING BOX')
              this.western_lon = bbox[0]
              this.northern_lat = bbox[1]
              this.eastern_lon = bbox[2]
              this.southern_lat = bbox[3]
              this.resolution = '300'
            
         
            
          } catch (error) {
            console.error('an error occured'+error);
            
          }
        
        }



        if(this.selected_sub_indicator === 'Wetland Inventory' && this.selected_parameter === 'Wetland Extent'
         || (this.selected_sub_indicator === 'Water Quality' && this.selected_parameter === 'Sus Sediments')
        || (this.selected_sub_indicator === 'Water Quality' && this.selected_parameter === 'Turbidity')) {
          try {
          
            // console.log(this.selected_basin, 'BASIN FOR STATISTICS')
         var basin = this.selected_basin
        //  console.log(basin, 'ddaaaaaaaaattttttttttttttaaaaaaaaaaa')
  
  
         var year = this.selected_year
        //  console.log(year, 'year FOR SSSSTAAAAAAAAAAAATTTTTTTTTTS')
     
      
    
            const response = await axios.get(`http://66.42.65.87:8080/geoserver/wfs?request=GetFeature&service=WFS&version=1.0.0&typeName=STATS_NDWI:${year}&outputFormat=application/json&CQL_FILTER=Name=%27${basin}%27`
            );
            console.log(response.data.features[0].properties,'stats response')
            var obj = response.data.features[0].properties
            
            const newObj = Object.fromEntries(Object.entries(obj).filter(([key]) => !key.includes('255') && !key.includes('No Data') && !key.includes('Name') && !key.includes('0')))
            console.log(newObj, 'NEW OBJECT')
    
            var labels = Object.keys(newObj)
            console.log(labels, 'stats labels')
            this.lulcChartData.labels = labels
           
          
            var figures = Object.values(newObj)
            console.log(figures, 'stats figures')
            // var converted = figures.map( (item) => item/100)
            // console.log(converted, 'converted figres')
            this.lulcChartData.datasets[0].data = figures
            this.lulcChartData.datasets[0].backgroundColor = ['#b3b3cc','#c2fefe', '#2578fd']

             //for new array
             this.stats_array.labels = labels
             this.stats_array.data_figures = figures

             //capture bbox
             var bbox = response.data.features[0].bbox
             console.log(bbox, 'BOUNDING BOX')
              this.western_lon = bbox[0]
              this.northern_lat = bbox[1]
              this.eastern_lon = bbox[2]
              this.southern_lat = bbox[3]

              this.resolution = '300'
            
         
            
          } catch (error) {
            console.error('an error occured'+error);
            
          }
        
        }

        if(this.selected_sub_indicator === 'Vegetation Cover' ) {
          try {
          
           
            var basin = this.selected_basin
            var year = this.selected_year
            var season = this.selected_season
            var satellite = this.selected_satellite
    
            const response = await axios.get(`http://66.42.65.87:8080/geoserver/NDVI_${season}_ZONE2/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=NDVI_${season}_ZONE2%3A${year}&maxFeatures=50&outputFormat=application%2Fjson&CQL_FILTER=Name=%27${basin}%27`
            );
            console.log(response.data.features, 'NEW NDVI STATS')
          //   var ids_object = response.data.features

          //   for(let item of Object.keys(ids_object)) {
          //     // if( myObject[item] == "John" ) {
          //     //     myObject[item] = 'Salvador'
          //     // }
          //   var names =  ids_object.map( (item) => {
          //     // var year = this.selected_year
          //     // item.id = `${year}`
              
          //     if(item.id.includes('.1')){
          //       item.id = 'Zambezi'
          //      }
          //      if(item.id.includes('.2')){
          //       item.id = 'Limpopo'
          //      }

          //      if(item.id.includes('.3')){
          //       item.id = 'Okavango'
          //      }
          //      if(item.id.includes('.4')){
          //       item.id = 'Cuvelai'
          //      }
                
          //       return item.id
          //     })

          //     // console.log(names, 'names zambezi')
              
             
              

          // }
          // console.log(ids_object)
           
       
           
        
            console.log(response.data.features[0].properties,'stats response')  
            var obj = response.data.features[0].properties
            
            const newObj = Object.fromEntries(Object.entries(obj).filter(([key]) => !key.includes('255') && !key.includes('No Data') && !key.includes('Name') && !key.includes('count')))
            console.log(newObj, 'NEW OBJECT')
    
            var labels = Object.keys(newObj)
            console.log(labels, 'stats labels')
            // labels = ['Water Areas', 'Dry areas', 'Wetness area']
            this.lulcChartData.labels = labels
           
          
            var figures = Object.values(newObj)
            console.log(figures, 'stats figures')
            // var converted = figures.map( (item) => item/100)
            // console.log(converted, 'converted figres')
            this.lulcChartData.datasets[0].data = figures
            this.lulcChartData.datasets[0].backgroundColor = ['#ffbb33','#1eb301', '#88ff4d']

            //  //for new array for stats download
             this.stats_array.labels = labels
             this.stats_array.data_figures = figures

             //capture bbox
             var bbox = response.data.features[0].bbox
             console.log(bbox, 'BOUNDING BOX')
              this.western_lon = bbox[0]
              this.northern_lat = bbox[1]
              this.eastern_lon = bbox[2]
              this.southern_lat = bbox[3]

              if(satellite === 'SENTINEL'){
                this.resolution = '100'
              }
             
              if(satellite === 'LANDSAT'){
                this.resolution = '100'
              }
         
            
          } catch (error) {
            console.error('an error occured'+error);
            
          }
        
        }

        if(this.selected_sub_indicator === 'Burnt Area MODIS') {
          try {
          
            // console.log(this.selected_basin, 'BASIN FOR STATISTICS')
         var basin = this.selected_basin
        //  console.log(basin, 'ddaaaaaaaaattttttttttttttaaaaaaaaaaa')
  
  
         var year = this.selected_year
        //  console.log(year, 'year FOR SSSSTAAAAAAAAAAAATTTTTTTTTTS')
        var season = this.selected_season

        // console.log(season, 'season for stattttttttsssssss')
      
    
            const response = await axios.get(`http://66.42.65.87:8080/geoserver/FIRE_STATS/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=FIRE_STATS%3A${year}&maxFeatures=50&outputFormat=application%2Fjson&CQL_FILTER=Name=%27${basin}%27`
            );
            console.log(response.data.features[0].properties,'fire stats response')
            var obj = response.data.features[0].properties
            
            const newObj = Object.fromEntries(Object.entries(obj).filter(([key]) => !key.includes('ClassNODAT') && !key.includes('Basin_Name') && !key.includes('Name') && !key.includes('0')))
            console.log(newObj, 'NEW OBJECT')
    
            var labels = Object.keys(newObj)
            console.log(labels, 'stats labels')

            this.lulcChartData.labels = labels
            this.lulcChartData.labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4']
           
          
            var figures = Object.values(newObj)
            console.log(figures, 'stats figures')
            // var converted = figures.map( (item) => item/100)
            // console.log(converted, 'converted figres')
            this.lulcChartData.datasets[0].data = figures
            this.lulcChartData.datasets[0].backgroundColor = ['#ff0000', '#f36f21', '#fcde8b', '#55ff00']


             //for new array
             this.stats_array.labels = labels
             this.stats_array.data_figures = figures

             //capture bbox
             var bbox = response.data.features[0].bbox
             console.log(bbox, 'BOUNDING BOX')
              this.western_lon = bbox[0]
              this.northern_lat = bbox[1]
              this.eastern_lon = bbox[2]
              this.southern_lat = bbox[3]
              this.resolution = '300'
            
         
            
          } catch (error) {
            console.error('an error occured'+error);
            
          }
        
        }

        if(this.selected_sub_indicator === 'Burnt Area FIRMS') {
        //   try {
          
        //     // console.log(this.selected_basin, 'BASIN FOR STATISTICS')
        //  var basin = this.selected_basin
        // //  console.log(basin, 'ddaaaaaaaaattttttttttttttaaaaaaaaaaa')
  
  
        //  var year = this.selected_year
        // //  console.log(year, 'year FOR SSSSTAAAAAAAAAAAATTTTTTTTTTS')
        // var season = this.selected_season

        // // console.log(season, 'season for stattttttttsssssss')
      
    
        //     const response = await axios.get(`http://66.42.65.87:8080/geoserver/FIRMS_STATS_${season}/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=FIRMS_STATS_${season}%3A${year}&maxFeatures=50&outputFormat=application%2Fjson&CQL_FILTER=Name=%27${basin}%27`
        //     );
        //     console.log(response.data.features[0].properties,'FIRMS stats response')
        //     var obj = response.data.features[0].properties
            
        //     const newObj = Object.fromEntries(Object.entries(obj).filter(([key]) => !key.includes('ClassNODAT') && !key.includes('Basin_Name') && !key.includes('Name') && !key.includes('0')))
        //     console.log(newObj, 'NEW OBJECT')
    
        //     var labels = Object.keys(newObj)
        //     console.log(labels, 'stats labels')
        //     this.lulcChartData.labels = labels
        //     this.lulcChartData.labels = ['Total Burnt Area']
           
          
        //     var figures = Object.values(newObj)
        //     console.log(figures, 'stats figures')
        //     // var converted = figures.map( (item) => item/100)
        //     // console.log(converted, 'converted figres')
        //     this.lulcChartData.datasets[0].data = figures
        //     this.lulcChartData.datasets[0].backgroundColor = ['#ff0000', '#f36f21', '#fcde8b', '#55ff00']


        //      //for new array
        //      this.stats_array.labels = labels
        //      this.stats_array.data_figures = figures

        //      //capture bbox
        //      var bbox = response.data.features[0].bbox
        //      console.log(bbox, 'BOUNDING BOX')
        //       this.western_lon = bbox[0]
        //       this.northern_lat = bbox[1]
        //       this.eastern_lon = bbox[2]
        //       this.southern_lat = bbox[3]
        //       this.resolution = '300'
            
         
            
        //   } catch (error) {
        //     console.error('an error occured'+error);
            
        //   }
        

        try {
          
          // console.log(this.selected_basin, 'BASIN FOR STATISTICS')
       var basin = this.selected_basin
      //  console.log(basin, 'ddaaaaaaaaattttttttttttttaaaaaaaaaaa')


       var year = this.selected_year
      //  console.log(year, 'year FOR SSSSTAAAAAAAAAAAATTTTTTTTTTS')
      var season = this.selected_season

      // console.log(season, 'season for stattttttttsssssss')
    
  
          const response = await axios.get(`http://66.42.65.87:8080/geoserver/FIRMS_STATS_DRY/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=FIRMS_STATS_DRY%3A${year}&maxFeatures=50&outputFormat=application%2Fjson&CQL_FILTER=Name=%27${basin}%27`
          );
          console.log(response.data.features[0].properties,'fire stats response')
          var obj = response.data.features[0].properties
          
          const newObj = Object.fromEntries(Object.entries(obj).filter(([key]) => !key.includes('ClassNODAT') && !key.includes('Basin_Name') && !key.includes('Name') && !key.includes('0')))
          console.log(newObj, 'NEW OBJECT')
  
          var labels = Object.keys(newObj)
          console.log(labels, 'stats labels')

          this.lulcChartData.labels = labels
          this.lulcChartData.labels = ['Oct-Dec']
         
        
          var figures = Object.values(newObj)
          console.log(figures, 'stats figures')
          // var converted = figures.map( (item) => item/100)
          // console.log(converted, 'converted figres')
          this.lulcChartData.datasets[0].data = figures
          this.lulcChartData.datasets[0].backgroundColor = ['#55ff00', '#f36f21', '#fcde8b', '#ff0000']


           //for new array
           this.stats_array.labels = labels
           this.stats_array.data_figures = figures

           //capture bbox
           var bbox = response.data.features[0].bbox
           console.log(bbox, 'BOUNDING BOX')
            this.western_lon = bbox[0]
            this.northern_lat = bbox[1]
            this.eastern_lon = bbox[2]
            this.southern_lat = bbox[3]
            this.resolution = '300'
          
       
          
        } catch (error) {
          console.error('an error occured'+error);
          
        }
        }
        if(this.selected_basin && this.selected_sub_indicator === 'Undulation') {
          try {
          
         var basin = this.selected_basin
         console.log(basin, 'basin flood')
        //  var year = this.selected_year
        //  var season = this.selected_season

 
      
    
            const response = await axios.get('http://66.42.65.87:8080/geoserver/FLOOD_STATS/ows?service=WFS&version=1.0.0&request=GetFeature&CQL_FILTER=Name=%27'+basin+'%27&typeName=FLOOD_STATS%3A2022&maxFeatures=50&outputFormat=application%2Fjson'
            );
            console.log(response.data.features[0].properties,'Floods stats response')
            var obj = response.data.features[0].properties
            
            const newObj = Object.fromEntries(Object.entries(obj).filter(([key]) => !key.includes('0.0') && !key.includes('Basin_Name') && !key.includes('Name')))
            console.log(newObj, 'NEW OBJECT')
    
            var labels = Object.keys(newObj)
            console.log(labels, 'stats labels')
            this.lulcChartData.labels = labels
            this.lulcChartData.labels = ["Flooded Areas", "Wetness", "Moderate Wetness", "Moderate Dryness", "Dry Areas"]
           
          
            var figures = Object.values(newObj)
            console.log(figures, 'stats figures')
            // var converted = figures.map( (item) => item/100)
            // console.log(converted, 'converted figres')
            this.lulcChartData.datasets[0].data = figures
            this.lulcChartData.datasets[0].backgroundColor = ['#ff0000', '#e6ac93', '#f0eec7', '#d8dc5c', '#6acb75']


             //for new array
             this.stats_array.labels = labels
             this.stats_array.data_figures = figures

             //capture bbox
             var bbox = response.data.features[0].bbox
             console.log(bbox, 'BOUNDING BOX')
              this.western_lon = bbox[0]
              this.northern_lat = bbox[1]
              this.eastern_lon = bbox[2]
              this.southern_lat = bbox[3]
              this.resolution = '300'
            
         
            
          } catch (error) {
            console.error('an error occured'+ '' + error);
            
          }
        
        }

        if(this.selected_sub_indicator === 'Soil Moisure Index') {
          try {
          
            // console.log(this.selected_basin, 'BASIN FOR STATISTICS')
         var basin = this.selected_basin
        //  console.log(basin, 'ddaaaaaaaaattttttttttttttaaaaaaaaaaa')
  
  
         var year = this.selected_year
        //  console.log(year, 'year FOR SSSSTAAAAAAAAAAAATTTTTTTTTTS')
        var season = this.selected_season

        // console.log(season, 'season for stattttttttsssssss')
      
    
            const response = await axios.get(`http://66.42.65.87:8080/geoserver/SMI_${season}_STATS2/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=SMI_${season}_STATS2%3A${year}&maxFeatures=50&outputFormat=application%2Fjson&CQL_FILTER=Name=%27${basin}%27`
            );
            console.log(response.data.features[0].properties,'SMI stats response')
            var obj = response.data.features[0].properties
            
            const newObj = Object.fromEntries(Object.entries(obj).filter(([key]) => !key.includes('count')  && !key.includes('Name') && !key.includes('0')))
            console.log(newObj, 'NEW OBJECT')
    
            var labels = Object.keys(newObj)
            console.log(labels, 'stats labels')
            this.lulcChartData.labels = labels
           
          
            var figures = Object.values(newObj)
            console.log(figures, 'stats figures')
            // var converted = figures.map( (item) => item/100)
            // console.log(converted, 'converted figres')
            this.lulcChartData.datasets[0].data = figures
            this.lulcChartData.datasets[0].backgroundColor = ['#6aff4e', '#13a147',  '#93be89']


             //for new array
             this.stats_array.labels = labels
             this.stats_array.data_figures = figures

             //capture bbox
             var bbox = response.data.features[0].bbox
             console.log(bbox, 'BOUNDING BOX')
              this.western_lon = bbox[0]
              this.northern_lat = bbox[1]
              this.eastern_lon = bbox[2]
              this.southern_lat = bbox[3]
              this.resolution = '300'
            
         
            
          } catch (error) {
            console.error('an error occured'+error);
            
          }
        
        }

       


        } 
        getStatistics()

    },

    
     


    

  },

  getters: {
    getSelectedRegion:(state) => state.current_geojson, 
    getSelectedPoints:(state) => state.current_point_geojson,
    getSelectedCountyName:(state) => state.selected_region, 
    getSelectedCause:(state) => state.selected_cause, 
    getChartData:(state)=>state.testData.chatData_restructure,
    getChartOptions:(state)=>state.testData.options,
    getBarChartOptions:(state)=>state.barchart_options,
    getLoadingState:(state)=> state.loading,
    
    //wemast_v2 lists

    getRegionList:(state)=>state.countries,
   
    getIndicatorList:(state)=>state.indicator_list,

    getSelectedBasin:(state) => state.selected_basin,
    getSelectedIndcator: (state) => state.selected_indicator,
    getSelectedSubIndcator: (state) => state.selected_sub_indicator,
    getSelectedYear: (state) => state.selected_year,
    getSelectedSeason: (state) => state.selected_season,
    getSelectedParameter: (state) => state.selected_parameter,
    getSelectedSatellite: (state) => state.selected_satellite,
    getRegionState: (state)=> state.visible_region,
    getIndicatorState: (state)=> state.visible_indicator,
    getSubIndicatorState: (state)=> state.visible_sub_indicator,
    getYearState: (state)=> state.visible_year,
    getParameterState: (state)=> state.visible_parameter,
    getRegionId:(state) => state.region_id,
    getLulcChartData: (state) => state.lulcChartData,
    getStatsArray: (state) => state.stats_array,
    getSelectedLanguage: (state) => state.selected_language,
    getBand2013: (state) => state.band_2013,
    getBand2014: (state) => state.band_2014,
    getBand2015: (state) => state.band_2015,
    getBand2016: (state) => state.band_2016,
    getBand2017: (state) => state.band_2017,
    getBand2018: (state) => state.band_2018,
    getBand2019: (state) => state.band_2019,
    getBand2020: (state) => state.band_2020,
    getBand2021: (state) => state.band_2021,
    getBand2022: (state) => state.band_2022,
    //user management
    getUsernameInput:(state) => state.username,
    getEmailInput:(state) => state.email,
    getPasswordInput:(state)=> state.password,
    getConfirmPassword:(state) => state.confirm_password,
    getZambeziStats:(state) => state.lulcChartData,
    getLatLon: state => state.latlon,

  
    
  },
})
