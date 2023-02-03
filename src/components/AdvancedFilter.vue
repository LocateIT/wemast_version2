<template>
  <div class="filter">



    <div class="radio_labels_container">
        <div class="radio_selections">
       
       <img src="public/uiIcons/radio.svg" id="disabled"  class="parameters" @click="handleParameterSwap()"   
                        >
       <img src="public/uiIcons/radio.svg" class="time" @click="handleTimeSwap()"   :class="
                          radio_selection === 'wetland'
                            ? 'radio_swap'
                            : ''
                        "
                        style="cursor: pointer;">
      
   </div>
   <div class="radio_labels">
       <label for="" class="parameters1">Parameters</label>
       <label for="" class="time1">Wetland</label>
   </div>
    </div>
    
    <div v-if="radio_selection ==='wetland'" class="filter_selections">
        <p class="select_country">Select Country</p>
    <div class="country_selection">
        <CustomSelectCountry />
    </div>
    <p class="select_wetland">Select Wetland</p>
    <div class="wetland_selection">
        <CustomSelectCountry />
    </div>
    <p class="select_platform">Select Platform</p>
    <div class="platform_selection">
        <CustomSelectCountry />
    </div>

    <button type="button" class="submit">SUBMIT</button>
    </div>
   
    
    

  </div>
</template>

<script setup>

import CustomSelectCountry from './CustomSelectCountry.vue';
import { ref } from 'vue'
let radio_selection = ref("wetland") 

const handleParameterSwap = () => {
  radio_selection.value = 'parameters';
}

const handleTimeSwap = () => {
  radio_selection.value = 'wetland';
} 

</script>

<style scoped>
img#disabled:hover {
  cursor: not-allowed;
}
.radio_selections{
        display: flex;
        gap: 5rem;
        position: absolute;
        top: 2vh;
        left:2vw;
      

    }

    .radio_labels{
        display: flex;
        gap: 2rem;
        position: absolute;
        top: 5vh;
        left:2vw;
    }
    .radio_labels_container{
        height: 80px;
        background-color: #eee;
    }
    .radio_swap{
        background-color: steelblue;
        color: steelblue;
        border-radius: 50%;
        border: steelblue 1px solid;
        padding: 1px;
        
    }
    .radio_swap :hover{
        background-color: grey;
        
    }
    .parameters, .time{
        width: 20px;
        height: 20px;
        z-index: 1500;
    }
    .filter{
        height: 450px;
        width: 300px;
        background-color: rgb(255, 255, 255);
        
    }
    .filter_selections{
        position: absolute;
        left: 1vw;
        top: 7vh;
        height: 400px;
        width: 250px;


    }
    .select_country{
        position: absolute;
        top: 1vh;
        left: 1vw;
        font-weight: 700;
    }
    .country_selection{
        position: absolute;
        top: 6vh;
        left: 1vw;

    }

    .select_wetland{
        position: absolute;
        top: 10vh;
        left: 1vw;
        font-weight: 700;
    }
    .wetland_selection{
        position: absolute;
        top: 14vh;
        left: 1vw;

    }
    .select_platform{
        position: absolute;
        top: 19vh;
        left: 1vw;
        font-weight: 700;
    }
    .platform_selection{
        position: absolute;
        top: 23vh;
        left: 1vw;

    }
    .submit{
        position: absolute;
        top: 32vh;
        left: 1vw;
        height: 35px;
        width: 200px;
        border-radius: 50px;
        background-color: steelblue;
        color: #fff;
        font-weight: 700;
        border: none;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        cursor: pointer;
    }

   


</style>