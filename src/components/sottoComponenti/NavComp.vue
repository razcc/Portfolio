<template>
  <!-- NavBar -->
  <!--   -->
  <!--  :class="{ 'hiddenDesktop': showNavbar }" -->
  <div v-scrollanimation id="navComp">
    <font-awesome-icon
      v-on:click="showNavbar = true"
      class="burger"
      icon="fa-solid fa-bars"
    />

    <nav :class="showNavbar ? 'show nav' : ' hidden nav'">
      <ul>
        <font-awesome-icon
          v-on:click="showNavbar = false"
          class="x"
          icon="fa-solid fa-x"
        />
        <li class="logo"><a href="#app">Rafael Leonardi</a></li>

        <!-- Lingua -->
        <select v-model="linguaScelta" name="italiano" id="lingua">
          <option value="italiano">Italiano</option>
          <option value="english">English</option>
        </select>

        <!-- Inglese Menu -->
        <li v-if="linguaScelta == 'english'">
          <a
            href="#about"
            v-on:click="showNavbar = false"
            class="nav_item_hover"
            >About</a
          >
        </li>
        <li v-if="linguaScelta == 'english'">
          <a
            href="#skills"
            v-on:click="showNavbar = false"
            class="nav_item_hover"
            >Skills</a
          >
        </li>
        <li v-if="linguaScelta == 'english'">
          <a
            href="#projects"
            v-on:click="showNavbar = false"
            class="nav_item_hover"
            >Project</a
          >
        </li>
        <li v-if="linguaScelta == 'english'">
          <a
            href="#contact"
            v-on:click="showNavbar = false"
            class="nav_item_hover"
            >Contact</a
          >
        </li>
        <li v-if="linguaScelta == 'english'" class="resume">
          <a
            href="./assets/Rafael-LeonardiCV.pdf"
            target="_blank"
            v-on:click="showNavbar = false"
            >Resume</a
          >
        </li>

        <!-- Italiano Menu -->
        <li v-if="linguaScelta == 'italiano'">
          <a
            href="#about"
            v-on:click="showNavbar = false"
            class="nav_item_hover"
            >Chi sono</a
          >
        </li>
        <li v-if="linguaScelta == 'italiano'">
          <a
            href="#skills"
            v-on:click="showNavbar = false"
            class="nav_item_hover"
            >Competenze</a
          >
        </li>
        <li v-if="linguaScelta == 'italiano'">
          <a
            href="#projects"
            v-on:click="showNavbar = false"
            class="nav_item_hover"
          >
            Progetti
          </a>
        </li>
        <li v-if="linguaScelta == 'italiano'">
          <a
            href="#contact"
            v-on:click="showNavbar = false"
            class="nav_item_hover"
            >Contattami</a
          >
        </li>
        <li v-if="linguaScelta == 'italiano'" class="resume">
          <a
            href="./assets/Rafael-LeonardiCV.pdf"
            target="_blank"
            v-on:click="showNavbar = false"
            >Resume</a
          >
        </li>

        <!-- Social Media -->
        <div class="social_media">
          <a target="_blank" href="https://github.com/razcc">
            <font-awesome-icon class="icon" icon="fa-brands fa-github" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/rafael-leonardi-a667b4215/"
          >
            <font-awesome-icon class="icon" icon="fa-brands fa-linkedin-in" />
          </a>
          <a target="_blank" href="https://codepen.io/your-work/">
            <font-awesome-icon class="icon" icon="fa-brands fa-codepen" />
          </a>
          <a
            href="mailto:rafael.leonardi98@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <font-awesome-icon class="icon" icon="fa-solid fa-envelope" />
          </a>
        </div>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavComp",
  props: {},
  data() {
    return {
      showNavbar: false,
      lastScrollPosition: 0,
      linguaScelta: "italiano",
    }
  },
  created() {
    this.$emit("emitLingua", this.linguaScelta)
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll)
  },
  methods: {
    onScroll() {
      // Get the current scroll position
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
      if (currentScrollPosition < 0) {
        return
      }

      // // Here we determine whether we need to show or hide the navbar
      // this.showNavbar = currentScrollPosition < this.lastScrollPosition

      // Set the current scroll position as the last scroll position
      this.lastScrollPosition = currentScrollPosition
      this.$emit("emitScrol", this.lastScrollPosition)
    },
  },
  updated() {
    this.$emit("emitLingua", this.linguaScelta)
  },
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: var(--text1);
}

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
    z-index: 100;
    cursor: pointer;
    transition: all 0.7s;

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
    font-size: 1.5rem;
    transition: all 1s;

    ul {
      height: 100%;
      display: flex;
      flex-direction: column;
      line-height: 5.5rem;
      align-items: center;
      position: relative;

      .logo {
        font-size: 1.6rem;
        font-weight: 700;
        text-shadow: 4px 4px 10px #5a168a;
      }

      li {
        list-style-type: none;
        transition: all 0.7s;

        &:hover {
          text-shadow: 5px 5px 10px var(--lilla);
          transform: scale(1.2);
        }

        .nav_item_hover {
          position: relative;
          transition: all 0.8s;

          &::before {
            content: "";
            position: absolute;
            left: 50%;
            bottom: 0;
            width: 0;
            height: 2px;
            background-color: var(--lilla);
            transition: all 0.7s;
          }

          &:hover::before {
            width: 50%;
          }

          &::after {
            content: "";
            position: absolute;
            left: 50%;
            bottom: 0;
            width: 0;
            height: 2px;
            background-color: var(--lilla);
            transition: all 0.7s;
            transform: translateX(-50%);
          }

          &:hover::after {
            width: 100%;
          }
        }
      }

      .social_media {
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin-top: 50px;

        .icon {
          color: var(--lilla);
          font-size: 2rem;
        }
      }

      .resume {
        a {
          border: 1px solid var(--text1);
          border-radius: 10px;
          padding: 0.7rem;
          transition: all 1s;

          &:hover {
            background-color: var(--lilla);
            border: none;
          }
        }
      }

      .x {
        position: absolute;
        top: 5%;
        right: 5%;
        cursor: pointer;
        transition: all 0.7s;

        &:hover {
          color: var(--hover-links);
          transform: scale(1.2);
        }
      }

      #lingua {
        border-radius: 20px;
        padding: 10px;
        background-color: transparent;
        color: var(--text1);
        transition: all 0.6s;
        border: 1px solid var(--text1);

        option {
          cursor: pointer;
          background-color: var(--lilla);
          padding: 0;
        }

        &:hover {
          cursor: pointer;
          background-color: var(--lilla);
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

@media screen and (min-width: 1130px) {
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

      #lingua {
        position: absolute;
        right: 5%;
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
</style>
