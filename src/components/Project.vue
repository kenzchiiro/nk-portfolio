<template>
    <v-row dense>
    <v-col xs="6" lg="4" cols="12" :class="'layer-' + layerClass" v-for="(event, e) in data" :key="e">
      <v-card  data-aos="fade-up" :data-aos-duration="(e+2)*200" class="mx-auto"  outlined>
        <v-list-item three-line>
        <v-row dense>
            <v-list-item-content>
            <v-col cols="10">
              <a :href=event.git>
                <i v-b-tooltip.hover :title=event.tooltip class="far fa-folder" style="font-size:40px; color:var(--v-info-base)"></i>
              </a>
            </v-col>
            <v-col cols="2">
              <div v-if="event.link != ''">
                <!-- <v-icon v-bind:href=event.link>mdi-open-in-new</v-icon> -->
              <a :href=event.link target="_blank" 
              >
                <i class="fas fa-external-link-alt" style="font-size:20px; color:var(--v-info-base); float:right;"></i>
              </a>
              </div>
            </v-col>
            </v-list-item-content>
        </v-row>
        </v-list-item>
        <v-card-text>
            <p class="info" style="margin:0px;">{{event.time}}</p>
            <v-list-item-content class="content-text">
            <div><h6><bold v-for="(line,l) in event.topic" :key="l">{{line}}</bold></h6> </div>
            <v-list-item-title class ="sub-title">{{event.detail}}</v-list-item-title>
            <p class ="info"><span v-for="(line,l) in event.text" :key="l">{{line}}<br></span></p>
            </v-list-item-content>
         </v-card-text>
      <v-card-actions>
        <v-chip class="tag" v-for="(skill,s) in event.skills" :key="s" outlined>{{skill}}</v-chip>
      </v-card-actions>
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

