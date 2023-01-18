<template>
      <!-- ColLeft -->
      <div  v-scrollanimation class="col_social">
            <div class="down_elem">
                  <a href=""><font-awesome-icon class="icon" icon="fa-brands fa-github" /></a>
                  <a href=""><font-awesome-icon class="icon" icon="fa-brands fa-linkedin-in" /></a>
                  <a href=""><font-awesome-icon class="icon" icon="fa-brands fa-codepen" /></a>
                  <a href=""><font-awesome-icon class="icon" icon="fa-brands fa-instagram" /></a>
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
            height: 40%;
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
                  height: 100px;
                  width: 2px;
                  background-color: var(--text1);
                  transform: translateX(-50%);
            }

            // Riga sopra Icone
            &::before {
                  content: '';
                  position: absolute;
                  top: 0;
                  left: 50%;
                  height: 30px;
                  width: 2px;
                  background-color: var(--text1);
                  transform: translateX(-50%) translateY(-130%);
            }


            // Icone FontAwsome
            .icon {
                  font-size: 1.3rem;
                  color: var(--text1);

                  transition: all .4s;

                  &:hover {
                        color: var( --hover-links);
                        transform: translateY(-15%);
                        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.557);

                  }
            }

      }
}

@media screen and (max-width: 621px){
      .col_social{
            transform: translateX(-120%);
      }
}

.before-enter {
    opacity: 0;
    transform: translateX(-100%);
    transition: all 1s cubic-bezier(.41,.01,.57,1.61);
  }
  /* 
    If the element intersects with the viewport, the before-enter class is added.
  */
  .enter {
    opacity: 1;
    transform: translateX(0%);
  }

</style>