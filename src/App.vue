<template>

  <div id="app">
    <NavBar v-on:toggle-drawer="toggleDrawer"/>
    <Intro />
    <v-container class="body">
      <div class="d-md-none-and-down d-md-flex ">
        <Social />
      </div>
      <div class="content">
        <Skills />
        <Work />
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
import Footer from "./views/Footer.vue";
import Social from "./views/Social.vue";
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Intro,
    Skills,
    Work,
    Projects,
    Certifications,
    Footer,
    Social,
    NavBar,
  },
  methods: {
      toggleDrawer(e) {
        this.drawer = e;
        this.$emit('toggle-drawer', true)
      },
    onScroll(e) {
      this.is_transparent = !(e.target.scrollTop > 0);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--v-neutral-base) !important;;
  background-color: var(--v-base-base) !important;
  display: 'flex';
  height: '100%';
  overflow: 'hidden';
  width: '100%';
  /* overflow-x: hidden;  */
}
h2 {
  font-weight: 910;
}

p {
    color: var(--v-title-base) !important;;
}
b-container {
  padding: 1rem 0rem 0rem 0rem;
}
</style>
