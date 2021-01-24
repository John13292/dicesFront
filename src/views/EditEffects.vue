<template>
  <div class="editEffects">
    <div class="" v-for="(effect, id) in effects" :key="id">
      {{effect}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    effects: {
      id: Number,
      text: String
    }
  }
}
</script>
