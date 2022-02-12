<template>
  <div>
    <effects-generator
        :negativeEffects="negativeEffects"
        :positiveEffects="positiveEffects"
        >
    </effects-generator>
  </div>
</template>
<script>
import EffectsGenerator from './EffectsGenerator.vue'

export default {
  data () {
    return {
      negativeEffects: [],
      positiveEffects: []
    }
  },
  components: {
    EffectsGenerator
  },
  mounted () {
    fetch('http://localhost:5298/api/Effects/GetNegativeEffects')
      .then(Response => Response.json())
      .then(json => {
        this.negativeEffects = json
      })
    fetch('http://localhost:5298/api/Effects/GetPositiveEffects')
      .then(Response => Response.json())
      .then(json => {
        this.positiveEffects = json
      })
  }
}
</script>
