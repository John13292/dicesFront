<template>
  <div>
    <li> <strong>{{index + 1}} </strong>{{Effect}}</li>
  </div>
</template>

<script>

export default {
  props: {
    Effect: {
      type: String,
      require: true,
      default: ''
    },
    index: {
      type: Number,
      default: null
    }
  }
}
</script>
