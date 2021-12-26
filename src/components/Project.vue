<template>
    <v-row dense>
    <v-col xs="6" lg="4" cols="12" :class="'layer-' + layerClass" v-for="(event, e) in data" :key="e">
      <v-card  data-aos="fade-up" :data-aos-duration="(e+2)*200" class="mx-auto"  outlined>
        <v-list-item three-line>
        <v-row dense>
            <v-list-item-content>
            <v-col cols="10">
              <a :href=event.git>
                <i class="far fa-folder" style="font-size:40px; color:#768390;"></i>
              </a>
            </v-col>
            <v-col cols="2">
              <div v-if="event.link != ''">
              <a :href=event.link>
                <i class="fas fa-external-link-alt" style="font-size:20px; color:#768390; float:right;"></i>
              </a>
              </div>
            </v-col>
            </v-list-item-content>
        </v-row>
        </v-list-item>
        <v-card-text>
            <div>{{event.time}}</div>
            <v-list-item-content class="content-text">
            <div><p><bold v-for="(line,l) in event.topic" :key="l">{{line}}</bold></p> </div>
            <v-list-item-title>{{event.detail}}</v-list-item-title>
            <p class ="line"><span v-for="(line,l) in event.text" :key="l">{{line}}<br></span></p>
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

