<template>
  <div id="app">

    <!-- NavBar COMP -->
    <NavComp  @emitScrol="emitScrolFunction" />

    <!-- Col SOCIAL  -->
    <ColSocialFixed />


    <!-- MAIN -->
    <main class="main">
      <AbaoutComp />
      <AnimationBox  :propsAnim="scrollPosition" />
      <SkillsComp />
      <ProjectsComp />
      <ContactComp />
    </main>


  </div>
</template>



<script>
import NavComp from './components/sottoComponenti/NavComp.vue';
import ColSocialFixed from './components/sottoComponenti/ColSocialFixed.vue';
import AbaoutComp from './components/AbaoutComp.vue';
import AnimationBox from './components/sottoComponenti/AnimationBox.vue';
import SkillsComp from './components/SkillsComp.vue';
import ProjectsComp from './components/ProjectsComp.vue';
import ContactComp from './components/ContactComp.vue';






export default {
  name: 'App',
  components: {
    NavComp,
    ColSocialFixed,
    AbaoutComp,
    AnimationBox,
    SkillsComp,
    ProjectsComp,
    ContactComp,


  },
  data() {
    return {
      // Dato da passare con Props
      scrollPosition: 0,
    }
  },
  methods: {
    // Funzione Emit dato preso da Nav Comp
    emitScrolFunction(emitvValore) {
      this.scrollPosition = emitvValore;
    }
  }



}
</script>




<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rancho&display=swap');

@import './assets/mixin/mixin';

// SCROLL BAR
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: #9b9797;
}

::-webkit-scrollbar-thumb {
  background: rgb(31, 27, 80);
  border-radius: 100px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

// GENERAL
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth !important;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

// APP
#app {
  background: var(--bg-body);
}

</style>
