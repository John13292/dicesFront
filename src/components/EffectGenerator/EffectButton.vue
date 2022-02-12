<template>
  <div class="container" >
    <div class="row justify-content-md-center">
        <div class="col-auto">
          <button @click="GeneratorEffects" class="btn btn-primary my-2">Новые эффекты</button>
        </div>
        <div class="col-auto">
          <button @click="Clear" class="btn btn-secondary my-2">Очистить эффекты</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    GeneratorEffects () {
      this.$emit('generator-effects')
    },

    Clear () {
      this.$emit('clear')
    }
  }
}
</script>
