<template>
  <div id='app'>
    <v-app>
      <h1>Fashion Header</h1>
      <v-row justify='center' align='center'>
        <v-card
          color='#75D4DA' elevation='12'
          width='720' height='530' class='pa-12'
        >
          <v-row class='fill-height'>
            <v-col cols='6'>
              <v-card-title
                class="pr-0 white--text flex-column align-start"
              >
                <h3 class="caption font-weight-bold text-left">
                  TRENDS & <br> SHOPPING GUIDES
                  <v-sheet class="mt-1 mb-8" width='20' height='2' color='white'></v-sheet>
                </h3>
                <h1 v-html='TEXT_TITLE' class="display-1 text-left"></h1>
                <p class="body-2 pt-8 font-weight-bold text-left" v-html='TEXT_DESCRIPTION'></p>
              </v-card-title>
              <v-card-actions>
                <v-btn
                  width='120' color='#F5F650' rounded evevation='12'
                  class='ma-0 caption font-weight-bold'
                  v-text='"read more"'
                >

                </v-btn>
              </v-card-actions>
            </v-col>
            <v-spacer cols='6'></v-spacer>
            <v-img
              width='448' height='530' :src='URL_IMG'
              style='position:absolute; top:0; right:-30px;'
            />
          </v-row>
        </v-card>
      </v-row>
    </v-app>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        URL_IMG : 'https://i.imgur.com/jrO3VID.png',
        TEXT_TITLE : 'The most<br>stylish bags on<br>Instagram',
        TEXT_DESCRIPTION : 'From a luxe leopard stachel to a touch of <br> bohemian fringe. go hands free this <br> season with a chic crossbody bag.'
      }
    },
  }
</script>

<style scoped>

</style>