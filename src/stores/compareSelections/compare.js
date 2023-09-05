import { defineStore } from 'pinia'
import axios from 'axios'
import { useCounterStore } from '../counter'





export const useCompareStore = defineStore({
  id: 'compare',
    state: () => ({
         
      indicator_list: [], 
      sub_indicator_list:[],
      year_list:[],
      region_placeholder:'Cuvelai',
      selected_basin:'',
      indicator_placeholder:'',
      selected_indicator:'',

      sub_indicator_placeholder:'',
      selected_sub_indicator:'',

      year_placeholder:'',
      selected_year:'',

      language_placeholder: 'English',
      language_list:[],
      season_list:[],
      season_placeholder: '',
      selected_season: '',
      parameter_list:[],
      parameter_placeholder: '',
      selected_parameter:'',
      satellite_list:['SENTINEL', 'LANDSAT'],
      platform_placeholder: '',
      satellite_placeholder:'',
      selected_satellite:'',

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

    }),


    actions: {
      fetchIndicatorList(){
        this.indicator_list = ['Basin Vulnerability Index','Exposure', 'Sensitivity','Resiliance']
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
          this.sub_indicator_list = ['Burnt Area FIRMS', 'Precipitation Index', 'Undulation']
        }
      },
      fetchYearList(){
        if(this.selected_indicator === 'Basin Vulnerability Index' ) {
          this.year_list = ["2000", "2005", "2010", "2015", "2022"]
        }

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
          this.season_list = ['WET', 'DRY']
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
        this.getstats()
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



      getstats() {
        const getStatistics = async () => {
  
        
       
          if(this.selected_sub_indicator === 'Land Cover' && this.selected_year) {
            try {
            
              // console.log(this.selected_basin, 'BASIN FOR STATISTICS')
          //  var basin = this.selected_basin
          //  console.log(basin, 'ddaaaaaaaaattttttttttttttaaaaaaaaaaa')
    
          const storeUserSelections = useCounterStore()
          console.log(storeUserSelections.selected_basin, 'selected basin from counter')
          var basin = storeUserSelections.selected_basin

           var year = this.selected_year
          //  console.log(year, 'year FOR SSSSTAAAAAAAAAAAATTTTTTTTTTS')
        
      
              const response = await axios.get('http://66.42.65.87:8080/geoserver/wfs?request=GetFeature&service=WFS&version=1.0.0&typeName=LULC_STATS:'+year+'&outputFormat=application/json&CQL_FILTER=Name=%27'+basin+'%27'
              );
              console.log(response.data.features[0].properties,'compare stats response')
              var obj = response.data.features[0].properties
              
              const newObj = Object.fromEntries(Object.entries(obj).filter(([key]) => !key.includes('MAJ_BAS') && !key.includes('Basin_Name') && !key.includes('Name') && !key.includes('0')))
              console.log(newObj, 'NEW OBJECT')
      
              var labels = Object.keys(newObj)
              console.log(labels, 'compare stats labels')
              this.lulcChartData.labels = labels
             
            
              var figures = Object.values(newObj)
              console.log(figures, 'compare stats figures')
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
  
  
              // //for new array
              // this.stats_array.labels = labels
              // this.stats_array.data_figures = figures
  
  
              // //capture bbox
              // var bbox = response.data.features[0].bbox
              // console.log(bbox, 'BOUNDING BOX')
              //  this.western_lon = bbox[0]
              //  this.northern_lat = bbox[1]
              //  this.eastern_lon = bbox[2]
              //  this.southern_lat = bbox[3]
  
              //  this.resolution = '300'
             
           
              
            } catch (error) {
              console.error('an error occured'+error);
              
            }
          
          }
  
          const storeUserSelections = useCounterStore()
  
  
          if(this.selected_sub_indicator === 'Precipitation Index' && storeUserSelections.selected_season === 'DRY') {
            try {
            
              // console.log(this.selected_basin, 'BASIN FOR STATISTICS')
          //  var basin = this.selected_basin
          //  console.log(basin, 'ddaaaaaaaaattttttttttttttaaaaaaaaaaa')

          const storeUserSelections = useCounterStore()
          // console.log(storeUserSelections.selected_basin, 'selected basin from counter')
          var basin = storeUserSelections.selected_basin
    
    
           var year = this.selected_year
          //  console.log(year, 'year FOR SSSSTAAAAAAAAAAAATTTTTTTTTTS')
          // var season = storeUserSelections.selected_season
  
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
  
  
              //  //for new array
              //  this.stats_array.labels = labels
              //  this.stats_array.data_figures = figures
  
              //  //capture bbox
              //  var bbox = response.data.features[0].bbox
              //  console.log(bbox, 'BOUNDING BOX')
              //   this.western_lon = bbox[0]
              //   this.northern_lat = bbox[1]
              //   this.eastern_lon = bbox[2]
              //   this.southern_lat = bbox[3]
              //   this.resolution = '300'
              
           
              
            } catch (error) {
              console.error('an error occured'+error);
              
            }
          
          }
          if(this.selected_sub_indicator === 'Precipitation Index' && storeUserSelections.selected_season === 'WET') {
            try {
            
              // console.log(this.selected_basin, 'BASIN FOR STATISTICS')
          //  var basin = this.selected_basin
          //  console.log(basin, 'ddaaaaaaaaattttttttttttttaaaaaaaaaaa')
          var basin = storeUserSelections.selected_basin
    
           var year = this.selected_year
          //  console.log(year, 'year FOR SSSSTAAAAAAAAAAAATTTTTTTTTTS')
          // var season = this.selected_season
  
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
  
  
  
          if(this.selected_sub_indicator === 'Wetland Inventory' && storeUserSelections.selected_parameter === 'Wetland Extent'
           || (this.selected_sub_indicator === 'Water Quality' && storeUserSelections.selected_parameter === 'Sus Sediments')
          || (this.selected_sub_indicator === 'Water Quality' && storeUserSelections.selected_parameter === 'Turbidity')) {
            try {
            
              // console.log(this.selected_basin, 'BASIN FOR STATISTICS')
           var basin = storeUserSelections.selected_basin
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
            
             
              var basin = storeUserSelections.selected_basin
              var year = this.selected_year
              var season = storeUserSelections.selected_season
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
              //  this.stats_array.labels = labels
              //  this.stats_array.data_figures = figures
  
              //  //capture bbox
              //  var bbox = response.data.features[0].bbox
              //  console.log(bbox, 'BOUNDING BOX')
              //   this.western_lon = bbox[0]
              //   this.northern_lat = bbox[1]
              //   this.eastern_lon = bbox[2]
              //   this.southern_lat = bbox[3]
  
              //   if(satellite === 'SENTINEL'){
              //     this.resolution = '100'
              //   }
               
              //   if(satellite === 'LANDSAT'){
              //     this.resolution = '100'
              //   }
           
              
            } catch (error) {
              console.error('an error occured'+error);
              
            }
          
          }
  
         
  
          if(this.selected_sub_indicator === 'Burnt Area FIRMS') {
        
          
  
          try {
            
            // console.log(this.selected_basin, 'BASIN FOR STATISTICS')
         var basin = storeUserSelections.selected_basin
        //  console.log(basin, 'ddaaaaaaaaattttttttttttttaaaaaaaaaaa')
  
  
         var year = this.selected_year
        //  console.log(year, 'year FOR SSSSTAAAAAAAAAAAATTTTTTTTTTS')
        var season = storeUserSelections.selected_season
  
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
            //  this.stats_array.labels = labels
            //  this.stats_array.data_figures = figures
  
            //  //capture bbox
            //  var bbox = response.data.features[0].bbox
            //  console.log(bbox, 'BOUNDING BOX')
            //   this.western_lon = bbox[0]
            //   this.northern_lat = bbox[1]
            //   this.eastern_lon = bbox[2]
            //   this.southern_lat = bbox[3]
            //   this.resolution = '300'
            
         
            
          } catch (error) {
            console.error('an error occured'+error);
            
          }
          }
        //   if(this.selected_basin && this.selected_sub_indicator === 'Undulation') {
        //     try {
            
        //    var basin = this.selected_basin
        //    console.log(basin, 'basin flood')
        //   //  var year = this.selected_year
        //   //  var season = this.selected_season
  
   
        
      
        //       const response = await axios.get('http://66.42.65.87:8080/geoserver/FLOOD_STATS/ows?service=WFS&version=1.0.0&request=GetFeature&CQL_FILTER=Name=%27'+basin+'%27&typeName=FLOOD_STATS%3A2022&maxFeatures=50&outputFormat=application%2Fjson'
        //       );
        //       console.log(response.data.features[0].properties,'Floods stats response')
        //       var obj = response.data.features[0].properties
              
        //       const newObj = Object.fromEntries(Object.entries(obj).filter(([key]) => !key.includes('0.0') && !key.includes('Basin_Name') && !key.includes('Name')))
        //       console.log(newObj, 'NEW OBJECT')
      
        //       var labels = Object.keys(newObj)
        //       console.log(labels, 'stats labels')
        //       this.lulcChartData.labels = labels
        //       this.lulcChartData.labels = ["Flooded Areas", "Wetness", "Moderate Wetness", "Moderate Dryness", "Dry Areas"]
             
            
        //       var figures = Object.values(newObj)
        //       console.log(figures, 'stats figures')
        //       // var converted = figures.map( (item) => item/100)
        //       // console.log(converted, 'converted figres')
        //       this.lulcChartData.datasets[0].data = figures
        //       this.lulcChartData.datasets[0].backgroundColor = ['#ff0000', '#e6ac93', '#f0eec7', '#d8dc5c', '#6acb75']
  
  
        //        //for new array
        //        this.stats_array.labels = labels
        //        this.stats_array.data_figures = figures
  
        //        //capture bbox
        //        var bbox = response.data.features[0].bbox
        //        console.log(bbox, 'BOUNDING BOX')
        //         this.western_lon = bbox[0]
        //         this.northern_lat = bbox[1]
        //         this.eastern_lon = bbox[2]
        //         this.southern_lat = bbox[3]
        //         this.resolution = '300'
              
           
              
        //     } catch (error) {
        //       console.error('an error occured'+ '' + error);
              
        //     }
          
        //   }
  
          if(this.selected_sub_indicator === 'Soil Moisure Index') {
            try {
            
              // console.log(this.selected_basin, 'BASIN FOR STATISTICS')
           var basin = storeUserSelections.selected_basin
          //  console.log(basin, 'ddaaaaaaaaattttttttttttttaaaaaaaaaaa')
    
    
           var year = this.selected_year
          //  console.log(year, 'year FOR SSSSTAAAAAAAAAAAATTTTTTTTTTS')
          var season = storeUserSelections.selected_season
  
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
              //  this.stats_array.labels = labels
              //  this.stats_array.data_figures = figures
  
              //  //capture bbox
              //  var bbox = response.data.features[0].bbox
              //  console.log(bbox, 'BOUNDING BOX')
              //   this.western_lon = bbox[0]
              //   this.northern_lat = bbox[1]
              //   this.eastern_lon = bbox[2]
              //   this.southern_lat = bbox[3]
              //   this.resolution = '300'
              
           
              
            } catch (error) {
              console.error('an error occured'+error);
              
            }
          
          }
  
          if(this.selected_indicator === 'Basin Vulnerability Index'){
            try {
            
              // console.log(this.selected_basin, 'BASIN FOR STATISTICS')
           var basin =  storeUserSelections.selected_basin
          //  console.log(basin, 'ddaaaaaaaaattttttttttttttaaaaaaaaaaa')
    
    
           var year = this.selected_year
          //  console.log(year, 'year FOR SSSSTAAAAAAAAAAAATTTTTTTTTTS')
          var season = this.selected_season
  
          // console.log(season, 'season for stattttttttsssssss')
        
      
              const response = await axios.get(`http://66.42.65.87:8080/geoserver/BVI_${season}_STATS/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=BVI_${season}_STATS%3A${year}&maxFeatures=50&outputFormat=application%2Fjson&CQL_FILTER=name_basin=%27${basin}%27`
              );
              console.log(response.data.features[0].properties,'BVI compare stats response')
              var obj = response.data.features[0].properties
              
              const newObj = Object.fromEntries(Object.entries(obj).filter(([key]) => !key.includes('id')  && !key.includes('name_basin') 
              && !key.includes('basin_pop') && !key.includes('shape_leng') && !key.includes('shape_area') && !key.includes('tot_pop') && !key.includes('nr_countr') && !key.includes('tot_area')
              && !key.includes('perimeter') && !key.includes('area') && !key.includes('codBasin') && !key.includes('lc_count') && !key.includes('lc_sum') && !key.includes('lc_mean')
              && !key.includes('lc_min') && !key.includes('lc_max') && !key.includes('No Data')))
              console.log(newObj, 'NEW OBJECT')
      
              var labels = Object.keys(newObj)
              console.log(labels, 'stats labels')
              this.lulcChartData.labels = labels
             
            
              var figures = Object.values(newObj)
              console.log(figures, 'stats figures')
              // var converted = figures.map( (item) => item/100)
              // console.log(converted, 'converted figres')
              this.lulcChartData.datasets[0].data = figures
              this.lulcChartData.datasets[0].backgroundColor = ['#55ea53','#ffffc0','#d99321', '#e03e08', '#087308']
              //['#087308', '#55ea53',  '#ffffc0', '#d99321', '#e03e08'] //['#55ea53','#ffffc0','#d99321', '#e03e08', '#087308']
  
  
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
    getSelectedIndcator: (state) => state.selected_indicator,
    getSelectedSubIndcator: (state) => state.selected_sub_indicator,
    getSelectedYear: (state) => state.selected_year,
    getSelectedSeason: (state) => state.selected_season,
    getSelectedParameter: (state) => state.selected_parameter,
    getSelectedSatellite: (state) => state.selected_satellite
    }
})
