<template>
  <div id="app">

    <!-- NavBar COMP -->
    <NavComp @emitScrol="emitScrolFunction" @emitLingua="linguaFunction" />

    <!-- Col SOCIAL  -->
    <ColSocialFixed />


    <!-- MAIN -->
    <main class="main">
      <AbaoutComp :propsLingua ="linguaScelta"/>
      <AnimationBox :propsAnim="scrollPosition" />
      <SkillsComp :propsLingua ="linguaScelta" />
      <ProjectsComp  :propsLingua ="linguaScelta"/>
      <ContactComp :propsLingua ="linguaScelta"/>
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
      linguaScelta: ""
    }
  },
  methods: {
    // Funzione Emit dato preso da Nav Comp
    emitScrolFunction(emitvValore) {
      this.scrollPosition = emitvValore;
    },
    linguaFunction(lingua){
      this.linguaScelta=lingua;
    }
  }



}
</script>




<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rancho&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;700&family=Space+Grotesk&display=swap');

@import './mixin/mixin.css';

// SCROLL BAR
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: var(--lilla);
}

::-webkit-scrollbar-thumb {
  background: var(--verde-scuro);
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
  font-family: 'Roboto Mono', monospace;
  word-wrap: break-word;
}

// APP
#app {
  background: var(--verde-scuro);
  font-family: 'Space Grotesk', sans-serif;
  ;
}
</style>
