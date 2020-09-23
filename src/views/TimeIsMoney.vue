<template>
  <div id="app">
    <v-app>
      <h1>Time is Money</h1>
      <v-row
        justify="center"
        align="center"
      >
        <v-card
          min-width="648"
          height="470"
          elevation="24"
          dark
          color="#0A6CF1"
          class="px-6"
        >
          <v-toolbar
            flat
            color="transparent"
            class="pt-2 pl-2 ma-2"
          >
            <v-app-bar-nav-icon class="opacity-5" />
          </v-toolbar>
          <v-card-title class="pl-4 mb-7">
            <div class="pl-2">
              <h5
                class="caption opacity-5 text-left"
                v-text="TEXT_LABEL_1"
              />
              <h1
                class="display-1 font-weight-medium mb-6 text-left"
                v-text="TEXT_TITLE"
              />
              <h5
                class="mt-3 caption opacity-5 text-left"
                v-text="TEXT_LABEL_2"
              />
            </div>
          </v-card-title>
          <v-card
            height="212"
            color="#080808"
            elevation="24"
            class="py-4 px-5"
            width="600"
          >
            <v-toolbar
              color="transparent"
              class="mb-2"
            >
              <v-btn-toggle
                id="panel-controller"
                v-model="toggle_none"
              >
                <v-btn
                  text
                  icon
                >
                  <v-icon>pause</v-icon>
                </v-btn>
                <v-btn
                  text
                  icon
                >
                  <v-icon>stop</v-icon>
                </v-btn>
              </v-btn-toggle>
              <v-spacer />
              <span class="grey--text">CURRENT SESSION: 1:48:09</span>
            </v-toolbar>
          </v-card>
        </v-card>
      </v-row>
    </v-app>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        TEXT_TITLE: '100 Days of UI Challenge',
        TEXT_LABEL_1: 'PROJECT NAME',
        TEXT_LABEL_2: 'TOTAL TIME SPENT ON THE PROJECT',
        toggle_none: null,
      }
    },

  }
</script>

<style lang='scss' scoped>
.opacity-5  {
 opacity: 0.5;
}
.v-toolbar__content {
  padding: 0;
}
#panel-controller {
  background: transparent;
  button {
    border: none;
  }
}
</style>
