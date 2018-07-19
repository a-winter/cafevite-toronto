<template lang="html">
  <v-container pa-0>
      <v-layout row wrap py-5>
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
                  :src="getImgUrl('img-our-place')"
                >
                </v-card-media>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row wrap pb-5>
        <v-flex xs12 offset-sm1 sm10 offset-md1 offset-lg1>
          <v-layout row wrap>
            <v-flex xs12 sm6 md4 pr-2>
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
            <v-flex xs12 sm6 md4 pr-2>
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
            <v-flex xs12 md4 >
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
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    getImgUrl (imgName) {
      var images = require.context('../assets/', false, /\.jpg$/)
      return images('./' + imgName + '.jpg')
    }
  }
}
</script>

<style lang="css">
</style>
