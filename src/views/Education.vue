<template>
  <section class="content">
			<div class="topic" data-aos="fade-right">
        <h2>EDUCATION</h2>
      </div>
      <div class="spacing">
          <timeline  title="EDUCATION" :data="education" ref="Timeline"></timeline>
      </div>
  </section>
</template>
<script>
import Timeline from '@/components/Timeline'
import { education } from '@/assets/data/education.json'

export default {
  name: 'Education',
  components: {
    Timeline
  },
  data() {
    return {
      education
    }
  }
}
</script>

<style>
.topic{
margin-left: 2rem;
}

.content{
  padding-top: 6rem;
}

.spacing{
  margin: 2rem;
}
</style>
