<template>
      <div class="project" style="--i:6;">

            <!-- Nome Progetto e linguaggi usati -->
            <div class="prj_details_cont">
                  <h2>1° Project</h2>
                  <div class="cont_linguaggi">
                        <div>Html</div>
                        <div>Css</div>
                        <div>Vue</div>
                  </div>
            </div>
      </div>
</template>

<script>
export default {
      name: "SixthProject",
}
</script>

<style lang="scss" scoped>
.project {
      background-image: url('../../img/prj2.jpg');

      .prj_details_cont {
            position: absolute;
            bottom: 3%;
            left: 50%;
            transform: translateX(-50%) translateY(110%);
            transition: all 1s;



            .cont_linguaggi {
                  margin-top: 15px;
                  display: flex;
                  gap: 10px;

                  div {
                        background-color: gray;
                        color: var(--primary-text);
                        padding: 3px 15px;
                        border-radius: 10px;
                  }
            }
      }

      &:hover .prj_details_cont {
            transform: translateX(-50%) translateY(0%);
      }


}
</style>