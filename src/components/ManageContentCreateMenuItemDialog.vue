<template lang="html">
  <v-dialog
    v-model="dialog"
    persistent
    max-width="350px">
    <v-btn fixed bottom right fab color="secondary" slot="activator">
      <v-icon>add</v-icon>
    </v-btn>
    <v-container class="pa-0">
          <v-card>
            <v-form @submit.prevent="onCreateMenuItem">
              <v-toolbar dark color="secondary">
                <v-btn icon dark @click.native="dialog = false">
                  <v-icon>close</v-icon>
                </v-btn>
                <v-toolbar-title>New Item</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                  <v-btn dark flat type="submit" :disabled="!formIsValid">save</v-btn>
                </v-toolbar-items>
              </v-toolbar>
              <v-card-text>
                    <v-layout row wrap>
                      <v-flex xs12>
                        <v-text-field
                          name="name"
                          label="Name"
                          id="name"
                          v-model="newMenuItem.name"
                          type="text"
                          :rules="[rules.required]"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                      <v-flex xs12>
                        <v-text-field
                          name="price"
                          label="Price"
                          id="price"
                          v-model="newMenuItem.price"
                          type="text"
                          :rules="[rules.required]"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                      <v-flex xs12>
                        <v-textarea
                          name="description"
                          label="Description"
                          id="description"
                          v-model="newMenuItem.description"
                          type="text"
                          multi-line
                          :rules="[rules.required]"
                        ></v-textarea>
                      </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                      <v-flex xs12>
                        <v-btn color="secondary" @click="onPickFile">
                          Upload image
                        </v-btn>
                        <input
                          type="file"
                          accept="image/*"
                          ref="fileInput"
                          style="display: none"
                          @change="onFilePicked"
                        />
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12>
                        <img :src="newMenuItem.src" alt="" height="100">
                      </v-flex>
                    </v-layout>
              </v-card-text>
            </v-form>
          </v-card>
    </v-container>
  </v-dialog>
</template>

<script>

export default {
  data () {
    return {
      dialog: false,
      rules: {
        required: value => !!value || 'Required.'
      },
      newMenuItem: {
        src: '',
        name: '',
        price: '',
        description: '',
        display: false,
        userId: this.$store.getters.user.id,
        image: null
      }
    }
  },
  computed: {
    formIsValid () {
      return this.newMenuItem.name !== '' &&
        this.newMenuItem.price !== '' &&
        this.newMenuItem.description !== '' &&
        this.newMenuItem.src !== '' &&
        this.newMenuItem.image !== null &&
        this.newMenuItem.image !== undefined &&
        this.newMenuItem.image !== ''
    },
    menuItems () {
      console.log('menuItems')
      return this.$store.getters.loadedMenuItems
    },
    user () {
      return this.$store.getters.user
    }
  },
  methods: {
    onPickFile () {
      this.$refs.fileInput.click()
      console.log('onPickFile')
    },
    onFilePicked (event) {
      const files = event.target.files
      let filename = files[0].name
      if (filename.lastIndexOf('.') <= 0) {
        return alert('Please add a valid file')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.newMenuItem.src = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.newMenuItem.image = files[0]
      console.log('onFilePicked')
    },
    onCreateMenuItem () {
      if (!this.formIsValid) {
        console.log('form is invalid')
      }
      if (!this.newMenuItem.image) {
        console.log('wtf happen with image')
      }
      const newMenuItemData = {
        src: this.newMenuItem.src,
        name: this.newMenuItem.name,
        price: this.newMenuItem.price,
        description: this.newMenuItem.description,
        display: this.newMenuItem.display,
        image: this.newMenuItem.image,
        userId: this.newMenuItem.userId
      }
      this.$store.dispatch('createMenuItem', newMenuItemData)
      this.dialog = !this.dialog
      console.log('onCreateMenuItem')
    }
  }
}
</script>

<style lang="css">
</style>
