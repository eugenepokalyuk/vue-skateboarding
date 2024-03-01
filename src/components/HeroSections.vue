<template>
  <div class="background-image h-screen flex items-center">
    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div class="max-w-2xl">
        <div class="text-center">
          <h1
            class="font-extrabold tracking-[5px] text-[#284E8D] text-[24px] leading-[30px] lg:text-[190px] lg:leading-[150px] uppercase">
            <!-- md:text-[190px] md:leading-[150px] -->
            Skate forever
          </h1>
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