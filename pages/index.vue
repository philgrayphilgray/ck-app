<template lang="pug">
div.bg-home
  logo
  hours
  reservations
  appFooter

</template>
<script>
import Logo from '~/components/Logo.vue'
import Hours from '~/components/Hours.vue'
import Reservations from '~/components/Reservations.vue'
import appFooter from '~/components/Footer.vue'

export default {
  components: {
    Logo,
    Hours,
    Reservations,
    appFooter
  }
}
</script>

<style lang="scss" scoped>
.bg-home {
  background: linear-gradient(180deg, #172c57, rgba(23, 44, 87, .75) 65%, rgba(23, 44, 87, 0)), url('~assets/bg-home.jpg');
  background-size: cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  &>* {
    flex-basis: 100%;
  }
}
</style>
