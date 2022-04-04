<template>
  <v-sheet
    height="100"
    class="overflow-hidden"
  >

<div @toggle-drawer="drawer"/>
<v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider </v-list-item-title>
                      <p>{{message}}</p>

        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-sheet>
</template>

<script>

export default {
  name: "NavBar",
  props: ["message"],
  data() {
    return {
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
        console.log(this.$emit('toggle-drawer'),"eee")
      },
  },
  methods: {
    calculateSectionOffsets() {
      let sections = document.getElementsByTagName("section");
      let length = sections.length;

      for (let i = 0; i < length; i++) {
        let sectionOffset = sections[i].offsetTop;
        this.offsets.push(sectionOffset);
      }
    },
    setDrawer(e) {
    console.log("here",e)
      this.$emit('toggle-drawer', true)
      this.drawer = true;
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
  width: 100%;
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
