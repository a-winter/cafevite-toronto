<template lang="html">
  <v-container fluid>
        <v-tabs
          v-model="active"
          color=""
          slider-color="primary"
          centered
          show-arrows>

          <v-tab v-for="(item, index) in tabs" :key="index">
            {{ item.name }}
          </v-tab>

          <v-tab-item>
            <v-container>
              <v-layout row wrap>
                <v-flex xs12 offset-sm2 sm8 offset-md3 md6>
                  <manage-content-edit-home></manage-content-edit-home>
                </v-flex>
              </v-layout>
            </v-container>
          </v-tab-item>

          <v-tab-item class="my-2">
            <v-layout row wrap>
              <manage-content-create-menu-item-dialog></manage-content-create-menu-item-dialog>
            </v-layout>
            <v-layout row wrap class="my-4">
              <v-flex
                xs12 sm8 offset-sm2 md6 offset-md3
                v-for="item in menuItems" :key="item.src">
                <v-container class="pa-0">
                  <v-card raised class="my-2 pa-2" color="">
                    <v-layout row wrap >
                      <v-flex xs9>
                        <v-card-title class="pa-1">
                          <h4>{{ item.name }}</h4>
                        </v-card-title>
                        <v-card-text class="pa-1">
                          <h3 class="primary--text">{{ item.price }}</h3>
                          <p v-if="item.display">{{ item.description }}</p>
                        </v-card-text>
                      </v-flex>
                      <v-flex xs3>
                        <v-card-media
                          contain
                          height="80"
                          :src="item.src"
                          alt="error"
                        >
                        </v-card-media>
                      </v-flex>
                      <v-flex xs12>
                        <v-card-actions class="py-0">
                          <v-btn
                            small
                            icon
                            @click="item.display = !item.display"
                          ><v-icon>more_horiz</v-icon></v-btn>
                          <manage-content-edit-menu-item-dialog :editingMenuItem="item"></manage-content-edit-menu-item-dialog>
                          <v-spacer></v-spacer>
                        </v-card-actions>
                      </v-flex>
                    </v-layout>
                  </v-card>
                </v-container>
              </v-flex>
            </v-layout>
          </v-tab-item>

          <v-tab-item>
            about content
          </v-tab-item>

          <v-tab-item>
            footer content
          </v-tab-item>
        </v-tabs>
  </v-container>
</template>

<script>
import ManageContentCreateMenuItemDialog from './ManageContentCreateMenuItemDialog.vue'
import ManageContentEditMenuItemDialog from './ManageContentEditMenuItemDialog.vue'
import ManageContentEditHome from './ManageContentEditHome.vue'
import ManageContentEditAbout from './ManageContentEditAbout.vue'

export default {
  components: {
    'manage-content-create-menu-item-dialog': ManageContentCreateMenuItemDialog,
    'manage-content-edit-menu-item-dialog': ManageContentEditMenuItemDialog,
    'manage-content-edit-home': ManageContentEditHome,
    'manage-content-edit-about': ManageContentEditAbout
  },
  data () {
    return {
      active: null,
      tabs: [
        {name: 'Home'},
        {name: 'Menu'},
        {name: 'About'},
        {name: 'Footer'}
      ]
    }
  },
  computed: {
    menuItems () {
      console.log('menuItems')
      return this.$store.getters.loadedMenuItems
    }
  },
  methods: {}
}
</script>

<style lang="css">
</style>
