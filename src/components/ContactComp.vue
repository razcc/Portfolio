<template>
      <div id="contact">
            <div class="col_left">
                  <h2 v-scrollanimation>Get in touch</h2>
                  <p v-scrollanimation>
                        I am currently looking for my first job to launch my career.

                        <br>
                        And I'm like a sponge ready to absorb any knowledge that arouses my curiosity, <br>
                        I'm available for <span class="accent">Training</span> periods, and also to move anywhere in the

                        <span class="accent">Globe</span>
                        <br>
                        If you are interested in getting to know me, Feel free to Contact me by submitting the form on
                        the right and I will get back to you as soon as possible.
                        <br>
                        <br>
                        Or if you prefer, write me directly to my email or on WhatsApp:

                        <br>
                        <span class="accent">rafael.leonardi98@gmail.com</span>
                        <br>
                        <br>
                        351 628 1064
                  </p>

            </div>

            <!-- Form -->
            <div class="container_form">
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
#contact {
      padding: 5%;

      .col_left {
            text-align: center;
            color: var(--text1);
            padding: 1%;

            h2 {
                  font-size: 2rem;
                  text-transform: uppercase;
                  font-family: 'Rancho', cursive;

            }

            p {
                  margin-top: 10%;
                  line-height: 2rem;
                  font-size: 1.3rem;

                  .accent {
                        font-size: 1.4rem;
                        font-style: italic;
                        text-decoration: underline;
                        text-decoration-color: var(--accent);
                  }

            }
      }

      // Form Cont
      .container_form {

            // Form
            .form {
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


@media screen and (min-width: 1000px){
      #contact{
            display: flex;
      }

}

</style>