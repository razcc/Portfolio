<template>
      <section class="projects">
            <h2 id="projects" v-if="propsLingua == 'english'">Projects I've worked on:</h2>
            <h2 id="projects" v-else>Proggetti su cui ho lavorato</h2>

            <div class="slider">



                  <!-- Left -->
                  <div id="col_left">
                        <!-- Freccie -->
                        <font-awesome-icon @click="arrowDown()" icon="fa-solid fa-chevron-right" />
                        <font-awesome-icon @click="arrowUP()" icon="fa-solid fa-chevron-left" />

                        <img class="immaginePrincipale" :src="imgArray[indice]" alt="ImmaginePrincipale">
                  </div>

                  <!-- Right -->
                  <div  id="col_right">

                        <!-- img 1 -->
                        <div v-scrollanimation class="cont_anteprima">
                              <img class="imgAnteprima" :src="img1" alt="Project 1">
                        </div>

                        <!-- img 2 -->
                        <div v-scrollanimation class="cont_anteprima">
                              <img class="imgAnteprima" :src="img2" alt="Project 2">
                        </div>

                        <!-- img 3 -->
                        <div v-scrollanimation class="cont_anteprima">
                              <img class="imgAnteprima" :src="img3" alt="Project 3">
                        </div>

                        <!-- img 4 -->
                        <div v-scrollanimation class="cont_anteprima imgFondo">
                              <img class="imgAnteprima" :src="img4" alt="Project 4">
                        </div>
                  </div>

            </div>



      </section>
</template>

<script>
export default {
      name: 'ProjectsComp',

      props: {
            propsLingua: String,
      },
      data() {
            return {
                  img1: "/assets/prj1.jpg",
                  img2: "/assets/prj2.png",
                  img3: "/assets/prj3.png",
                  img4: "/assets/prj4.png",

                  imgArray: [
                        "/assets/prj1.jpg",
                        "/assets/prj2.png",
                        "/assets/prj3.png",
                        "/assets/prj4.png",
                  ],
                  indice: 0,
                  classeVariabile: "",
            }
      },
      mounted() {
            //Entra in gioco qunaod l'applicativo vueha caricato l'elemento #root
            this.attivaFunzione()
      },
      methods: {
            getPhoto() {
                  return '../img/prj1.png';
            },
            Img1Selection: function (index) {
                  this.indice = index

            },

            arrowDown: function () {
                  let lunghezza = this.imgArray.length - 1;
                  console.log(lunghezza)

                  if (this.indice >= lunghezza) {
                        return this.indice = 0;

                  } else {
                        return this.indice++;


                  }
            },
            arrowUP: function () {
                  let lunghezza = this.imgArray.length - 1;
                  console.log(lunghezza)

                  console.log(this.indice)
                  if (this.indice > lunghezza) {
                        return this.indice = 0;

                  } else if (this.indice == 0) {
                        return this.indice = lunghezza;
                  } else {
                        return this.indice--;
                  }
            },
            attivaFunzione() {
                  setInterval(() => { this.arrowDown() }, 8000)
            },



      },


}
</script>

<style lang="scss" scoped>
.projects {
      height: 100vh;
      text-align: center;
      color: var(--text1);
      margin-top: 20px;

      h2 {
            font-weight: bold;
            font-size: 2.3rem;
            text-align: center;
            text-shadow: 3px 3px 10px var(--lilla);
            height: 10%;
            padding-top: 5%;
      }

      .slider {
            display: flex;
            flex-direction: column;
            height: 90%;
            margin-top: 5%;



            #col_left {
                  width: 80%;
                  align-self: center;
                  height: 60%;

                  position: relative;

                  .immaginePrincipale {
                        width: 100%;
                        height: 100%;
                  }

            }

            #col_right {
                  width: 75%;
                  align-self: center;
                  padding-top: 25px;
                  height: 20%;
                  display: flex;
                  gap: 10px;



                  .cont_anteprima {
                        width: calc(100% / 4 - 10px);

                        .imgAnteprima {
                              width: 100%;
                              height: 100%;
                        }

                  }

            }


            // Freccie
            .fa-chevron-right {
                  position: absolute;
                  right: 20px;
                  top: 50%;
                  transform: translateY(-50%);
                  font-size: 3rem;
                  background-color: rgba(0, 0, 0, 0.596);
                  padding: 1rem;
                  color: var(--text1);
                  cursor: pointer;
                  transition: all .7s;

                  &:hover {
                        border: 1px solid black;
                        color: black;
                        background-color: var(--lilla);
                  }
            }

            .fa-chevron-left {
                  position: absolute;
                  left: 20px;
                  top: 50%;
                  transform: translateY(-50%);
                  font-size: 3rem;
                  background-color: rgba(0, 0, 0, 0.596);
                  padding: 1rem;
                  color: var(--text1);
                  cursor: pointer;
                  transition: all .7s;

                  &:hover {
                        border: 1px solid black;
                        color: black;
                        background-color: var(--lilla);
                  }
            }

      }


}

@media screen and (min-width: 1000px) {
      .slider {
            padding: 0 6rem;
            height: 90vh;

            #col_right {
                  gap: 20px !important;
            }

      }
}

.before-enter {
      opacity: 0;
      transform: scale(0);
      transition: all 1s;
}

.enter {
      opacity: 1;
      transform: scale(1);
}
</style>