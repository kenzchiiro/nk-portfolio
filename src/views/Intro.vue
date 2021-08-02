<template>
  <div class="header">
    <!--Content before waves-->
    <div class="inner-header flex">
      <!--Just the logo.. Don't mind this-->
    <b-container>
      <div class="mb-2" data-aos="zoom-in">
        <b-avatar  :src="profile" size="12rem" variant="light" class="p-2" ></b-avatar>
      </div>
      <b-row >
        <b-col class="title" ><h1>KEN NATTAWUT<br></h1></b-col>
      </b-row>
      <b-row>
        <b-col>
            <p>
              A SOFTWARE CONSULTANT<br />IN LOVE WITH
              CODING AND DESIGN
            </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
                <b-badge data-aos="zoom-out-up" data-aos-duration="2000" variant="light tag">#WEB</b-badge>
                <b-badge data-aos="zoom-out-up" data-aos-duration="2400" variant="light tag">#DESIGN</b-badge>
                <b-badge data-aos="zoom-out-up" data-aos-duration="2800" variant="light tag">#CODING</b-badge>
                <b-badge data-aos="zoom-out-up" data-aos-duration="3000" variant="light tag">#TECHNOLOGY</b-badge>
        </b-col>
      </b-row>
    </b-container>

    </div>
    <!--Waves Container-->
    <div>
      <svg
        class="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g class="parallax">
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="0"
            fill="rgba(255,255,255,0.7"
          />
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(255,255,255,0.5)"
          />
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(255,255,255,0.3)"
          />
          <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
        </g>
      </svg>
    </div>
    <!--Waves end-->
  </div>
  <!--Header ends-->
</template>


<script>
import profile from "../assets/me.jpg";

export default {
  name: "Intro",
    data() {
    return {
      profile
    };
  }
};
</script>

<style scope>
@import "../assets/css/wave.css";


.tag{
  margin: 0.25rem;
  opacity: .75;
}


.title > h1{ 
  color: #2c3e50;
  margin: 1rem;
}
</style>