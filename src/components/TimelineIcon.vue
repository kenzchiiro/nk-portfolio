<template>
  <div class="TimelineBox">
    <div :class="'layer-' + layerClass" v-for="(event, e) in data" :key="e">
    <div data-aos="fade-up">
      <div class="TimelineBox-item" >
        <div class="TimelineBox-info">
          <span>{{ event.time }}</span>
        </div>
        <div class="TimelineBox-marker"></div>
        <div class="TimelineBox-content">
          <b-row>
            <b-col cols="2">
              <b-img
                class="logo"
                height="59px"
                :src="pathLogo(event.logo)"
              ></b-img>
            </b-col>
            <b-col cols="10">
              <h6 class="TimelineBox-title">{{ event.topic }}</h6>
              <div class="TimelineBox-detail">
                <b-icon :icon="event.icon"></b-icon> {{ event.detail }}
                <div class="link">
                  <a :href="event.link">
                    {{ event.name }}
                  </a>
                </div>
              </div>
              <p>
                <span v-for="(line, l) in event.text" :key="l"
                  >{{ line }}<br
                /></span>
              </p>
            </b-col>
          </b-row>
        </div>
        <br />
      </div>
      <div class="TimelineBox-item period"></div>
    </div>
    </div>
    <div class="TimelineBox-item period">
      <div class="TimelineBox-marker"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TimelineIcon",
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
@import "../assets/css/timeline.css";
</style>
