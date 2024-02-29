<template>
  <div class="background-image h-screen flex items-center">
    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div class="max-w-2xl">
        <div class="text-center">
          <h1 class="font-extrabold tracking-[5px] text-[#284E8D] text-[24px] md:text-[190px] leading-[150px] uppercase">
            Skate forever</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
.background-image {
  background-image: url('../assets/hero.png');
  /* background-size: cover;
  background-position: center; */
  background-size: contain;
  background-position: bottom;
  background-repeat: repeat-x
}
</style>