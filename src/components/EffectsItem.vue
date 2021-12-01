<template>
  <div>
    <p>{{Effects}}</p>
  </div>
</template>

<script>

export default {
  props: {
    Effects: {
      type: String,
      require: true,
      default: ''
    }
  }
}
</script>
