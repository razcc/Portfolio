<template>
      <!-- ColLeft -->
      <div v-scrollanimation class="col_social">
            <div class="down_elem">
                  <a  target="_blank" href="https://github.com/razcc">
                        <font-awesome-icon class="icon" icon="fa-brands fa-github" />
                  </a>
                  <a  target="_blank" href="https://www.linkedin.com/in/rafael-leonardi-a667b4215/">
                        <font-awesome-icon class="icon" icon="fa-brands fa-linkedin-in" />
                  </a>
                  <a  target="_blank" href="https://codepen.io/razcc">
                        <font-awesome-icon class="icon" icon="fa-brands fa-codepen" />
                  </a>

                  <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=rafael.leonardi98@gmail.com" target="_blank">
                        <font-awesome-icon class="icon" icon="fa-solid fa-envelope" />
                  </a>
            </div>

      </div>
</template>

<script>
export default {
      name: "ColSocialFixed",
}
</script>

<style lang="scss" scoped>
// Col Left
.col_social {
      height: 100vh;
      width: 5vw;
      background: var(--col-transparent);
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      position: fixed;
      z-index: 4;
      left: 0;


      // Elementi 
      .down_elem {
            height: 300px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.3rem;
            position: relative;

            // Riga Sotto Icone
            &::after {
                  content: '';
                  position: absolute;
                  bottom: 0;
                  left: 50%;
                  height: 40%;
                  width: 2px;
                  background-color: var(--lilla);
                  transform: translateX(-50%);
            }

            // Riga sopra Icone
            &::before {
                  content: '';
                  position: absolute;
                  top: 0;
                  left: 50%;
                  height: 10%;
                  width: 2px;
                  background-color: var(--lilla);
                  transform: translateX(-50%) translateY(-130%);
            }


            // Icone FontAwsome
            .icon {
                  font-size: 1.3rem;
                  color: var(--text1);

                  transition: all .4s;

                  &:hover {
                        color: var(--hover-links);
                        transform: translateY(-15%);
                        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.557);

                  }
            }

      }
}

@media screen and (max-width: 1070px) {
      .col_social {
            transform: translateX(-120%) !important;
      }
}

.before-enter {
      opacity: 0;
      transform: translateY(-100%);
      transition: all 1s cubic-bezier(.41, .01, .57, 1.61);
}

/* 
    If the element intersects with the viewport, the before-enter class is added.
  */
.enter {
      opacity: 1;
      transform: translateY(0%);
}
</style>