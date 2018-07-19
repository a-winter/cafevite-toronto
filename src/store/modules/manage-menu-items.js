import * as firebase from 'firebase'

const state = {
  loadedMenuItems: []
}

const getters = {
  loadedMenuItems (state) {
    return state.loadedMenuItems
  }
}

const mutations = {
  setLoadedMenuItems (state, payload) {
    state.loadedMenuItems = payload
    console.log('mutations: setLoadedMenuItems')
  },
  createMenuItem (state, payload) {
    state.loadedMenuItems.push(payload)
    console.log('mutations: createMenuItem')
  },
  updateMenuItem (state, payload) {
    const menuItem = state.loadedMenuItems.find(
      menuItem => {
        return menuItem.id === payload.id
      }
    )
    if (payload.name) {
      menuItem.name = payload.name
    }
    if (payload.price) {
      menuItem.price = payload.price
    }
    if (payload.description) {
      menuItem.description = payload.description
    }
    if (payload.src) {
      menuItem.src = payload.src
    }
    if (payload.image) {
      menuItem.image = payload.image
    }
    console.log('mutations: updateMenuItem')
  }
}

const actions = {
  loadMenuItems ({commit}, payload) {
    let database = firebase.database()
    commit('setLoading', true)
    database.ref('menuItems').once('value')
      .then(
        data => {
          const menuItems = []
          const obj = data.val()
          for (let key in obj) {
            menuItems.push({
              id: key,
              name: obj[key].name,
              price: obj[key].price,
              description: obj[key].description,
              display: obj[key].display,
              src: obj[key].src,
              userId: obj[key].userId
            })
          }
          commit('setLoadedMenuItems', menuItems)
          commit('setLoading', false)
        }
      )
      .catch(
        error => {
          console.log(error)
          commit('setLoading', false)
        }
      )
    console.log('actions: loadMenuItems')
  },
  createMenuItem ({commit}, payload) {
    const newMenuItem = {
      src: payload.src,
      name: payload.name,
      price: payload.price,
      description: payload.description,
      display: payload.display,
      image: payload.image,
      userId: payload.userId
    }
    console.log(newMenuItem)
    let database = firebase.database()
    let storage = firebase.storage()
    let key
    console.log('key: ' + key)
    const filename = payload.image.name
    console.log('filename: ' + filename)
    const ext = filename.slice(filename.lastIndexOf('.'))
    console.log('ext: ' + ext)
    database.ref('menuItems').push(newMenuItem)
      .then(
        data => {
          key = data.key
          console.log('key: ' + key)
          return key
        }
      )
      .then(
        (key) => {
          storage.ref('menuItems/' + key + ext).put(payload.image)
            .then(() => {
              console.log('menuItems/' + key + ext)
              storage.ref('menuItems/' + key + ext).getDownloadURL()
                .then(
                  url => {
                    newMenuItem.src = url
                    newMenuItem.id = key
                    console.log(newMenuItem)
                    console.log('newMenuItem.src: ' + newMenuItem.src)
                    database.ref('menuItems/' + key).set(newMenuItem)
                  }
                )
            })
        }
      )
      .then(() => {
        commit('createMenuItem', newMenuItem)
      })
      .catch(
        error => {
          console.log(error)
        }
      )
    console.log('action: createMenuItem')
  },
  updateMenuItem ({commit}, payload) {
    let database = firebase.database()
    let storage = firebase.storage()
    commit('setLoading', true)
    const updateObj = {}
    const key = payload.id
    console.log(key)
    if (payload.name) {
      updateObj.name = payload.name
    }
    if (payload.price) {
      updateObj.price = payload.price
    }
    if (payload.description) {
      updateObj.description = payload.description
    }
    if (payload.image) {
      updateObj.image = payload.image
      const filename = payload.image.name
      console.log('filename: ' + filename)
      const ext = filename.slice(filename.lastIndexOf('.'))
      console.log('ext: ' + ext)
      storage.ref('menuItems/' + key + ext).put(payload.image)
        .then(() => {
          console.log('menuItems/' + key + ext)
          storage.ref('menuItems/' + key + ext).getDownloadURL()
            .then(url => {
              updateObj.src = url
              database.ref('menuItems').child(key).update(updateObj)
                .then(() => {
                  commit('setLoading', false)
                  commit('updateMenuItem', payload)
                })
                .catch(error => {
                  commit('setLoading', false)
                  console.log(error)
                })
            })
        })
    }
    if (payload.image === null || payload.image === undefined) {
      database.ref('menuItems').child(key).update(updateObj)
        .then(() => {
          commit('setLoading', false)
          commit('updateMenuItem', payload)
        })
        .catch(error => {
          commit('setLoading', false)
          console.log(error)
        })
    }
    console.log('actions: updateMenuItem')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
