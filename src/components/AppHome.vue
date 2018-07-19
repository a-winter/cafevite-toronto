<template lang="html">
  <v-container pa-0 fluid >
    <!-- <section>
      <v-layout row wrap>
        <v-flex xs12 class="dummy">

        </v-flex>
      </v-layout>
    </section> -->

    <section>
      <v-parallax
        :src="require('../assets/img-parallax-2.png')"
        height="650">
        <v-layout column align-center justify-center>
          <v-btn color="" large to="/menu">Menu</v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout row wrap>
        <v-flex xs12 sm6>
          <v-container fill-height pa-0>
            <v-layout row wrap align-center py-5>
              <v-flex offset-xs1 xs10>
                <h1 class="text-xs-center mb-3">Our Place</h1>
                <p class=" mb-4">{{ loadedSectionOurPlace.text }}</p>
                <p class=" mb-4">{{ loadedSectionOurPlace.address }}</p>
                <div class="text-xs-center">
                  <v-btn
                    large
                    color=""
                    href="https://goo.gl/maps/MgBw53ooFjA2"
                    target="_blank">Direction</v-btn>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
        <v-flex xs12 sm6>
          <v-card>
            <v-card-media
              height="70vh"
              :src="loadedSectionOurPlace.src"
            >
            </v-card-media>
          </v-card>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-container my-5 pa-1>
        <v-layout row wrap my-5>
          <v-flex xs12>
            <h1 class="text-xs-center">#cafevite</h1>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex  xs12 offset-sm1 sm10>
            <v-layout row wrap align-content-center>
              <v-flex xs6 sm4 md2 pa-1 v-for="item in loadedSectionTagItems" :key="item.src">
                <v-card >
                  <v-card-media
                    height="150"
                    :src="item.src"
                  >
                  </v-card-media>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

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
// sectionMenu :src="require('../assets/img-parallax-2.png')" :src="loadedSectionMenu.src""
// sectionOurPlace :src="require('../assets/img-our-place.jpg')"
// sectionTag :src="require('../assets/HomeTag/'+ item.src + '.png')"
export default {
  data () {
    return {
    }
  },
  computed: {
    loadedSectionMenu () {
      return this.$store.getters.loadedSectionMenu
    },
    loadedSectionOurPlace () {
      return this.$store.getters.loadedSectionOurPlace
    },
    loadedSectionTagItems () {
      return this.$store.getters.loadedSectionTagItems
    }
  },
  methods: {}
}
</script>

<style lang="css" scoped>
.dummy {
  height: 100vh;
}

.img-our-place {
  max-width: 50vw;
  display: block
}
</style>
