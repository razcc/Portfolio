<template>
      <div id="contact">
            <div class="col_left">
                  <h2 v-if="propsLingua == 'english'" v-scroll2>Get in touch!</h2>
                  <h2 v-else>Contattami!</h2>

                  <!-- Italiano -->
                  <p v-scroll2 v-if="propsLingua == 'italiano'">
                        Attualmente sto cercando il mio primo lavoro per avviare la mia carriera.
                        <br>
                        E sono come una spugna pronta ad assorbire ogni conoscenza che susciti la mia curiosità.
                        <br>
                        Sono disponibile per periodi di formazione e anche nello spostarmi ovunque nel mondo.
                        Se sei interessato a conoscermi, non esitare a contattarmi compilando il form e ti ricontatterò
                        il prima possibile.
                        <br>
                        <br>
                        Oppure, se preferisci, scrivimi direttamente alla mia mail o su WhatsApp:
                        <br>
                        <br>
                        Cliccami:<span class="accent mail">rafael.leonardi98@gmail.com</span>
                        <br>
                        <br>
                        <span class="accent">+39 351 628 1064</span>

                  </p>

                  <!-- Inglese -->
                  <p v-else v-scroll2>
                        I am currently looking for my first job to launch my career.
                        <br>
                        And I'm like a sponge ready to absorb any knowledge that arouses my curiosity.
                        <br>
                        I'm available for training periods, and also to move anywhere in the
                        <span class="accent">globe</span>.
                        <br>
                        If you are interested in getting to know me, feel free to contact me by submitting the form
                        and I will get back to you as soon as possible.
                        <br>
                        <br>
                        Or if you prefer,Click on the links below and write me directly to my email or on my WhatsApp:
                        <br>
                        <br>
                        <span class="accent mail"><a href="mailto:rafael.leonardi98@gmail.com" target="_blank"
                                    rel="noopener noreferrer">rafael.leonardi98@gmail.com</a></span>
                        <br>
                        <br>
                        <span class="accent"><a href="https://wa.me/393516281064" target="_blank" rel="noopener">+39 351
                                    628 1064</a></span>
                        <br>

                  </p>

            </div>

            <!-- Form -->
            <div v-scrollanimation class="container_form">
                  <form class="form" @submit.prevent="sendEmail">

                        <label class="input_label">Name</label>
                        <input class="input" type="text" v-model="name" name="name" placeholder="Your Name">

                        <label class="input_label">Email</label>
                        <input class="input" type="email" v-model="email" name="email" placeholder="Your Email">

                        <label class="input_label">Message</label>
                        <textarea class="input" name="message" v-model="message" cols="30" rows="5"
                              placeholder="Message"></textarea>

                        <input class="submit" type="submit" value="Send">
                  </form>
            </div>
      </div>

</template>

<script>
import emailjs from 'emailjs-com';

export default {
      name: 'ContactUs',
      props: {
            propsLingua: String,
      },
      data() {
            return {
                  name: '',
                  email: '',
                  message: ''
            }
      },
      methods: {
            sendEmail(e) {

                  emailjs.sendForm('service_reh3hwb', 'template_bkgg283', e.target, 'NvepFLMmovs7Ltpqs', {
                        name: this.name,
                        email: this.email,
                        message: this.meessage
                  })

                  // Reset form field
                  this.name = ''
                  this.email = ''
                  this.message = ''
            },
      }
}
</script>

<style lang="scss" scoped>
a {
      text-decoration: none;
      text-decoration-color: var(--lilla);
      color: var(--text1);
      transition: all .7s;
      &:hover{
            font-size: 1.5rem;
      }
}

#contact {
      padding: 5%;

      .col_left {
            text-align: center;
            color: var(--text1);
            padding: 1%;

            h2 {
                  font-size: 2rem;
                  text-transform: uppercase;
                  text-shadow: 3px 3px 10px var(--lilla);

            }

            p {
                  margin-top: 5%;
                  line-height: 2rem;
                  font-size: 1.3rem;

                  .accent {
                        font-size: 1.4rem;
                        font-style: italic;
                        text-decoration: underline;
                        text-decoration-color: var(--lilla);
                        text-decoration-thickness: 2px;
                  }

                  .mail {}


            }
      }

      // Form Cont
      .container_form {
            display: flex;

            // Form
            .form {
                  align-self: center;
                  color: var(--text1);
                  border-radius: 5px;
                  background-color: var(--bg-body2);
                  padding: 2rem;

                  // Input Areas
                  .input {
                        width: 100%;
                        padding: 12px;
                        border: 1px solid var(--text1);
                        border-radius: 4px;
                        margin-top: 6px;
                        margin-bottom: 16px;
                  }

                  // Submit
                  .submit {
                        background-color: var(--text1);
                        color: var(--bg-body2);
                        padding: 12px 20px;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                        transition: all 0.5s;

                        &:hover {
                              background-color: #7a7e7a;
                        }
                  }

            }
      }

}


@media screen and (min-width: 900px) {
      #contact {
            display: flex;
      }

}

// .before-enter {
//     opacity: 0;
//     transform: scale(0) rotate(0deg);
//     transition: all 1s cubic-bezier(.41,.01,.57,1.61);
//   }
//   /* 
//     If the element intersects with the viewport, the before-enter class is added.
//   */
//   .enter {
//     opacity: 1;
//     transform: scale(1) rotate(360deg);
//   }

//   .before-enter2 {
//     opacity: 0;
//     transform: scale(0);
//     transition: all 1s cubic-bezier(.41,.01,.57,1.61);
//   }
//   /* 
//     If the element intersects with the viewport, the before-enter class is added.
//   */
//   .enter2{
//     opacity: 1;
//     transform: scale(1);
//   }
</style>