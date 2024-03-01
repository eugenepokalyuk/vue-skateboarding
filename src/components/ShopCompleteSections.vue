<template>
    <div>
        <div class="flex flex-col">
            <div
                class="container mx-auto sm:text-center grid grid-cols-1 md:grid-cols-2 md:min-h-[400px] md:mt-0] md:my-10 p-4 md:p-0">
                <div class="flex flex-col ml-auto items-start justify-start w-full">
                    <div class="relative flex items-start justify-start">
                        <h2
                            class="font-bold tracking-tight text-[22px] leading-[28px] md:text-[190px] md:leading-[140px] uppercase text-[#284E8D] z-10 text-left mb-[30px]">
                            Gear up</h2>
                    </div>
                    <p class="font-[300] text-[16px] leading-[25px] text-justify mb-[30px]">Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                        Sed odio massa, ultricies ut lobortis ac, egestas sit amet urna. Aenean vitae dapibus ligula, quis
                        porttitor erat. Nam in ante lobortis, tristique velit non, volutpat sem. Fusce dictum bibendum
                        ligula ut volutpat. Sed dictum felis sit amet nisl maximus, id faucibus eros iaculis.</p>
                    <button class="bg-[#FF8B2B] text-white py-[10px] px-[30px] rounded-full">Explore</button>
                </div>

                <div class="hidden md:flex relative items-center justify-center px-[60px] background-image1">
                    <div class="absolute top-14 z-30">
                        <img :src="Shop_person" alt="Person" class="object-cover h-[550px] w-auto" />
                    </div>
                </div>
            </div>

            <div class="hidden md:block relative bg-[#284E8D] p-0 md:p-24">
                <Swiper :slidesPerView="3.5" :centeredSlides="true" :spaceBetween="30" class="hidden md:block mySwiper"
                    @slideChange="handleSlideChange">
                    <SwiperSlide v-for="(deck, index) in decks" :key="index">
                        <div class="flex justify-center">
                            <div class="relative w-full h-[50vh] flex justify-center items-end">
                                <div class="absolute top-0">
                                    <img :src="deck.image" :alt="deck.name" class="object-cover h-[600px] w-auto" />
                                </div>
                                <div class="bg-[#FF8B2B] h-[250px] w-[496px]"></div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div class="block md:hidden relative bg-[#284E8D] pt-10 md:pt-0 md:p-24">
                <Swiper :slidesPerView="1.5" :centeredSlides="true" :spaceBetween="30" class="hidden md:block mySwiper"
                    @slideChange="handleSlideChange">
                    <SwiperSlide v-for="(deck, index) in decks" :key="index">
                        <div class="flex justify-center">
                            <!-- h-[60vh]  -->
                            <div class="relative w-full h-[24rem] flex justify-center items-end">
                                <div class="absolute top-0">
                                    <img :src="deck.image" :alt="deck.name" class="object-cover h-[500px] w-auto" />
                                </div>
                                <div class="bg-[#FF8B2B] h-[250px] w-[496px]"></div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div class="flex flex-col lg:flex-row flex-wrap items-center justify-center md:p-10 md:h-screen">

                <div class="mb-auto flex items-start justify-start mb-6 w-full md:w-1/2 p-4 md:p-0">
                    <div class="inline-block p-2 bg-white mb-2">
                        <img :src="Logo" alt="Skateboarding Logo" class="h-8 w-8">
                    </div>
                    <div class="text-sm font-light bg-white text-gray-600">
                        SKATEBOARDING
                        <span class="block font-medium">EXTREME SPORT TEAM</span>
                    </div>
                </div>

                <div class="w-full md:w-1/2 p-4 md:p-0">
                    <div class="hidden md:flex relative items-center justify-center px-[60px] mb-6">
                        <h2
                            class="font-bold tracking-tight text-[22px] leading-[28px] md:text-[190px] md:leading-[140px] uppercase text-[#284E8D] z-10 max-w-[650px] break-words">
                            INSTAGRAM</h2>
                        <h2
                            class="absolute font-bold tracking-tight text-[72px] md:text-[150px] leading-[150px] uppercase text-[#DAD0BE]">
                            follow our</h2>
                    </div>

                    <div class="flex md:hidden relative items-center justify-center my-16 md:my-0 md:px-[60px]">
                        <h2
                            class="font-bold tracking-tight text-[22px] leading-[28px] md:text-[48px] md:leading-[70px] uppercase text-[#284E8D] z-10">
                            INSTAGRAM</h2>
                        <h2
                            class="absolute font-bold tracking-tight text-[54px] md:text-[150px] leading-[150px] uppercase text-[#DAD0BE]">
                            follow our</h2>
                    </div>

                    <p class="max-w-prose mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio massa, ultricies ut lobortis
                        ac,
                        egestas sit amet urna. Aenean vitae dapibus ligula, quis porttitor erat. Nam in ante lobortis.
                    </p>
                    <button
                        class="bg-orange-500 text-white py-2 px-6 rounded-full transition duration-300 ease-in-out hover:bg-orange-600">
                        Follow Us
                    </button>
                </div>

            </div>

        </div>
    </div>
</template>
  
<script setup>
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/vue';

import Shop_person from "../assets/Shop-person.png";
import Deck_1 from "../assets/decks/deck-1.webp";
import Deck_10 from "../assets/decks/deck-10.webp";
import Deck_2 from "../assets/decks/deck-2.webp";
import Deck_3 from "../assets/decks/deck-3.webp";
import Deck_4 from "../assets/decks/deck-4.webp";
import Deck_5 from "../assets/decks/deck-5.webp";
import Deck_6 from "../assets/decks/deck-6.webp";
import Deck_7 from "../assets/decks/deck-7.webp";
import Deck_8 from "../assets/decks/deck-8.webp";
import Deck_9 from "../assets/decks/deck-9.webp";
// import Shop_bg from "../assets/Shop_bg.png";
import Logo from "../assets/logo.svg";

const decks = [
    { name: 'Transistor Deck 1', image: Deck_1 },
    { name: 'Transistor Deck 2', image: Deck_3 },
    { name: 'Transistor Deck 3', image: Deck_2 },
    { name: 'Transistor Deck 4', image: Deck_4 },
    { name: 'Transistor Deck 5', image: Deck_5 },
    { name: 'Transistor Deck 6', image: Deck_6 },
    { name: 'Transistor Deck 7', image: Deck_7 },
    { name: 'Transistor Deck 8', image: Deck_8 },
    { name: 'Transistor Deck 9', image: Deck_9 },
    { name: 'Transistor Deck 10', image: Deck_10 },
];

</script>

<style>
.mySwiper .swiper-slide {
    overflow: visible;
}

.mySwiper .swiper-slide img {
    transition: transform 0.3s;
}

.mySwiper .swiper-slide-active img {
    transform: scale(1.05);
}

.background-image1 {
    background-image: url('../assets/Shop_bg.png');
    background-size: cover;
    background-position: 0% 40%;
    background-repeat: no-repeat;
}
</style>