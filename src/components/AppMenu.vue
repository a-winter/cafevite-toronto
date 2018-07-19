<template lang="html">
  <v-container class="pa-0">
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 v-for="item in menuItems" :key="item.src">
        <v-card class="ma-3" flat style="background-color: transparent">
          <v-card-media
            contain
            height="250"
            :src="item.src"
          >
          </v-card-media>
          <v-card-title primary-title style="border-bottom: 2px solid #000000">
            <h3 >{{ item.name }}</h3>
          </v-card-title>
          <v-card-text>
            <h3 class="primary--text">{{ item.price }}</h3>
            <p style="height: 90px">{{ item.description }}</p>
          </v-card-text>
          <v-card-actions>

          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <v-footer height="auto" color="alternative" dark>
      <v-container>
        <!-- <v-layout row wrap class="py-2" style="border-bottom: 1px solid white">
          <v-flex offset-xs1 xs10>
            <div class="text-xs-right">
              <v-btn
                v-for="item in footerSharedItems"
                :key="item.icon"
                :href="item.link"
                target="_blank"
                icon class="mx-2">
                <span :class="item.icon" style="font-size: 24px"></span>
              </v-btn>
            </div>
          </v-flex>
        </v-layout> -->
        <v-layout row wrap class="my-4">
          <v-flex xs10 offset-xs1 sm4 class="my-2">
            <h3 class="mb-3">Cafe Vite</h3>
            <div>Unit 19, 5418 Yonge Street, North York, ON, M2N 6X4</div>
          </v-flex>
          <v-flex xs10 offset-xs1 sm3 class="my-2">
            <h3 class="mb-3">Contact</h3>
            <div>+1 647 847 8198</div>
            <div>68foodinc@gmail.com</div>
          </v-flex>
          <v-flex xs10 offset-xs1 sm2 class="my-2">
            <h3 class="mb-3">Hours</h3>
            <div>Open daily</div>
            <div>10AM - 8PM</div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-footer>
  </v-container>
</template>

<script>
// import { menuItems } from '../assets/AppMenu/menu-items'
export default {
  data () {
    return {
      // menuItems
    }
  },
  computed: {
    menuItems () {
      console.log('menuItems')
      return this.$store.getters.loadedMenuItems
    }
  },
  methods: {
  }
}
</script>

<style lang="css">
</style>
