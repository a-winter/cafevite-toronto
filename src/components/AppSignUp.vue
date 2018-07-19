<template lang="html">
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 offset-sm3 sm6>
          <v-card>
            <v-card-text>
              <v-container>
                <v-form @submit.prevent="onSignUp">
                  <v-layout row wrap>
                    <v-flex xs12>
                      <v-text-field
                        name="email"
                        label="Email"
                        id="email"
                        :rules="[rules.required, rules.email]"
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
                        :rules="[rules.required, rules.minLength]"
                        :type="show1 ? 'text' : 'password'"
                        :append-icon="show1 ? 'visibility_off' : 'visibility'"
                        @click:append="show1 = !show1"
                        hint="At least 6 characters"
                        counter
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row wrap>
                    <v-flex xs12>
                      <v-text-field
                        name="confirmPassword"
                        label="Confirm Password"
                        id="confirm-password"
                        v-model="confirmPassword"
                        :type="show2 ? 'text' : 'password'"
                        :rules="[rules.required, rules.minLength, rules.comparePasswords]"
                        :append-icon="show2 ? 'visibility_off' : 'visibility'"
                        @click:append="show2 = !show2"
                        hint="At least 6 characters"
                        counter
                        success
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row wrap>
                    <v-flex xs12>
                      <v-btn color="primary" type="submit">Sign Up</v-btn>
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
      password: '',
      confirmPassword: '',
      show1: false,
      show2: false,
      rules: {
        required: value => !!value || 'Required.',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
        minLength: v => v.length >= 6 || 'Min 6 characters',
        comparePasswords: () => {
          return this.password !== this.confirmPassword ? 'Passwords do not match' : true
        }
      }
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
    onSignUp () {
      console.log('onSignUp')
      this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
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
