<template>
      <section id="projects">
            <h2 v-if="propsLingua == 'english'">Projects I've worked on:</h2>
            <h2 v-else>Proggetti su cui ho lavorato</h2>

            <div class="slider">
                  <div id="col_left">
                        <img class="immaginePrincipale" :src="imgArray[indice]" alt="ImmaginePrincipale">
                  </div>

                  <!-- ^Immagine antemprima lato destro -->
                  <div id="col_right">

                        <!-- img 1 -->
                        <div class="cont_anteprima">
                              <img class="imgAnteprima" :src="img1" alt="Project 1">
                        </div>

                        <!-- img 2 -->
                        <div class="cont_anteprima">
                              <img class="imgAnteprima" :src="img2" alt="Project 2">
                        </div>

                        <!-- img 3 -->
                        <div class="cont_anteprima">
                              <img class="imgAnteprima" :src="img3" alt="Project 3">
                        </div>

                        <!-- img 4 -->
                        <div class="cont_anteprima imgFondo">
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
                  img1: "/assets/prj1.png",
                  img2: "/assets/prj2.png",
                  img3: "/assets/prj1.png",
                  img4: "/assets/prj2.png",

                  imgArray: [
                        "/assets/prj1.png",
                        "/assets/prj2.png",
                        "/assets/prj1.png",
                        "/assets/prj2.png",
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
                  setInterval(() => { this.arrowDown() }, 4000)
            }


      },


}
</script>

<style lang="scss" scoped>
#projects {
      text-align: center;
      color: var(--text1);

      .slider {
            width: 100%;
            

            #col_left {
                  width: 100%;
                  padding-top: 20px;

                  .immaginePrincipale {
                        width: 100%;
                  }

            }

            #col_right {
                  width: 100%;
                  height: 75px;
                  display: flex;
                  gap: 20px;


                  .cont_anteprima {
                        width: calc(100% / 4 - 10px);

                        .imgAnteprima {
                              width: 100%;

                        }

                  }

            }


      }


}
</style>