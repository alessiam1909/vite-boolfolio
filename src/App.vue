<script setup>

import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <router-view></router-view>
  <AppFooter></AppFooter>
</template>

<style scoped lang="scss">
 @use './styles/app.scss' as *;
</style>
