<template>
  <div class="flex flex-wrap justify-content-center align-items-center" >
                  <div class="col-12 md:col-6 xl:col-3 ">

                        <div class="section p-3 ">
                              <Card>

                                    <template #title>
                                          <div class="card_header flex flex-row gap-1">
                                                <img src="/uiIcons/challenge_hightlight.svg" alt="Icon 1">
                                                <p style="color: #2e3192;font-weight: bold">{{ $t("home.geodata") }}</p>
                                          </div>
                                    </template>
                                    <template #subtitle>{{ $t("home.geodata_text") }}</template>
                                    <template #content>



                                          <img alt="user header" src="/images/bvi_home.png" class="hightlight-item" />
                                    </template>
                              </Card>



                        </div>


                  </div>
                  <div class="col-12 md:col-6 lg:col-3">
                        <div class="section p-3 ">

                              <Card>

                                    <template #title>
                                          <div class="card_header flex flex-row gap-1">
                                                <img class="-mt-2" src="/uiIcons/watch.svg" alt="Icon 1">
                                                <p style="color: #2e3192;font-weight: bold">{{ $t("home.docs_manuals")
                                                      }}</p>
                                          </div>
                                    </template>
                                    <template #subtitle>{{ $t("home.manual_text") }}</template>
                                    <template #content>



                                          <img alt="user header" src="/uiIcons/documents.png" class="hightlight-item" />
                                    </template>
                              </Card>
                        </div>
                  </div>
                  <div class="col-12 md:col-6 lg:col-3">
                        <div class="section p-3 ">

                              <Card>

                                    <template #title>
                                          <div class="card_header flex flex-row gap-1">
                                                <img class="-mt-2" src="/uiIcons/article.svg" alt="Icon 1">
                                                <p style="color: #2e3192;font-weight: bold">{{ $t("home.timeseries") }}
                                                </p>
                                          </div>
                                    </template>
                                    <template #subtitle>{{ $t("home.timeseries_text") }}</template>
                                    <template #content>



                                          <img alt="user header" src="/images/timeseries2.png"
                                                class="hightlight-item" />
                                    </template>
                              </Card>
                        </div>
                  </div>
                  <div class="col-12 md:col-6 lg:col-3">
                        <div class="section p-3  ">


                              <Card>

                                    <template #title>
                                          <div class="card_header flex flex-row gap-1">
                                                <img src="/uiIcons/challenge_hightlight.svg" alt="Icon 1">
                                                <p style="color: #2e3192;font-weight: bold">{{ $t("home.analytics") }}
                                                </p>
                                          </div>
                                    </template>
                                    <template #subtitle>{{ $t("home.analytics_text") }}</template>
                                    <template #content>



                                          <img alt="user header" src="/uiIcons/analytics.png" class="hightlight-item" />
                                    </template>
                              </Card>
                        </div>
                  </div>
            </div>

</template>

<script >


</script>

<style scoped>
.section {
      /* background-color: #f5f5f5;  */
      /* padding: 20px; */
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      gap: 0.5em;
}


.hightlight-item {

width: 100%;
height: 100%;
object-fit: fill;
}


</style>