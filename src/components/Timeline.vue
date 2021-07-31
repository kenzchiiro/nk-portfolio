<template>
	<div class="TimelineBox">
    <div :class="'layer-'+layerClass" v-for="(event,e) in data" :key="e">
      <div data-aos="fade-up">
        <div class="TimelineBox-item">
          <div data-aos="zoom-out-up">
          <div class="TimelineBox-info">
            <span>{{event.time}}</span>
          </div>
          </div>
          <div class="TimelineBox-marker"/>
          <div data-aos="fade-left">
          <div class="TimelineBox-content">
              <h6 class="TimelineBox-title">{{event.topic}}</h6>
                  <div class="TimelineBox-detail">
                      
                    <b-icon :icon="event.icon"></b-icon>  {{event.detail}} 
                    <div class="link">
                                <a :href="event.link">
                                  {{event.name}} 
                                </a>
                    </div>
                  </div>
                <p><span v-for="(line,l) in event.text" :key="l">{{line}}<br></span></p>
            </div>
            </div>
            <br>
        </div>
          <div class="TimelineBox-item period"></div>
        </div>
      </div>
       <div class="TimelineBox-item period">
					<div data-aos="zoom-out-up" class="TimelineBox-marker"></div>
			</div>
	</div>

</template>

<script>

export default {
  name: 'Timeline',
  props: ['title','data'],
  computed: {
    layerClass() {
      return this.title.slice(0,2).toLowerCase()
    }
  },
}
</script>

<style scope>
@import "../assets/css/timeline.css";
</style>

