<template>
      <div id="abaout">

            <!-- Img Cont -->
            <div v-scrollanimation class="img_cont">
                  <div class="square"></div>
                  <img v-bind:src="require('../img/' + img)" alt="Immagine Profilo">
            </div>



            <!-- Descrizione -->
            <div v-scrollanimation class="container_description">

                  <!-- Introdduzione -->
                  <div class="introduction">

                        <!-- Saluto Cont-->
                        <div class="saluto_cont">
                              <!-- Saluto -->
                              <span class="saluto">
                                    Hi I'm
                              </span>
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


                  <!-- Descrizione -->
                  <div class="description">

                        <!-- ITALIANO---------------------------- -->
                        <!-- descrizione PASSATO 2 -->
                        <div v-if="propsLingua == 'italiano'" class="past_cont" :class="(marcatore == 1) ? 'displayOn' : 'displayOff'">
                              <h2>Il mio Passato:</h2>
                              <span>
                                    La mia storia parte a scuola dove ho studiato informatica
                                    e posso proprio dire che in quel periodo mi sentivo obbligato a fare le cose.

                                    Durante gli studi ho cominciato a lavorare al McDonald per guadagnarmi la mia
                                    indipendenza ma dopo la scuola ho cercato la mia strada decidendo di cambiare direzione,
                                    andando a fare l'aiuto cuoco.
                                    <br>
                                    Ed è proprio quando mi stavo adagiando in quel mondo accontentandomi, che
                                    mi sono reso conto di volere di più, che volevo <span class="accent">cambiare</span> 
                                    la mia vita.
                                    <br>
                                    Ho lasciato il posto fisso per cominciare a viaggiare
                                    per fare nuove esperienze, finche
                                    non ho incontrato <span class="accent">Boolean</span>.

                              </span>

                        </div>

                        <!-- PRESENTE -->
                        <div v-if="propsLingua == 'italiano'" class="present_cont" :class="(marcatore == 2) ? 'displayOn' : 'displayOff'">
                              <span>
                                    Negli ultimi 8-9 mesi ho affrontato un percorso formativo professionale come
                                    WebDeveloper. 
                                    <br>
                                    Ho cominciato la formazione in autonomia, per un paio di mesi, prima di
                                    iscrivermi a <span class="accent">Boolean</span>. 
                                    <br>
                                    Le risorse gratis nel Web sono tante ma ho avuto l'occasione di accelerare i
                                    tempi di apprendimento, affidandomi ad una azienda di professionisti
                                    con un percorso gia ben definito. 
                                    <br>
                                    Ho avuto modo di affrontare numerosi progetti, ognuno con difficolta
                                    specifiche, partendo dal front-end fino ad arrivare al back-end e la gestione
                                    dei dati. 
                                    <br>
                                    E come montando un puzzle i pezzi si incastrano pian paino, ho aumentato la
                                    mia conoscenza un passo alla volta.
                                    <br>
                                    Uno dei progetti che sicuramente mi ha piu coinvolto è Boolfix, una replica di
                                    Netflix.

                              </span>
                        </div>

                        <!-- descrizione FUTURO 3 -->
                        <div v-if="propsLingua == 'italiano'" class="future_cont" :class="(marcatore == 3) ? 'displayOn' : 'displayOff'">
                              <h2>Il mio Futuro:</h2>
                              Ho trovato quella qualcosa che mi da la spinta ad alzarmi la mattina con
                              <span class="accent">entusiasmo</span>.
                              Ora che ho finito gli studi Volgio di più...
                              <br>
                              Ho il desiderio di migliorare le mie capacità nel affrontare le problematiche del
                              Front-end.
                              Ma il mio obiettivo principale rimane specializzarmi
                              nella <span class="accent"> programmazione Back-end.</span>
                              <br>
                              Desidero trovare un ambiente che mi permetta di affrontare sfide sempre piu complesse,
                              che mi permettando di spingermi al mio limite e di divertirmi.
                              <br>
                               Se pensi di potermi offrire questo, cerchi una persona che abbia sete di conosceza e voglia di lavorare. Hai trovato
                              il tuo nuovo collaboratore! <a class="contattami" href="#contact">Contattami</a> per
                              conoscerci di persona.


                              <span>

                              </span>
                        </div>

                        <!-- -------------INGLESE----------- -->
                        <!-- Past -->
                        <div v-if="propsLingua == 'english'" class="past_cont" :class="(marcatore == 1) ? 'displayOn' : 'displayOff'">
                              <h2>My Past:</h2>
                              <span>
                                    La mia storia parte a scuola dove ho studiato informatica
                                    e posso proprio dire che in quel periodo mi sentivo obbligato a fare le cose.

                                    Durante gli studi ho cominciato a lavorare al McDonald per guadagnarmi la mia
                                    indipendenza ma dopo la scuola ho cercato la mia strada decidendo di cambiare direzione,
                                    andando a fare l'aiuto cuoco.
                                    <br>
                                    Ed è proprio quando mi stavo adagiando in quel mondo accontentandomi, che
                                    mi sono reso conto di volere di più, che volevo <span class="accent">cambiare</span> 
                                    la mia vita.
                                    <br>
                                    Ho lasciato il posto fisso per cominciare a viaggiare
                                    per fare nuove esperienze, finche
                                    non ho incontrato <span class="accent">Boolean</span>.

                              </span>

                        </div>

                        <!-- Present -->
                        <div v-if="propsLingua == 'english'" class="present_cont" :class="(marcatore == 2) ? 'displayOn' : 'displayOff'">
                              <span>
                                    Negli ultimi 8-9 mesi ho affrontato un percorso formativo professionale come
                                    WebDeveloper. 
                                    <br>
                                    Ho cominciato la formazione in autonomia, per un paio di mesi, prima di
                                    iscrivermi a <span class="accent">Boolean</span>. 
                                    <br>
                                    Le risorse gratis nel Web sono tante ma ho avuto l'occasione di accelerare i
                                    tempi di apprendimento, affidandomi ad una azienda di professionisti
                                    con un percorso gia ben definito. 
                                    <br>
                                    Ho avuto modo di affrontare numerosi progetti, ognuno con difficolta
                                    specifiche, partendo dal front-end fino ad arrivare al back-end e la gestione
                                    dei dati. 
                                    <br>
                                    E come montando un puzzle i pezzi si incastrano pian paino, ho aumentato la
                                    mia conoscenza un passo alla volta.
                                    <br>
                                    Uno dei progetti che sicuramente mi ha piu coinvolto è Boolfix, una replica di
                                    Netflix.

                              </span>
                        </div>

                        <!-- Future 3 -->
                        <div v-if="propsLingua == 'english'" class="future_cont" :class="(marcatore == 3) ? 'displayOn' : 'displayOff'">
                              <h2>My Future:</h2>
                              Ho trovato quella qualcosa che mi da la spinta ad alzarmi la mattina con
                              <span class="accent">entusiasmo</span>.
                              Ora che ho finito gli studi Volgio di più...
                              <br>
                              Ho il desiderio di migliorare le mie capacità nel affrontare le problematiche del
                              Front-end.
                              Ma il mio obiettivo principale rimane specializzarmi
                              nella <span class="accent"> programmazione Back-end.</span>
                              <br>
                              Desidero trovare un ambiente che mi permetta di affrontare sfide sempre piu complesse,
                              che mi permettando di spingermi al mio limite e di divertirmi.
                              <br>
                               Se pensi di potermi offrire questo, cerchi una persona che abbia sete di conosceza e voglia di lavorare. Hai trovato
                              il tuo nuovo collaboratore! <a class="contattami" href="#contact">Contattami</a> per
                              conoscerci di persona.


                              <span>

                              </span>
                        </div>

                  </div>


                  <!-- Selezione LUNGHEZZA -->
                  <div class="description_selector_cont">

                        <!-- Freccia Sinistra -->

                        <div class="chevron_cont_left" @click="selectDescriptionLeft()">
                              <font-awesome-icon icon="fa-solid fa-chevron-left" />
                        </div>


                        <!-- Marcatori -->
                        <div @click="circle_selection1()" class="past_selector"
                              :class="(marcatore == '1') ? 'activeBotton' : ''">
                        </div>
                        <div @click="circle_selection2()" class="present_selector "
                              :class="(marcatore == '2') ? 'activeBotton' : ''">
                        </div>
                        <div @click="circle_selection3()" class="future_selector"
                              :class="(marcatore == '3') ? 'activeBotton' : ''">
                        </div>

                        <!-- Freccia Destra -->

                        <div class="chevron_cont_right" @click="selectDescriptionRight()">
                              <font-awesome-icon icon="fa-solid fa-chevron-right" />
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
                  img: "cvPresent.jpg"
            }
      },
      methods: {
            selectDescriptionLeft() {
                  if (this.marcatore > 1) {
                        this.marcatore = this.marcatore - 1;
                  }
                  if (this.marcatore == 1) {
                        this.img = "cvPast.jpg";
                  } else if (this.marcatore == 2) {
                        this.img = "cvPresent.jpg";
                  } else if (this.marcatore == 3) {
                        this.img = "cvFuture.jpg";
                  }


            },
            selectDescriptionRight() {
                  if (this.marcatore >= 1 && this.marcatore < 3) {
                        this.marcatore = this.marcatore + 1;
                  }

                  if (this.marcatore == 1) {
                        this.img = "cvPast.jpg";
                  } else if (this.marcatore == 2) {
                        this.img = "cvPresent.jpg";
                  } else if (this.marcatore == 3) {
                        this.img = "cvFuture.jpg";
                  }

            },
            circle_selection1() {
                  this.marcatore = 1;
                  this.img = "cvPast.jpg";
            },
            circle_selection2() {
                  this.marcatore = 2;
                  this.img = "cvPresent.jpg";
            },
            circle_selection3() {
                  this.marcatore = 3;
                  this.img = "cvFuture.jpg";
            },
      }
}

</script>


<style lang="scss" scoped>
#abaout {
      padding-top: 10%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 15%;
      position: relative;

      h2 {
            font-family: 'Rancho', cursive;
      }


      // Cont immagine Profilo
      .img_cont {
            width: 200px;
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
                  padding: 7% 1%;

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
                              font-size: 5rem;
                              font-weight: 900 !important;
                              text-shadow: 8px 8px 10px var(--purple-scuro);

                        }


                        // Professione 
                        h1 {
                              font-size: 1.5rem;

                              padding-bottom: 1rem;



                        }

                  }

                  .profession{
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
                        transition: all .5s;

                        &:hover {
                              border: 1px solid var(--text2);
                              background-color: black;
                        }


                  }



                  a {
                        text-decoration: none;
                        color: var(--bg-body2);
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
            left: 7%;
      }

      .container_description {
            width: 100%;
      }

}
@media screen and (min-width: 1170px){
      .img_cont {
            position: absolute !important;
            top: 15%;
            left: 13%;
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

.before-enter {
      opacity: 0;
      transform: scale(0);
      transition: all 1s cubic-bezier(.41, .01, .57, 1.61);
}

/* 
    If the element intersects with the viewport, the before-enter class is added.
  */
.enter {
      opacity: 1;
      transform: scale(1);
}
</style>