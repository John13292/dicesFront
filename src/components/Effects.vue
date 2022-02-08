<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-auto">
        <h2>Положительные эффекты</h2>
      </div>
    </div>
    <div class="row">
      <div
        class="col-md-4"
        v-for="(h, index) in historyPositiveEffects"
        :key="index"
      >
        <effects-item class="alert alert-primary" role="alert"
          :Effects="h.name">
        </effects-item>
      </div>
    </div>
    <div class="w-100"></div>
    <div class="row justify-content-center">
      <div class="col-auto">
        <h2>Отрицательные эффекты</h2>
      </div>
    </div>
    <div class="row">
      <div
        class="col-md-4"
        v-for="(h, index) in historyNegativeEffects"
        :key="index"
      >
        <effects-item class="alert alert-danger" role="alert"
          :Effects="h.name"
        >
        </effects-item>
      </div>
    </div>
  </div>
</template>

<script>
import EffectsItem from './EffectsItem.vue'

export default {
  name: 'effects',
  components: {
    EffectsItem
  },
  props: {
    historyNegativeEffects: {
      type: Array,
      require: true,
      default () {
        return []
      }
    },
    historyPositiveEffects: {
      type: Array,
      require: true,
      default () {
        return []
      }
    }
  }
}
</script>
