<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="alertmethod">Click!</button>
  </div>
</template>

<script setup>
const alertmethod = () => {
  alert('clicked profile')
}

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
