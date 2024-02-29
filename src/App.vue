<template>
  <!-- <Headers /> -->
  <HeaderSections />
  <router-view></router-view>
  <Footers />
</template>

<script setup>
import Footers from './components/Footers.vue';
import HeaderSections from './components/HeaderSections.vue';

</script>

<style scoped></style>