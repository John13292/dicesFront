<template>
  <div>
    <effect-button
      @generator-effects='GeneratorEffects'
      @clear='Clear'
      >
    </effect-button>
    <div class="row justify-content-center">
      <div class="input-group-center">
        <div class="input-group-text-center">
          <input type="radio" id="monsters" value="monsters" v-model="selectedValue" aria-label="Radio button for following text input">
          <label for="monsters">Монстры</label>
          <input type="radio" id="boss" value="boss" v-model="selectedValue" aria-label="Radio button for following text input">
          <label for="boss">Босы</label>
        </div>
      </div>
    </div>
    <div v-if="selectedValue === 'monsters'">
      <effects
        :historyNegativeEffects="historyNegativeEffects"
        :historyPositiveEffects="historyPositiveEffects"
      >
      </effects>
    </div>
    <div v-else-if="selectedValue === 'boss'">
      <boss-effects
        :historyNegativeEffects="historyNegativeEffects"
        :historyPositiveEffects="historyPositiveEffects"
      ></boss-effects>
    </div>
  </div>
</template>

<script>
import BossEffects from './BossEffects.vue'
import EffectButton from './EffectButton.vue'
import Effects from './Effects.vue'

export default {
  props: {
    negativeEffects: {
      type: Array,
      require: true,
      default () {
        return []
      }
    },
    positiveEffects: {
      type: Array,
      require: true,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      selectedValue: 'monsters',
      minRandomRate: 1,
      countEffects: 3, // количество эффектов
      historyNegativeEffects: [],
      historyPositiveEffects: []
    }
  },
  computed: {
    maxNegativeEffects () {
      return this.negativeEffects.length - 1
    },

    maxPositiveEffects () {
      return this.positiveEffects.length - 1
    }
  },
  methods: {
    GeneratorEffects () {
      this.Clear()

      for (let index = 0; index < this.countEffects; index++) {
        this.CalculeteNefateiveEffects(this.maxNegativeEffects)

        this.CalculetePositiveEffects(this.maxPositiveEffects)
      }
    },

    CalculeteNefateiveEffects (maxNegativeEffects) {
      const numberNegativeEffect = this.RandomGenerator(maxNegativeEffects)

      this.historyNegativeEffects.push(
        this.negativeEffects[numberNegativeEffect]
      )
    },

    CalculetePositiveEffects (maxPositiveEffects) {
      const numberPositiveEffect = this.RandomGenerator(maxPositiveEffects)

      this.historyPositiveEffects.push(
        this.positiveEffects[numberPositiveEffect]
      )
    },

    RandomGenerator (maxEffects) {
      return Math.floor(
        Math.random() * (maxEffects - this.minRandomRate + 1) +
          this.minRandomRate
      )
    },

    Clear () {
      this.historyNegativeEffects = []
      this.historyPositiveEffects = []
      this.effects = []
    }
  },
  components: {
    BossEffects,
    Effects,
    EffectButton
  }
}
</script>
