<script>

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

  import axios from 'axios';

  export default {
    name : 'App',
    components: {
      AppHeader,
      AppMain,
      AppFooter
    },
    data() {
      return {
        prova : 'dato di prova',
        projectURL : 'http://localhost:8000/api/projects'
      }
    },
    methods:{
      getAllProjects(projectURL){
        axios.get(projectURL, (response) => {
          console.log(response);
        })
      }
    },
    mounted(){
      this.getAllProjects(this.projectURL);
    }
  }
</script>

<template>

  <AppHeader />

  <AppMain />

  <AppFooter />

</template>

<style scoped>

</style>
