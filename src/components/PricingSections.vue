<template>
    <div>
        <div class="flex flex-col">
            <div class="sm:text-center grid grid-cols-1 md:grid-cols-2 min-h-[400px] mt-4 md:mt-0 p-4 md:p-0">
                <div class="relative flex items-center justify-center my-16 md:my-0 md:px-[60px]">
                    <h2
                        class="font-bold tracking-tight text-[22px] leading-[28px] md:text-[48px] md:leading-[70px] uppercase text-[#284E8D] z-10">
                        Wheels
                        made to
                        roll</h2>
                    <h2
                        class="absolute font-bold tracking-tight text-[72px] md:text-[150px] leading-[150px] uppercase text-[#DAD0BE]">
                        About</h2>
                </div>

                <div class="flex flex-col items-start justify-center md:px-[60px]">
                    <p class="font-[300] text-[16px] leading-[25px] text-justify mb-[30px]">Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                        Sed odio massa, ultricies ut lobortis ac, egestas sit amet urna. Aenean vitae dapibus ligula, quis
                        porttitor erat. Nam in ante lobortis, tristique velit non, volutpat sem. Fusce dictum bibendum
                        ligula ut volutpat. Sed dictum felis sit amet nisl maximus, id faucibus eros iaculis.</p>
                    <button
                        class="bg-orange-500 text-white py-2 px-6 rounded-full transition duration-300 ease-in-out hover:bg-orange-600">Explore</button>
                </div>
            </div>

            <div class="sm:text-center grid grid-cols-1 md:grid-cols-2">
                <div>
                    <img :src="Pricing1" alt="">
                </div>
                <div>
                    <img :src="Pricing2" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import Pricing1 from '../assets/pricing-1.png';
import Pricing2 from '../assets/pricing-2.png';
</script>