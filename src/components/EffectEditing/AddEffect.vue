<template>
  <form @submit.prevent="OnSubmit">
    <div class="row">
      <div class="col">
        <input type="text" v-model="effectText" class="form-control" placeholder="Описание эффекта">
      </div>
      <div class="col">
        <button type="submit" class="btn btn-primary">Создать</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      effectText: ''
    }
  },
  methods: {
    OnSubmit () {
      if (this.effectText.trim()) {
        const newEffect = {
          id: Date.now(),
          Text: this.effectText
        }

        this.$emit('add-effect', newEffect)

        this.effectText = ''
      }
    }
  }
}
</script>
