<template>
    <div class="selections">
        <p class="select_country">Select Region</p>
        <!-- <select name="" id="region_selection">
            <option value=""></option>
        </select> -->
        <div id="region_selection">
          <CustomSelect2
       
        
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

        <p class="select_year">Select Year</p>
        <div id="year_selection">
            <CustomSelectYear />
        </div>

        <button class="request" type="button" @click="storeUserSelections.findData" >REQUEST</button>

        <!-- <button type="button">Upload Shapefile</button> -->
        

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

// let counties = ref(['Limpopo', 'Cuvelai', 'Okavango', 'Zambezi'])

const storeUserSelections = useCounterStore()

// const fetchData = () => {
//   console.log('fetch!')

// }

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
  left: 20vw;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
}

#sub_indicator_selection{
  position: absolute;
  top: 4vh;
  left: 20vw;
  height: 35px;
  width: 140px;
  border-radius: 30px;
  cursor: pointer;
  z-index: 1200;
}


.select_year{ 
  position: absolute;
  top: 0.1vh;
  left: 32vw;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
}

#year_selection{
  position: absolute;
  top: 4vh;
  left: 32vw;
  height: 35px;
  width: 140px;
  border-radius: 30px;
  cursor: pointer;
  z-index: 1200;
}
.request{
    position: absolute;
  top: 4vh;
  left: 40vw;
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