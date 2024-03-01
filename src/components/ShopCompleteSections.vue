<template>
    <div>
        <div class="flex flex-col">
            <div
                class="max-w-7xl mx-auto sm:text-center grid grid-cols-1 md:grid-cols-2 md:min-h-[400px] md:mt-10 md:my-10 p-4 md:p-0 md:pt-[20vh]">
                <!-- container -->
                <div class="flex flex-col ml-auto items-center justify-center md:w-3/4">

                    <div
                        class="hidden lg:block relative flex items-center justify-center my-4 md:my-16 md:my-0 md:px-[60px] md:w-[500px]">
                        <h2
                            class="font-bold tracking-tight text-[22px] leading-[28px] md:text-[72px] md:leading-[80px] lg:text-[190px] lg:leading-[140px] uppercase text-[#284E8D] text-left z-10">
                            Gear up</h2>
                        <h2
                            class="absolute md:-top-10 md:-left-[30%] bottom-[40%] md:bottom-0 right-[40%] md:right-0 font-light tracking-tight text-[22px] leading-[28px] md:text-[150px] leading-[150px] uppercase text-[#DAD0BE] text-nowrap playfair">
                            our shop</h2>
                    </div>

                    <div class="hidden lg:hidden md:block relative flex items-center justify-center my-4 md:my-0">
                        <h2
                            class="font-bold tracking-tight text-[22px] leading-[28px] md:text-[72px] md:leading-[80px] uppercase text-[#284E8D] text-left z-10">
                            Gear up our shop</h2>
                    </div>

                    <div class="flex flex-col items-start justify-center">
                        <p class="font-[300] text-[16px] leading-[25px] text-justify mb-4 md:mb-0 my-0 md:my-[30px]">Lorem
                            ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            Sed odio massa, ultricies ut lobortis ac, egestas sit amet urna. Aenean vitae dapibus ligula,
                            quis
                            porttitor erat. Nam in ante lobortis, tristique velit non, volutpat sem. Fusce dictum bibendum
                            ligula ut volutpat. Sed dictum felis sit amet nisl maximus, id faucibus eros iaculis.</p>
                        <button
                            class="bg-orange-500 text-white md:mt-[30px] py-2 px-6 rounded-full transition duration-300 ease-in-out hover:bg-orange-600">Explore</button>
                    </div>
                </div>

                <div class="hidden md:flex relative items-center justify-center px-[60px] md:px-0 background-image1">
                    <div class="absolute left-[20%] z-30">
                        <img :src="Shop_person" alt="Person" class="object-cover w-auto" />
                    </div>
                    <div>
                        <img :src="Shop_bg_mark" alt="" class="absolute top-0 right-0">
                    </div>
                </div>
            </div>

            <div class="hidden md:block relative bg-[#284E8D] pt-10 md:p-24">
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

                <div class="flex items-center justify-center">
                    <div v-if="selectedDeckIndex !== null" class="flex justify-between items-start mt-4 px-6 w-[24rem]">
                        <div class="h-16 overflow-auto w-full text-white">{{ decks[selectedDeckIndex].name }}
                        </div>
                        <button class="bg-orange-500 text-white px-4 py-2 rounded">Select</button>
                    </div>
                </div>
            </div>

            <div class="block md:hidden relative bg-[#284E8D] py-8 pt-10 md:pt-0 md:p-24">
                <Swiper :slidesPerView="1.5" :centeredSlides="true" :spaceBetween="30" class="hidden md:block mySwiper"
                    @slideChange="handleSlideChange">
                    <SwiperSlide v-for="(deck, index) in decks" :key="index">
                        <div class="flex justify-center">
                            <div class="relative w-full h-[24rem] flex justify-center items-end">
                                <div class="absolute top-0">
                                    <img :src="deck.image" :alt="deck.name" class="object-cover h-[500px] w-auto" />
                                </div>
                                <div class="bg-[#FF8B2B] h-[250px] w-[496px]"></div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div class="flex items-center justify-center">
                    <div v-if="selectedDeckIndex !== null" class="flex justify-between items-center mt-4 px-6 w-full">
                        <div class="text-white">{{ decks[selectedDeckIndex].name }}</div>
                        <button class="bg-orange-500 text-white px-4 py-2 rounded">Select</button>
                    </div>
                </div>
            </div>

            <div class="flex flex-col lg:flex-row items-center justify-center lg:p-10 md:h-screen">

                <div
                    class="hidden lg:block relative mb-auto flex items-start justify-start mb-6 w-full md:w-1/2 p-4 md:p-0">
                    <div class="flex items-center md:p-8">
                        <div class="p-2 bg-white">
                            <img :src="Logo" alt="Skateboarding Logo" class="h-8 w-8">
                        </div>
                        <div class="text-sm font-light bg-white text-gray-600">
                            SKATEBOARDING
                            <span class="block font-medium">EXTREME SPORT TEAM</span>
                        </div>
                    </div>

                    <div class="absolute top-0 left-0">
                        <img :src="BgMark1" alt="" class="w-[200px] h-auto">
                    </div>

                    <div class="absolute top-[50vh] right-0">
                        <img :src="BgMark2" alt="" class="w-[500px] h-auto">
                    </div>
                </div>

                <div class="w-full lg:w-1/2 p-4 md:p-0">
                    <div class="hidden lg:flex relative items-center justify-center px-[60px] mb-6">
                        <h2
                            class="font-bold tracking-tight text-[22px] leading-[28px] md:text-[190px] md:leading-[140px] uppercase text-[#284E8D] z-10 max-w-[650px] break-words">
                            INSTAGRAM</h2>
                        <h2
                            class="absolute md:bottom-20 md:left-[10%] font-light tracking-tight text-[72px] md:text-[150px] leading-[150px] uppercase text-[#DAD0BE] playfair">
                            follow our</h2>
                    </div>

                    <div class="hidden lg:hidden md:flex relative items-center justify-center mb-6 md:w-[500px] md:mx-auto">
                        <h2
                            class="font-bold tracking-tight text-[22px] leading-[28px] md:text-[72px] md:leading-[80px] uppercase text-[#284E8D] z-10 max-w-[650px] break-words">
                            INSTAGRAM follow our</h2>
                    </div>

                    <div class="flex md:hidden relative items-center justify-center my-4 md:my-0">
                        <h2 class="font-bold tracking-tight text-[22px] leading-[28px] uppercase text-[#284E8D] z-10">
                            INSTAGRAM</h2>
                        <h2
                            class="absolute bottom-[40%] right-[40%] font-light tracking-tight text-[22px] leading-[28px] leading-[150px] uppercase text-[#DAD0BE] text-nowrap playfair">
                            follow our</h2>
                    </div>

                    <div class="md:w-[500px] md:mx-auto">
                        <p class="">
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
    </div>
</template>
  
<script setup>
// import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';

import Shop_person from "../assets/Shop-person.png";
import BgMark1 from "../assets/bg-mark-1.png";
import BgMark2 from "../assets/bg-mark-2.png";
import Shop_bg_mark from "../assets/bg-mark-3.png";
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
import Logo from "../assets/logo.svg";

const selectedDeckIndex = ref(0);

const handleSlideChange = (swiper) => {
    selectedDeckIndex.value = swiper.realIndex;
};

const decks = [
    { name: '8.5in Journey Everslick Santa Cruz', image: Deck_1 },
    { name: '10.538in Natas Panther Lenticular Santa Cruz Reissue', image: Deck_3 },
    { name: '8.5in Classic Dot Santa Cruz', image: Deck_2 },
    { name: '8.80in Salba Resurrection Santa Cruz VX', image: Deck_4 },
    { name: '8.20in Asta Cosmic Santa Cruz Twin', image: Deck_5 },
    { name: '9.3in SANTA CRUZ DRESSEN ROSE CROSS TWO SHAPED', image: Deck_6 },
    { name: '8.25in McCoy Outlier VX Santa Cruz Twin', image: Deck_7 },
    { name: '8.0in Tsunami Dot Santa Cruz Birch', image: Deck_8 },
    { name: 'Santa Cruz Tom Knox PUNK 50TH ANNIVERSARY', image: Deck_9 },
    { name: '8.25IN X 31.60IN DELFINO TAROT VX DECK SANTA CRUZ', image: Deck_10 },
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