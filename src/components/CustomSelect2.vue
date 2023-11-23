<template>
	
      <div class="aselect" :data-value="placeholder"   >
	    <div   class="selector" @click="toggle()"  >
	        <div class="label">
				    <span>{{ storeUserSelections.region_placeholder }}</span>
	        </div>
			<!-- <div class="arrow" :class="{ expanded : visible }"></div>  @input="storeUserSelections.showSelectedCountry"
			:class="{'hide_dropdown':(storeUserSelections.visible_indicator = true)}" element_id !== element_id  -->
            <img  id="region_dropdown" src=" /uiIcons/arrow_drop_down_circle.svg" alt="" class="arrow" :class="{ expanded : visible }" @click="getelementid($event)">
	        <div 
			:class="{ hidden : !visible, visible, hide_dropdown : storeUserSelections.visible_indicator === true
				 || storeUserSelections.visible_sub_indicator === true
				 || storeUserSelections.visible_year === true }"
			>
	            <ul  >  
    
	                <li   :class="{ current : item === storeUserSelections.region_placeholder }" 
					v-for="item in storeUserSelections.countries" :key="item"
					 @click="storeUserSelections.showSelectedCountry(item)"   
					
					>{{ item }}</li>
                    
	            </ul>
	        </div>
	    </div> 
		<!-- select end -->
	</div>
	
</template>

<script setup>
    import { ref, computed, watch} from 'vue'
    import {useCounterStore } from '../stores/counter';
	import axios from 'axios';
    const storeUserSelections = useCounterStore();


			// onMounted( ()=> {
				let placeholder = ref('Cuvelai')
			// let list = ["Limpopo","Cuvelai","Zambezi", "Okavango", 'pogba']
            // //console.log(list, 'regions list')
			let counties = ref([])
            let visible = ref(false)
			let region_state = ref(null)
			let current_geojson = ref({})
			let element_id = ref('')
	
		
			const toggle = () => {
				visible.value = !visible.value;
				storeUserSelections.fetchCountriesList()
				
				storeUserSelections.visible_region = visible.value
				// //console.log(storeUserSelections.visible_region, 'visible region')
				
            }


			const getRegionState = () => {
    var selectedState = storeUserSelections.getRegionState
    region_state.value = selectedState
    //console.log(region_state.value , 'changed state region')
  
  }
  const setSelectedState = computed ( () => {
    //console.log(storeUserSelections.visible_region, 'selected region state')
    return storeUserSelections.getRegionState
  
  })
  watch( setSelectedState , () => {
    getRegionState()
    
  })



			const select = (option) =>{
			    placeholder.value = option;
				//console.log(option, 'selected option ')
				// storeUserSelections.showSelectedCountry


			}
			// })
			const getelementid = (event) => {
            //console.log(event.srcElement.id, 'cliked_id')
			element_id.value = event.srcElement.id

          }
          
			
		

				
				

</script>

<style scoped>
.show{
	display: block;
}
.hide_dropdown{
  display: none;
}
.aselect {
    position: absolute;
  top: -2vh;
  left:-0.52vw;
	margin: 20px auto;
	/* background-color: #e61db3; */
}
		.selector {
			border: 1px  #ccc solid;
			/* background: #d63d3d; */
			position: relative;
			left: 1vw;
			z-index: 1;
            height: 35px;
  width: 120px;
  border-radius: 30px;
  cursor: pointer;
  z-index: 500;
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
			/* z-index: 1; */
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
		.visible {
			visibility: visible;
		}
	
</style>