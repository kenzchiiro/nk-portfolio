<template>
<nav>
    <v-app-bar
      app
      class="transparent-body"
      :class="{change_color: scrollPosition > 700 }"
    >
    
  <v-toolbar absolute flat class="d-none d-md-block transparent-body" width="100%">
    <v-btn plain class="navbar-btn" v-for="(item, index) in items" :key="item" v-on:click="scrollToSection(index)" >
     {{ item }}
    </v-btn>
    <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
    <v-spacer></v-spacer>
    <!-- <v-btn small outlined class="navbar-btn"> RESUME </v-btn> -->
  </v-toolbar>

    <v-toolbar absolute flat class="d-md-none transparent-body" width="100%">
    <v-app-bar-nav-icon class="menu" id="drawer" @click="setDrawer(true)" ></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <!-- <v-btn small outlined class="navbar-btn"> RESUME </v-btn> -->
  </v-toolbar>
   </v-app-bar>
<v-navigation-drawer
      v-model="drawer"
      fixed
      
    >
    <!-- group
    name and profile  -->
    
      <v-list-item-group>
        <br/>
          <b-avatar
            :src="profile"
            variant="light"
          ></b-avatar>
          <v-list-item-title>Nattawut Khuadplod</v-list-item-title>
      </v-list-item-group>
      <v-divider/>
    <!-- list section -->
    <v-list dense>
    <v-list-item v-for="(item, index) in items" :key="item">
      <v-btn plain class="navbar-btn-list"  v-on:click="scrollToSection(index)" >
      {{ item }}
      </v-btn>
    </v-list-item>
    </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>

const drawer  = false
export { drawer }
import profile from "../assets/me.jpg";
export default {
  name: "NavBar",
  data() {
    return {
      profile,
      scrollPosition: null,
      index:0,
      bgc: { backgroundColor: '`transparent` !important'},
      drawer: false,
      group: null,
      items: ["ABOUT", "EXPERIENCE", "PROJECTS", "CERTIFICATIONS"],
    };
  },
  watch: {
      group () {
        this.drawer = false
      },
  },
  props: ["title", "data"],
  methods: {
    calculateSectionOffsets() {
      let sections = document.getElementsByTagName("section");
      let length = sections.length;

      for (let i = 0; i < length; i++) {
        let sectionOffset = sections[i].offsetTop;
        this.offsets.push(sectionOffset);
      }
    },
    setDrawer(active) {
      this.drawer = active;
      this.$emit('toggle-drawer', true)
      console.log(this.drawer)
    },
    handleMouseWheel: function (e) {
      if (e.wheelDelta < 30 && !this.inMove) {
        this.moveUp();
      } else if (e.wheelDelta > 30 && !this.inMove) {
        this.moveDown();
      }

      e.preventDefault();
      return false;
    },
    handleMouseWheelDOM: function (e) {
      if (e.detail > 0 && !this.inMove) {
        this.moveUp();
      } else if (e.detail < 0 && !this.inMove) {
        this.moveDown();
      }

      return false;
    },
    moveDown() {
      this.inMove = true;
      this.activeSection--;

      if (this.activeSection < 0) this.activeSection = this.offsets.length - 1;

      this.scrollToSection(this.activeSection, true);
    },
    moveUp() {
      this.inMove = true;
      this.activeSection++;

      if (this.activeSection > this.offsets.length - 1) this.activeSection = 0;

      this.scrollToSection(this.activeSection, true);
    },
    scrollToSection(id, force = false) {
      if (this.inMove && !force) return false;

      this.activeSection = id;
      this.inMove = true;

      document
        .getElementsByTagName("section")[id].scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        this.inMove = false;
      }, 500);
    },
      scrollToTop() {
      console.log("scroll to top")
      this.inMove = true;

         document
        .getElementById("intro").scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        this.inMove = false;
      }, 500);
    },
    touchStart(e) {
      e.preventDefault();

      this.touchStartY = e.touches[0].clientY;
    },
    touchMove(e) {
      if (this.inMove) return false;
      e.preventDefault();

      const currentY = e.touches[0].clientY;

      if (this.touchStartY < currentY) {
        this.moveDown();
      } else {
        this.moveUp();
      }

      this.touchStartY = 0;
      return false;
    },
    updateScroll() {
      this.scrollPosition = window.scrollY
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  created() {
    this.calculateSectionOffsets();
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>



<style>
.navbar-btn {
  color: #2c3e50 !important;
}

.navbar-btn-list {
  color: #2c3e50 !important;
  width: 100%;
  justify-content: start !important;;
}

.transparent-body {
  padding-right: 0.5rem !important;
  background-color: transparent !important ;
}

.menu{
  left: -1.8rem !important;
}

.change_color {
  background-color:white !important;
}

.nav-bar{
  position:relative !important;
}
</style>
