<template>
  <section class="content">
			<div class="topic" data-aos="fade-right">
        <h2>ABOUT ME</h2>
      </div>
      <div class="spacing">
          <skill  title="SKILLS" :data="skills" ref="Skill"></skill>
      </div>
  </section>
</template>
<script>
import Skill from '@/components/Skill'
import { skills } from '@/assets/data/skills.json'

export default {
  name: 'Skills',
  components: {
    Skill
  },
  data() {
    return {
      skills
    }
  }
}
</script>

<style>
.topic{
margin-left: 2rem;
padding: 0.25rem;
font-weight: 900 !important;
}

.content{
  padding-top: 6rem;
}

.spacing{
  margin: 2rem;
}
</style>
