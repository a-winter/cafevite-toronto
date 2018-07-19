<template>
  <v-app>
    <v-navigation-drawer app temporary fixed v-model="drawer" app>
      <v-list>
        <!--<v-list-tile class="pa-1" to="/">
          <v-list-tile-avatar>

          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>User</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>-->
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in menuItems.shared"
          :key="item.tille"
          :to="item.path">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile
          v-for="item in menuItems.notUser"
          v-if="!userIsAuthenticated"
          :key="item.tille"
          :to="item.path">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-group
          v-if="userIsAuthenticated"
          prepend-icon="account_circle"
          no-action
          value="true"
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>Admin</v-list-tile-title>
          </v-list-tile>
          <v-list-tile v-for="item in menuItems.admin" :key="item.title" :to="item.path">
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>

        <v-list-tile
          v-if="userIsAuthenticated"
          @click="onSignOut"
          >
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Sign Out</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar fixed app style="z-index: 5">
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer" class=""></v-toolbar-side-icon>

      <v-toolbar-title class="">
        <router-link :to="{ name: 'Home', params: {} }" tag="span" style="cursor: pointer">
          Cafe Vite
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          v-for="item in menuItems.shared"
          :key="item.title"
          flat
          :to="item.path">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
        <v-btn
          v-for="item in menuItems.notUser"
          v-if="!userIsAuthenticated"
          :key="item.title"
          flat
          :to="item.path">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>

  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      menuItems: {
        shared: [
          {
            icon: 'home',
            title: 'Home',
            path: '/'
          },
          {
            icon: 'chrome_reader_mode',
            title: 'Menu',
            path: '/menu'
          },
          {
            icon: 'question_answer',
            title: 'About',
            path: '/about'
          }
        ],
        notUser: [
          {
            icon: 'arrow_forward',
            title: 'Sign In',
            path: '/signin'
          }
        ],
        admin: [
          {
            icon: 'dashboard',
            title: 'Dashboard',
            path: '/dashboard/content'
          },
          {
            icon: 'build',
            title: 'Content',
            path: '/content'
          }
        ],
        user: [
          // {
          //   icon: 'settings',
          //   title: 'Setting',
          //   path: '',
          // },
          // {
          //   icon: 'stars',
          //   title: 'Offers',
          //   path: '/',
          //   display: false
          // },
          // {
          //   icon: 'assignment_turned_in',
          //   title: 'Order',
          //   path: '/',
          //   display: false
          // },
          // {
          //   icon: 'shopping_cart',
          //   title: 'Cart',
          //   path: '/',
          //   display: false
          // },
          // {
          //   icon: 'sent',
          //   title: 'Contact us',
          //   path: '/',
          //   display: false
          // },
          // {
          //   icon: 'arrow_forward',
          //   title: 'Sign In',
          //   path: '/signin',
          //   display: true
          // },
          // {
          //   icon: '',
          //   title: 'Sign Up',
          //   path: '/signup',
          //   display: true
          // }
        ]
      },
      toolbarItems: [
        {icon: 'account_circle', path: ''},
        {icon: 'shopping_cart', path: ''},
        {icon: 'search', path: ''}
      ],
      footerSharedItems: [
        {icon: 'fa fa-facebook-square', link: 'https://www.facebook.com/Cafevite.Toronto/'},
        {icon: 'fa fa-instagram', link: 'https://www.instagram.com/cafevitetoronto/'}
        // {icon: 'fa fa-linkedin-square'},
        // {icon: 'fa fa-google-plus-official'}
      ],
      footerContactItems: [
        {icon: 'fa fa-map', title: 'Unit 19, 5418 Yonge Street', subtitle: 'North York, ON, M2N 6X4'},
        {icon: 'fa fa-calendar', title: '10AM - 8PM', subtitle: 'Open daily'},
        {icon: 'fa fa-phone', title: '+1 647 847 8198', subtitle: ''},
        {icon: 'fa fa-envelope', title: '68foodinc@gmail.com', subtitle: ''}
      ],
      footerUsefulLinkItems: [],
      footerMenuItems: [
        {title: 'Rolls'},
        {title: 'Banh mi'},
        {title: 'Main dishes'},
        {title: 'Drinks'},
        {title: 'Combos'}
      ]
    }
  },
  computed: {
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  },
  methods: {
    onSignOut () {
      console.log('onSignOut')
      this.$store.dispatch('signUserOut')
    }
  },
  name: 'App'
}
</script>
