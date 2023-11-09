<template>
  <div class="scale" v-if="scale_div">
    <p class="scale_text">To change your screen scale and layout, you can go to your operating system or display settings.
         <br> Under Scale and layout, select 100% (recommended)</p>
         <button class="accept" @click="close_scale();$emit('opensettings')">OK</button>

  </div>
</template>

<script setup>
import { ref } from 'vue'
let scale_div = ref(true)

const close_scale = () =>{
    scale_div.value = false
  }

</script>

<style scoped>
.scale{
    width: 50vw;
    height: 30vh;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
justify-content: center;
align-items: center;
font-weight: 400;
line-height: 30px;

}
.accept{
    background-color: steelblue;
    padding: 10px;
    width: 50px;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-weight: 600;
   
}

</style>