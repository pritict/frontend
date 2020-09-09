<template>
  <v-app>
    <Header @showdrawer="changeButtonname"/>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer color="primary lighten-1" padless>
      <Footer/>
    </v-footer>
  </v-app>
</template>

<script>
import Header from './components/Header';
import MainPage from './components/MainPage';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    MainPage,
    Footer
  },
  data () {
    return {
      componentname : 'MainPage',
      drawer : false,
      title : 'titile Vue',
      count : 0
    }
  },
  methods : {
    changeButtonname() {
      this.title = 'titile' + this.count++
    }
  }
};
</script>
