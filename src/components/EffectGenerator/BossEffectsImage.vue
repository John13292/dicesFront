<template>
  <div class="row">
    <div class="col-md-4" v-for="(image, index) in images" :key="index">
      <div class="card mb-4 box-shadow">
        <img :src="image.url" class="img-fluid" alt="Responsive image" >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      images: []
    }
  },
  async mounted () {
    await fetch('http://localhost:5298/api/Images')
      .then(Response => Response.json())
      .then(json => {
        this.images = json
      })
  }
}
</script>
<style scoped>
  .img-fluid {
    max-width: 50%;
    height: auto;
    display: block;
    margin: 0 auto;
  }
</style>
