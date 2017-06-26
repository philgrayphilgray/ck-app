<template lang="pug">
div.menu-centered
  ul.menu
    li
      router-link(to='/') Home
    li
      router-link(to="/dining") Dining
    li
      router-link(to="/events") Events
    li
      router-link(to="/about") Catering
    li
      router-link(to="/about") About
</template>

<script>
export default {

}
</script>

<style lang="css">
</style>
