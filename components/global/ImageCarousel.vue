<template>
    <div class="testimonial-slider">
        <VueSlickCarousel v-bind="settings" class="container">
            <div class="slide w-slide">
                <div class="aspect-w-16 aspect-h-9">
                    <img src="~/assets/images/63149a59-082a-4871-852d-e1fd4d7bae3d.jpg" alt="PT ASRI INDONESIA" class="w-full h-full object-cover">
                </div>
            </div>
            <div class="w-slide">
                <div class="aspect-w-16 aspect-h-9">
                    <img src="~/assets/images/building/4221082f-baa4-414b-b0cb-f8803e0d922c.jpg" alt="PT ASRI INDONESIA" class="w-full h-full object-cover">
                </div>
            </div>
            <div class="w-slide">
                <div class="aspect-w-16 aspect-h-9">
                    <img src="~/assets/images/095a5da6-8bfc-4419-848f-8bafe711cdf4.jpg" alt="PT ASRI INDONESIA" class="w-full h-full object-cover">
                </div>
            </div>
            <div class="w-slide">
                <div class="aspect-w-16 aspect-h-9">
                    <img src="~/assets/images/building/building-(1).jpg" alt="PT ASRI INDONESIA" class="w-full h-full object-cover">
                </div>
            </div>
            <div class="w-slide">
                <div class="aspect-w-16 aspect-h-9">
                    <img src="~/assets/images/drainage/drainage-(3).jpg" alt="PT ASRI INDONESIA" class="w-full h-full object-cover">
                </div>
            </div>
        </VueSlickCarousel>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
 import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    components: { VueSlickCarousel },
    data() {
      return {
        settings: {
          arrows: true,
          dots: true,
          autoplay: true,
        },
      }
    },
}
</script>