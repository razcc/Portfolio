<template>
      <div id="skills">
            <h2 class="skills_title">Full Stack Web Developer Skills</h2>

            <div class="container">

                  <div class="front_end">
                        <h2>Front End Skills</h2>

                        <div class="allSkill_cont">
                              <div class="skill_cont">
                                    <span>Html</span>
                                    <img src="../img/1Html.png" alt="">
                              </div>
                              <div class="skill_cont">
                                    <span>Css</span>
                                    <img src="../img/2Css.png" alt="">
                              </div>
                              <div class="skill_cont">
                                    <span>Scss</span>
                                    <img src="../img/scss.svg" alt="">
                              </div>
                              <div class="skill_cont">
                                    <span>Bootstrap</span>
                                    <img src="../img/3Bootstrap.png" alt="">
                              </div>
                              <div class="skill_cont">
                                    <span>JavaScript</span>
                                    <img src="../img/4Js.png" alt="">
                              </div>
                              <div class="skill_cont">
                                    <div class="vue">Vue</div>
                                    <img src="../img/5Vue.png" alt="">
                              </div>
                        </div>




                  </div>

                  <!-- Center -->
                  <div class="center">
                        <div class="npm">NPM Package Manager</div>

                        <div>
                              Repo Hosting Services

                              <span class="git">GitHub</span>
                        </div>

                        <div>
                              <font-awesome-icon class="icon" icon="fa-brands fa-github" />
                        </div>

                  </div>

                  <!-- Right -->
                  <div class="back_end">
                        <h2>Back End Skills</h2>

                        <div class="allSkill_cont">
                              <div class="skill_cont">
                                    <span>Php</span>
                                    <img src="../img/6Php.png" alt="">
                              </div>
                              <div class="skill_cont">
                                    <span>Laravel</span>
                                    <img src="../img/7Laravel.png" alt="">
                              </div>

                              <div class="skill_cont">
                                    <span>Mamp</span>
                                    <img src="../img/Mamp.png" alt="">
                              </div>
                        </div>
                  </div>
            </div>

      </div>
</template>

<script>
export default {
      name: "SkillsComp"
}
</script>

<style lang="scss" scoped>
img {
      width: 20%;
}

#skills {
      color: var(--text1);

      .skills_title {
            font-size: 2rem;
            text-align: center;

      }

      // Front End
      .front_end {


            h2 {
                  text-align: center;
                  padding: 2rem 0;
            }

            .allSkill_cont {
                  display: flex;
                  flex-wrap: wrap;
                  justify-content: center;

                  .skill_cont {
                        width: calc(100% / 2);
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap: .5rem;
                        font-size: 2rem;
                        font-weight: bold;
                        font-style: italic;
                        text-decoration: underline;
                        text-decoration-color: var(--accent);
                        margin-bottom: 6rem;
                  }
            }


      }

      // Centro
      .center {
            text-align: center;
            font-size: 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
      }


      // BACK End
      .back_end {
            margin-top: 2rem;


            h2 {
                  text-align: center;
                  padding: 2rem 0;
            }

            .allSkill_cont {
                  display: flex;
                  flex-wrap: wrap;
                  justify-content: center;

                  .skill_cont {
                        width: calc(100% / 2);
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap: .5rem;
                        font-size: 2rem;
                        font-weight: bold;
                        font-style: italic;
                        text-decoration: underline;
                        text-decoration-color: var(--accent);
                        margin-bottom: 6rem;
                  }
            }


      }
}

@media screen and (min-width: 730px) {
      .skill_cont {
            width: calc(100% / 3) !important;
      }
}


@media screen and (min-width: 1700px) {
      .skill_cont {
            width: calc(100% / 4) !important;
      }
}
</style>