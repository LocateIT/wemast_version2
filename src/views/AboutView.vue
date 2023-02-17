<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="show_random">show random</button>

    <div v-if="random_container" class="random">
      <random />
    </div>


    
  </div>
</template>

<script setup>

import { ref } from 'vue'
import random from '../components/random.vue'

let random_container = ref(false)
const show_random = () => {
  random_container.value = true
}

</script>

<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
