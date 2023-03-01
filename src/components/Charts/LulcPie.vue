<template>
    <div>
    <DoughnutChart 
    :chartData="chartData"
    :options="options"
        
    
    />

    </div>
    

    
  </template>
  
  <script >
  import { defineComponent, ref, computed, watch, toRef, onMounted } from 'vue';
  import { DoughnutChart } from 'vue-chart-3';
  import { Chart, registerables } from "chart.js";

//   import { useCounterStore } from '@/stores/counter';
//   import axios from 'axios';

//   var baseurl = 'http://45.63.48.25:8080'
  
//   Chart.register(...registerables);
  
  export default defineComponent({
    
    components: { DoughnutChart },
    props: {

      label: {
         type: String
      },
      chartData:{
         type: Object
      },
      options:{
         type: Object
      },
    //   cause:{
    //      type:String
    //   },
    //   county:{
    //      type: String
    //   }

  },
 
    setup() {
      
  
  

     
      

}
})



 

  
  
  </script>