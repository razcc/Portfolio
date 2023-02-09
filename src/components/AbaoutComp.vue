<template>
      <div id="abaout">

            <!-- Img Cont -->
            <div class="img_cont">
                  <div v-scroll2 class="square"></div>
                  <img v-scrollanimation v-bind:src="require('../img/' + img)" alt="Immagine Profilo">
            </div>



            <!-- Descrizione -->
            <div class="container_description">

                  <!-- Introdduzione -->
                  <div v-scrollanimation class="introduction">

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


                  <div v-scrollanimation class="description">

                        <!-- ITALIANO---------------------------- -->
                        <!-- descrizione PASSATO 2 -->
                        <div v-if="propsLingua == 'italiano'" class="past_cont"
                              :class="(marcatore == 1) ? 'displayOn' : 'displayOff'">
                              <h2>Il mio Passato:</h2>
                              <br>
                              <span>
                                    La mia storia parte a scuola dove ho studiato informatica
                                    e posso proprio dire che in quel periodo mi sentivo obbligato a fare le cose.

                                    Durante gli studi ho cominciato a lavorare al McDonald per guadagnarmi la mia
                                    indipendenza ma dopo la scuola ho cercato la mia strada decidendo di cambiare
                                    direzione, andando a fare l'aiuto cuoco.
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
                        <div v-if="propsLingua == 'italiano'" class="present_cont"
                              :class="(marcatore == 2) ? 'displayOn' : 'displayOff'">
                              <span>
                                    Negli ultimi 6 mesi ho affrontato un percorso formativo professionale come
                                    WebDeveloper.
                                    <br>
                                    Ho cominciato la formazione in autonomia, prima di
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
                                    Uno dei progetti che sicuramente mi ha più coinvolto è Boolfix, una replica di
                                    Netflix.

                              </span>
                        </div>

                        <!-- descrizione FUTURO 3 -->
                        <div v-if="propsLingua == 'italiano'" class="future_cont"
                              :class="(marcatore == 3) ? 'displayOn' : 'displayOff'">
                              <h2>Il mio Futuro:</h2>
                              <br>
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
                              Se pensi di potermi offrire questo, cerchi una persona che abbia sete di conosceza e
                              voglia di lavorare. Hai trovato il tuo nuovo collaboratore!
                              <a class="contattami" href="#contact">Contattami</a>
                              per conoscerci di persona.


                              <span>

                              </span>
                        </div>

                        <!-- -------------INGLESE----------- -->
                        <!-- Past -->
                        <div v-if="propsLingua == 'english'" class="past_cont"
                              :class="(marcatore == 1) ? 'displayOn' : 'displayOff'">
                              <h2>My Past:</h2>
                              <br>
                              <span>
                                    My story starts in school where I studied computer science and I can really say that
                                    at that time I felt compelled to do things.
                                    During my studies, I started working at McDonald's to earn my independence but after
                                    school I looked for my own way and
                                    decided to change direction, going to be a kitchen assistant.
                                    <br>
                                    And it was just when I was settling into that world by being content, that I
                                    realized I wanted more, that I wanted to <span class="accent">change</span> my life.
                                    <br>
                                    I left the permanent job to start traveling for new experiences, until I met
                                    <span class="accent">Boolean</span>.
                              </span>

                        </div>

                        <!-- Present -->
                        <div v-if="propsLingua == 'english'" class="present_cont"
                              :class="(marcatore == 2) ? 'displayOn' : 'displayOff'">
                              <span>
                                    For the past 6 months I have been going through professional training as a
                                    WebDeveloper.
                                    <br>
                                    I started the training on my own before enrolling in <span
                                          class="accent">Boolean</span>.
                                    <br>
                                    There are so many free resources on the Web, but I had the opportunity to accelerate
                                    my learning time by relying on a company of professionals with an already
                                    well-defined path.
                                    <br>
                                    I was able to tackle numerous projects, each with specific difficulties, starting
                                    with the front-end and ending with the back-end and data management.
                                    <br>
                                    And like assembling a puzzle the pieces slowly fit together, I increased my
                                    knowledge one step at a time.
                                    <br>
                                    One of the projects that definitely got me most involved is Boolfix, a Netflix
                                    rerun.
                              </span>
                        </div>

                        <!-- Future 3 -->
                        <div v-if="propsLingua == 'english'" class="future_cont"
                              :class="(marcatore == 3) ? 'displayOn' : 'displayOff'">
                              <h2>My Future:</h2>
                              <br>
                              I found that something that gives me the drive to get up in the morning with <span
                                    class="accent">enthusiasm</span>.
                              Now that I have finished my studies I want more....
                              <br>
                              I have a desire to improve my skills in dealing with Front-end issues. But my main goal
                              remains to specialize in <span class="accent">Back-end programming.</span>
                              <br>
                              I would like to find an environment that allows me to take on increasingly complex
                              challenges, allowing me to push my limits and have fun.
                              <br>
                              If you think you can offer me this, you are looking for someone who has a thirst for
                              knowledge and a desire to work. You have found your new collaborator!<a class="contattami"
                                    href="#contact">Contact</a> me to meet
                              in person.
                              <span>

                              </span>
                        </div>

                  </div>




                  <!-- Selezione LUNGHEZZA -->
                  <div v-scrollanimation class="description_selector_cont">

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
                  img: "profiloRafael.jpeg"
            }
      },
      methods: {
            selectDescriptionLeft() {
                  if (this.marcatore > 1) {
                        this.marcatore = this.marcatore - 1;
                  }
                  if (this.marcatore == 1) {
                        this.img = "profiloRafael.jpeg";
                  } else if (this.marcatore == 2) {
                        this.img = "profiloRafael.jpeg";
                  } else if (this.marcatore == 3) {
                        this.img = "profiloRafael.jpeg";
                  }


            },
            selectDescriptionRight() {
                  if (this.marcatore >= 1 && this.marcatore < 3) {
                        this.marcatore = this.marcatore + 1;
                  }

                  if (this.marcatore == 1) {
                        this.img = "profiloRafael.jpeg";
                  } else if (this.marcatore == 2) {
                        this.img = "profiloRafael.jpeg";
                  } else if (this.marcatore == 3) {
                        this.img = "profiloRafael.jpeg";
                  }

            },
            circle_selection1() {
                  this.marcatore = 1;

            },
            circle_selection2() {
                  this.marcatore = 2;

            },
            circle_selection3() {
                  this.marcatore = 3;

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
            transition-delay: .1s;
      }

      .enter2 {
            opacity: 1;
            transform: scale(1);
      }

}
</style>