<template lang="pug">
.card
  .card-content.hours
    h2 {{ hours.selected.fullName }}
    p
      span(v-for='day in hours.days', :class='{selectedDay: (hours.selected.abbr == day)}') {{ day }}&nbsp;
    p Happy Hour 4 – 6:30
    p Dinner 5 – 9:30
      a  View Menu

</template>

<script>
export default {
  data () {
    return {
      hours: {
        days: ['Su', 'M', 'Tues', 'W', 'Thurs', 'F', 'Sat'],
        selected: {
          abbr: 'W',
          fullName: 'Wednesday'
        }
      }
    }
  }
}
</script>

<style lang="css">
.hours{
  text-align: center;
}
.selectedDay{
  font-weight: bold;
}
</style>
