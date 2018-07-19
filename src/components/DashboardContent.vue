<template lang="html">
  <v-container class="">
    <v-layout row wrap>
      <v-flex xs12>
        <v-expansion-panel focusable>
          <v-expansion-panel-content>
            <div slot="header"><h3>Home Page</h3></div>
            <v-container>
              <v-layout row wrap>
                <v-flex xs12>
                  <v-parallax
                    :src="require('../assets/img-parallax-2.png')"
                    height="150">
                    <v-layout column align-center justify-center>
                      <v-btn color="primary">Edit Image</v-btn>
                    </v-layout>
                  </v-parallax>
                </v-flex>
              </v-layout>

              <v-layout row wrap class="my-4">
                <v-flex xs12 sm6>
                  <v-container  pa-0>
                    <v-layout row wrap align-center>
                      <v-flex offset-xs1 xs10>
                        <h1 class="text-xs-center">Our Place</h1>
                        <p class="">{{ loadedSectionOurPlace.text }}</p>
                        <p class="">{{ loadedSectionOurPlace.address }}</p>
                        <div class="text-xs-center">
                          <v-btn color="">Direction</v-btn>
                        </div>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-card>
                    <v-card-media
                      height="240"
                      :src="loadedSectionOurPlace.src">
                      <v-layout column align-center justify-center>
                        <v-btn color="primary">Edit Image</v-btn>
                      </v-layout>
                    </v-card-media>
                  </v-card>
                </v-flex>
              </v-layout>

              <v-layout row wrap class="my-4">
                <v-flex xs12>
                  <h1 class="text-xs-center">#cafevite</h1>
                </v-flex>
                <v-flex xs12>
                  <v-layout row wrap align-content-center>
                    <v-flex xs4 sm3 md2 pa-1 v-for="item in loadedSectionTagItems" :key="item.src">
                      <v-card >
                        <v-card-media
                          height="96"
                          :src="item.src"
                        >
                        </v-card-media>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-container>
          </v-expansion-panel-content>
          <v-expansion-panel-content>
            <div slot="header"><h3>Menu Page</h3></div>
            <v-container>
              <v-layout row wrap class="">
                <v-flex
                  xs12 sm4 md3
                  v-for="item in menuItems" :key="item.src">
                  <v-container class="pa-0">
                    <v-card raised class="ma-2 py-3 px-2" color="">
                      <v-layout row wrap >
                        <v-flex xs12>
                          <v-card-media
                            height="100"
                            :src="item.src"
                            alt="error">
                          </v-card-media>
                        </v-flex>
                        <v-flex xs12>
                          <v-card-title class="pa-1">
                            <h4>{{ item.name }}</h4>
                          </v-card-title>
                          <v-card-text class="pa-1">
                            <h3 class="primary--text">{{ item.price }}</h3>
                            <p v-if="item.display">{{ item.description }}</p>
                          </v-card-text>
                        </v-flex>
                        <v-flex xs12>
                          <v-card-actions class="py-0">
                            <v-btn
                              small
                              icon
                              @click="item.display = !item.display">
                              <v-icon>more_horiz</v-icon>
                            </v-btn>
                            <manage-content-edit-menu-item-dialog :editingMenuItem="item"></manage-content-edit-menu-item-dialog>

                          </v-card-actions>
                        </v-flex>
                      </v-layout>
                    </v-card>
                  </v-container>
                </v-flex>
              </v-layout>
            </v-container>
          </v-expansion-panel-content>
          <v-expansion-panel-content>
            <div slot="header"><h3>About Page</h3></div>
            <v-container>
              <v-layout row wrap class="py-2">
                <v-flex xs12 offset-sm1 sm10 offset-md1  offset-lg1 >
                  <v-card  >
                    <v-layout row wrap>
                      <v-flex xs12 sm7>
                        <v-card-title primary-title>
                          <h1>Our place</h1>
                        </v-card-title>
                        <v-card-text>
                          <p>Saepe voluptatibus omnis occaecati suscipit. Delectus similique delectus voluptatibus odit. Quos nostrum quaerat quo repellendus quidem neque et est. Maxime veniam sint dolorem qui. Veritatis omnis laudantium et.</p>
                        </v-card-text>
                      </v-flex>
                      <v-flex xs12 sm5>
                        <v-card-media
                          height="250"
                          :src="loadedSectionOurPlace.src"
                        >
                        </v-card-media>
                      </v-flex>
                    </v-layout>
                  </v-card>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs12 offset-sm1 sm10 offset-md1 offset-lg1>
                  <v-layout row wrap>
                    <v-flex xs12 sm6 md4 pr-2 py-2>
                      <v-card>
                        <v-card-title primary-title >
                          <h2>
                            Title
                          </h2>
                        </v-card-title>
                        <v-card-text>
                          <p >Saepe voluptatibus omnis occaecati suscipit. Delectus similique delectus voluptatibus odit. Quos nostrum quaerat quo repellendus quidem neque et est. Maxime veniam sint dolorem qui. Veritatis omnis laudantium et.</p>
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex xs12 sm6 md4 py-2>
                      <v-card>
                        <v-card-title primary-title >
                          <h2>
                            Title
                          </h2>
                        </v-card-title>
                        <v-card-text>
                          <p >Saepe voluptatibus omnis occaecati suscipit. Delectus similique delectus voluptatibus odit. Quos nostrum quaerat quo repellendus quidem neque et est. Maxime veniam sint dolorem qui. Veritatis omnis laudantium et.</p>
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex xs12 md4 py-2>
                      <v-card>
                        <v-card-title primary-title >
                          <h2>
                            Title
                          </h2>
                        </v-card-title>
                        <v-card-text>
                          <p>Saepe voluptatibus omnis occaecati suscipit. Delectus similique delectus voluptatibus odit. Quos nostrum quaerat quo repellendus quidem neque et est. Maxime veniam sint dolorem qui. Veritatis omnis laudantium et.</p>
                        </v-card-text>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-container>
          </v-expansion-panel-content>
          <v-expansion-panel-content>
            <div slot="header"><h3>Footer</h3></div>
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
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    loadedSectionOurPlace () {
      return this.$store.getters.loadedSectionOurPlace
    },
    loadedSectionTagItems () {
      return this.$store.getters.loadedSectionTagItems
    },
    menuItems () {
      console.log('menuItems')
      return this.$store.getters.loadedMenuItems
    }
  }
}
</script>

<style lang="css">
</style>
