<template lang="html">
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 offset-sm3 sm6>
          <v-card>
            <v-card-text>
              <v-container>
                <v-form @submit.prevent="onSignIn">
                  <v-layout row wrap>
                    <v-flex xs12>
                      <v-text-field
                        name="email"
                        label="Email"
                        id="email"
                        required
                        v-model="email"
                        type="email"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row wrap>
                    <v-flex xs12>
                      <v-text-field
                        name="password"
                        label="Password"
                        id="password"
                        required
                        v-model="password"
                        type="password"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row wrap>
                    <v-flex xs12>
                      <v-btn color="primary" type="submit">Sign In</v-btn>
                    </v-flex>
                  </v-layout>
                </v-form>
              </v-container>
            </v-card-text>
          </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    loading () {
      return this.$store.getters.loading
    },
    error () {
      return this.$store.getters.error
    }
  },
  methods: {
    onSignIn () {
      console.log('onSignIn')
      this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style lang="css">
</style>
