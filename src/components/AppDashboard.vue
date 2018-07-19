<template lang="html">
  <v-container class="pa-0">
    <v-navigation-drawer
      :mini-variant.sync="mini"
      v-model="drawer"
      hide-overlay
      stateless
      fixed
      style="margin-top: 48px">
      <v-toolbar flat class="transparent">
       <v-list class="">
         <v-list-tile avatar class="py-2">
           <v-list-tile-avatar>
             <img src="https://cdn4.iconfinder.com/data/icons/basic-ui-elements/700/09_lock_unlocked-512.png">
           </v-list-tile-avatar>

           <v-list-tile-content>
             <v-list-tile-title>Admin</v-list-tile-title>
           </v-list-tile-content>

           <v-list-tile-action>
             <v-btn
               icon
               @click.stop="mini = !mini">
               <v-icon>chevron_left</v-icon>
             </v-btn>
           </v-list-tile-action>
         </v-list-tile>
       </v-list>
      </v-toolbar>
      <v-list class="mt-2">
       <v-divider></v-divider>
       <v-list-tile
         v-for="item in items"
         :key="item.title"
         @click="mini = !mini"
         :to="item.path">
         <v-list-tile-action>
           <v-icon>{{ item.icon }}</v-icon>
         </v-list-tile-action>
         <v-list-tile-content>
           <v-list-tile-title>{{ item.title }}</v-list-tile-title>
         </v-list-tile-content>
       </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <router-view style="padding: 0 0 0 80px"></router-view>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      drawer: true,
      items: [
        {
          title: 'Content',
          icon: 'list',
          path: '/dashboard/content'
        },
        {
          title: 'Menu',
          icon: 'chrome_reader_mode',
          path: '/dashboard/menu'
        },
        {
          title: 'Typography',
          icon: 'font_download',
          path: '/dashboard/typography'
        }
      ],
      mini: true,
      right: null
    }
  }
}
</script>

<style lang="css">
</style>
