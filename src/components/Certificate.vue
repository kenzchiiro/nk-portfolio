<template>
    <v-row dense>
    <v-col sm="6" md="4" cols="6" :class="'layer-' + layerClass" v-for="(event, e) in data" :key="e">
      <v-card data-aos="fade-up" :data-aos-duration="(e+2)*200"  class="inline" min-width="200" outlined>
        <v-row dense>
            <v-col cols="5">
            <v-img
                height="100"
                width="100"
                :src="pathLogo(event.icon)"
            ></v-img>
            </v-col>
            <v-col cols="7">
            <v-list-item-content>
            <div class="title"><p><bold v-for="(line,l) in event.topic" :key="l">{{line}}</bold></p></div>
            <v-list-item-title class="level">{{event.level}}</v-list-item-title>
            <a class="code" v-bind:href="event.link">{{event.id}}</a>
            </v-list-item-content>
            </v-col>
        </v-row>
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

