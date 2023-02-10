<template>
  <div id="contact">
    <div class="col_left">
      <h2 v-if="propsLingua == 'english'">Get in touch!</h2>
      <h2 v-else>Contattami!</h2>

      <!-- Italiano -->
      <p v-if="propsLingua == 'italiano'">
        Attualmente sto cercando il mio primo lavoro per avviare la mia
        carriera.
        <br />
        E sono come una spugna pronta ad assorbire ogni conoscenza che susciti
        la mia curiosità.
        <br />
        Sono disponibile per periodi di formazione e anche nello spostarmi
        ovunque nel mondo. Se sei interessato a conoscermi, non esitare a
        contattarmi compilando il form e ti ricontatterò il prima possibile.
        <br />
        Oppure, se preferisci, scrivimi direttamente alla mia mail:
        <br />
        <br />

        <span>

          <a class="" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=rafael.leonardi98@gmail.com" target="_blank">
            
            <span class="accent mail">
            rafael.leonardi98@gmail.com
            </span>
            
          </a>
        </span>
      </p>

      <!-- Inglese -->
      <p v-else>
        I am currently looking for my first job to launch my career.
        <br />
        And I'm like a sponge ready to absorb any knowledge that arouses my
        curiosity.
        <br />
        I'm available for training periods, and also to move anywhere in the
        <span class="accent">globe</span>.
        <br />
        If you are interested in getting to know me, feel free to contact me by
        submitting the form and I will get back to you as soon as possible.
        <br />

        Or if you prefer,Click on the links below and write me directly to my
        email:
        <br />
        <br />

        <span class="accent mail">
          <a class="mail" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=rafael.leonardi98@gmail.com" target="_blank">

            rafael.leonardi98@gmail.com
          </a>
        </span>
      </p>
    </div>

    <!-- Form -->
    <div class="container_form">
      <form class="form" @submit.prevent="sendEmail">
        <label class="input_label">Name</label>
        <input required class="input" type="text" v-model="name" name="name" placeholder="Your Name" />

        <label class="input_label">Email</label>
        <input required class="input" type="email" v-model="email" name="email" placeholder="Your Email" />

        <label class="input_label">Message</label>
        <textarea required class="input" name="message" v-model="message" cols="30" rows="5"
          placeholder="Message"></textarea>

        <input class="submit" type="submit" value="Send" />
      </form>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "ContactUs",
  props: {
    propsLingua: String,
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    sendEmail(e) {
      emailjs.sendForm(
        "service_reh3hwb",
        "template_bkgg283",
        e.target,
        "NvepFLMmovs7Ltpqs",
        {
          name: this.name,
          email: this.email,
          message: this.meessage,
        }
      );

      // Reset form field
      this.name = "";
      this.email = "";
      this.message = "";
    },
    mostraPopUp() {
      window.alert("Email inviata Corettamente");
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  text-decoration-color: var(--lilla);
  color: var(--text1);
  transition: all 0.7s;

  &:hover {
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

@media screen and (max-width: 497px) {
  .accent {
        font-size: 1rem !important;
      }
      h2{
        padding-top: 60px;
      }
}
@media screen and (max-width: 497px) {
  .accent {
        font-size: 1rem !important;
      }
      h2{
        padding-top: 60px;
      }
}
</style>