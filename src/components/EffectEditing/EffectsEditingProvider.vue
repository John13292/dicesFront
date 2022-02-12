<template>
  <div>
    <add-effect @add-effect='addEffect' class="row justify-content-md-center"></add-effect>
    <div class="list-group">
      <ul
        v-for="(effect, index) in negativeEffects"
        :key="index"
        >
        <effect-list-item
          class="list-group-item"
          :index='index'
          :effect='effect.name'>
        </effect-list-item>
      </ul>
    </div>
  </div>
</template>
<script>
import AddEffect from './AddEffect.vue'
import EffectListItem from './EffectListItem.vue'

export default {
  components: {
    AddEffect,
    EffectListItem
  },
  data () {
    return {
      negativeEffects: [],
      positiveEffects: []
    }
  },
  methods: {
    addEffect (effect) {
      this.negativeEffects.push(effect)
    }
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
