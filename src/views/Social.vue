<template>
      <div class="sections-menu">
      <span class="menu-point">
        <a class="icon" href="https://www.instagram.com/nk_nattawut/"
          ><i class="fab fa-instagram-square"></i
        ></a>
        <a class="icon" href="https://www.linkedin.com/in/nk-nattawut/"
          ><i class="fab fa-linkedin"></i
        ></a>
        <a class="icon" href="https://www.facebook.com/KenzChiro/"
          ><i class="fab fa-facebook-square"></i
        ></a>
        <a class="icon" href="https://github.com/kenzch1r0"
          ><i class="fab fa-github-square"></i
        ></a>    
        </span>
    </div>
</template>
<script>
export default {
  name: "Social",
    data() {
    return {
    };
  },
};


</script>

<style scope>
@import "../assets/css/wave.css";


.tag{
  margin: 0.3rem !important;;
  font-size: 0.55rem !important;
  font-weight: 900 !important;
  max-height: 1.3rem !important; 
}

.icon{
font-size: 1rem;
color: #191b1e;
margin: 0.5em;
}

.title > h1{ 
  color: #191b1e;
  font-weight: 500;
}
.sections-menu {
  position: fixed;
  left: 0.5rem;
  top: 6rem;
  transform: translateY(-50%);
}

.sections-menu .menu-point {
  width: 20px;
  height: 20px;
  /* background-color: #2c3e50; */
  display: block;
  margin: 1rem 0;
  opacity: .8;
  transition: .4s ease all;
  cursor: pointer;
}

.sections-menu .menu-point :hover{
  opacity: .60;
  color: #191b1e;
    transform: scale(1.2);

}

.sections-menu .menu-point.active {
  opacity: 1;
  transform: scale(1.5);
}

.icon{
  font-size: 1rem;

}
</style>