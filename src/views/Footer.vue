<template>
  <v-footer color="primary lighten" padless>
    <v-row justify="center" no-gutters>
      <v-col class="primary lighten-2 py-4 text-center white--text"        
        md="4"
        offset-md="4">
        <strong>Contact</strong><br />
        <v-divider/>
        <strong>Nattawut Khuadplod</strong><br />
        <strong>natawut.eleven@gmail.com</strong><br />
        <a class="icon-footer" href="https://www.instagram.com/nk_nattawut/"
          ><i class="fab fa-instagram-square"></i
        ></a>
        <a class="icon-footer" href="https://www.linkedin.com/in/nk-nattawut/"
          ><i class="fab fa-linkedin"></i
        ></a>
        <a class="icon-footer" href="https://www.facebook.com/KenzChiro/"
          ><i class="fab fa-facebook-square"></i
        ></a>
        <a class="icon-footer" href="https://github.com/kenzch1r0"
          ><i class="fab fa-github-square"></i
        ></a>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.topic {
  margin-left: 2rem;
  color: var(--v-title-base);
}

.content {
  padding-top: 6rem;
}

.spacing {
  margin: 2rem;
}

.icon-footer{
  font-size: 1rem;
  color: var(--v-neutral-base) !important;
  margin: 0.5em;
}
</style>
