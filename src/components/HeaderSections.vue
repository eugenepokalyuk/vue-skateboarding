<template>
    <header>
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1">
                <router-link to="#" class="-m-1.5 p-1.5">
                    <span class="sr-only">Your Company</span>
                    <img class="h-8 md:h-[110px] w-auto" :src="Logo" alt="" />
                </router-link>
            </div>
            <div class="flex lg:hidden">
                <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    @click="mobileMenuOpen = true">
                    <span class="sr-only">Open main menu</span>
                    <img class="h-8 w-auto" :src="Menu" alt="" aria-hidden="true" />
                </button>
            </div>
            <PopoverGroup class="hidden lg:flex lg:gap-x-12">
                <!-- class="font-light bg-[#FF8B2B] px-2 py-3 rounded-full text-white w-full md:w-[137px]">Shop</button> -->
                <router-link to="/"
                    class="text-sm font-semibold leading-6 text-gray-900 px-4 py-3 rounded-full hover:outline">Home</router-link>
                <router-link to="/"
                    class="text-sm font-semibold leading-6 text-gray-900 px-4 py-3 rounded-full hover:outline">Pricing</router-link>
                <router-link to="/"
                    class="text-sm font-semibold leading-6 text-gray-900 px-4 py-3 rounded-full hover:outline">About</router-link>
            </PopoverGroup>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                <router-link to="/"
                    class="text-sm font-semibold leading-6 text-gray-900 px-4 py-3 rounded-full hover:outline">Contact</router-link>
            </div>
        </nav>
        <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
            <div class="fixed inset-0 z-10"></div>
            <DialogPanel
                class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-between">
                    <router-link to="/" class="-m-1.5 p-1.5">
                        <span class="sr-only">Your Company</span>
                        <img class="h-8 w-auto" :src="Logo" alt="" />
                    </router-link>
                    <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
                        <span class="sr-only">Close menu</span>
                        <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                            <router-link to="/"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</router-link>
                            <router-link to="/"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</router-link>
                            <router-link to="/"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</router-link>
                        </div>
                        <div class="py-6">
                            <router-link to="/"
                                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contact</router-link>
                        </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    </header>
</template>
  
<script setup>
import {
Dialog,
DialogPanel,
PopoverGroup
} from '@headlessui/vue';
import { PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid';
import {
ArrowPathIcon,
ChartPieIcon,
CursorArrowRaysIcon,
FingerPrintIcon,
SquaresPlusIcon,
XMarkIcon
} from '@heroicons/vue/24/outline';
import { ref } from 'vue';
import Logo from "../assets/logo.svg";
import Menu from "../assets/menu.svg";

const products = [
    { name: 'Analytics', description: 'Get router-link better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

const mobileMenuOpen = ref(false)
</script>