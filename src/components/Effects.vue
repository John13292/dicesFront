<template>
  <div>
    <button class="btn btn-primary my-1" @click="buttons">Эффекты</button>
    <div class="container" v-if="button">
      <div class="row justify-content-md-center">
          <div class="col-auto">
            <button @click="GeneratorEffects" class="btn btn-primary my-2">Новые эффекты</button>
          </div>
          <div class="col-auto">
            <button @click="clear" class="btn btn-secondary my-2">Очистить эффекты</button>
          </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-auto">
          <h2>Положительные эффекты</h2>
        </div>
      </div>
        <div class="row">
          <div class="col-md-4" v-for="(h, index) in historyPositiveEffects" :key="index" >
            <p class="alert alert-primary" role="alert" >{{h.effectText}} </p>
          </div>
        </div>
        <div class="w-100"></div>
      <div class="row justify-content-center">
        <div class="col-auto">
          <h2>Отрицательные эффекты</h2>
        </div>
      </div>
        <div class="row">
          <div  class="col-md-4" v-for="(h, index) in historyNegativeEffects" :key="index">
            <p class="alert alert-danger" role="alert" >{{h.effectText}} </p>
          </div>
        </div>
    </div>
    <div v-else>
      <boss-effects
        :negativeEffects="negativeEffects"
        :positiveEffects="positiveEffects"
      />
    </div>
  </div>
</template>

<script>
import BossEffects from './BossEffects.vue'
export default {
  name: 'effects',
  data () {
    return {
      button: true,
      minRandomRate: 1,
      countEffects: 3, // количество эффектов
      historyNegativeEffects: [],
      historyPositiveEffects: [],
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
          effectText: 'Ваше снаряжение лежит в центре арены (Надевается свободным действием)'
        },
        {
          effectId: 18,
          effectText: 'Вожак'
        },
        {
          effectId: 19,
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
    buttons () {
      if (this.button) {
        this.button = false
      } else {
        this.button = true
      }
    },
    GeneratorEffects () {
      this.clear()

      const maxNegativeEffects = this.negativeEffects.length
      const maxPositiveEffects = this.positiveEffects.length

      for (let index = 0; index < this.countEffects; index++) {
        this.CalculeteNefateiveEffects(maxNegativeEffects)

        this.CalculetePositiveEffects(maxPositiveEffects)
      }
    },
    CalculeteNefateiveEffects (maxNegativeEffects) {
      const numberNegativeEffect = this.RandomGenerator(maxNegativeEffects)

      this.historyNegativeEffects.push(this.negativeEffects[numberNegativeEffect])
    },
    CalculetePositiveEffects (maxPositiveEffects) {
      const numberPositiveEffect = this.RandomGenerator(maxPositiveEffects)

      this.historyPositiveEffects.push(this.positiveEffects[numberPositiveEffect])
    },
    RandomGenerator (maxEffects) {
      return Math.floor(Math.random() * (maxEffects - this.minRandomRate + 1) + this.minRandomRate)
    },
    clear () {
      this.historyNegativeEffects = []
      this.historyPositiveEffects = []
      this.effects = []
    }
  },
  components: {
    BossEffects
  }
}
</script>
