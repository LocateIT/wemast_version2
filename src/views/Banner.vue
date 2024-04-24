<template>

<div class="banner flex flex-column  ">
                  <div class="bannercontent flex flex-row gap-2 xl:pb-5">
                        <img class="bulb" src="/uiIcons/challenge.svg" alt="">
                        <div class="title">
                              {{ $t("home.wemast_title") }} <span class="abbreviation">(WeMAST)</span>
                        </div>
                  </div>
                  <!-- @click="$router.push('/dashboard')" -->
                  <RouterLink to="/dashboard">
                        <button class="visit ">{{ $t("home.visit_portal") }}</button>
                  </RouterLink>
                  <RouterView />



            </div>
  
</template>

<script setup>

</script>

<style scoped>

.banner {
      position: absolute;

      min-height: 46vh;
      max-width: 100%;
      top: 10vh;
      left: 0;
      margin: 0 3em;
      background-color: #2e3192;
      padding: 4em 2em;


}



.title {

      font-size: 3em;
      color: #ffffff;
      /* font-weight: bold; */


      @media (max-width: 768px) {
            font-size: 1.5em !important;
            padding-top: 6em;
            margin-left: -.5rem !important;
      }

      @media (max-width: 480px) {
            font-size: 1.2em !important;
      }

}

.abbreviation {
      font-weight: bold;
      color: #1481c3;
}

.visit {
      text-decoration: none;
      color: white;
      cursor: pointer;
      background-color: #2e3192;
      border: #1481c3 4px solid;

      border-radius: 3em;
      font-size: 1.2em;
      margin-left: 6vw;
      padding: 0.7em 1em;


      @media (max-width: 768px) {
            font-size: 1em !important;

            margin-left: 5rem !important;
      }

}

</style>