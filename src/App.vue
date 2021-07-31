<template>
  <div id="app">
        <Intro />
    <b-container>
      <div class="content">
        <Education />
        <Work />
        <Projects />
        <Certifications />
      </div> 
    </b-container> 
  </div>
</template>

<script>
import Intro from "./views/Intro.vue";
import Education from "./views/Education.vue";
import Work from "./views/Work.vue";
import Projects from "./views/Projects.vue";
import Certifications from "./views/Certifications.vue";


export default {
  name: "App",
  components: {
    Intro,
    Education,
    Work,
    Projects,
    Certifications,
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
  overflow-x: hidden; 
}
b-container{
    padding: 1rem 0rem 0rem 0rem;
} 
</style>
