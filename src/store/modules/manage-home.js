import * as firebase from 'firebase'

const state = {
  loadedSectionMenu: {
    src: '',
    image: null
  },
  loadedSectionOurPlace: {
    src: '',
    image: null,
    text: 'Consectetur rerum dolor quasi ea tempore eos ducimus consequatur. Voluptates tenetur adipisci deleniti quia. Quod hic ut consequatur. In nihil quis rerum quo error. Sunt doloremque doloribus molestiae. Reiciendis rerum et quis incidunt sapiente deleniti ab.',
    address: 'Address: Unit 19, 5418 Yonge Street, North York, ON, M2N 6X4'
  },
  loadedSectionTagItems: []
}

const getters = {
  loadedSectionMenu (state) {
    return state.loadedSectionMenu
  },
  loadedSectionOurPlace (state) {
    return state.loadedSectionOurPlace
  },
  loadedSectionTagItems (state) {
    return state.loadedSectionTagItems
  }
}

const mutations = {
  setLoadedSectionMenu (state, payload) {
    state.loadedSectionMenu = payload
    console.log('mutations: setLoadedSectionMenu')
  },
  updateSectionMenu (state, payload) {
    if (payload.src) {
      state.loadedSectionMenu.src = payload.src
    }
    if (payload.image) {
      state.loadedSectionMenu.image = payload.image
    }
    console.log('mutations: updateSectionMenu')
  },
  setLoadedSectionOurPlace (state, payload) {
    state.loadedSectionOurPlace = payload
    console.log('mutations: setLoadedSectionOurPlace')
  },
  updateSectionOurPlace (state, payload) {
    if (payload.src) {
      state.loadedSectionOurPlace.src = payload.src
    }
    if (payload.image) {
      state.loadedSectionOurPlace.image = payload.image
    }
    if (payload.text) {
      state.loadedSectionOurPlace.text = payload.text
    }
    if (payload.address) {
      state.loadedSectionOurPlace.address = payload.address
    }
    console.log('mutations: updateSectionOurPlace')
  },
  createSectionTagItem (state, payload) {
    state.loadedSectionTagItems.push(payload)
    console.log('mutations: createSectionTagItem')
  },
  updateTagItem (state, payload) {
    const tagItem = state.loadedSectionTagItems.find(
      tagItem => {
        return tagItem.id === payload.id
      }
    )
    if (payload.name) {
      tagItem.name = payload.name
    }
    if (payload.ext) {
      tagItem.ext = payload.ext
    }
    if (payload.src) {
      tagItem.src = payload.src
    }
    if (payload.image) {
      tagItem.image = payload.image
    }
    console.log('mutations: updateTagItem')
  },
  setLoadedSectionTagItems (state, payload) {
    state.loadedSectionTagItems = payload
    console.log('mutations: setLoadedSectionTagItems')
  }
}

const actions = {
  loadSectionMenu ({commit}, payload) {
    let database = firebase.database()
    database.ref('sectionMenu').once('value')
      .then(data => {
        let obj = data.val()
        let sectionMenu = {
          src: obj.src,
          image: obj.image
        }
        commit('setLoadedSectionMenu', sectionMenu)
      })
      .catch(error => {
        console.log(error)
      })
    console.log('actions: loadeSectionMenu')
  },
  updateSectionMenu ({commit}, payload) {
    let storage = firebase.storage()
    let database = firebase.database()
    let updateObj = {}
    const filename = payload.image.name
    console.log('filename: ' + filename)
    const ext = filename.slice(filename.lastIndexOf('.'))
    console.log('ext: ' + ext)
    if (payload.image) {
      updateObj.image = payload.image
      updateObj.ext = ext
      storage.ref('sectionMenu/img-parallax' + ext).put(payload.image)
        .then(() => {
          storage.ref('sectionMenu/img-parallax' + ext).getDownloadURL()
            .then(url => {
              console.log(url)
              updateObj.src = url
              database.ref('sectionMenu').update(updateObj)
              commit('updateSectionMenu', updateObj)
            })
            .catch(error => {
              console.log(error)
            })
        })
        .catch(error => {
          console.log(error)
        })
    }
    console.log('actions: updateSectionMenu')
  },
  loadSectionOurPlace ({commit}, payload) {
    let database = firebase.database()
    database.ref('sectionOurPlace').once('value')
      .then(data => {
        let obj = data.val()
        let sectionOurPlace = {
          src: obj.src,
          image: obj.image,
          text: obj.text,
          address: obj.address
        }
        commit('setLoadedSectionOurPlace', sectionOurPlace)
      })
      .catch(error => {
        console.log(error)
      })
    console.log('actions: loadSectionOurPlace')
  },
  updateSectionOurPlace ({commit}, payload) {
    let storage = firebase.storage()
    let database = firebase.database()
    let updateObj = {}

    if (payload.text) {
      updateObj.text = payload.text
    }
    if (payload.address) {
      updateObj.address = payload.address
    }
    if (payload.image) {
      const filename = payload.image.name
      console.log('filename: ' + filename)
      const ext = filename.slice(filename.lastIndexOf('.'))
      console.log('ext: ' + ext)
      updateObj.image = payload.image
      updateObj.ext = ext
      storage.ref('sectionOurPlace/img-our-place' + ext).put(payload.image)
        .then(() => {
          storage.ref('sectionOurPlace/img-our-place' + ext).getDownloadURL()
          .then(url => {
            updateObj.src = url
            console.log(url)
            database.ref('sectionOurPlace').update(updateObj)
            commit('updateSectionOurPlace', updateObj)
          })
          .catch(error => {
            console.log(error)
          })
        })
        .catch(error => {
          console.log(error)
        })
    }
    if (payload.image === null || payload.image === undefined) {
      database.ref('sectionOurPlace').update(updateObj)
        .then(() => {
          commit('updateSectionOurPlace', updateObj)
        })
        .catch(error => {
          console.log(error)
        })
    }
    console.log('actions: updateSectionOurPlace')
  },
  loadSectionTagItems ({commit}, payload) {
    let database = firebase.database()
    database.ref('sectionTag').once('value')
      .then(data => {
        const tagItems = []
        const obj = data.val()
        for (let key in obj) {
          tagItems.push({
            name: obj[key].name,
            src: obj[key].src,
            image: obj[key].image,
            ext: obj[key].ext,
            id: obj[key].id
          })
        }
        commit('setLoadedSectionTagItems', tagItems)
      })
      .catch(error => {
        console.log(error)
      })
    console.log('actions: loadSectionTagItems')
  },
  createSectionTagItem ({commit}, payload) {
    let database = firebase.database()
    let storage = firebase.storage()
    let key
    let newObj = {
      name: '',
      src: '',
      image: null,
      ext: '',
      id: ''
    }
    if (payload.image) {
      const filename = payload.image.name
      console.log(filename)
      const ext = filename.slice(filename.lastIndexOf('.'))
      console.log(ext)
      newObj.name = filename
      newObj.ext = ext
      newObj.image = payload.image
      database.ref('sectionTag').push(newObj)
        .then(data => {
          key = data.key
          newObj.id = key
          storage.ref('sectionTag/' + key + ext).put(payload.image)
            .then(() => {
              storage.ref('sectionTag/' + key + ext).getDownloadURL()
                .then(url => {
                  newObj.src = url
                  console.log(url)
                  database.ref('sectionTag/' + key).update(newObj)
                })
                .catch(error => {
                  console.log(error)
                })
            })
            .catch(error => {
              console.log(error)
            })
        })
        .catch(error => {
          console.log(error)
        })
      commit('createSectionTagItem', newObj)
    }
    console.log('actions: createSectionTagItem')
  },
  updateTagItem ({commit}, payload) {
    let database = firebase.database()
    let storage = firebase.storage()
    let updateObj = {}
    if (payload.image) {
      updateObj.image = payload.image
      storage.ref('sectionTag/' + payload.id + payload.ext).delete()
        .then(() => {
          const filename = payload.image.name
          console.log('filename: ' + filename)
          updateObj.name = filename
          const ext = filename.slice(filename.lastIndexOf('.'))
          console.log('ext: ' + ext)
          updateObj.ext = ext
          storage.ref('sectionTag/' + payload.id + ext).put(payload.image)
            .then(() => {
              console.log('sectionTag/' + payload.id + ext)
              storage.ref('sectionTag/' + payload.id + ext).getDownloadURL()
                .then(url => {
                  updateObj.src = url
                  console.log(updateObj)
                  database.ref('sectionTag').child(payload.id).update(updateObj)
                    .then(() => {
                      commit('updateTagItem', payload)
                    })
                    .catch(error => {
                      console.log(error)
                    })
                })
                .catch(error => {
                  console.log(error)
                })
            })
            .catch(error => {
              commit('setLoading', false)
              console.log(error)
            })
        })
        .catch(error => {
          commit('setLoading', false)
          console.log(error)
        })
    }
    console.log('actions: updateTagItem')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
