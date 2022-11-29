<template>
<div class="isolate bg-white">
  <main>
    <div class="relative px-6 lg:px-8 bg-cover bg-bottom bg-blend-overlay" :style="{ backgroundImage: `url(${backgroundUrl})` }">
    <!-- <div class="relative px-6 lg:px-8 bg-cover bg-center"> -->
      <div class="mx-auto max-w-3xl pt-20 pb-32 mt-28 sm:pt-32 sm:pb-20">
        <div>
          <div>
            <h1 class="text-4xl font-bold tracking-tight text-white sm:text-center sm:text-8xl">A partner for success</h1>
            <p class="mt-6 text-lg leading-8 text-gray-100 sm:text-center">PT. Asri is a supplier and service company, providing nationwide products and services to our customers in the hospitality, catering, commercial and residential industries. We offer a wide range of quality products and services that are specifically designed for use in demanding environments.</p>
            <div class="mt-8 flex gap-x-4 sm:justify-center">
              <a href="https://wa.me/+6287733733030" class="inline-block rounded-lg px-8 py-4 text-base font-semibold leading-7 text-white shadow-sm main-button">
                Schedule a Call
                <span class="text-indigo-200" aria-hidden="true">&rarr;</span>
              </a>
              <nuxt-link to="/services" class="inline-block rounded-lg px-8 py-4 text-base font-semibold leading-7 text-orange text-gray-100 ring-1 ring-gray-100/10 hover:ring-gray-100/20">
                Our Services
                <span class="text-gray-100" aria-hidden="true">&rarr;</span>
              </nuxt-link>
            </div>
          </div>
          <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="url(#3898EC-546c-4772-8c71-4d3f06d544bc)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
              <defs>
                <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#2482a0"></stop>
                  <stop offset="1" stop-color="#ea580c"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>
</template>

<style scoped>
.main-button {
    background: #2482a0;
}
</style>

<script>
import backgroundUrl from '~/assets/images/2561afbd-2b78-4742-bf80-5a6caeceac39.jpg'

export default {
  data() {
   return {backgroundUrl}
  },
}
</script>
