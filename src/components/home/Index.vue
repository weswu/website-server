<template>
  <v-app>
    <Header />
    <home-view />
    <Footer />
    <Settings />
  </v-app>
</template>

<script>
  export default {
    name: 'HomeLayout',
    components: {
      Header: () => import('./Header'),
      Footer: () => import('./Footer'),
      Settings: () => import('./Settings'),
      HomeView: () => import('./View')
    },
  }
</script>
