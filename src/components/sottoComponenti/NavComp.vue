<template>
      <!-- NavBar -->
      <!-- :class="{ 'navbar--hidden': !showNavbar }"  -->
      <!--  -->
      <div id="navComp">
            <font-awesome-icon v-on:click="showNavbar = true" class="burger" icon="fa-solid fa-bars" />

            <nav :class="showNavbar ? 'show nav' : ' hidden nav'">
                  <ul>
                        <font-awesome-icon v-on:click="showNavbar = false" class="x" icon="fa-solid fa-x" />
                        <li class="logo">Rafael Leonardi</li>
                        <li>Abaut</li>
                        <li>Skills</li>
                        <li>Project</li>
                        <li>Contact</li>
                        <li class="resume">Resume</li>
                        <div class="social_media">
                              <a href=""><font-awesome-icon class="icon" icon="fa-brands fa-github" /></a>
                              <a href=""><font-awesome-icon class="icon" icon="fa-brands fa-linkedin-in" /></a>
                              <a href=""><font-awesome-icon class="icon" icon="fa-brands fa-codepen" /></a>
                              <a href=""><font-awesome-icon class="icon" icon="fa-brands fa-instagram" /></a>
                        </div>
                  </ul>
            </nav>
      </div>

</template>

<script>
export default {
      name: "NavComp",
      props: {

      },
      data() {
            return {
                  showNavbar: false,
                  lastScrollPosition: 0,
            }
      },
      mounted() {
            window.addEventListener('scroll', this.onScroll)
      },
      beforeDestroy() {
            window.removeEventListener('scroll', this.onScroll)
      },
      methods: {
            onScroll() {
                  // Get the current scroll position
                  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
                  // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
                  if (currentScrollPosition < 0) {
                        return
                  }
                 
                  // Set the current scroll position as the last scroll position
                  this.lastScrollPosition = currentScrollPosition;
                  this.$emit("emitScrol", this.lastScrollPosition);
            },

      },

}
</script>

<style lang="scss" scoped>
#navComp {
      color: var(--text1);
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      gap: 2rem;


      .burger {
            font-size: 2rem;
            position: fixed;
            top: 5%;
            right: 5%;
            cursor: pointer;
            transition: all .7s;

            &:hover {
                  color: var(--hover-links);
                  transform: scale(1.2);
            }
      }

      .nav {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1000;
            height: 100%;
            width: 100%;
            background-color: var(--bg-body2);
            font-size: 2rem;
            transition: all 1s;

            ul {
                  height: 100%;
                  width: 100%;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-around;
                  align-items: center;

                  .logo {
                        font-family: 'Rancho', cursive;
                  }



                  li {
                        list-style-type: none;

                  }

                  .social_media {
                        width: 100%;
                        display: flex;
                        justify-content: space-around;
                  }

                  .resume {
                        border: 1px solid var(--text1);
                        border-radius: 10px;
                        padding: .7rem;
                        transition: all 1s;

                        &:hover {
                              background-color: var(--hover-links);

                        }
                  }

                  .x {
                        position: absolute;
                        top: 5%;
                        right: 5%;
                        cursor: pointer;
                        transition: all .7s;

                        &:hover {
                              color: var(--hover-links);
                              transform: scale(1.2);
                        }
                  }
            }

      }
}

.show {
      transform: translateY(0);
}

.hidden {
      transform: translateY(-150%);

}

@media screen and (min-width: 621px) {
      #navComp {
            display: block;
      }

      .burger {
            display: none;
      }

      .nav {
            height: 10vh !important;
            font-size: 1rem !important;

            ul {
                  flex-direction: row !important;
                  justify-content: center !important;
                  gap: 2rem !important;
                  position: relative !important;

                  .logo {
                        position: absolute !important;
                        left: 5% !important;
                  }

                  .social_media {
                        display: none !important;

                  }


            }

      }

      .hidden {
            transform: translateY(0);
      }

      .x {
            display: none;
      }
}

@media screen and (min-width: 1000px) {
      .nav {
            font-size: 1.5rem !important;

      }

}
</style>