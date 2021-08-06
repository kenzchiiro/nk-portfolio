<template>
    <v-row dense>
    <v-col sm="12" md="6" cols="12" :class="'layer-' + layerClass " v-for="(event, e) in data" :key="e">
      <v-card data-aos="fade-up" :data-aos-duration="(e+2)*200"  class="custom" min-height="110"  min-width="200" outlined>
        <v-list-item one-line>
          <v-list-item-content>
            <div class="head"><p><bold v-for="(line,l) in event.text" :key="l">{{line}}</bold></p> </div>
            <v-list-item-title class="headline mb-1">{{event.topic}}</v-list-item-title>
            <v-list-item-subtitle>{{event.time}}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-avatar tile size="85" :src="pathLogo(event.logo)"><v-img :src="pathLogo(event.logo)"></v-img></v-list-item-avatar>
        </v-list-item>
      </v-card>
    </v-col>
    </v-row>
</template>

<script>
export default {
  name: "Card",
  props: ["title", "data"],
    methods: {
    pathLogo: function (path) {
      console.log(require("@/" + path));
      return require("@/" + path);
    },
  },
  computed: {
    layerClass() {
      return this.title.slice(0, 2).toLowerCase();
    },
  },
};
</script>

<style scope>
@import "../assets/css/card.css";


</style>

