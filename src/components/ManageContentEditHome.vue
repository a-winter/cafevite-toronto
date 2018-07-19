<template lang="html">
  <v-container class="pa-0">
    <v-form class="py-2" @submit.prevent="sectionMenuOnSaveChanges">
      <v-card>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title primary-title>
              <h2>Section menu</h2>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-card-text>
          <v-layout row wrap>
            <v-flex xs12>
                <v-btn color="secondary" @click="sectionMenuOnPickFile">
                  Edit image
                </v-btn>
                <input
                  type="file"
                  accept="image/*"
                  ref="sectionMenuFileInput"
                  style="display: none"
                  @change="sectionMenuOnFilePicked"/>
                <img :src="editingSectionMenu.src" :alt="editingSectionMenu.src" height="100px">
                <img :src="loadedSectionMenu.src" :alt="loadedSectionMenu.src" height="100px">
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions>
          <v-btn flat type="submit" :disabled="false">save</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>

    <v-form class="py-2" @submit.prevent="sectionOurPlaceOnSaveChanges">
      <v-card>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title primary-title>
              <h2>Section our place</h2>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-card-text>
          <v-layout row wrap>
            <v-flex xs12>
              <v-textarea
                name="ourPlaceText"
                label="Our Place Text"
                id="our-place-text"
                v-model="editingSectionOurPlace.text"
              ></v-textarea>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs12>
              <v-textarea
                name="ourPlaceAddress"
                label="Our Place Address"
                id="our-place-address"
                v-model="editingSectionOurPlace.address"
              ></v-textarea>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs12>
              <v-btn color="secondary" @click="sectionOurPlaceOnPickFile">
                Edit image
              </v-btn>
              <input
                type="file"
                accept="image/*"
                ref="sectionOurPlaceFileInput"
                style="display: none"
                @change="sectionOurPlaceOnFilePicked"/>
              <img
                :src="editingSectionOurPlace.src"
                :alt="editingSectionOurPlace.src"
                height="100px">
              <img
                :src="loadedSectionOurPlace.src"
                :alt="loadedSectionOurPlace.src"
                height="100px">
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions>
          <v-btn flat type="submit" :disabled="false">save</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>

    <v-form class="py-2" @submit.prevent="sectionTagOnCreateNewItem">
      <v-card>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title primary-title>
              <h2>Section #cafevite</h2>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-card-text>
          <v-layout row wrap>
            <v-flex xs12>
                <v-btn color="secondary" @click="sectionTagOnPickFile">
                  Upload new image
                </v-btn>
                <input
                  type="file"
                  accept="image/*"
                  ref="sectionTagFileInput"
                  style="display: none"
                  @change="sectionTagOnFilePicked"/>
                <img
                  :src="newSectionTagItem.src"
                  :alt="newSectionTagItem.src"
                  height="100px">

            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs4 v-for="item in loadedSectionTagItems" :key="item.src">
              <img
                :src="item.src"
                :alt="item.src"
                height="50px">
              <manage-content-edit-tag-item-dialog
                :editingTagItem="item">
              </manage-content-edit-tag-item-dialog>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions>
          <v-btn flat type="submit" :disabled="false">save</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-container>
</template>

<script>
import ManageContentEditTagItemDialog from './ManageContentEditTagItemDialog.vue'

export default {
  components: {
    'manage-content-edit-tag-item-dialog': ManageContentEditTagItemDialog
  },
  data () {
    return {
      editingSectionMenu: {
        src: '',
        image: null
      },
      editingSectionOurPlace: {
        src: '',
        image: null,
        text: this.$store.getters.loadedSectionOurPlace.text,
        address: this.$store.getters.loadedSectionOurPlace.address
      },
      editingSectionTagItem: [],
      newSectionTagItem: {
        src: '',
        image: null,
        name: '',
        id: ''
      }
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
  methods: {
    sectionMenuOnPickFile () {
      this.$refs.sectionMenuFileInput.click()
      console.log('sectionMenuOnPickFile')
    },
    sectionOurPlaceOnPickFile () {
      this.$refs.sectionOurPlaceFileInput.click()
      console.log('sectionOurPlaceOnPickFile')
    },
    sectionTagOnPickFile () {
      this.$refs.sectionTagFileInput.click()
      console.log('sectionTagOnPickFile')
    },
    sectionMenuOnFilePicked (event) {
      const files = event.target.files
      let filename = files[0].name
      if (filename.lastIndexOf('.') <= 0) {
        return alert('please add a valid file')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.editingSectionMenu.src = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.editingSectionMenu.image = files[0]
      console.log('sectionMenuOnFilePicked')
    },
    sectionOurPlaceOnFilePicked (event) {
      const files = event.target.files
      let filename = files[0].name
      if (filename.lastIndexOf('.') <= 0) {
        return alert('please add a valid file')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.editingSectionOurPlace.src = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.editingSectionOurPlace.image = files[0]
      console.log('sectionOurPlaceOnFilePicked')
    },
    sectionTagOnFilePicked (event) {
      const files = event.target.files
      let filename = files[0].name
      if (filename.lastIndexOf('.') <= 0) {
        return alert('please add a valid file')
      }
      this.newSectionTagItem.name = filename
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.newSectionTagItem.src = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.newSectionTagItem.image = files[0]
      console.log('sectionTagOnFilePicked')
    },
    sectionMenuOnSaveChanges () {
      this.$store.dispatch('updateSectionMenu', {
        src: this.editingSectionMenu.src,
        image: this.editingSectionMenu.image
      })
      console.log('sectionMenuOnSaveChanges')
    },
    sectionOurPlaceOnSaveChanges () {
      this.$store.dispatch('updateSectionOurPlace', {
        text: this.editingSectionOurPlace.text,
        address: this.editingSectionOurPlace.address,
        src: this.editingSectionOurPlace.src,
        image: this.editingSectionOurPlace.image
      })
      console.log('sectionOurPlaceOnSaveChanges')
    },
    sectionTagOnCreateNewItem () {
      this.$store.dispatch('createSectionTagItem', {
        src: this.newSectionTagItem.src,
        image: this.newSectionTagItem.image,
        name: this.newSectionTagItem.name
      })
      console.log('sectionTagOnCreateNewItem')
    }
  }
}
</script>

<style lang="css">
</style>
