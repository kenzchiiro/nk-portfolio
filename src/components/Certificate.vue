<template>
    <v-row dense>
    <v-col xs="12" sm="12" md="12" lg="4" cols="12" :class="'layer-' + layerClass" v-for="(event, e) in data" :key="e">
      <v-card data-aos="fade-up" :data-aos-duration="(e+2)*200"  class="inline" min-width="100" max-height="120" outlined>
        <v-row dense >
          <!-- <div> -->
            <v-col class="certificate-icon" cols="12">
             <v-avatar
                class="ma-3"
                size="118"
                tile
              >
            <v-img
                style="border-top-left-radius: 3%; border-bottom-left-radius: 3%;"
                :src="pathLogo(event.icon)"
            ></v-img>
            </v-avatar>
              <!-- <v-icon style="float:right; margin-right: 0.5rem; color:var(--v-info-base);">mdi-file-certificate-outline</v-icon> -->
                    <v-row dense style="padding: 10px;">
                        <v-col cols="12">
                          <v-card-subtitle class="certificate-title" style="padding: 0px !important; padding-top: 0.5rem;" v-text="event.topic"></v-card-subtitle>
                        </v-col>
                        <v-col cols="12">
                          <v-card-subtitle class="certificate-subtitle" style="padding: 0px !important;">
                            <span v-text="event.level"></span>
                            <v-icon small v-b-tooltip.hover :title=event.tooltips style="margin-left:0.2rem; !important; padding-bottom: 0.1rem;">mdi-information-outline</v-icon>
                          </v-card-subtitle>
                        </v-col>
                        <v-col cols="12">
                          <v-card-subtitle class="certificate-title" style="padding: 0px !important;"><a class="code" v-bind:href="event.link">{{event.id}} </a> </v-card-subtitle>
                        </v-col>
                    </v-row>
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

