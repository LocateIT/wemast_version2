<template>
    <nav class="navbar">
        <!-- Logo -->
        

        <div class="flex gap-4 text-sm w-15em">
                                <img src="../assets/logos/WeMAST.png"
                                     class="h-3rem" />
                            
                                <div class="flex  flex-column flex-wrap text-sm">
                                    <span class=" flex-grow-1 font-bold text-bluegray-700">{{ $t("home.wemast_title") }}</span>
                                    <span style="color:steelblue;font-weight:bold">(WeMAST)</span>
                                </div>
                            </div>

        <!-- Partners -->
        <div class="partners">
            <img src="../assets/logos/SASSCAL.png" class="h-3rem" />

            <img src="../assets/logos/Gmes.png" class="h-3rem" />

            <img src="../assets/logos/Au.png" class="h-3rem" />

            <img src="../assets/logos/EU.png" class="h-3rem" />
        </div>

        <!-- Select -->
        <div class="select">
            <LanguageSwitch />
        </div>
    </nav>
</template>

<script setup>
import 'primeflex/primeflex.css'
import LanguageSwitch from './LanguageSwitch.vue';

</script>

<style scoped>
.navbar {
    display: flex;
    flex-direction: row;
    gap: 7em;
    /* justify-content: space-between; */
    /* align-items: center; */
    padding: 10px 50px;
    /* background-color: #333; */
    /* color: #fff; */
}

.logo img {
    height: 40px;
}

.partners {
    display: flex;
    /* Display partner logos in a row */
}

.project-name {
    /* font-size: 1em; */
}

.partners img {
    height: 30px;
    margin: 0 5px;
}

.select {
    width: 200px;
    /* Adjust width as needed */
}
</style>