<template>
  <div>
    <p>
      <button @click="generatorEffectsForBoss" class="btn btn-primary my-2">Новые эффекты Боссам</button>
      <button @click="clear" class="btn btn-secondary my-2">Очистить эффекты</button>
    </p>
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="(effect, effectId) in effects" :key="effectId">
          <div class="card mb-4 box-shadow">
            <img :src="effect.get('image')" class="card-img-top" >
            <div class="card-body">
              <p class="alert alert-primary" role="alert">{{effect.get('positiveEffects')}} </p>
              <p class="alert alert-danger" role="alert">{{effect.get('negativeEffects')}} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'negativeEffects',
    'positiveEffects'
  ],
  data () {
    return {
      historyNegativeEffects: [],
      historyPositiveEffects: [],
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
      ],
      effects: []
    }
  },
  methods: {
    generatorEffectsForBoss () {
      this.clear()
      const maxNegativeEffects = this.negativeEffects.length
      const maxPositiveEffects = this.positiveEffects.length
      const minRandomRate = 1
      const countEffects = 3
      for (let index = 0; index < countEffects; index++) {
        const effectDescription = new Map()
        effectDescription.set('effectId', index)
        const image = this.images[index].image
        effectDescription.set('image', image)
        const numberPositiveEffect = Math.floor(Math.random() * (maxPositiveEffects - minRandomRate + 1) + minRandomRate)
        const positiveEffects = this.positiveEffects[numberPositiveEffect].effectText
        effectDescription.set('positiveEffects', positiveEffects)
        const numberNegativeEffect = Math.floor(Math.random() * (maxNegativeEffects - minRandomRate + 1) + minRandomRate)
        const negativeEffects = this.negativeEffects[numberNegativeEffect].effectText
        effectDescription.set('negativeEffects', negativeEffects)
        this.effects.push(effectDescription)
      }
    },
    clear () {
      this.historyNegativeEffects = []
      this.historyPositiveEffects = []
      this.effects = []
    }
  }
}
</script>
