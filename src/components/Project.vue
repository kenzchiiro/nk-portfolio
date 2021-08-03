<template>
    <v-row dense>
    <v-col xs="6" lg="4" cols="12" :class="'layer-' + layerClass" v-for="(event, e) in data" :key="e">
      <v-card data-aos="fade-right" class="inline" min-height="312" min-width="300" outlined>
        <v-list-item one-line>
        <v-row dense>
            <v-list-item-content>
            <v-col cols="10">
                <i class="far fa-folder" style="font-size:40px; color:#768390;"></i>
            </v-col>
            <v-col cols="2">
                <i class="fab fa-github" style="font-size:25px; color:#768390; float:right;"></i>
            </v-col>
            </v-list-item-content>
        </v-row>
        </v-list-item>
        <v-list-item one-line>
        <v-row dense>
            <v-col cols="12">
            <v-list-item-content>
            <div class="title"><p><bold v-for="(line,l) in event.topic" :key="l">{{line}}</bold></p> </div>
            <v-list-item-title class="level">{{event.detail}}</v-list-item-title>
            <p class ="line"><span v-for="(line,l) in event.text" :key="l">{{line}}<br></span></p>
            </v-list-item-content>
            </v-col>
        </v-row>
         </v-list-item>
        <v-list-item one-line>
            <v-row dense>
                <v-col cols="4">
                    <b-badge data-aos="zoom-out-up" data-aos-duration="2000" variant="light tag">#WEB</b-badge>
                </v-col>
            </v-row>
        </v-list-item>
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

