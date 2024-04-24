<template>
      <div class="wetlands">
            <div class="wet_flex flex flex-column gap-1 px-6 ">
                  <p class="wetlands_sadc">{{ $t("home.wetlands_sadc") }}</p>
                  <p class="eo_products">{{ $t("home.eo_products") }}</p>
                  <p class="sadc-text">{{ $t("home.sadc_text") }}</p>
            </div>
            <div class="sadc_images ">
                  <div class="grid-item">
                        <img src="/images/sadc1.png" alt="Cuvelai">
                  </div>

                  <div class="grid-item">
                        <img src="/images/sadc2.png" alt="Cuvelai">
                  </div>
            </div>


      </div>
</template>

<script setup>

</script>

<style scoped>
.wetlands {
      margin-top: 5em;
      margin-bottom: 4em;

}



.wet_flex {
      margin-bottom: 10em;
}

.wetlands_sadc {
      font-size: 2.5em;
      font-weight: bold;
      color: #323690;
}

.eo_products {
    

      font-size: 1.5em;
      font-weight: bold;
      
      color: #050000;
}

.sadc-text {

     
      font-size: 1.5em;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.3;
      letter-spacing: normal;
      text-align: left;
      color: #707070;
}


.sadc_images {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.3em;
      margin-top: -10em;
      padding: 1em;

}

.grid-item {
      position: relative;
      overflow: hidden;
      height: 65vh;
  
}

.grid-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
}

@media (max-width: 768px) {

      .wetlands_sadc {
            font-size: 2em !important;
      }

      .eo_products {
            font-size: 1.2em;
            font-weight: bold;
            color: #050000;
      }

      .sadc-text {

            font-size: 1em;

            color: #707070;
      }

      .grid-item img {
      width: 100%;
      height: 70%;
      object-fit: cover;
}


}

@media screen and (min-width: 500px) and (max-width: 900px) {


      .wetlands_sadc {
            font-size: 2.5em !important;
      }

      .eo_products {
            font-size: 1.5em;
            font-weight: bold;
            color: #050000;
      }

      .sadc-text {

            font-size: 1em;

            color: #707070;

      }


}
</style>