<template>
    <v-row dense>
    <v-col sm="3" md="3" cols="12" :class="'layer-' + layerClass" v-for="(event, e) in data" :key="e">
      <v-card data-aos="fade-right" class="inline" width="300" outlined>
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
            <div class="title"><p><bold v-for="(line,l) in event.topic" :key="l">{{line}}</bold></p> </div>
            <v-list-item-title class="level">{{event.level}}</v-list-item-title>
            <v-icon>fa-hackerrank</v-icon>
            <v-icon>fas fa-lock</v-icon>
            <v-list-item-subtitle class="code">{{event.name}}</v-list-item-subtitle>
            </v-list-item-content>
            </v-col>
        </v-row>
        
          <!-- <v-list-item-content>
            <div class="head"><p><bold v-for="(line,l) in event.topic" :key="l">{{line}}</bold></p> </div>
            <v-list-item-title class="headline mb-1">{{event.topic}}</v-list-item-title>
            <v-list-item-subtitle>{{event.time}}</v-list-item-subtitle>
          </v-list-item-content> -->
          <!-- <v-list-item-avatar tile size="85" :src="pathLogo(event.logo)"><v-img :src="pathLogo(event.logo)"></v-img></v-list-item-avatar> -->
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

