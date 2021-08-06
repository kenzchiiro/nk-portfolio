<template>
  <div id="app">
        <Intro />
    <v-container>
      <div class="content">
        <Skills />
        <Work />
        <!-- <Education /> -->
        <Projects />
        <Certifications />
      </div> 
    </v-container> 
          <Footer />

  </div>
</template>

<script>
import Intro from "./views/Intro.vue";
import Skills from "./views/Skills.vue";
import Work from "./views/Work.vue";
import Projects from "./views/Projects.vue";
import Certifications from "./views/Certifications.vue";
import Footer from './views/Footer.vue';


export default {
  name: "App",
  components: {
    Intro,
    Skills,
    Work,
    Projects,
    Certifications,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* overflow-x: hidden;  */
}
h2 {
  font-weight: 900;
}

b-container{
    padding: 1rem 0rem 0rem 0rem;
} 
</style>
