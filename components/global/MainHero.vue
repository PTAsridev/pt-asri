<template>
<div class="isolate bg-white">
  <main>
    <div class="relative px-6 lg:px-8 bg-cover bg-center bg-blend-overlay" :style="{ backgroundImage: `url(${backgroundUrl})` }">
      <div class="overlay absolute w-full h-full bg-black opacity-30 top-0 left-0 z-0"></div>
    <!-- <div class="relative px-6 lg:px-8 bg-cover bg-center"> -->
      <div class="relative mx-auto max-w-3xl pt-20 pb-32 mt-28 sm:pt-32 sm:pb-20 z-20">
        <div>
          <div>
            <h1 class="text-4xl font-bold tracking-tight text-white sm:text-center sm:text-8xl">A partner for success</h1>
            <p class="mt-6 text-lg leading-8 text-gray-100 sm:text-center">PT. Asri is a supplier and service company, providing nationwide products and services to our customers in the hospitality, catering, commercial and residential industries. We offer a wide range of quality products and services that are specifically designed for use in demanding environments.</p>
            <div class="mt-8 flex flex-col md:flex-row gap-x-4 sm:justify-center">
              <a href="https://wa.me/+6287733733030" class="inline-block rounded-lg px-8 py-4 text-base font-semibold leading-7 text-white shadow-sm main-button">
                Schedule a Call
                <span class="text-indigo-200" aria-hidden="true">&rarr;</span>
              </a>
              <nuxt-link to="/services" class="inline-block rounded-lg px-8 py-4 mt-8 sm:mt-0 text-base font-semibold leading-7 text-orange text-gray-100 ring-1 ring-gray-100/10 hover:ring-gray-100/20">
                Our Services
                <span class="text-gray-100" aria-hidden="true">&rarr;</span>
              </nuxt-link>
            </div>
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
import backgroundUrl from '~/assets/images/gil-ribeiro-3hO8igCybds-unsplash.jpg'

export default {
  data() {
   return {backgroundUrl}
  },
}
</script>
