<template>
  <div class="compare_layers">
    <div class="radio_labels_container">
        <div class="radio_selections">
       
       <img src=" /uiIcons/radio.svg"  class="parameters" @click="handleParameterSwap()"   :class="
                          radio_selection === 'parameters'
                            ? 'radio_swap'
                            : ''
                        "
                        style="cursor: pointer;">
       <img src=" /uiIcons/radio.svg" class="time" @click="handleTimeSwap()"   :class="
                          radio_selection === 'time'
                            ? 'radio_swap'
                            : ''
                        "
                        style="cursor: pointer;">
      
   </div>
   <div class="radio_labels">
       <label for="" class="parameters1">Parameters</label>
       <label for="" class="time1">Time</label>
   </div>
    </div>
    

    
    <div v-if="radio_selection ==='parameters'" class="compare_selections">
        <p class="select_indicator">Select Indicator</p>
        <div class="indicator_selection">
                <CustomSelectIndicatorCompare />
        </div>

        <p class="select_sub_indicator">Select Sub-Indicator</p>
        <div class="sub_indicator_selection">
                <CustomSelectSubIndicatorCompare />
        </div>
    </div>

    <div v-if="radio_selection ==='time'" class="compare_selections">
        <p class="select_indicator">Select Year</p>
        <div class="indicator_selection">
            <CustomSelectYearCompare />
                
        </div>

        <!-- <p class="select_sub_indicator">Select Time</p> -->
        <div class="sub_indicator_selection">
                <button id="compare_layers" class="compare_button" type="button" @click="$emit('fetchCompareData')">Compare</button>
        </div>
    </div>
  </div>
</template>

<script setup>
    import CustomSelectIndicatorCompare from '../components/CustomSelectIndicatorCompare.vue';
    import CustomSelectYearCompare from './CustomYearSelectCompare.vue'
    import CustomSelectSubIndicatorCompare from '../components/CustomSelectSubIndicatorCompare.vue'
    import { ref } from 'vue'

    let radio_selection = ref("parameters") 

    const handleParameterSwap = () => {
      radio_selection.value = 'parameters';
    }

    const handleTimeSwap = () => {
      radio_selection.value = 'time';
    }
</script>

<style scoped>
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
    .compare_layers{
        height: 250px;
        width: 300px;
        background-color: #fff;
    }
    .compare_selections{
        position: absolute;
        left:1.5vw;
        top: 1vh;
        height: 180px;
        width: 280px;
    }
    .select_indicator{
        position: absolute;
        top: 7vh;
        left: 1vw;
        font-weight: 700;
    }
    .indicator_selection{
        position: absolute;
        top: 11vh; 
        left: 1vw;
        z-index: 500;
    }

    .select_sub_indicator{
        position: absolute;
        top: 15vh;
        left: 1vw;
        font-weight: 700;
        
    }
    .sub_indicator_selection{
        position: absolute;
        top: 19vh; 
        left: 1vw;
    }
    .compare_button{
        position: relative;
        top: -1.5vh;
        left: -.5vw;
        height: 35px;
        width: 203px;
        border-radius: 30px;
        border: none;
        color: #fff;
        background-color: steelblue;
        cursor: pointer;
    }

</style>