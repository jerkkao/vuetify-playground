<template>
  <div id="app">
    <v-app>
      <h1>Crowdfunding Card</h1>
      <v-row
        justify="center"
        align="center"
      >
        <v-card
          elevation="24"
          max-width="386"
          color="#353A4F"
        >
          <v-img :src="URL_IMAGE" />
          <v-card-title
            class="px-5 py-8 flex-column align-start"
            style="background: white"
          >
            <h1 class="haedline mb-0 font-weight-black">
              {{ TEXT_TITLE__MAIN }}
            </h1>
            <h5 class="caption mb-3 font-weight-medium">
              {{ TEXT_TITLE__SUB }}
            </h5>
            <span class="caption pr-12 grey--text text-left">{{ TEXT_DESCRIPTION }}</span>
          </v-card-title>
          <v-sheet
            tile
            height="5%"
          >
            <v-row
              no-gutters
              class="fill-height"
            >
              <v-col
                cols="7"
                style="background:#F7D32B"
              />
              <v-col
                cols="5"
                class="gradient-bg wihte--text caption text-right pr-5"
              >
                21 days left
              </v-col>
            </v-row>
          </v-sheet>
          <v-card-actions class="pa-6">
            <v-row
              class="flext-nowrap"
              no-gutters
            >
              <v-col>
                <v-sheet
                  class="white--text text-lowercase pl-3"
                  color="transparent"
                >
                  raised so far
                </v-sheet>
                <v-btn
                  text
                  dark
                  class="font-weight-black display-1 text-left"
                >
                  $9.520
                </v-btn>
              </v-col>
              <v-col>
                <v-row
                  no-gutters
                  justify="space-between"
                >
                  <v-col cols="auto">
                    <v-divider
                      vertical
                      color="grey"
                    />
                  </v-col>
                  <v-col>
                    <v-sheet
                      class="white--text text-lowercase pl-3 text-left"
                      color="transparent"
                    >
                      our goal
                    </v-sheet>
                    <v-btn
                      text
                      dark
                      class="font-weight-black display-1 text-left"
                    >
                      $20.000
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-app>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        URL_IMAGE: 'https://i.imgur.com/jKk5AOI.jpg',
        TEXT_DESCRIPTION: 'WATCHme is a charging stand that will turn your smartwatch into a cute little monster.',
        TEXT_TITLE__MAIN: 'WATCHme',
        TEXT_TITLE__SUB: 'Cute Apple Watch charging stand',
      }
    },

  }
</script>

<style scoped>
.gradient-bg {
  background-image: linear-gradient(to right, #517BCF , #7F7CA1);
}
</style>
