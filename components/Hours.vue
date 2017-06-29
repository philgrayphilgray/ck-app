<template lang="pug">
.card
  button(class='button', @click='getPrevious()') <
  .card-content.hours(v-for='day in days', v-if='day.abbr == selected')
    h2 {{ day.fullName }}
    p
      span.abbr(v-for='abbr in getAbbr', :class='{"selectedDay": abbr == selected}') {{ abbr }}
    template(v-if='day.times')
      p(v-for='occasion in day.times')
        span {{ occasion.name }}
        span &nbsp;&middot;&nbsp;
        span {{ occasion.start }}
        span &nbsp;&mdash;&nbsp;
        span {{ occasion.end }}
        template(v-for='menu in menus', v-if='occasion.name == menu.name && menu.download')
          span  &middot;&nbsp;
          a(href='menu.download')
            span Menu
    p(v-else) {{ closedMsg }}
  button(class='button', @click='getNext()') >
</template>

<script>
export default {
  data () {
    return {
      days: [
        {
          abbr: 'Su',
          fullName: 'Sunday',
          times: [
            {
              name: 'Brunch',
              start: '11',
              end: '2'
            },
            {
              name: 'Dinner',
              start: '5',
              end: '9:30'
            }
          ] // times
        }, // Sun
        {
          abbr: 'M',
          fullName: 'Monday'
        }, // Mon
        {
          abbr: 'Tues',
          fullName: 'Tuesday',
          times: [
            {
              name: 'Happy Hour',
              start: '4',
              end: '6:30'
            },
            {
              name: 'Dinner',
              start: '5',
              end: '9'
            }
          ] // times
        }, // Tues
        {
          abbr: 'W',
          fullName: 'Wednesday',
          times: [
            {
              name: 'Happy Hour',
              start: '4',
              end: '6:30'
            },
            {
              name: 'Dinner',
              start: '5',
              end: '9'
            }
          ] // times
        }, // Wed
        {
          abbr: 'Thurs',
          fullName: 'Thursday',
          times: [
            {
              name: 'Happy Hour',
              start: '4',
              end: '6:30'
            },
            {
              name: 'Lunch',
              start: '11',
              end: '2'
            },
            {
              name: 'Dinner',
              start: '5',
              end: '9'
            }
          ] // times
        }, // Thurs
        {
          abbr: 'F',
          fullName: 'Friday',
          times: [
            {
              name: 'Happy Hour',
              start: '4',
              end: '6:30'
            },
            {
              name: 'Lunch',
              start: '11',
              end: '2'
            },
            {
              name: 'Dinner',
              start: '5',
              end: '9:30'
            }
          ] // times
        }, // fri
        {
          abbr: 'Sat',
          fullName: 'Saturday',
          times: [
            {
              name: 'Brunch',
              start: '11',
              end: '2'
            },
            {
              name: 'Dinner',
              start: '5',
              end: '9:30'
            }
          ] // times
        } // sat
      ], // days
      selected: '', // selected
      closedMsg: 'Closed.',
      menus: [
        {
          name: 'Lunch',
          code: 'lu',
          download: '#'
        },
        {
          name: 'Happy Hour',
          code: 'hh'
        },
        {
          name: 'Dinner',
          code: 'dn',
          download: '#'
        },
        {
          name: 'Brunch',
          code: 'br',
          download: '#'
        }
      ] // menus
    } // return
  }, // data
  computed: {
    getAbbr () {
      return this.days.map(day => {
        return day.abbr
      })
    }
  }, // computed
  methods: {
    getNext () {
      let current = this.selected
      let currentPos = this.days.indexOf(this.days.find((day) => day.abbr == current))
      const next = this.days[currentPos > 5 ? currentPos - 6 : currentPos + 1].abbr
      this.selected = next
    },
    getPrevious () {
      let current = this.selected
      let currentPos = this.days.indexOf(this.days.find((day) => day.abbr == current))
      const prev = this.days[currentPos < 1 ? currentPos + 6 : currentPos - 1].abbr
      this.selected = prev
    },
    setDay () {
      const dayIndex = new Date().getDay()
      const dayAbbr = this.days[dayIndex].abbr
      this.selected = dayAbbr
    }
  }, // methods
  created () {
    if (!this.selected) {
      this.setDay()
    }
  } // really need to study the component lifecycle
} // export
</script>

<style lang="scss" scoped>
.card{
  display: flex;
  justify-content: center;
  background: transparent;
  border: none;

  .button{
    font-size: 1em;
    margin: 0 1em;
    opacity: .8;
  }
  .card-content{
    flex: 0 1 75rem;
      background: rgba(255, 255, 255, .8);
  }
}
p{
  line-height: 1em;
}
.hours{
  text-align: center;
  //
  // &:before{
  //   content: '<';
  //   position: absolute;
  //   left: 1em;
  // }

}

.selectedDay{
  font-weight: bold;
}
.abbr{
  padding: 0 .25em;
}
</style>
