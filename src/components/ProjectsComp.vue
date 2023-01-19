<template>
      <section id="projects">
            <h2 v-if="propsLingua == 'english'">Projects I've worked on:</h2>
            <h2 v-else>Proggetti su cui ho lavorato</h2>

            <!-- Container -->
            <div class="slider">
                  <FirstProject />
                  <SecondProject />
                  <ThirdProject />
                  <FourthProject />
                  <FifthProject />
                  <SixthProject />
            </div>

      </section>
</template>

<script>
import FirstProject from './projects/FirstProject.vue';
import SecondProject from './projects/SecondProject.vue';
import ThirdProject from './projects/ThirdProject.vue';
import FourthProject from './projects/FourthProject.vue';
import FifthProject from './projects/FifthProject.vue';
import SixthProject from './projects/SixthProject.vue';





export default {
      name: 'ProjectsComp',
      props: {
            propsLingua: String,
      },
      components: {
            FirstProject,
            SecondProject,
            ThirdProject,
            FourthProject,
            FifthProject,
            SixthProject
      },
}
</script>

<style lang="scss" scoped>
#projects {

      text-align: center;
      padding: 5% 5% 0 10%;



      h2 {
            font-size: 2.3rem;
            color: var(--text1);
            padding-bottom: 3rem;
            text-shadow: 3px 3px 10px var(--lilla);
      }

      .slider {
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;

            .project {
                  overflow: hidden;
                  cursor: pointer;
                  width: 100%;
                  height: 200px;
                  position: relative;


            }

      }


}
@media screen and (min-width: 600px){
      .project{
            width: calc(100% /2 - 2rem) !important;
      }

}

@media screen and (min-width: 900px) {

      .slider {
            



            .project {
                  width: calc(100% /3 - 2rem) !important;

            }

      }

}

@keyframes rotate {
      0% {
            transform: perspective(1000px) rotateY(0deg);
      }

      100% {
            transform: perspective(1000px) rotateY(360deg);
      }
}

.before-enter {
      opacity: 0;
      transform: scale(0);
      transition: all 1s;
      transition-delay: 0.2s;
}

/* 
    If the element intersects with the viewport, the before-enter class is added.
  */
.enter {
      opacity: 1;
      transform: scale(1);
}
</style>