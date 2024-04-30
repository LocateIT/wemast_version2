<template>
    <div class="card flex flex-row flex-wrap gap-2">
        <FloatLabel class="select w-full md:w-8rem ">
            <Dropdown v-model="selectedBasin" :options="basins" optionLabel="name" class=" w-full  " @click="toggle()"
                @change="handleDropdownChange" />
            <label for="dd-city" class="basin"> {{ $t("home.wemast_select_region") }}</label>

        </FloatLabel>


        <FloatLabel class="select w-full md:w-9rem">
            <Dropdown v-model="selectedIndicator" :options="indicators" optionLabel="name" class="w-full "
                @click="indicatorToggle()" @change="handleIndicator" />
            <label for="indicator" class="basin">{{ $t("home.wemast_select_indicator") }}</label>
        </FloatLabel>


        <FloatLabel class=" select w-full md:w-10rem"
            :style="{ display: storeUserSelections.selected_indicator === 'Basin Vulnerability Index' ? 'none' : '' }">
            <Dropdown v-model="selectedSubIndicator" :options="subindicators" optionLabel="name"
                class=" custom-dropdown w-full " @click="subindicatorToggle()" @change="handleSubIndicator" />
            <label for="dd-city" class="basin">{{ $t("home.wemast_select_subindicator") }}</label>
        </FloatLabel>


        <FloatLabel class=" select w-full md:w-8rem" :style="{
                display: storeUserSelections.selected_sub_indicator === 'Land Cover' ? 'none' :
                    storeUserSelections.selected_sub_indicator === 'Vegetation Cover' ? 'none' :
                        storeUserSelections.selected_sub_indicator === 'Burnt Area FIRMS' ? 'none' :
                            storeUserSelections.selected_sub_indicator === 'Precipitation Index' ? 'none' :
                                storeUserSelections.selected_sub_indicator === 'Undulation' ? 'none' :
                                    storeUserSelections.selected_sub_indicator === 'Soil Moisure Index' ? 'none' :
                                        storeUserSelections.selected_indicator === 'Basin Vulnerability Index' ? 'none' : ''
            }">
            <Dropdown v-model="selectedParameter" :options="parameters" optionLabel="name" class="w-full "
                @click="parameterToggle()" @change="handleParameterChange" />
            <label for="dd-city" class="basin">{{ $t("home.wemast_select_parameter") }}</label>
        </FloatLabel>


        <FloatLabel class="select w-full md:w-8rem" :style="{
                display: storeUserSelections.selected_indicator === 'Basin Vulnerability Index' ? 'none' :
                    storeUserSelections.selected_sub_indicator === 'Land Cover' ? 'none' :
                        storeUserSelections.selected_parameter === 'Wetland Extent' ? 'none' :
                            storeUserSelections.selected_sub_indicator === 'Burnt Area FIRMS' ? 'none' :
                                storeUserSelections.selected_sub_indicator === 'Precipitation Index' ? 'none' :
                                    storeUserSelections.selected_sub_indicator === 'Undulation' ? 'none' :
                                        storeUserSelections.selected_sub_indicator === 'Water Quality' ? 'none' :
                                            storeUserSelections.selected_sub_indicator === 'Soil Moisure Index' ? 'none' :

                                                ''
            }">
            <Dropdown v-model="selectedSatellite" :options="satellites" optionLabel="name" class="w-full "
                @click="satelliteToggle()" @change="handleSatelliteChange" />
            <label for="dd-city" class="basin">{{ $t("home.wemast_select_satellite") }}</label>
        </FloatLabel>

        <FloatLabel class="select w-full md:w-8rem" :style="{
                display: storeUserSelections.selected_sub_indicator === 'Land Cover' ? 'none' :
                    storeUserSelections.selected_parameter === 'Wetland Extent' ? 'none' :
                        storeUserSelections.selected_sub_indicator === 'Burnt Area FIRMS' ? 'none' :
                            storeUserSelections.selected_sub_indicator === 'Undulation' ? 'none' :
                                storeUserSelections.selected_sub_indicator === 'Water Quality' ? 'none' :
                                    ''
            }">
            <Dropdown v-model="selectedSeason" :options="seasons" optionLabel="name" class="w-full "
                @click="seasonToggle()" @change="handleSeasonChange" />
            <label for="dd-city" class="basin">{{ $t("home.wemast_select_season") }}</label>
        </FloatLabel>


        <FloatLabel class="select w-full md:w-8rem" :style="{
                display: storeUserSelections.selected_sub_indicator === 'Undulation' ? 'none' :
                    storeUserSelections.selected_sub_indicator === 'Burnt Area FIRMS' ? 'none' : ''
            }">
            <Dropdown v-model="selectedYear" :options="years" optionLabel="name" class="w-full " @click="yearToggle()"
                @change="handleYearChange" />
            <label for="dd-city" class="basin">{{ $t("home.wemast_select_year") }}</label>
        </FloatLabel>


        <FloatLabel class="w-full md:w-10rem" v-if="storeUserSelections.selected_sub_indicator === 'Burnt Area FIRMS'">
            <label for="buttondisplay">{{ $t("home.date_label") }}</label>
            <Calendar v-model="selectedDate" @update:v-model="selectedDate = $event" showIcon :showOnFocus="false" dateFormat="dd-mm-yy" />
        </FloatLabel>

        <Button label="" severity="info" class="requestt" rounded @click="$emit('fetchData')">{{ $t("home.request") }}</Button>



    </div>

</template>

<script setup>
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'

import { ref, watch } from "vue";
import { useCounterStore } from '../../stores/counter';

const selectedBasin = ref();
const selectedIndicator = ref();
const selectedSubIndicator = ref();
const selectedYear = ref();
const selectedSeason = ref()
const selectedSatellite = ref()
const selectedParameter = ref()
const buttondisplay = ref();
const selectedDate = ref(null);

const storeUserSelections = useCounterStore();

let basins = ref([])
let indicators = ref([])
let subindicators = ref([])
let years = ref([])
let seasons = ref([])
let satellites = ref([])
let parameters = ref([])



const selectedDateWatcher = () => {
    //   console.log('Selected date changed:', selectedDate.value);
    const date = new Date(selectedDate.value);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month is 0-indexed, so we add 1
    const year = date.getFullYear();
    
    const formattedDate = `${year}-${month}-${day}`

    storeUserSelections.burntAreaDate = formattedDate
    console.log('Selected date changed:', formattedDate);
    return formattedDate;
};

// Watch for changes to selectedDate
watch(selectedDate, selectedDateWatcher);
const toggle = () => {

    var basinlist = storeUserSelections.fetchCountriesList()
    // console.log(basinlist)

    var basinObject = basinlist.map((item) => ({ "name": item, "code": item }))
    // console.log(basinObject)
    basins.value = basinObject

}
const handleDropdownChange = () => {
    console.log('Selected basin:', selectedBasin.value.name);
    // You can perform additional actions with the selected item here
    storeUserSelections.selected_basin = selectedBasin.value.name
    // console.log('Store basin', storeUserSelections.selected_basin)
    storeUserSelections.showSelectedCountry(selectedBasin.value.name)

    storeUserSelections.getstats()
};

const indicatorToggle = () => {
    let indicatorList = storeUserSelections.fetchIndicatorList()
    let indicatorObject = indicatorList.map((item) => ({ "name": item, "code": item }))
    indicators.value = indicatorObject

}

const handleIndicator = () => {
    console.log('Selected indicator:', selectedIndicator.value.name);
    // You can perform additional actions with the selected item here
    storeUserSelections.selected_indicator = selectedIndicator.value.name
};


const subindicatorToggle = () => {
    // console.log('Selected indicator:', selectedIndicator.value.name);

    let subindicatorList = []
    if (selectedIndicator.value.name === 'Exposure') {
        subindicatorList = ['Land Cover', 'Vegetation Cover', "Wetland Inventory"]
    }
    if (selectedIndicator.value.name === 'Sensitivity') {
        subindicatorList = ['Water Quality', 'Soil Moisure Index']
    }
    if (selectedIndicator.value.name === 'Resiliance') {
        subindicatorList = ['Burnt Area FIRMS', 'Precipitation Index', 'Undulation']
    }

    let subindicatorObject = subindicatorList.map((item) => ({ "name": item, "code": item }))
    subindicators.value = subindicatorObject

}
const handleSubIndicator = () => {
    console.log('Selected subindicator:', selectedSubIndicator.value.name);
    // You can perform additional actions with the selected item here
    storeUserSelections.selected_sub_indicator = selectedSubIndicator.value.name
};

const yearToggle = () => {
    let yearList = []
    //   console.log(selectedSubIndicator.value.name)

    if (selectedSubIndicator.value?.name === 'Land Cover') {
        yearList = ["1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006",
            "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017",
        ].reverse() // removed'2018','2019','2020', '2021', "2022"


    }


    if (selectedIndicator.value.name === 'Basin Vulnerability Index') {
        yearList = ["2000", "2005", "2010", "2015", "2022"].reverse()
    }
    if (selectedSubIndicator.value?.name === 'Precipitation Index'
        || selectedSubIndicator.value?.name === 'Soil Moisure Index') { //removed 2000 since it lacks stats data
        yearList = ["2001", "2002", "2003", "2004", "2005", "2006",
            "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017",
            '2018', '2019', '2020', '2021', "2022"].reverse()

    }


    if (selectedSubIndicator.value?.name === 'Burnt Area MODIS'
        || selectedSubIndicator.value?.name === 'Burnt Area FIRMS') { //removed 2000 since it lacks stats data
        yearList = ["2001", "2002", "2003", "2004", "2005", "2006",
            "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017",
            '2018'].reverse()
    }




    if (selectedSubIndicator.value?.name === 'Wetland Inventory' && selectedParameter.value.name === 'Wetland Extent'
        || selectedSubIndicator.value?.name === 'Water Quality' && selectedParameter.value.name === 'Sus Sediments'
        || selectedSubIndicator.value?.name === 'Water Quality' && selectedParameter.value.name === 'Turbidity') {
        yearList = ["2000", "2001", "2002", "2003", "2004", "2005", "2006",
            "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017",
            '2018', '2019', '2020', '2021'].reverse()

    }
    if (selectedSubIndicator.value?.name === 'Vegetation Cover' && selectedSatellite.value.name === 'LANDSAT') { //removed 2000 since it lacks stats data
        yearList = ["2001", "2002", "2003", "2004", "2005", "2006",
            "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017",
            '2018', '2019', '2020', '2021', "2022"].reverse()

    }


    if (selectedSatellite.value?.name === 'LANDSAT') { //removed 2000 since it lacks stats data
        yearList = ["2001", "2002", "2003", "2004", "2005", "2006",
            "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017",
            '2018', '2019', '2020', '2021', "2022"].reverse()
    }
    if (selectedSatellite.value?.name === 'SENTINEL') {
        yearList = ["2016", "2017", '2018', '2019', '2020', '2021', "2022"].reverse()
    }

    let yearsObject = yearList.map((item) => ({ "name": item, "code": item }))
    years.value = yearsObject
}
const handleYearChange = () => {
    console.log('Selected year:', selectedYear.value.name);
    storeUserSelections.selected_year = selectedYear.value.name

    storeUserSelections.getstats()

}
const seasonToggle = () => {
    let seasonList = storeUserSelections.fetchSeasonsList()
    console.log('Selected season:', seasonList)
    let seasonObject = seasonList.map((item) => ({ "name": item, "code": item }))
    seasons.value = seasonObject

}
const handleSeasonChange = () => {
    console.log('Selected season:', selectedSeason.value.name);
    storeUserSelections.selected_season = selectedSeason.value.name

}

const satelliteToggle = () => {
    let satelliteList = storeUserSelections.fetchSatelliteList()
    console.log('Selected sensor:', satelliteList)
    let satelliteObject = satelliteList.map((item) => ({ "name": item, "code": item }))
    satellites.value = satelliteObject

}
const handleSatelliteChange = () => {
    console.log('Selected season:', selectedSatellite.value.name);
    storeUserSelections.selected_satellite = selectedSatellite.value.name

}

const parameterToggle = () => {
    let parameterList = []
    //    console.log('Selected parameter:', parameterList)

    if (selectedSubIndicator.value?.name === 'Wetland Inventory') {
        parameterList = ['Wetland Extent', 'Wetland Status']

    }
    if (selectedSubIndicator.value?.name === 'Water Quality') {
        parameterList = ['Turbidity', 'Sus Sediments']
    }
    let parameterObject = parameterList.map((item) => ({ "name": item, "code": item }))
    parameters.value = parameterObject

}
const handleParameterChange = () => {
    console.log('Selected parameter:', selectedParameter.value.name);
    storeUserSelections.selected_parameter = selectedParameter.value.name

}




</script>

<style scoped>
.card {
    font-family: Poppins;


}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
    .card {
        margin-left: -2em !important;
    }
}
@media only screen and (min-width: 300px) and (max-width: 500px) {
    .card {
        margin-left: -.5em !important;
        margin-top: -1.5em !important;
    }
    .select {
       width:5em !important;
       padding: 0;
    }
    .basin{
        /* display: none; */
        font-size: 10px;
    }
    .requestt{
        width: 6.5em
    }
}
</style>