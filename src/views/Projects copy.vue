<template>
  <section class="content">
			<div class="topic" data-aos="fade-right">
        <h2>PROJECTS</h2>
      </div>
      <div class="spacing">
         <timeline title="PROJECTS" :data="projects" ref="Timeline"></timeline>
			</div>
	</section>

</template>

<script>
import Timeline from '@/components/Timeline'
import { projects } from '@/assets/data/projects.json'

export default {
  name: 'Projects',
  components: {
  Timeline
  },
  data() {
    return {
      projects
    }
  }
}
</script>

<style>
</style>
