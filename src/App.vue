<template>

  <div id="app">
    <the-navigation />

    <main class="content">
      <router-view />
    </main>
  </div>

</template>

<script>
import TheNavigation from '@/components/TheNavigation.vue'

export default {
  components: {
    TheNavigation,
  }
}
</script>

<style lang="scss">
@import '~@/assets/scss/main.scss';

</style>
