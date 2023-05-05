<template>
  <div id="abaout">
    <!-- Img Cont -->
    <div class="img_cont">
      <div v-scroll2 class="square"></div>
      <img
        v-scrollanimation
        v-bind:src="require('../img/' + img)"
        alt="Immagine Profilo"
      />
    </div>

    <!-- Descrizione -->
    <div class="container_description">
      <!-- Introdduzione -->
      <div v-scrollanimation class="introduction">
        <!-- Saluto Cont-->
        <div class="saluto_cont">
          <!-- Saluto -->
          <span class="saluto"> Hi I'm </span>
        </div>

        <!-- Nome Cont -->
        <div class="name_cont">
          <!-- Nome -->
          <span class="name">Rafael</span>
          <span class="surname">Leonardi</span>
        </div>

        <!-- Professone -->
        <div class="profession">
          <h1>Full Stack Web Developer</h1>
        </div>
      </div>

      <div v-scrollanimation class="description">
        <!-- ITALIANO---------------------------- -->
        <div
          v-if="propsLingua == 'italiano'"
          class="present_cont"
          :class="marcatore == 2 ? 'displayOn' : 'displayOff'"
        >
          <span>
            Fra il 2022 e il 2023 ho affrontato un percorso formativo professionale come
            WebDeveloper.
            <br />
            Dopo aver studiato in autonomia e aver capito che era questo che volevo dal
            mio futuro ho deciso di iscirvermi a <span class="accent">Boolean</span>.
            <br />
            Le risorse gratis nel Web sono tante ma Boolean mi ha dato l'occasione di
            accelerare i tempi di apprendimento, affidandomi ad una azienda di
            professionisti con un percorso gia ben definito.
            <br />
            Ho avuto modo di affrontare numerosi progetti, ognuno con difficolta
            specifiche, partendo dal front-end fino ad arrivare al back-end e la gestione
            dei dati.
            <br />
            E come montando un puzzle i pezzi si incastrano pian paino, ho aumentato la
            mia conoscenza un passo alla volta.
            <br />
            Sono una persona razionale e curiosa, amo le torte e le foreste. Per un
            approfondimento a livello professionale non esitare a
            <a href="#contact">Contattarmi</a>
          </span>
        </div>

        <!-- -------------INGLESE----------- -->
        <div
          v-if="propsLingua == 'english'"
          class="present_cont"
          :class="marcatore == 2 ? 'displayOn' : 'displayOff'"
        >
          <span>
            Between 2022 and 2023 I did a professional training course as Web Developer.
            <br />
            After self-studying and realizing that this is what I wanted from my future I
            attended a <span class="accent">Boolean</span> course.
            <br />
            There are so many free resources on the Web, but I had the opportunity to
            accelerate my learning time by relying on a company of professionals with an
            already well-defined path.
            <br />
            I was able to tackle numerous projects, each with specific difficulties,
            starting with the front-end and ending with the back-end and data management.
            <br />
            And like assembling a puzzle the pieces slowly fit together, I increased my
            knowledge one step at a time.
            <br />
            I am a rational and curious person, I love cakes and forests. For a deepening
            on a professional level do not hesitate to
            <a href="#contact">Contact me</a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AbaoutComp",
  props: {
    propsLingua: String,
  },
  data() {
    return {
      marcatore: 2,
      img: "profiloRafael.jpeg",
    };
  },
};
</script>

<style lang="scss" scoped>
a {
  color: var(--lilla);
}
#abaout {
  padding-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15%;
  position: relative;

  // Cont immagine Profilo
  .img_cont {
    width: 240px;
    height: 300px;
    position: relative;

    .square {
      position: absolute;
      top: 7%;
      left: -7%;
      width: 100%;
      height: 100%;
      border: 1px solid var(--text2);
      box-shadow: -4px 4px 10px var(--purple-scuro);
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      width: 100%;
      height: 100%;
    }
  }

  // Descrizione Testo
  .container_description {
    color: var(--text1);

    // Introdduzione
    .introduction {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 7% 5%;

      .saluto {
        font-size: 1.5rem;
      }

      // Nome Cont
      .name_cont {
        display: flex;
        flex-direction: column;
        align-items: center;

        // Nome Cognome
        .name,
        .surname {
          font-size: 4.5rem;
          font-weight: 900 !important;
          text-shadow: 8px 8px 10px var(--purple-scuro);
        }

        // Professione
        h1 {
          font-size: 1.5rem;
          padding-bottom: 1rem;
        }
      }

      .profession {
        text-align: center;
      }
    }

    // Descrizione
    .description {
      line-height: 1.7rem;
      padding: 0 1.5rem;
      text-align: center;

      .contattami {
        color: var(--lilla);
        text-decoration-color: var(--lilla);
        text-decoration-thickness: 1px;
      }
    }

    // Seleziona Descrizione
    .description_selector_cont {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      padding-top: 2rem;

      .past_selector,
      .present_selector,
      .future_selector {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: var(--text2);
        cursor: pointer;
        transition: all 0.5s;

        &:hover {
          border: 1px solid var(--text2);
          background-color: black;
        }
      }

      // Frecce Sinistra
      .chevron_cont_left {
        padding: 1rem;
        background-color: var(--lilla);
        color: var(--bg-body2);
        cursor: pointer;
        transition: all 0.5s;

        &:hover {
          background-color: var(--bg-body2);
          color: var(--text1);
          border: 1px solid var(--text1);
        }
      }

      // Frecce Destra
      .chevron_cont_right {
        padding: 1rem;
        background-color: var(--lilla);
        color: var(--bg-body2);
        cursor: pointer;
        transition: all 0.5s;

        &:hover {
          background-color: var(--bg-body2);
          color: var(--text1);
          border: 1px solid var(--text1);
        }
      }
    }
  }
}

@media screen and (min-width: 978px) {
  #abaout {
    flex-direction: row-reverse;
    padding: 5% 5%;
  }

  .img_cont {
    position: absolute !important;
    top: 12%;
    left: 2%;
  }

  .container_description {
    width: 100%;
  }
}

@media screen and (min-width: 1170px) {
  .img_cont {
    position: absolute !important;
    top: 15%;
    left: 10%;
  }
}

@media screen and (min-width: 1852px) {
  .img_cont {
    position: absolute !important;
    top: 20%;
    left: 20%;
  }

  .container_description {
    width: 100%;
  }
}

.displayOn {
  display: block;
}

.displayOff {
  display: none;
}

.accent {
  text-decoration: underline;
  text-decoration-color: var(--lilla);
  text-decoration-thickness: 2.5px;
  font-style: italic;
}

.activeBotton {
  border: 1px solid var(--text2) !important;
  background-color: black !important;
}

@media screen and (min-width: 450px) {
  .before-enter {
    opacity: 0;
    transform: scale(0);
    transition: all 1s;
  }

  .enter {
    opacity: 1;
    transform: scale(1);
  }

  // -------------------------
  .before-enter2 {
    opacity: 0;
    transform: scale(0);
    transition: all 1s;
    transition-delay: 0.1s;
  }

  .enter2 {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
