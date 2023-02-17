<template>
     <button @click="alertmethod">Click!</button>
  <div v-if="about_div" style="background-color: blue; height: 200px; width: 200px;">

</div>
</template>

<script setup>
import { ref } from "vue"
let about_div = ref(false)
const alertmethod = () => {
  about_div.value = true
}
</script>

<style>

</style>