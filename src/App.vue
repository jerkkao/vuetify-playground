<template>
  <div id="app">
    <v-app-bar
      color="deep-purple accent-4"
      dense
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title>Vuetify Playground</v-toolbar-title>
    </v-app-bar>
    <navigation-drawer
      v-model="drawer"
      :routes="routes"
      @clicked="closeDrawer"
    />

    <router-view />
  </div>
</template>
<script>
  import NavigationDrawer from '@/components/NavigationDrawer.vue'

  export default {
    components: {
      NavigationDrawer,
    },
    data () {
      return {
        drawer: false,
        routes: [],
      }
    },
    created () {
      this.$router.options.routes.forEach(route => {
        if (route.name !== 'Home' && route.name !== 'About') {
          this.routes.push({
            name: route.name,
            path: route.path,
          })
        }
      })
    },
    methods: {
      closeDrawer () {
        this.drawer = false
      },
    },
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
