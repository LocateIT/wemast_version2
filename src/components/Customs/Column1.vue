<template>
    <div class="p-grid">
      <!-- Column for icons -->
      <div class="p-col">
        <div class="icon-container">
          <img class="pi pi-search" src=" /uiIcons/home-landing.svg">
          <img class="pi pi-search" src=" /uiIcons/home-landing.svg">
          <img class="pi pi-search" src=" /uiIcons/home-landing.svg">
          <img class="pi pi-search" src=" /uiIcons/home-landing.svg">
        </div>
      </div>
  
      <!-- Column for div elements -->
      <div class="p-col flex flex-column gap-2 p-4">
        <!-- First div element -->
        <div class="div-element">
            <img class="pi pi-search" src=" /uiIcons/home-landing.svg">
          <span>Advanced Filter</span>
        </div>
  
        <!-- Second div element -->
        <div class="div-element">
            <img class="pi pi-search" src=" /uiIcons/home-landing.svg">
          <span>Compare</span>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .icon-container {
    display: flex;
    flex-direction: column;
    gap: 2em;
    flex-wrap: wrap;
    
    justify-content: space-evenly;
  }
  
  .icon-container i {
    font-size: 2rem;
    margin: 0.5rem;
  }
  
  .div-element {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    background-color: steelblue;
    color: #fff;
  }
  
  .div-element i {
    font-size: 1.5rem;
    margin-right: 0.5rem;
   
  }
  </style>
  