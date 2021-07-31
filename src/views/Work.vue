<template>
  <section class="content">
			<div class="topic" data-aos="fade-right">
        <h2>WORK EXPERIENCE</h2>
      </div>
      <div class="spacing">
        <TimelineIcon title="WORK" :data="work"  ref="Timeline_Icon"></TimelineIcon>
			</div>
	</section>

</template>

<script>
import TimelineIcon from '@/components/TimelineIcon'
import { work } from '@/assets/data/work.json'

export default {
  name: 'Work',
  components: {
  TimelineIcon
  },
  data() {
    return {
      work,
    }
  }
}
</script>

<style>
.topic{
margin-left: 2rem;
}

.spacing{
  margin: 2rem;
}
</style>
