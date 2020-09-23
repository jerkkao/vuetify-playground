<template>
  <div id="app">
    <v-app id="day7">
      <h1>
        Search Header
      </h1>
      <v-row
        justify="center"
        align="center"
      >
        <v-container>
          <v-col cols="12">
            <v-tabs
              hide-slider
              background-color="transparent"
              class="px-5"
              centered
            >
              <v-tab
                v-for="tab of tabs"
                :key="tab"
                class="white--text font-weight-black"
              >
                {{ tab }}
              </v-tab>
            </v-tabs>
          </v-col>
          <v-col cols="12">
            <v-row
              no-gutters
              justify="center"
            >
              <v-col>
                <v-text-field
                  class="mx-3 black--text"
                  solo
                  :label="TEXT_PLACEHOLDER"
                  :hint="TEXT_HINT"
                  persistent-hint
                />
              </v-col>
              <v-col cols="auto">
                <v-btn
                  class="mt-0 mx-0"
                  color="primary"
                  height="48"
                >
                  SEARCH
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-container>
      </v-row>
    </v-app>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tabs: ['SALE', 'LOOKBOOK', 'CAMPAIGN', 'BLOG'],
        TEXT_PLACEHOLDER: 'What are you looking for?',
        TEXT_HINT: 'e.g. wedding ornament',
      }
    },

  }
</script>

<style scoped>
.v-messages__wrapper {
  color: white;
  font-weight: bold;
  font-size: 13px;
}

#day7 {
  min-width:840px;
  padding: 0 20%;
  background: url('https://i.imgur.com/ycpVrCS.jpg') no-repeat;
  background-size: cover;
}
</style>
