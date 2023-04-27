<template>
    <label class="change" for=""></label>
    <div class="aselect"  >
      <div    class="selector" @click="toggle()">
          <div class="label">
                  <span>{{ storeUserSelections.language_placeholder }}</span>
          </div>
          <!-- <div class="arrow" :class="{ expanded : visible }"></div>  @input="storeUserSelections.showSelectedCountry" -->
          <img src=" /uiIcons/arrow_drop_down_circle.svg" alt="" class="arrow" :class="{ expanded : visible }">
          <div :class="{ hidden : !visible, visible }">
              <ul>
  
                  <li :class="{ current : item === storeUserSelections.language_placeholder }" 
                  v-for="item in storeUserSelections.language_list" :key="item"
                   @click="storeUserSelections.showSelectedLanguage(item);changeLocale()" >{{ item }}</li>
                  
              </ul>
          </div>
      </div> 
      <!-- select end -->
  </div>

  
  

</template>

<script setup>
  import { ref, computed, watch, onMounted} from 'vue'
  // import { useI18n } from "vue-i18n"
  // import i18n from '../i18n.js';
  import {useCounterStore } from '../stores/counter';
  import axios from 'axios';
  const storeUserSelections = useCounterStore();


        
          // let list = ["Limpopo","Cuvelai","Zambezi", "Okavango", 'pogba']
          // console.log(list, 'regions list')
          let counties = ref([])
          let visible = ref(false)
         
          let current_geojson = ref({})
          let locale = ref('')
          let selected = ref('')


      
  
  

          
          const toggle = () => {
              visible.value = !visible.value;
              storeUserSelections.fetchLanguagesList()
              
              // console.log(storeUserSelections.fetchCountriesList)
              
          }
        //   const select = (option) =>{
        //       placeholder.value = option;
        //       console.log(option, 'selected option ')
        //       // storeUserSelections.showSelectedCountry


        //   }


        //   const { t } = useI18n({
        //     inheritLocale: true,
        //     useScope: 'local'
        // })


        const changeLocale = (locale) => {
             i18n.global.locale.value = locale
              locale = selected.value 
             console.log(locale, 'locale')
             localStorage.setItem("language", JSON.stringify(locale))
   
    
  }

  const getLanguage = () => {
    var selected_language = storeUserSelections.getSelectedLanguage
    
    selected.value = selected_language
    console.log(selected_language, 'selected language ')

    console.log("language ", localStorage.getItem("language"))
    let locale = JSON.parse(localStorage.getItem("language"))
    locale.value = locale
    changeLocale(locale)
  
  }

  const setSelectedLanguage = computed ( () => {
    console.log(storeUserSelections.selected_language, 'selected language ')
   
  
    return storeUserSelections.getSelectedLanguage
  
  })
  watch( setSelectedLanguage , () => {
    getLanguage()
    
  })


    //       onMounted( () => {
    //         getUserLanguage()
    //         })
  
      
    //       const setLocale = (locale) => {
    //     this.$i18n.locale = locale.value;
    //     import(`quasar/lang/${locale.value}`).then(language => {
    //       this.$q.lang.set(language.default);
    //     });
    //     localStorage.setItem("language", JSON.stringify(locale));
    //   }
    //   const  getUserLanguage = () =>  {
    //     console.log("language ", localStorage.getItem("language"));
    //     if (localStorage.getItem("language")) {
    //       const locale = JSON.parse(localStorage.getItem("language"));
    //       this.locale = locale.label;
    //       this.setLocale(locale);
    //     }
    //   }

      

              
              

</script>

<style scoped>
.change{
    position: absolute;
top: -5vh;

}
.aselect {
  position: absolute;
top: -2vh;
left:-0.52vw;
 
  margin: 20px auto;
}
      .selector {
          border: 1px  #ccc solid;
          background: #fff;
          position: relative;
          left: 1vw;
          z-index: 1;
          height: 35px;
width: 120px;
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
      .visible {
          visibility: visible;
      }
  
</style>