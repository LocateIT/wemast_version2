<template>
    <div class="selections">
        <p class="select_country">Select Region</p>
        <!-- <select name="" id="region_selection">
            <option value=""></option>
        </select> -->
        <div id="region_selection">
          <CustomSelect2
          @input="fetchRegion"
       
        
       />
        </div>

        <!-- <select name="" id="country_selection" @click="storeUserSelections.fetchCountriesList"
     @input="storeUserSelections.showSelectedCountry"
      placeholder="Select Region"
     >

     <option>{{ storeUserSelections.placeholder}}</option>
  
     <option v-for="country in storeUserSelections.countries" :key="country">{{ country}}</option>
   </select>
        -->

        <p class="select_cause">Select Indicator</p>
        <div id="cause_selection">
          <CustomSelectIndicator />
        </div>

        <p class="select_sub-indicator">Select Sub-Indicator</p>
        <div id="sub_indicator_selection">
            <CustomSelectSubIndicator />
        </div>

        <p  :class="{'select_year2':(storeUserSelections.selected_sub_indicator === 'Water Quality' ||
        storeUserSelections.selected_sub_indicator === 'Wetland Inventory'),
         'select_year':(storeUserSelections.selected_sub_indicator !== 'Water Quality')} ">Select Year</p>
        <div  :class="{'year_selection2':(storeUserSelections.selected_sub_indicator === 'Water Quality' ||
        storeUserSelections.selected_sub_indicator === 'Wetland Inventory'),
         'year_selection':(storeUserSelections.selected_sub_indicator !== 'Water Quality')} ">
            <CustomSelectYear />
        </div>

        <p class="select_season" v-if="storeUserSelections.selected_sub_indicator === 'Prec Index'">Select Season</p>
        <div id="season_selection" v-if="storeUserSelections.selected_sub_indicator === 'Prec Index'">
          <CustomSelectSeason />
        </div>


        <p class="select_parameter" 
        v-if="storeUserSelections.selected_sub_indicator === 'Water Quality' ||
        storeUserSelections.selected_sub_indicator === 'Wetland Inventory'">Select Parameter</p>
        <div id="parameter_selection" v-if="storeUserSelections.selected_sub_indicator === 'Water Quality' || storeUserSelections.selected_sub_indicator === 'Wetland Inventory'">
          <CustomSelectParameter />
        </div>

        <!-- <p class="select_satellite">Select Satellite</p>
        <div class="satellite_selection">
            <CustomSelectSatellite />
        </div> -->
        



        <button :class="{'request':(storeUserSelections.selected_sub_indicator === 'Prec Index'), 'request2':(storeUserSelections.selected_sub_indicator === 'Water Quality'),
         'request1':(storeUserSelections.selected_sub_indicator !== 'Prec Index' || storeUserSelections.selected_sub_indicator === 'Burnt Area' || storeUserSelections.selected_sub_indicator === 'Undulation')} " type="button" @click="$emit('fetchData')">REQUEST</button>

        <!-- <button type="button">Upload Shapefile</button> "$emit('increment-btn', 1)" -->
        

    </div>
  
</template>

<script setup>
  import { ref } from 'vue';
import CustomSelect from './CustomSelect.vue';
import {useCounterStore } from '../stores/counter';
import CustomSelect2 from './CustomSelect2.vue';
import CustomSelectIndicator from './CustomSelectIndicator.vue';
import CustomSelectSubIndicator from './CustomSelectSubIndicator.vue'
import CustomSelectYear from './CustomSelectYear.vue'
import CustomSelectSeason from './CustomSelectSeason.vue';
import CustomSelectParameter from './CustomSelectParameter.vue';
import CustomSelectSatellite from './CustomSelectSatellite.vue';




// let counties = ref(['Limpopo', 'Cuvelai', 'Okavango', 'Zambezi'])

const storeUserSelections = useCounterStore()

// const fetchData = () => {
//   console.log('fetch!')

// }
const fetchRegion = () => {
  console.log('fetched region')
}

</script>

<style scoped>
    .selections{
        background-color: #f6f6f6;
        position: absolute; width: 89vw;
          height: 50px; padding: 15px; top: 12vh; left: 15vw;
           border-radius: 35px; padding-bottom: 20px;
    }
    .select_country{ 
  position: absolute;
  top: 0.1vh;
  left: 1.3vw;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
}
#region_selection{ 
  position: absolute;
  top: 4vh;
  left: 0.8vw;
  height: 35px;
  width: 120px;
  border-radius: 30px;
  cursor: pointer;
  z-index: 1200;
}

.select_cause{ 
  position: absolute;
  top: 0.1vh;
  left: 10vw;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
}

#cause_selection{ 
  position: absolute;
  top: 4vh;
  left: 10vw;
  height: 35px;
  width: 140px;
  border-radius: 30px;
  cursor: pointer;
  z-index: 1200;
}

.select_sub-indicator{ 
  position: absolute;
  top: 0.1vh;
  left: 18vw;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
}

#sub_indicator_selection{
  position: absolute;
  top: 4vh;
  left: 18vw;
  height: 35px;
  width: 140px;
  border-radius: 30px;
  cursor: pointer;
  z-index: 1200;
}


.select_year{ 
  position: absolute;
  top: 0.1vh;
  left: 29vw;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
}

.year_selection{
  position: absolute;
  top: 4vh;
  left: 29vw;
  height: 35px;
  width: 140px;
  border-radius: 30px;
  cursor: pointer;
  z-index: 1200;
}
.select_season{
  position: absolute;
  top: 0.1vh;
  left: 38vw;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;

}
#season_selection{
  position: absolute;
  top: 4vh;
  left: 38vw;
  height: 35px;
  width: 140px;
  border-radius: 30px;
  cursor: pointer;
  z-index: 1200;
}

.select_parameter{
  position: absolute;
  top: 0.1vh;
  left: 28vw;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;

}
#parameter_selection{
  position: absolute;
  top: 4vh;
  left: 28vw;
  height: 35px;
  width: 140px;
  border-radius: 30px;
  cursor: pointer;
  z-index: 1200;
}

.request{
    position: absolute;
  top: 4vh;
  left: 46vw;
  width: 140px;
  height: 35px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  border-radius: 30px;
  border: none;
  color: #fff;
  background-color: steelblue;
  cursor: pointer;
}
.request1{
  position: absolute;
  top: 4vh;
  left: 38vw;
  width: 140px;
  height: 35px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  border-radius: 30px;
  border: none;
  color: #fff;
  background-color: steelblue;
  cursor: pointer;

}

.select_year2{ 
  position: absolute;
  top: 0.1vh;
  left: 38vw;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
}

.year_selection2{
  position: absolute;
  top: 4vh;
  left: 38vw;
  height: 35px;
  width: 140px;
  border-radius: 30px;
  cursor: pointer;
  z-index: 1200;
}
.request2{
    position: absolute;
  top: 4vh;
  left: 48vw;
  width: 140px;
  height: 35px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  border-radius: 30px;
  border: none;
  color: #fff;
  background-color: steelblue;
  cursor: pointer;
}





</style>