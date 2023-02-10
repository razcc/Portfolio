<template>
      <section id="projects">
            <h2 class="progetto_singolo" v-if="propsLingua == 'english'">My Projects</h2>
            <h2 class="progetto_singolo" v-else>Proggetti</h2>
            <div class="container">
                  <div class="anteprima">
                        <img v-if="progettoActive == 1" src="/assets/boolflix_anteprima.png" alt="">
                        <img v-else-if="progettoActive == 2" src="/assets/dc_anteprima.png" alt="">
                        <img v-else-if="progettoActive == 3" src="/assets/landrick_anteprima.png" alt="">
                        <img v-else-if="progettoActive == 4" src="/assets/boolflix_anteprima.png" class="workInProgress"
                              alt="">
                        <img v-else-if="progettoActive == 5" src="/assets/boolflix_anteprima.png" class="workInProgress"
                              alt="">
                  </div>

                  <div class="lista_cont">
                        <ul class="lista_progetti" v-if="descriptionActive == 'none'">
                              <!-- landrick -->
                              <li @click="descriptionActive = 'lanrick'" @mouseenter="progettoActive = 3"
                                    class="progetto_singolo">

                                    <span>
                                          Landrick
                                          <font-awesome-icon icon="fa-solid fa-arrow-left" />
                                    </span>
                                    <ul class="linguaggi">
                                          <li>
                                                <font-awesome-icon icon="fa-brands fa-vuejs" />
                                          </li>
                                    </ul>
                              </li>

                              <!-- Boolflix -->
                              <li @click="descriptionActive = 'boolflix'" @mouseenter="progettoActive = 1"
                                    class="progetto_singolo">

                                    <span>
                                          Boolflix
                                          <font-awesome-icon icon="fa-solid fa-arrow-left" />
                                    </span>
                                    <ul class="linguaggi">
                                          <li>
                                                <font-awesome-icon icon="fa-brands fa-vuejs" />
                                          </li>
                                          <li class="api_cont">
                                                <img src="../img/api.png" alt="api">
                                          </li>
                                    </ul>
                              </li>

                              <!-- DC -->
                              <li @click="descriptionActive = 'dc'" @mouseenter="progettoActive = 2"
                                    class="progetto_singolo">
                                    <span>
                                          DC Comics
                                          <font-awesome-icon icon="fa-solid fa-arrow-left" />
                                    </span>

                                    <ul class="linguaggi">
                                          <li>
                                                <font-awesome-icon icon="fa-brands fa-php" />
                                          </li>
                                          <li>
                                                <font-awesome-icon icon="fa-brands fa-laravel" />
                                          </li>
                                    </ul>
                              </li>

                              <!-- Cat's Life -->
                              <li @click="descriptionActive = 'cats'" @mouseenter="progettoActive = 4"
                                    class="progetto_singolo">

                                    <span>
                                          Cat's Life
                                          <font-awesome-icon icon="fa-solid fa-arrow-left" />
                                    </span>
                                    <ul class="linguaggi">
                                          <li>
                                                <font-awesome-icon icon="fa-brands fa-vuejs" />
                                          </li>
                                          <li>
                                                <font-awesome-icon icon="fa-brands fa-php" />
                                          </li>
                                          <li>
                                                <font-awesome-icon icon="fa-brands fa-laravel" />
                                          </li>

                                    </ul>
                              </li>

                              <!-- Progetto finale -->
                              <li @click="descriptionActive = 'final'" @mouseenter="progettoActive = 5"
                                    class="progetto_singolo">

                                    <span>
                                          Progetto finale
                                          <font-awesome-icon icon="fa-solid fa-arrow-left" />
                                    </span>
                                    <ul class="linguaggi">
                                          <li>
                                                <font-awesome-icon icon="fa-brands fa-vuejs" />
                                          </li>
                                          <li>
                                                <font-awesome-icon icon="fa-brands fa-php" />
                                          </li>
                                          <li>
                                                <font-awesome-icon icon="fa-brands fa-laravel" />
                                          </li>
                                    </ul>
                              </li>

                        </ul>

                        <!-- -------DESCRIZIONI PROGETTI_______________ -->
                        <div class="description" :class="(descriptionActive == 'none') ? 'dis_none' : 'dis_block'">

                              <!-- X di chiusura -->
                              <font-awesome-icon @click="descriptionActive = 'none'" icon="fa-solid fa-x" />


                              <!-- LANRICK -->
                              <div v-if="descriptionActive == 'lanrick'" class="boolflix_description">
                                    <h2>Lanrick</h2>

                                    <p>
                                          Lanrick è stato il primo progetto completo a livello di Font-end con
                                          l'utilizzo di VueJs.
                                          <br>
                                          Ho dovuto affrontare per la prima volta la gestione quasi in completa
                                          autonomia delle risorse.
                                          <br>
                                          Oltre alle nuove sfide, la parte che più mi ha coinvolto è stato una feature
                                          che ho voluto aggiungere, cioè la realizzazione del cambio tema.
                                          Ho posizionato un bottone in position fixed sul lato sinistro, al click si
                                          estende un menu dal quale
                                          è possibile cambiare il tema del sito da light a dark
                                    </p>
                              </div>

                              <!-- BOOLFLIX -->
                              <div v-if="descriptionActive == 'boolflix'" class="boolflix_description">
                                    <h2>Boolflix</h2>

                                    <p>
                                          Boolflix è stato il primo progetto con cui ho utilizzato le API.
                                          <br>
                                          Ho replicato la WebApp Netflix, affidandomi a "The Movie Database API (TMDB)".
                                          <br>
                                          Grazie a TMDB, ho potuto fare diverse richieste api, per ottenere diversi
                                          risultati tra cui:
                                    <ul>
                                          <li>
                                                Una ricerca di film e telefilm
                                          </li>
                                          <li>
                                                Una selezione basata sui generi e sulla lingua
                                          </li>
                                          <li>
                                                Una selezione mirata sulle top del momento
                                          </li>
                                    </ul>
                                    </p>
                              </div>

                              <!-- DC COMICS -->
                              <div v-if="descriptionActive == 'dc'" class="boolflix_description">
                                    <h2>Dc Comics</h2>

                                    <p>
                                          Questa replica di una sezione del sito della Dc Comics, è stata relizzata
                                          a livello full-stack con Laravel.
                                          <br>
                                          Con l'utilizzo di Mamp e phpMyAdmin, ho realizzato un dataBase in locale, su
                                          cui ho caricato dei dati tramite seeder.
                                          L'utente ha la possibiltà di visualizzare la lista completa dei fumetti
                                          cliccando sulla voce del menu dedicata alla show del singolo
                                          fumetto.
                                    </p>
                              </div>


                              <!-- CAT'S LIFE -->
                              <div v-if="descriptionActive == 'cats'" class="boolflix_description">
                                    <h2>Cat's Life</h2>

                                    <p>
                                          
                                    </p>
                              </div>

                              <!-- PROGETTO FINALE -->
                              <div v-if="descriptionActive == 'final'" class="boolflix_description">
                                    <h2>Progetto finale</h2>
                              </div>
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
                  progettoActive: 1,
                  descriptionActive: "none",
            }
      },
      methods: {
      },


}
</script>

<style lang="scss" scoped>
.workInProgress {
      filter: blur(20px);
}

.dis_none {
      display: none;
}

.dis_block {
      display: block;
}

#projects {
      height: 90vh;
      padding: 5% 2% 0 3%;
      color: var(--text1);

      h2 {
            font-size: 2.3rem;
            text-align: center;
            text-shadow: 3px 3px 10px var(--lilla);
      }

      .container {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;


            .anteprima,
            .lista_cont {
                  width: 50%;
            }

            .anteprima {
                  display: flex;
                  align-items: center;
                  padding: 0 30px;

                  img {
                        width: 100%;
                  }
            }

            .lista_cont {
                  position: relative;

                  .lista_progetti {
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        gap: 50px;
                        list-style: none;

                        .progetto_singolo {
                              font-size: 1.6rem;
                              cursor: pointer;
                              transition: all .7s;
                              border-bottom: 1px solid var(--text1);
                              display: flex;
                              justify-content: space-between;

                              .fa-arrow-left {
                                    display: none;
                                    transition: all 0.7s;
                                    animation: arrow 0.9s linear infinite;
                                    font-size: 1.4rem;
                              }

                              &:hover {
                                    font-size: 1.8rem;
                                    text-shadow: 4px 4px 10px var(--lilla);
                              }

                              &:hover .fa-arrow-left {
                                    display: inline-block;
                              }


                              .linguaggi {
                                    display: flex;
                                    flex-direction: row;
                                    list-style: none;
                                    gap: 20px;


                                    img {
                                          width: 35px;
                                          height: 35px;
                                          filter: invert(1);
                                    }
                              }
                        }

                  }


                  // -----------DESCRIZIONI-------------
                  .description {
                        position: absolute;
                        top: 50%;
                        right: 0;
                        width: 100%;
                        transform: translateY(-50%);
                        background-color: var(--verde-olivo);
                        padding: 30px;
                        line-height: 2rem;

                        ul {
                              padding-left: 20px;
                        }

                        .fa-x {
                              position: absolute;
                              top: 2%;
                              right: 2%;
                              font-size: 2rem;
                              cursor: pointer;
                              transition: all .6s;

                              &:hover {
                                    font-size: 2.2rem;
                              }
                        }

                  }
            }



      }

}

@keyframes arrow {
      0% {
            transform: translateX(0);
      }

      50% {
            transform: translateX(100%);
      }

      100% {
            transform: translateX(0);
      }
}

@media screen and (max-width: 633px) {
      h2 {
            display: none;
      }

      .container {
            height: 100% !important;
            flex-direction: column;
            gap: 20px;
      }

      .anteprima {
            padding: 0px !important;
            width: 80% !important;
      }

      .progetto_singolo {
            font-size: 1.2rem !important;
      }

      .lista_cont {
            width: 90% !important;
            margin-bottom: 30px;
      }
}

@media screen and (max-width: 1000px) {
      h2 {
            display: none;
      }

      .container {
            height: 100% !important;
            flex-direction: column;
            gap: 20px;
            margin-bottom: 70px;
      }

      .anteprima {
            padding: 0px !important;
            width: 60% !important;
      }

      .progetto_singolo {
            font-size: 1.2rem !important;
      }

      .lista_cont {
            width: 90% !important;

      }
}
</style>