import { defineStore } from 'pinia'
import axios from 'axios'


var baseurl = 'http://45.63.48.25:8080'

export const useCounterStore = defineStore({
  id: 'counter',
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

          backgroundColor: [
            "#a8a800",
            "#ccc",
            "#bd6860",
            "green",
            "#fff1d2",
            "#55ff00",
            '#4dd7ff',
            '#d2efff'
          ],
          barThickness: 40,
       
       
        },
      ],
    },

    lineChartData : {
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

      sub_indicator_placeholder:'',
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
      //visibility for custom selects
      visible_region: null,
      visible_indicator: null,
      visible_sub_indicator: null,
      visible_year: null,
      lulc_desc: 'The LULC is an ESA product. The integration of the biophysical and human factors plays a leading role in causing land cover changes and is used to explain the dynamics of land usage and trend that occur within an ecosystem.',
      veg_cover_desc: 'Product derived from indexing the Near Infrared (NIR) band and the Red band from satellite image. Used to assess the difference in seasonal vegetation characteristics',
      wetland_inventory_desc: 'NDWI is a satellite-derived product',
      status_desc:'The WWPI uses a proxy data of seasonal vegetation (NDVI) to display the dry',
      default_desc: 'STFU',
      prec_desc: 'Standardized Precipitation Index ',
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
  }),
 
  actions: {
    increment() {
      this.counter++
    },

    fetchCountriesList() {
      this.countries =  ["Limpopo","Cuvelai","Zambezi", "Okavango"]
      return this.countries

    },
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
      if(this.selected_sub_indicator === 'Precipitation Index' || this.selected_sub_indicator === 'Burnt Area MODIS'
       || this.selected_sub_indicator === 'Burnt Area FIRMS'
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
      
      

      if( this.selected_sub_indicator === 'Wetland Inventory' && this.selected_parameter === 'Wetland Extent' ) {
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
      console.log(this.selected_parameter , 'changed selected satellite')
    },
    showSelectedSatellite(option) {
      this.satellite_placeholder = option;
      this.selected_satellite=  option
      console.log(this.selected_satellite , 'changed selected satellite')
      this.getstats()
    },


    

    fetchCausesList() {
      var data = this.selected_region
      
      const getCausesList = async () => {
        try {
          
          // this.loading = true 
        
            const resp = await  axios.get(baseurl+'/HotSpots/get_hotspot_per_county/?list_causes_per_county='+data
            );

            this.causes = resp.data.Causes
            console.log(resp.data.Causes, 'causes response data');
            return resp.data.Causes
        } catch (err) {
            // Handle Error Here
            console.error('an error occured'+err);
        }
        // finally  { if (this.current_geojson)this.loading = false
        
        // }
        
    };

    getCausesList();

    },

    showSelectedCause($event) {
      var selected_causes = $event.target.value
      console.log(selected_causes, 'selected cause')

      this.selected_cause = selected_causes 
      console.log(this.selected_cause , 'changed selected cause')

      var data = this.selected_region
      var cause = this.selected_cause


      const getPointsCause = async () => {

        try {
          const response = await axios.get(baseurl+'/HotSpots/get_hotspot_per_county/?hotspot_per_cause='+cause+'&county='+data
          );
          this.current_point_geojson = response.data
          console.log(response.data, 'point data')
          return response.data
          
        } catch (error) {
          console.error('an error occured'+error);
          
        }
      }
      getPointsCause();



      const getCountyStats =  async () =>  {
        
        var data = this.selected_region
        var cause = this.selected_cause

        if ( data && cause) {

          const outPut = await axios.get(baseurl+'/HotSpots/get_statics/?county='+data+'&cause='+cause)
     
             .then((response) => {
                  const responseData = response.data.statistics

                 this.testData.chartDataFromServer = responseData 
                 // console.log(responseData , 'causes statistics')   
                 
                  var stats_data = {'labels':[], 'values':[]}

                   responseData.map( item => {
                      const key =  Object.keys( item)
                      stats_data[key] = item[key]

                      
              //  console.log(item[key] , 'value')
              // only add data that is greater than 0 to the data structure.
                    if (item[key]> 0){
                       stats_data['labels'].push(key[0])
                          
                          stats_data['values'].push(item[key])
                    }

                    })

                    console.log(stats_data, 'labels and data')
                     var Labels = stats_data.labels
                     
                     var Data = stats_data.values
                
                  setTimeout(() => {


                 // test for chart dynamically
                 var chartDataNew = this.testData.chartDataFromServer

                 var mychart_data = []   //no. of blackspots per road

                 // generate names for road labels 
                 var names_labels = []

                 // const places_names = Object.keys(chartDataNew[0]).slice(1)
                 
                 // chartDataNew.map((name =>{

                 //    var majina = Object.values(name).slice(0,1)
                    
                    
                 //    names_labels.push(majina[0])

                  
                    

                 // }))

                 var Doughnut_data = {}

                 var colors_a = ['#ffbb33', '#99cc00', '#ffc7c8', '#33b5e5',  '#ABCDC6', '#ffc7c8', '#9a5fb8', '#32a6b5',  '#ABEBC6']


                 chartDataNew.map((item =>{

                    var data_values = Data //Object.values(item).slice(1)
                          
                    
                 }))

                 this.testData.chatData_restructure.labels = Labels 
                 this.testData.chatData_restructure.datasets= Data

                
                 var datasetStructure =  [{
                       data: Data,
                          label: Labels,
                          backgroundColor:colors_a,
                          fill:true
                    }]
                  
                    this.testData.chatData_restructure.labels = Labels

                 console.log(this.testData.chatData_restructure.labels, 'labels only')
                 this.testData.chatData_restructure.datasets= datasetStructure
                  console.log(this.testData.chatData_restructure.datasets, 'data only')

                //  this.renderChart(testData.chatData_restructure, testData.options)
                 console.log( this.testData.chatData_restructure, 'DATA TYPE OF CHART' )
         
                     }, 1000)

             })
            .catch( (error) => {
         console.log('an error occured ' + error);
     })

     return  outPut

        }
      
 }
 getCountyStats()






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



        if(this.selected_sub_indicator === 'Precipitation Index') {
          try {
          
            // console.log(this.selected_basin, 'BASIN FOR STATISTICS')
         var basin = this.selected_basin
        //  console.log(basin, 'ddaaaaaaaaattttttttttttttaaaaaaaaaaa')
  
  
         var year = this.selected_year
        //  console.log(year, 'year FOR SSSSTAAAAAAAAAAAATTTTTTTTTTS')
        var season = this.selected_season

        // console.log(season, 'season for stattttttttsssssss')
      
    
            const response = await axios.get(`http://66.42.65.87:8080/geoserver/wfs?request=GetFeature&service=WFS&version=1.0.0&typeName=SPI_${season}_STATS:${year}&outputFormat=application/json&CQL_FILTER=Name=%27${basin}%27`
            );
            console.log(response.data.features[0].properties,'stats response')
            var obj = response.data.features[0].properties
            
            const newObj = Object.fromEntries(Object.entries(obj).filter(([key]) => !key.includes('ClassNODAT') && !key.includes('Basin_Name') && !key.includes('Name') && !key.includes('0')))
            console.log(newObj, 'NEW OBJECT')
    
            var labels = Object.keys(newObj)
            console.log(labels, 'stats labels')
            this.lulcChartData.labels = labels
           
          
            var figures = Object.values(newObj)
            console.log(figures, 'stats figures')
            // var converted = figures.map( (item) => item/100)
            // console.log(converted, 'converted figres')
            this.lulcChartData.datasets[0].data = figures
            this.lulcChartData.datasets[0].backgroundColor = ['#6aff4e', '#13a147', '#c2fefe', '#66b7fe']


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


        if(this.selected_sub_indicator === 'Wetland Inventory' && this.selected_parameter === 'Wetland Extent') {
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
    
            const response = await axios.get(`http://66.42.65.87:8080/geoserver/NDVI_${season}_ZONE2/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=NDVI_${season}_ZONE2%3A${year}&outputFormat=application%2Fjson&CQL_FILTER=Name=%27${basin}%27`
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

        // if(this.selected_sub_indicator === 'Burnt Area MODIS') {
        //   try {
          
        //     // console.log(this.selected_basin, 'BASIN FOR STATISTICS')
        //  var basin = this.selected_basin
        // //  console.log(basin, 'ddaaaaaaaaattttttttttttttaaaaaaaaaaa')
  
  
        //  var year = this.selected_year
        // //  console.log(year, 'year FOR SSSSTAAAAAAAAAAAATTTTTTTTTTS')
        // var season = this.selected_season

        // // console.log(season, 'season for stattttttttsssssss')
      
    
        //     const response = await axios.get(`http://66.42.65.87:8080/geoserver/wfs?request=GetFeature&service=WFS&version=1.0.0&typeName=SPI_${season}_STATS:${year}&outputFormat=application/json&CQL_FILTER=Name=%27${basin}%27`
        //     );
        //     console.log(response.data.features[0].properties,'stats response')
        //     var obj = response.data.features[0].properties
            
        //     const newObj = Object.fromEntries(Object.entries(obj).filter(([key]) => !key.includes('ClassNODAT') && !key.includes('Basin_Name') && !key.includes('Name') && !key.includes('0')))
        //     console.log(newObj, 'NEW OBJECT')
    
        //     var labels = Object.keys(newObj)
        //     console.log(labels, 'stats labels')
        //     this.lulcChartData.labels = labels
           
          
        //     var figures = Object.values(newObj)
        //     console.log(figures, 'stats figures')
        //     // var converted = figures.map( (item) => item/100)
        //     // console.log(converted, 'converted figres')
        //     this.lulcChartData.datasets[0].data = figures
        //     this.lulcChartData.datasets[0].backgroundColor = ['#6aff4e', '#13a147', '#c2fefe', '#66b7fe']


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
        
        // }


        } 
        getStatistics()

    },

    
     


    

    fetchKwale(){
      const sendKwaleRequest = async () => {
        try {
          const response = await axios.get('http://localhost:8005/geoserver/rasters/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=rasters%3Akwale&maxFeatures=50&outputFormat=application%2Fjson')
          this.kwale_geojson = response.data
          console.log(response.data, 'kwale response')
          // return response.data


          //fetch raster
        

        } catch (error) {
          console.log('could not fetch data'+error)
          
        }
      }
      sendKwaleRequest();
    },
    fetchKwaleRaster() {
      const sendRasterRequest = async () => {
        try {
          const response = await axios.get('http://localhost:8005/geoserver/rasters/wms')
          this.kwale_raster = response.data
          console.log(response.data, 'kwale raster')
        } catch (error) {
          console.log(error)
        }

      }
      sendRasterRequest();
    },

    //geoserver raster layers
    fetchRegionsList() {
      this.layers = ['kiambu_clip1', 'machakos1', 'Meru', 'Embu', 'Nyeri']

    },

    //fetch geoserver geojsons

    fetchGeoserverList() {
      this.geoserver_regions = ['kiambu', 'machakos', 'Meru', 'Embu', 'Nyeri']

    },

    showSelectedLayer($event){
      var selected_layer = $event.target.value
      console.log(selected_layer, 'selected geoserver layer')
      // this.countries =  selected_country
      this.selected_layer =  selected_layer
      // console.log(this.selected_layer , 'changed geoserver layer')
      // return selected_country
      var data = this.selected_layer
      // console.log(data, 'data')

      const fetchKwaleRequest = async () => {
        try {
          this.loading = true
          const response = await axios.get('http://localhost:8005/geoserver/rasters/wms?')
          this.selected_raster= response.data
          console.log(response.data, 'kwale raster')
          this.loading = false;
          // return response.data


          //fetch raster
        

        } catch (error) {
          console.log('could not fetch data'+error)
          
        }
      }
      fetchKwaleRequest();  

    },
    showSelectedGeoserverLayer($event){
      var selected_layer = $event.target.value
      console.log(selected_layer, 'selected region name')
      // this.countries =  selected_country
      this.selected_geoserver_region =  selected_layer
      // console.log(this.selected_layer , 'changed geoserver layer')
      // return selected_country
      var data =  this.selected_geoserver_region
      console.log(data, 'data name')

      const fetchKwaleRequest = async () => {
        try {
          this.loading = true;
          const response = await axios.get('http://localhost:8005/geoserver/rasters/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=rasters%3A'+data+'&maxFeatures=50&outputFormat=application%2Fjson')
          this.current_geoserver_geojson= response.data
           this.loading = false;
          console.log(response.data, 'geoserver geojson')
          // return response.data


          //fetch raster
        

        } catch (error) {
          console.log('could not fetch data'+error)
          
        }
      }
      fetchKwaleRequest();  

    },


    //trial fetchData
    async fetchData(){
      if(this.selected_basin === 'Cuvelai' && this.selected_indicator === 'Exposure' && this.selected_sub_indicator === 'Land Cover' && this.selected_year === '2020'){
        console.log('cuvelai data  fetched')
      }else{
        console.log('no data')
      }
      
    },


    async findData() {
      try {
        // this.loading = true
        const response = await axios.post(
          "https://wemast.geoimagesolutions.com/wemast-api-back-end-0.1/api/dataserver/finddata",
          {
            basin: this.selected_basin,
            indicator: this.selected_indicator,
            year: this.selected_year,
            geometry:  this.current_geojson
          },

          {
            headers: {
              sdf09rt2s: "locateit",
            },
          }
        );
      //   if (process.env.DEV) console.log("find data response ", response.data);
      //   await this.getWMS_Layer({
      //     layers: response.data.layername,
      //   });
      //  await  this.getLegend({
      //     base_url: response.data.geoserver,
      //     legend_url: response.data.legendurl,
      //   });
      //   await this.getStatistics();
        //  this.loading = false
      } catch (error) {
        // if (process.env.DEV) console.log("find data error ", error);
        //  this.$q.loading.hide()
      }
    }
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
    getKwale:(state)=>state.kwale_geojson,
    getSelectedLayerName:(state)=>state.selected_layer,
    getKwaleRaster:(state)=>state.kwale_raster,
    getSelectRaster:(state)=>state.selected_raster,
    //geoserver geojsons
    getSelectedGeoserverRegionName:(state)=>state.selected_geoserver_region,
    getSelectedGeoserverRegion:(state)=>state.current_geoserver_geojson,
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
  
    
  },
})
