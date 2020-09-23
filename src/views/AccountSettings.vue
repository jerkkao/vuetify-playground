<template>
  <div id="app">
    <v-app>
      <h1>Account Settings</h1>
      <v-row
        justify="center"
        align="center"
      >
        <v-card
          max-width="474"
          color="yellow"
          evelation="24"
          class="px-6 pb-2"
        >
          <v-card-title class="title py-8 pl-10 mb-3 text-left">
            {{ TEXT_TITLE__CARD }}
            <v-spacer />
            <v-btn
              text
              icon
            >
              <v-icon>close</v-icon>
            </v-btn>
          </v-card-title>

          <v-card-text class="ml-12 pa-0">
            <v-card
              elevation="24"
              color="white"
              width="456"
              class="pa-6"
            >
              <v-avatar
                size="85"
                class="mb-3 mt-n12"
              >
                <img :src="URL_IMAGE">
              </v-avatar>
              <v-text-field
                class="mt-4"
                label="USERNAME"
                placeholder="Martinator3000"
              />
              <v-row>
                <v-col>
                  <v-text-field
                    label="FIRST NAME"
                    placeholder="Martin"
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    label="LAST NAME"
                    placeholder="Lewis"
                  />
                </v-col>
              </v-row>
              <v-text-field
                label="EMAIL"
                placeholder="martin@lewis.com"
              />
              <v-textarea
                label="BIO"
                :value="TEXT_PLACEHOLDER"
              />
            </v-card>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              v-for="i in ['Cancel', 'Save']"
              :key="i"
              text
              class="text-capitalize"
              v-text="i"
            />
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
        URL_IMAGE: 'https://i.imgur.com/DTr5WPa.png',
        TEXT_TITLE__CARD: 'Account Settings',
        TEXT_PLACEHOLDER: "Hey! My name is Martin and i love to design. Check out my store & don't forget to rate it.",
      }
    },

  }
</script>

<style scoped>

</style>
