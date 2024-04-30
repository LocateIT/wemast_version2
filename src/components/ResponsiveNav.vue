<template>
    <div class="card ">
        <Menubar style="border: none">
            <template #start>
                <div class="middle flex  gap-8">



                    <div class=" flex gap-4 text-sm">
                        <img src="../assets/logos/WeMAST.png" class="h-3rem" />

                        <div class=" flex flex-column flex-wrap text-sm">
                            <span class=" projname font-bold text-bluegray-700">{{ $t("home.wemast_title") }}</span>
                            <span class="projname" style="color:steelblue;font-weight:bold">(WeMAST)</span>
                        </div>
                    </div>
                    <div class=" logoss flex gap-1 -ml-6">
                        <img src="../assets/logos/SASSCAL.png" class="h-3rem" />

                        <img src="../assets/logos/Gmes.png" class="h-3rem" />

                        <img src="../assets/logos/Au.png" class="h-3rem" />

                        <img src="../assets/logos/EU.png" class="h-3rem" />


                    </div>




                    <div class="lang -mt-3 -ml-6 text-sm">
                        <LanguageSwitch />
                    </div>
                </div>



            </template>



            <!-- <div class="end_items"> -->
            <!-- <template #end >
                        
                        <LanguageSwitch />
                    </template> -->
            <!-- </div> -->
        </Menubar>
    </div>
</template>



<script setup>
import 'primeflex/primeflex.css'
import LanguageSwitch from './LanguageSwitch.vue';

</script>

<style scoped>
.card {
    width: 100vw;

    ;
    /* height: 10vh; */
    /* margin: 0em 5em; */
    margin-left: 2em;
    font-family: Poppins;
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
    .projname {
  display: none !important;
}
.logoss{
   margin-left: 0.5em !important;
   gap: 3em !important;
}
}


@media only screen and (min-width: 768px) and (max-width: 991px) {

.projname {
  display: none !important;
}
.logoss{
   margin-left: 0.5em !important;
   gap: 3em !important;
}

}

@media only screen and (min-width: 300px) and (max-width: 500px) {
    .card {
   
    margin-top: -1em;
    font-family: Poppins;
}
    .logoss{
   display: none !important;;
}
.projname {
  display: none !important;
}
.projname {
  display: none !important;
}
}
</style>