<template>
    <div id="river_basins">
        <div class=" flex flex-column -mb-4 px-3">
            <p class="river_basins_title">{{ $t("home.river") }}</p>
            <p class="river_basins_infographics">{{ $t("home.infographics") }}</p>
        </div>

        <div class="grid-container ">
            <div class="grid-item">
                <img src="/images/sadc2.png" alt="Cuvelai">
            </div>

            <div class="grid-item bg-blue-50">
                <p class="cuvelai_basin" id="cuvelai_basin_id">{{ $t("home.cuvelai_basin") }}</p>
                <p class="cuvelai_text">
                    {{ $t("home.cuv_text") }}
                </p>
            </div>

            <div class="grid-item" id="limpopo">
                <p class="limpopo_basin text-200" id="limpopo_basin_id">{{ $t("home.limpopo_basin") }}</p>
                <p class="limpopo_text">
                    {{ $t("home.lim_text") }}
                </p>
            </div>


            <div class="grid-item">
                <img src="/images/hippo.png" alt="Limpopo">
            </div>

            <div class="grid-item">
                <img src="/images/waterfall.png" alt="Okavango">
            </div>

            <div class="grid-item">
                <p class="cuvelai_basin" id="okavango_basin_id">{{ $t("home.okavango_basin") }}</p>
                <p class="cuvelai_text">
                    {{ $t("home.oka_text") }}
                </p>
            </div>


            <div class="grid-item bg-blue-700">
                <p class="zambezi_basin text-200" id="zambezi_basin_id">{{ $t("home.zambezi_basin") }}</p>
                <p class="zambezi_text">{{ $t("home.zam_text") }} </p>
            </div>

            <div class="grid-item">
                <img src="/images/lion.png" alt="Zambezi">
            </div>

        </div>



    </div>

</template>

<script setup>

</script>

<style scoped>
#river_basins {
    padding: 1em;
}

.river_basins_title {


    font-size: 2.5em;
    font-weight: 700;
    /* font-stretch: normal;
      font-style: normal;
      line-height: 1.5;
      letter-spacing: normal;
      text-align: left; */
    color: #323690;
}

.river_basins_infographics {
    font-size: 1.5em;
    font-weight: bold;
    /* font-stretch: normal;
      font-style: normal;
      line-height: 1.3;
      letter-spacing: normal;
      text-align: left; */
    color: #050000;
}

.basins {
    /* position: absolute; */
    /* top: 250px; */
    /* left: 3.5vw;    */



    /* max-width: 1200px; */
    /* margin: 0 auto; */
    margin-top: 2em;
    display: grid;
    /* gap: 0rem; */


}

.grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.3em;
    padding: 1em;
    /* Adjust the gap between images */
}

.grid-item {
    position: relative;
    overflow: hidden;
    height: 65vh;
    /* Adjust the height of each row */
}

.grid-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}


.basin {
    background-color: rgb(214, 217, 219);
    color: white;
    padding: 1rem;
    height: 37rem;
    width: 53rem;
}

@media (min-width: 900px) {
    .basins {
        grid-template-columns: repeat(2, 1fr);
    }

   
}
@media screen and (min-width: 1100px) and (max-width: 1600px) {


.cuvelai_text {

    font-size: 1em !important;
    margin-top: -4em;
    

    
}
.limpopo_text{
    font-size: 0.9em !important;
    margin-top: -2em;

}

.zambezi_text {
    font-size: 0.9em !important;
    margin-top: -4em;

    

}


}

@media  screen and (min-width: 900px) and (max-width: 1100px) {


.cuvelai_text {

    font-size: 0.9em !important;
    margin-top: -4em;
    

    
}
.limpopo_text{
    font-size: 0.8em !important;
    margin-top: -2em;

}

.zambezi_text {
    font-size: 0.8em !important;
    margin-top: -4em;

    

}


}

@media  screen and (min-width: 500px) and (max-width: 900px) {


.cuvelai_text {

    font-size: 0.7em !important;
    margin-top: -4em;
    

    
}
.limpopo_text{
    font-size: 0.65em !important;
    margin-top: -2em;

}

.zambezi_text {
    font-size: 0.7em !important;
    margin-top: -4em;

    

}


}

.cuvelai_basin {

    font-size: 2.5em;
    font-weight: bold;

    color: #323690;

    padding: 0.5em;
}

.cuvelai_text {

    font-size: 1.2em;

    color: #707995;
    padding: 0.5em;
}

.limpopo_basin {

    font-size: 2.5em;
    font-weight: bold;

    padding: 30px 0px 0px 30px;

}

#limpopo {
    background-color: #353996;

}

.limpopo_text {
    font-size: 1.2em;
    padding: 0 2em;
    color: #ffffff;

}




.okavango_basin {

    font-size: 2.5em;
    font-weight: bold;

    padding: 30px 0px 0px 0px;
}

.okavango_text {
    font-size: 1.2em;
    padding: 0em 2.5em;
    color: #707070;

}

#okavango {
    height: 50rem;

}

#zambezi {
    background-color: #1481c3;
    height: 50rem;

}

.zambezi_basin {

    font-size: 2.5em;
    font-weight: bold;

    color: #323690;

    padding: 30px 0px 0px 30px;

}

.zambezi_text {
    font-size: 1.2em;
    padding: 2em;
    color: #ffffff;

}
</style>