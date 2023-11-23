<template>
    <div class="aselect" :data-value="placeholder" >
      <div class="selector" @click="toggle()">
          <div class="label">
                  <span>{{ storeUserSelections.year_placeholder }}</span>
          </div>
          <!-- <div class="arrow" :class="{ expanded : visible }"></div> :data-list="list"-->
          <img src=" /uiIcons/arrow_drop_down_circle.svg" alt="" class="arrow" :class="{ expanded : visible }">
          <div :class="{ hidden : !visible, visible, hide_dropdown : storeUserSelections.visible_parameter === true }">
              <ul>
  
                  <li :class="{ current : item === storeUserSelections.year_placeholder }" 
                  v-for="item in storeUserSelections.year_list" :key="item"
                  @click="storeUserSelections.showSelectedYear(item)">{{ item }}</li>
                  
              </ul>
          </div>
      </div>
  </div>

</template>

<script setup>
  import { ref, watch, computed} from 'vue'
  import {useCounterStore } from '../stores/counter';
  const storeUserSelections = useCounterStore()

 


          let placeholder = ref('2017')
        //   let list = ['2019', '2020', '2021', '2022']
        //   //console.log(list, 'regions list')
          let visible = ref(false)
    let year_state = ref(null)
      
          const toggle = () => {
              visible.value = !visible.value;
              storeUserSelections.visible_year = visible.value
              
              storeUserSelections.fetchYearList()
          }

              const getYearState = () => {
    var selectedYearState = storeUserSelections.getYearState
    year_state.value = selectedYearState
  
    //console.log(year_state.value , 'changed state year ')
  
  }
  const setselectedYearState = computed ( () => {
    //console.log(storeUserSelections.visible_year, 'selected year state')
   
    return storeUserSelections.getYearState
  
  })
  watch( setselectedYearState , () => {
    getYearState()
   
    
  })
          const select = (option) =>{
              placeholder.value = option;
          }
      

</script>

<style scoped>
.hide_dropdown{
  display: none;
}
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
width: 140px;
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
          height: 145px;
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
    overflow-y:scroll;
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
      .visible {
          visibility: visible;
      }

      
  
</style>