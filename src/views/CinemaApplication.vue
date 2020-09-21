<template>
  <div id="app">
    <h1>Cinema Application</h1>
    <v-app>
      <v-row justify='center' align='center'>
        <v-card height="540" width="320" evevation="24">
          <v-img :src="URL_IMG" :lazy-src='URL_PLACEHOLDER'>
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0" align="center" justify="center"
              >
                <v-progress-circular
                  indeterminate color="grey lighten-5"
                >
                </v-progress-circular>

              </v-row>
            </template>
          </v-img>
          <v-btn
            absolute width='100' height='100' color='white' elevation='24'
            class='mx-auto subtitle-1' style='left: 0; right: -70px; top: 44%'
            v-text='NUMBER_RATING'
          >
          </v-btn>
          <v-btn
            absolute width='100' height='100' color='black' dark elevation='24'
            class='mx-auto' style='left: -70px; right:0; top:40%'
          >
            <v-icon v-text='"shopping_cart"'></v-icon>
          </v-btn>
          <v-card-title
            class='my-2 headline justify-center'
            v-text='TEXT_TITLE'
          >
          </v-card-title>
          <v-card-text
            class='grey--text text-center caption px-6'
            v-text='TEXT_DESCRIPTION'
          >
          </v-card-text>

        </v-card>
      </v-row>
    </v-app>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        NUMBER_RATING:9.1,
        TEXT_TITLE:'The Martian',
        URL_IMG:'https://i.imgur.com/WznWuSf.png',
        URL_PLACEHOLDER:'https://fakeimg.pl/540x320/?retina=1&text=Loading',
        TEXT_DESCRIPTION:'During a manned mission to Mars, Astronaut Mark Watney（Matt Damon）is presumed dead after a fierce storm and left behind by his crew.'
      }
    },
  }
</script>

<style scoped>

</style>