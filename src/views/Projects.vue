<template>
  <section class="content">
			<div class="topic" data-aos="fade-right">
        <h2>PROJECTS</h2>
      </div>
      <div class="spacing">
         <project title="PROJECTS" :data="projects" ref="Timeline"></project>
			</div>
	</section>

</template>

<script>
import Project from '@/components/Project'
import { projects } from '@/assets/data/projects.json'

export default {
  name: 'Projects',
  components: {
  Project
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
