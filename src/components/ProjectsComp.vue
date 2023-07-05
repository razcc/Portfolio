<template>
  <section id="projects">
    <!-- Title -->
    <h2 class="progetto_singolo title" v-if="propsLingua == 'english'">
      My Projects
    </h2>
    <h2 class="progetto_singolo title" v-else>Proggetti</h2>
    <div class="container">
      <div class="anteprima">
        <img
          v-if="progettoActive == 1"
          src="/assets/boolflix_anteprima.png"
          alt=""
        />
        <img
          v-else-if="progettoActive == 2"
          src="/assets/dc_anteprima.png"
          alt=""
        />
        <img
          v-else-if="progettoActive == 3"
          src="/assets/landrick_anteprima.png"
          alt=""
        />
        <img
          v-else-if="progettoActive == 4"
          src="/assets/boolflix_anteprima.png"
          class="workInProgress"
          alt=""
        />
        <img
          v-else-if="progettoActive == 5"
          src="/assets/boolflix_anteprima.png"
          class="workInProgress"
          alt=""
        />
      </div>

      <ul class="lista_progetti">
        <!-- landrick -->
        <li @mouseenter="progettoActive = 3" class="progetto_singolo">
          <a href="https://endearing-piroshki-eb1f61.netlify.app/">
            Landrick
            <font-awesome-icon icon="fa-solid fa-arrow-left" />
          </a>

          <!-- Lista linguaggi -->
          <ul class="linguaggi">
            <li>
              <font-awesome-icon icon="fa-brands fa-vuejs" />
            </li>
          </ul>
        </li>

        <!-- Boolflix -->
        <li @mouseenter="progettoActive = 1" class="progetto_singolo">
          <span>
            Boolflix
            <font-awesome-icon icon="fa-solid fa-arrow-left" />
          </span>

          <!-- Lista linguaggi -->
          <ul class="linguaggi">
            <li>
              <font-awesome-icon icon="fa-brands fa-vuejs" />
            </li>
            <li class="api_cont">
              <img src="../img/api.png" alt="api" />
            </li>
          </ul>
        </li>

        <!-- DC -->
        <li @mouseenter="progettoActive = 2" class="progetto_singolo">
          <span>
            DC Comics
            <font-awesome-icon icon="fa-solid fa-arrow-left" />
          </span>

          <!-- Lista linguaggi -->
          <ul class="linguaggi">
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

          <!-- Lista linguaggi -->
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
            <li>
              <font-awesome-icon icon="fa-brands fa-git" />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectsComp",

  props: {
    propsLingua: String,
  },
  data() {
    return {
      progettoActive: 1,
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: var(--text1);
}
.workInProgress {
  filter: blur(20px);
}
.dis_lista {
  opacity: 0;
}
.dis_none {
  display: none !important;
}

.dis_block {
  display: block;
}

#projects {
  height: 90vh;
  padding: 5% 2% 0 3%;
  color: var(--text1);

  //   Title
  h2 {
    font-size: 2.3rem;
    text-align: center;
    text-shadow: 3px 3px 10px var(--lilla);
  }

  .container {
    display: flex;
    align-items: center;
    gap: 30px;
    height: 100%;

    .anteprima {
      width: 50%;

      img {
        width: 100%;
      }
    }

    .lista_progetti {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 50px;
      list-style: none;
      .progetto_singolo {
        font-size: 1.6rem;
        cursor: pointer;
        transition: all 0.7s;
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
  #projects {
    padding: 0 !important;
    height: 50vh;
  }

  .title {
    font-size: 2.5rem;
  }

  .container {
    height: 100% !important;
    flex-direction: column;
    gap: 20px;
  }

  .anteprima {
    display: none !important;
  }

  .progetto_singolo {
    font-size: 1.2rem !important;
  }

  .lista_cont {
    height: 100%;
    width: 90% !important;
  }
}

@media screen and (max-width: 1000px) {
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

  .description {
    top: 0 !important;
    left: 0 !important;
  }
}
</style>
