<template>
      <div class="slide">
            <img :src="slide.src" alt="Slide Img">
      </div>
</template>

<script>
export default {
      name: "SlideComp",
      props: {
            slide: Object
      },
      data() {
            return {

            }
      }
}
</script>

<style lang="scss" scoped>
.slide {
      display: flex;
      justify-content: center;
      height: 200px;
      

      img {
            max-width: 100%;

      }
}
</style>