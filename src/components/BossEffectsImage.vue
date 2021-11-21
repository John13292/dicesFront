<template>
  <div class="row">
    <div class="col-md-4" v-for="(image, index) in images" :key="index">
      <div class="card mb-4 box-shadow">
        <img :src="image.image" class="img-fluid" alt="Responsive image" >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      images: [
        {
          imageId: 1,
          image: 'https://game-icons.net/icons/ffffff/000000/1x1/delapouite/gargoyle.svg'
        },
        {
          imageId: 2,
          image: 'https://game-icons.net/icons/ffffff/000000/1x1/lorc/minotaur.svg'
        },
        {
          imageId: 2,
          image: 'https://game-icons.net/icons/ffffff/000000/1x1/faithtoken/dragon-head.svg'
        }
      ]
    }
  }
}
</script>
<style scoped>
  .img-fluid {
    max-width: 100%;
     height: auto;
  }
</style>
