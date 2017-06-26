<template lang="pug">
div.bg-home
  logo
  hours
  reservations
  appFooter

</template>
<script>
import Logo from '~components/Logo.vue'
import Hours from '~components/Hours.vue'
import Reservations from '~components/Reservations.vue'
import appFooter from '~components/Footer.vue'

export default {
  components: {
    Logo,
    Hours,
    Reservations,
    appFooter
  }
}
</script>

<style scoped>
.bg-home{
  background: url('~assets/bg-home.jpg');
  background-size: cover;
}
</style>
