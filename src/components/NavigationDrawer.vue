<template>
  <v-navigation-drawer
    :value="value"
    absolute
    left
    temporary
  >
    <v-list
      nav
      dense
    >
      <v-list-item-group
        v-model="group"
        active-class="deep-purple--text text--accent-4"
      >
        <v-list-item
          v-for="route in routes"
          :key="route.name"
          :to="route.path"
        >
          <v-list-item-title>
            {{ route.name }}
          </v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    props: ['value', 'routes'],
    data () {
      return {
        group: null,
      }
    },
    watch: {
      group () {
        this.$emit('clicked', this.group)
      },
    },

  }
</script>

<style scoped>

</style>
