<template>
      <div v-scrollanimation id="animationBox">


            <ul class="container_icon1">
                  <li :class="(propsAnim > 0) ? 'animationIcon1' : ''">
                        <!-- Elem 1 -->
                        <font-awesome-icon class="icon" icon="fa-brands fa-html5" />
                  </li>
                  <li :class="(propsAnim > 0) ? 'animationIcon2' : ''">
                        <!-- Elem 2 -->
                        <font-awesome-icon class="icon" icon="fa-brands fa-css3-alt" />
                  </li>
                  <li :class="(propsAnim > 0) ? 'animationIcon3' : ''">
                        <!-- Elem 3 -->
                        <font-awesome-icon class="icon" icon="fa-brands fa-bootstrap" />
                  </li>
                  <li :class="(propsAnim > 0) ? 'animationIcon4' : ''">
                        <!-- Elem 4 -->
                        <font-awesome-icon class="icon" icon="fa-brands fa-js" />
                  </li>
                  <li :class="(propsAnim > 0) ? 'animationIcon5' : ''">
                        <!-- Elem 5 -->
                        <font-awesome-icon class="icon" icon="fa-brands fa-vuejs" />
                  </li>
                  <li :class="(propsAnim > 0) ? 'animationIcon6' : ''">
                        <!-- Elem 6 -->
                        <font-awesome-icon class="icon" icon="fa-brands fa-php" />
                  </li>
                  <li :class="(propsAnim > 0) ? 'animationIcon7' : ''">
                        <!-- Elem 7 -->
                        <font-awesome-icon class="icon" icon="fa-brands fa-laravel" />
                  </li>
            </ul>




            <ul class="container_icon2">
                  <!-- -------------- -->
                  <li :class="(propsAnim > 0) ? 'animationIcon8' : ''">
                        <!-- Elem 1 -->
                        <font-awesome-icon class="icon" icon="fa-brands fa-html5" />
                  </li>
                  <li :class="(propsAnim > 0) ? 'animationIcon9' : ''">
                        <!-- Elem 2 -->
                        <font-awesome-icon class="icon" icon="fa-brands fa-css3-alt" />
                  </li>
                  <li :class="(propsAnim > 0) ? 'animationIcon10' : ''">
                        <!-- Elem 3 -->
                        <font-awesome-icon class="icon" icon="fa-brands fa-bootstrap" />
                  </li>
                  <li :class="(propsAnim > 0) ? 'animationIcon11' : ''">
                        <!-- Elem 4 -->
                        <font-awesome-icon class="icon" icon="fa-brands fa-js" />
                  </li>
                  <li :class="(propsAnim > 0) ? 'animationIcon12' : ''">
                        <!-- Elem 5 -->
                        <font-awesome-icon class="icon" icon="fa-brands fa-vuejs" />
                  </li>
                  <li :class="(propsAnim > 0) ? 'animationIcon13' : ''">
                        <!-- Elem 6 -->
                        <font-awesome-icon class="icon" icon="fa-brands fa-php" />
                  </li>
                  <li :class="(propsAnim > 0) ? 'animationIcon14' : ''">
                        <!-- Elem 7 -->
                        <font-awesome-icon class="icon" icon="fa-brands fa-laravel" />
                  </li>
            </ul>


      </div>
</template>

<script>
export default {
      name: 'AnimationBox',
      props: {
            propsAnim: Number,
      },

}
</script>

<style lang="scss" scoped>
#animationBox {
      width: 100%;
      display: flex;
      flex-direction: column;



      .container_icon1 {
            display: flex;
            justify-content: space-around;
            li {
                  list-style: none;

                  .icon {
                        color: var(--hover-links);
                        font-size: 3rem;
                  }
            }


      }


      // Container 2
      .container_icon2 {
            display: flex;
            justify-content: space-around;
            li {
                  list-style: none;

                  .icon {
                        color: var(--hover-links);
                        font-size: 3rem;
                  }

                  &:nth-child(1) {
                        opacity: 0;
                        animation-delay: 3s;
                  }

                  &:nth-child(2) {
                        opacity: 0;
                        animation-delay: 3s;
                  }

                  &:nth-child(3) {
                        opacity: 0;
                        animation-delay: 3s;
                  }

                  &:nth-child(4) {
                        opacity: 0;
                        animation-delay: 3s;
                  }

                  &:nth-child(5) {
                        opacity: 0;
                        animation-delay: 3s;
                  }

                  &:nth-child(6) {
                        opacity: 0;
                        animation-delay: 3s;
                  }

                  &:nth-child(7) {
                        opacity: 0;
                        animation-delay: 3s;
                  }
            }
      }




      .animationIcon1 {
            animation: bgAnimation1 6s linear infinite;
      }

      .animationIcon2 {
            animation: bgAnimation1 5s linear infinite;
      }

      .animationIcon3 {
            animation: bgAnimation1 6s linear infinite;
      }

      .animationIcon4 {
            animation: bgAnimation1 7s linear infinite;
      }

      .animationIcon5 {
            animation: bgAnimation1 5s linear infinite;
      }

      .animationIcon6 {
            animation: bgAnimation1 6s linear infinite;
      }

      .animationIcon7 {
            animation: bgAnimation1 5s linear infinite;
      }

      .animationIcon8 {
            animation: bgAnimation1 6s linear infinite;
      }

      .animationIcon9 {
            animation: bgAnimation1 5s linear infinite;
      }

      .animationIcon10 {
            animation: bgAnimation1 7s linear infinite;
      }

      .animationIcon11 {
            animation: bgAnimation1 6s linear infinite;
      }

      .animationIcon12 {
            animation: bgAnimation1 5s linear infinite;
      }

      .animationIcon13 {
            animation: bgAnimation1 6s linear infinite;
      }

      .animationIcon14 {
            animation: bgAnimation1 5s linear infinite;
      }
}




@keyframes bgAnimation1 {
      0% {
            transform: translateY(0);
            opacity: 1;
      }

      100% {
            transform: translateY(1000px);
            opacity: 0;
      }
}

@keyframes bgAnimation2 {
      0% {
            transform: translateY(0);
            opacity: 1;
      }


      100% {
            transform: translateY(1000px);
            opacity: 0;
      }
}


</style>