<template>
    <div class="">
      <label>{{ $t('wemast_change_language') }}</label>
      <select v-model="locale"> 
        <option> English</option>
        <option> Français</option>
        <option> Portuguese</option>
      </select>
      
        
        
      
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  
    // data() {
    //   return {
    //     locale: "English"
    //   };
    // },
    let locale = "English"
    onMounted( () => {
      getUserLanguage()
    })
   
      const setLocale = (locale) => {
        this.$i18n.locale = locale.value;
        import(`quasar/lang/${locale.value}`).then(language => {
          this.$q.lang.set(language.default);
        });
        localStorage.setItem("language", JSON.stringify(locale));
      }
      const  getUserLanguage = () =>  {
        console.log("language ", localStorage.getItem("language"));
        if (localStorage.getItem("language")) {
          const locale = JSON.parse(localStorage.getItem("language"));
          this.locale = locale.label;
          this.setLocale(locale);
        }
      }
    
  
  </script>
  
  <style></style>
  