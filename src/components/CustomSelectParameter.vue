<template>
    <div class="aselect" :data-value="placeholder" :data-list="list">
      <div class="selector" @click="toggle()">
          <div class="label">
                  <span>{{ storeUserSelections.parameter_placeholder }}</span>
          </div>
          <!-- <div class="arrow" :class="{ expanded : visible }"></div> -->
          <img src=" /uiIcons/arrow_drop_down_circle.svg" alt="" class="arrow" :class="{ expanded : visible }">
          <div :class="{ hidden : !visible, visible, hide_dropdown : storeUserSelections.visible_year === true }">
              <ul>
  
                  <li :class="{ current : item === storeUserSelections.parameter_placeholder }" 
                  v-for="item in storeUserSelections.parameter_list" :key="item"
                  @click="storeUserSelections.showSelectedParameter(item)">{{ item }}</li>
                  
              </ul>
          </div>
      </div>
  </div>

</template>

<script setup>
  import { ref, computed, watch} from 'vue'
  import {useCounterStore } from '../stores/counter';
  const storeUserSelections = useCounterStore()


          let placeholder = ref('')
        //   let list = ['2019', '2020', '2021', '2022']
        //   console.log(list, 'regions list')
          let visible = ref(false)
          	let parameter_state = ref(null)
  
      
          const toggle = () => {
              visible.value = !visible.value;
              storeUserSelections.fetchParameterList()
              storeUserSelections.visible_parameter = visible.value
          }


          		const getParameterState = () => {
    var selectedState = storeUserSelections.getParameterState
    parameter_state.value = selectedState
    console.log(parameter_state.value , 'changed state parameter')
  
  }
  const setSelectedState = computed ( () => {
    console.log(storeUserSelections.visible_parameter, 'selected parameter state')
    return storeUserSelections.getParameterState
  
  })
  watch( setSelectedState , () => {
    getParameterState()
    
  })
          const select = (option) =>{
              placeholder.value = option;
          }
      

</script>

<style scoped>
.aselect {
  position: absolute;
top: -2vh;
left:-0.52vw;
 
  margin: 20px auto;
}
      .selector {
        border: 1px  #ccc solid;
          background: #F8F8F8;
          position: relative;
          z-index: 1;
          height: 35px;
width: 190px;
border-radius: 30px;
cursor: pointer;
      }
          .arrow {
              position: absolute;
              right: 10px;
              top: 0.6vh;
              /* width: 0;
              height: 0;
              border-left: 7px solid transparent;
              border-right: 7px solid transparent;
              border-top: 10px solid STEELBLUE; */
              transform: rotateZ(0deg) translateY(0px);
              transition-duration: 0.3s;
              transition-timing-function: cubic-bezier(.59,1.39,.37,1.01);
          }
          .expanded {
              transform: rotateZ(180deg) translateY(2px);
          }
          .label {
              display: block;
              padding-top: 5px;
              padding-left: 17px;
              font-size: 16px;
              color: rgb(8, 8, 8);
          }
      
      ul {
          width: 100%;
          list-style-type: none;
          padding: 8px;
          margin: 0;
          font-size: 14px;
          border: 1px solid gainsboro;
          position: absolute;
          top: 5.5vh;
          z-index: 1;
    background: STEELBLUE;
    border-radius: 7px;
    z-index: 5000;
      }
      li {
          padding: 12px;
          color: white;
    border-top: white 1px solid;
  
}
.border_bottom{
  padding-right: 20px;
  padding-right: 20px;
}

          li:hover {
              color: white;
              background: rgb(62, 114, 156);
          }
      
      
      .hidden {
          visibility: hidden;
      }
      .hide_dropdown{
  display: none;
}
      .visible {
          visibility: visible;
      }
  
</style>