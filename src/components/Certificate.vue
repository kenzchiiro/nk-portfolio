<template>
    <v-row dense>
    <v-col xs="12" sm="6" md="4" lg="3" cols="12" :class="'layer-' + layerClass" v-for="(event, e) in data" :key="e">
      <v-card data-aos="fade-up" :data-aos-duration="(e+2)*200"  class="inline" min-width="150" outlined>
        <v-row dense>
            <v-col xs="1" sm="5" md="5" lg="5" xl="5" cols="4">
            <v-img
                style="border-top-left-radius: 3%; border-bottom-left-radius: 3%;"
                height="100%"
                width="100"
                :src="pathLogo(event.icon)"
            ></v-img>
            </v-col>
            <v-col xs="11" sm="7" md="7" lg="7" xl="7" >
            <v-list-item-content>
            <div class="title">
                <p><bold v-for="(line,l) in event.topic" :key="l">{{line}}</bold>   <v-icon style="float:right; margin-right: 0.5rem; color:var(--v-info-base);">mdi-file-certificate-outline</v-icon></p>
            </div>
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

