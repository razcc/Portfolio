<template>
      <section id="projects">
            <h2 class="progetto_singolo" v-if="propsLingua == 'english'">My Projects</h2>
            <h2 class="progetto_singolo" v-else>Proggetti</h2>
            <div class="container">
                  <div class="anteprima">
                        <img v-if="progettoActive == 1" src="/assets/boolflix_anteprima.png" alt="">
                        <img v-else-if="progettoActive == 2" src="/assets/dc_anteprima.png" alt="">
                        <img v-else-if="progettoActive == 3" src="/assets/landrick_anteprima.png" alt="">
                        <img v-else-if="progettoActive == 4" src="/assets/workInPRogress.jpg" alt="">
                        <img v-else-if="progettoActive == 5" src="/assets/workInPRogress.jpg" alt="">
                  </div>

                  <div class="lista_cont">
                        <ul class="lista_progetti">

                              <!-- Boolflix -->
                              <li @mouseenter="progettoActive = 1" class="progetto_singolo">

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
                              <li @mouseenter="progettoActive = 2" class="progetto_singolo">
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

                              <!-- landrick -->
                              <li @mouseenter="progettoActive = 3" class="progetto_singolo">

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

                              <!-- Cat's Life -->
                              <li @mouseenter="progettoActive = 4" class="progetto_singolo">

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
                              <li @mouseenter="progettoActive = 5" class="progetto_singolo">

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
            }
      },
      methods: {
      },


}
</script>

<style lang="scss" scoped>
#projects {
      height: 100vh;
      padding: 5% 5% 0 5%;
      color: var(--text1);

      h2 {
            text-align: center;
            font-size: 2.5rem;
      }

      .container {
            display: flex;
            align-items: center;
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
            }

      }

}

@keyframes arrow {
      0% {
            transform: translateX(0);
      }
      50%{
            transform: translateX(100%);
      }
      100% {
            transform: translateX(0);
      }
}
</style>