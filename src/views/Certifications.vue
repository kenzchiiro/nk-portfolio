<template>
  <section class="content">
			<div class="topic" data-aos="fade-right">
          <h2>CERTIFICATIONS</h2>
      </div>
      <div class="spacing">
          <certificate title="CERTOFICATIONS" :data="certifications" ref="Timeline"></certificate>
			</div>
     <footer></footer>

	</section>

</template>

<script>
import Certificate from '@/components/Certificate'
import { certifications } from '@/assets/data/certifications.json'

export default {
  name: 'Certifications',
  components: {
  Certificate
  },
  data() {
    return {
      certifications
    }
  }
}
</script>

