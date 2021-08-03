<template>
  <section class="content">
			<div class="topic" data-aos="fade-right">
          <h2>CERTIFICATIONS</h2>
      </div>
      <div class="spacing">
          <timeline title="CERTOFICATIONS" :data="certifications" ref="Timeline"></timeline>
			</div>
     <footer></footer>

	</section>

</template>

<script>
import Timeline from '@/components/Timeline'
import { certifications } from '@/assets/data/certifications.json'

export default {
  name: 'Certifications',
  components: {
  Timeline
  },
  data() {
    return {
      certifications
    }
  }
}
</script>

