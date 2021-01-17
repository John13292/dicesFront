<template>
  <div class="hello">
    <h2>Эффекты</h2>
    <p>
      <button @click="generatorEffects" class="btn btn-primary my-2">Новые эффекты</button>
      <button @click="clear" class="btn btn-secondary my-2">Очистить эффекты</button>
    </p>
    <div class="container">
      <h2>Положительные эффекты</h2>
      <div class="row">
        <div class="col-md-4" v-for="(h, index) in historyPositiveEffects" :key="index" >
          <p class="alert alert-primary" role="alert" style=" text-align: center ">{{h}} </p>
        </div>
      </div>
      <div class="w-100"></div>
      <h2>Отрицательные эффекты</h2>
      <div class="row">
        <div  class="col-md-4" v-for="(h, index) in historyNegativeEffects" :key="index">
          <p class="alert alert-danger" role="alert" style=" text-align: center ">{{h}} </p>
        </div>
      </div>
    </div>
    <hr>
    <h2>Боссы</h2>
    <p>
      <button @click="generatorEffectsForBoss" class="btn btn-primary my-2">Новые эффекты</button>
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
  data () {
    return {
      number: null,
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
      negativeEffects: [
        {
          effectId: 1,
          effectText: 'Дикая магия. После каждого хода персонажей кидается д20. Если выпало >10, кидаем таблицу дикой магии'
        },
        {
          effectId: 2,
          effectText: 'Вожак'
        },
        {
          effectId: 3,
          effectText: 'Больше здоровья у врагов'
        },
        {
          effectId: 4,
          effectText: 'Минус на д6 к КД'
        },
        {
          effectId: 5,
          effectText: 'Минус на д4 к КД'
        },
        {
          effectId: 6,
          effectText: 'Орда мелюзги'
        },
        {
          effectId: 7,
          effectText: 'Противники невидимы'
        },
        {
          effectId: 8,
          effectText: 'Только одно действие в ход первые д4 хода (Реакция работает)'
        },
        {
          effectId: 9,
          effectText: 'Немота. Нельзя использовать устный компонент'
        },
        {
          effectId: 10,
          effectText: 'Немота. Нельзя обсуждать стратегию в ходе боя'
        },
        {
          effectId: 11,
          effectText: 'Ловушки (усиленные)'
        },
        {
          effectId: 12,
          effectText: 'Враги могут ударить в ответ'
        },
        {
          effectId: 13,
          effectText: 'У врагов есть д6 легендарных действий'
        },
        {
          effectId: 14,
          effectText: 'У врагов есть д8 легендарных действий'
        },
        {
          effectId: 15,
          effectText: 'Труднопроходимая местность'
        },
        {
          effectId: 15,
          effectText: 'У врагов крит на 19-20'
        },
        {
          effectId: 15,
          effectText: 'Враги могут ломать снаряжение героев'
        },
        {
          effectId: 16,
          effectText: 'Вы меняетесь героями'
        },
        {
          effectId: 17,
          effectText: 'Тараска'
        },
        {
          effectId: 18,
          effectText: 'Ваше снаряжение лежит в центре арены (Надевается свободным действием)'
        },
        {
          effectId: 19,
          effectText: 'Вожак'
        },
        {
          effectId: 18,
          effectText: 'У врагов есть животные'
        }
      ],
      positiveEffects: [
        {
          effectId: 1,
          effectText: 'Крит на 19-20'
        },
        {
          effectId: 2,
          effectText: 'Крит на 18-20'
        },
        {
          effectId: 3,
          effectText: 'У героев д4 легендарных действий'
        },
        {
          effectId: 4,
          effectText: 'Больше золота за победу'
        },
        {
          effectId: 5,
          effectText: 'Можно перекинуть выпавшие сокровища'
        },
        {
          effectId: 6,
          effectText: 'Получить снаряжение следующего уровня героизма'
        },
        {
          effectId: 7,
          effectText: 'Перебросить стоимость снаряжения'
        },
        {
          effectId: 8,
          effectText: 'Благословение Валгаллы. Это благословение дарует вам способность призывать духов воителей, как если бы вы подули в серебряный рог Валгаллы.'
        },
        {
          effectId: 9,
          effectText: 'Благословение затягивающихся ран. Это благословение даёт вам преимущества медальона затягивающихся ран.'
        },
        {
          effectId: 10,
          effectText: 'Благословение защиты. Вы получаете бонус +1 к КД и спасброскам.'
        },
        {
          effectId: 11,
          effectText: 'Благословение здоровья. Ваше значение Телосложения увеличивается на 2, с максимумом 22.'
        },
        {
          effectId: 12,
          effectText: 'Благословение понимания. Ваше значение Мудрости увеличивается на 2, с максимумом 22.'
        },
        {
          effectId: 13,
          effectText: 'Благословение сопротивления магии. Вы совершаете с преимуществом спасброски от заклинаний и прочих магических эффектов.'
        },
        {
          effectId: 14,
          effectText: 'Благословение улучшения оружия. Одно немагическое оружие, принадлежащее вам, становится оружием +1, пока вы его используете.'
        },
        {
          effectId: 15,
          effectText: 'Чары восстановления. У этих чар 6 зарядов. Вы можете действием потратить часть зарядов на накладывание одного из следующих заклинаний: высшее восстановление (4 заряда) или малое восстановление (2 заряда). Когда все заряды будут потрачены, чары исчезнут.'
        },
        {
          effectId: 16,
          effectText: 'Чары героизма. Эти чары позволяют вам действием получить преимущество зелья героизма.'
        },
        {
          effectId: 17,
          effectText: 'Чары живучести. Эти чары позволяют вам действием получить преимущество зелья живучести.'
        },
        {
          effectId: 18,
          effectText: 'Чары падения пёрышком. Эти чары дают вам преимущества кольца падения пёрышком.'
        },
        {
          effectId: 19,
          effectText: 'Чары призыва животных. Эти чары позволяют вам действием накладывать призыв животных (версию 3 уровня). После трёх использований вы теряете эти чары.'
        },
        {
          effectId: 20,
          effectText: 'Чары тёмного зрения. Эти чары позволяют вам действием накладывать тёмное зрение, без компонентов. После трёх использований вы теряете эти чары.'
        },
        {
          effectId: 21,
          effectText: 'Чары убийцы. Один меч, принадлежащий вам, на следующие 9 дней становится убийцей великанов или убийцей драконов (на выбор Мастера).'
        },
        {
          effectId: 22,
          effectText: 'Д4 вдохновления'
        }
      ],
      effects: []
    }
  },
  methods: {
    generatorEffects () {
      this.clear()
      const maxNegativeEffects = this.negativeEffects.length
      const maxPositiveEffects = this.positiveEffects.length
      const minRandomRate = 1
      const countEffects = 3
      for (let index = 0; index < countEffects; index++) {
        const numberNegativeEffect = Math.floor(Math.random() * (maxNegativeEffects - minRandomRate + 1) + minRandomRate)
        this.historyNegativeEffects.push(this.negativeEffects[numberNegativeEffect].effectText)
        const numberPositiveEffect = Math.floor(Math.random() * (maxPositiveEffects - minRandomRate + 1) + minRandomRate)
        this.historyPositiveEffects.push(this.positiveEffects[numberPositiveEffect].effectText)
      }
    },
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

<style scoped>

</style>
