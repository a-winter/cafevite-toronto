<template lang="html">
  <v-dialog
    v-model="dialog"
    persistent
    max-width="350px">
    <v-btn small icon color="" slot="activator">
      <v-icon>edit</v-icon>
    </v-btn>
    <v-container class="pa-0">
          <v-card>
            <v-form @submit.prevent="onSaveChanges">
              <v-toolbar dark color="secondary">
                <v-btn icon dark @click.native="dialog = false">
                  <v-icon>close</v-icon>
                </v-btn>
                <v-toolbar-title>Edit Item</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                  <v-btn dark flat type="submit" :disabled="false">save</v-btn>
                </v-toolbar-items>
              </v-toolbar>
              <v-card-text>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-btn color="secondary" @click="onPickFile">
                      Edit image
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
                    <img :src="editedSrc" alt="" height="100">
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
  props: [
    'editingTagItem'
  ],
  data () {
    return {
      dialog: false,
      editedSrc: this.editingTagItem.src,
      editedImage: null,
      editedId: this.editingTagItem.id,
      editedExt: this.editingTagItem.ext,
      rules: {
        required: value => !!value || 'Required.'
      }
    }
  },
  computed: {},
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
        this.editedSrc = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.editedImage = files[0]
      console.log('onFilePicked')
    },
    onSaveChanges () {
      this.dialog = false
      this.$store.dispatch('updateTagItem', {
        src: this.editedSrc,
        image: this.editedImage,
        id: this.editingTagItem.id,
        ext: this.editingTagItem.ext
      })
      console.log('onSaveChanges')
    }
  }
}
</script>
