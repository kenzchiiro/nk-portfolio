<template>
  <section class="content">
			<div class="topic" data-aos="fade-right">
        <h2>WORK EXPERIENCE</h2>
      </div>
      <div class="spacing">
          <card  title="EDUCATION" :data="work" ref="Timeline"></card>
      </div>
  </section>
</template>
<script>
import Card from '@/components/Card'
import { work } from '@/assets/data/work.json'

export default {
  name: 'Education',
  components: {
    Card
  },
  data() {
    return {
      work
    }
  }
}
</script>

<style>
.topic{
margin-left: 2rem;
padding: 0.25rem;
}

.content{
  padding-top: 6rem;
}

.spacing{
  margin: 2rem;
}
</style>
