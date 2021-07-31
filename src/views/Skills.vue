<template>
  <section class="content">
			<header>
				<div data-aos="fade-right"><h2>SKILLS</h2></div>
			</header>
			<div class="content">
        <div class="columns is-multiline spacing">
          <div class="column is-half">
            <label>{{skills[0].name}}</label>
              <div class="columns is-multiline">
                <div v-for="skill in skills[0].skill" :key="skill.label" :class="'column is-full custom'">
              <span>{{skill.label}}</span><span class="desc">{{skill.desc}}</span>
                  <progress-bar :percent="skill.value"  type="danger" size="small" :striped="true" :animated="true">
                  </progress-bar>
                </div>
              </div>
          </div>
          <div class="column is-half">
          <label>{{skills[1].name}}</label>
          <div class="columns is-multiline">
            <div v-for="skill in skills[1].skill" :key="skill.label" :class="'column is-full custom'">
              <span>{{skill.label}}</span><span class="desc">{{skill.desc}}</span>
                <progress-bar :percent="skill.value"  type="danger" size="small" :striped="true" :animated="true">
                </progress-bar>
            </div>
          </div>
          <label>{{skills[2].name}}</label>
          <div class="columns is-multiline">
            <div v-for="skill in skills[2].skill" :key="skill.label" :class="'column is-full custom is-gap'">
              <span>{{skill.label}}</span><span class="desc">{{skill.desc}}</span>
              <progress-bar :percent="skill.value"  type="danger" size="small" :striped="true" :animated="true">
                </progress-bar>
            </div>
          </div>
            <label>{{skills[3].name}}</label>
            <div class="columns is-multiline">
            <div v-for="skill in skills[3].skill" :key="skill.label" :class="'column is-full custom is-gap'">
              <span>{{skill.label}}</span><span class="desc">{{skill.desc}}</span>
              <progress-bar :percent="skill.value"  type="danger" size="small" :striped="true" :animated="true">
                </progress-bar>
            </div>
          </div>
        </div>
        </div>
      </div>
	</section>
</template>

<script>
import { skills } from '@/assets/data/me.json'

export default {
  name: 'Skills',
  data() {
    return {
      skills,
    };
  },
    methods: {
      percentFormat(val) {
        return `Completed ${val}%`;
      },
      percentPlus() {
        if (this.percent < 100) {
          this.percent += 10;
        }
      },
      percentMinus() {
        if (this.percent > 0) {
          this.percent -= 10;
        }
      },
    },
};
</script>

<style scoped>
.custom{
  margin-top: -6px;
  margin-bottom: -22px;
  font-size: 13px;
  vertical-align: middle;
}

label {
  font-size:16px;
  height: 3.5em;
  padding-top: 1em;
  margin-bottom: 16px;

}
.desc{
  float:right;
  font-style: italic;
  color:slategrey;
}
.space{
padding-top: 2rem;
}
.spacing{
padding-bottom: 2rem;
}
</style>
