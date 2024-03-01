<template>
    <div class="py-24 sm:py-32 background-image2">
        <div class="mx-auto grid gap-x-8 gap-y-20 px-6 lg:px-8">
            <div>
                <h2
                    class="font-bold tracking-tight lg:text-[150px] lg:leading-[150px] uppercase text-[#284E8D] z-10 break-words text-center">
                    our BEST SELLERS</h2>
            </div>

            <ul role="list" class="flex items-center flex-wrap">
                <li v-for="person in people" :key="person.name" class="w-full lg:w-1/3 md:p-8">
                    <div class="flex flex-col md:flex-row items-center">
                        <img class="md:h-auto w-[180px] md:w-[180px] object-contain" :src="person.imageUrl" alt="" />
                        <div class="w-full flex flex-col items-start md:items-center justify-center space-y-4 p-4">
                            <h3 class="font-bold text-[24px] leading-[25px] tracking-[5px] text-[#284E8D] uppercase">{{
                                person.name }}
                            </h3>
                            <p class="font-light text-[16px] leading-[25px] tracking-tight text-black">{{ person.role }}</p>
                            <button
                                class="bg-orange-500 text-white py-2 px-6 rounded-full transition duration-300 ease-in-out hover:bg-orange-600">Shop</button>

                        </div>
                    </div>
                </li>
            </ul>

        </div>
    </div>
</template>
  
<script setup>
import Deck_13 from "../assets/decks/deck-13.webp";
import Deck_14 from "../assets/decks/deck-14.webp";
import Deck_15 from "../assets/decks/deck-15.webp";
import Deck_16 from "../assets/decks/deck-16.webp";
import Deck_17 from "../assets/decks/deck-17.webp";
import Deck_18 from "../assets/decks/deck-18.webp";

const people = [
    {
        name: 'Grand Gopher Cruiser',
        role: '8” x 28”- Stroke /Kicktail',
        imageUrl: Deck_13,
    },
    {
        name: 'Hamboards Burst',
        role: 'Surfskate Florida 32”',
        imageUrl: Deck_14,
    },
    {
        name: 'Hearty Skateboard',
        role: 'Complete Line B & W 7.375” To 8.25”',
        imageUrl: Deck_16,
    },
    {
        name: 'Grand Gopher Cruiser',
        role: '8” x 28”- Stroke /Kicktail',
        imageUrl: Deck_17,
    },
    {
        name: 'Hamboards Burst',
        role: 'Surfskate Florida 32”',
        imageUrl: Deck_15,
    },
    {
        name: 'Hearty Skateboard',
        role: 'Complete Line B & W 7.375” To 8.25”',
        imageUrl: Deck_18,
    }
]
</script>

<style>
.background-image2 {
    background-image: url('../assets/Shop_bg2.png');
    background-size: contain;
    background-position: bottom;
    background-repeat: no-repeat;
}
</style>