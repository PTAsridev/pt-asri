<template>
  <div>
        <main-hero></main-hero>
        <!-- <div data-w-id="a2606948-494f-bd98-6ed5-14ae39b7979e" class="hero">
            <div class="container">
            <div class="w-layout-grid hero-grid">
                <div class="hero-image-block"><img
                    src="https://uploads-ssl.webflow.com/631ec895f35401c665573bfc/631ecc85a6a75c1493f0380b_Hero-Gloves.png"
                    loading="lazy" width="242"
                    srcset="https://uploads-ssl.webflow.com/631ec895f35401c665573bfc/631ecc85a6a75c1493f0380b_Hero-Gloves-p-500.png 500w, https://uploads-ssl.webflow.com/631ec895f35401c665573bfc/631ecc85a6a75c1493f0380b_Hero-Gloves.png 573w"
                    sizes="90vw" alt="" class="hero-person" />
                </div>
                <div class="hero-content-block">
                <div class="hero-title-wrapper"><img
                    src="https://uploads-ssl.webflow.com/631ec895f35401c665573bfc/631ec895f354015ef5573c41_Hero%20Large%20Star.svg"
                    loading="lazy" alt="" class="hero-star" />
                    <h1 class="hero-title">A partner for success</h1>
                </div>
                <p class="hero-paragraph">PT. Asri is a supplier and service company, providing nationwide products and
                    services to our customers in the hospitality, catering, commercial and residential industries. We offer a
                    wide range of quality products and services that are specifically designed for use in demanding
                    environments.</p>
                    <a href="/services" class="button-primary margin-top-32 w-inline-block">
                        <div>Get Started</div><img src="https://uploads-ssl.webflow.com/631ec895f35401c665573bfc/631ec895f354016801573c90_arrow-right-line.svg" loading="lazy" alt="" class="button-arrow-large" />
                    </a>
                </div>
            </div>
            </div>
        </div> -->
        <certification-bar></certification-bar>
        <services-section></services-section>
        <image-carousel></image-carousel>
        <products-section></products-section>
        <call-to-action></call-to-action>
        <testimonial-slides></testimonial-slides>
  </div>
</template>

<script>
import MainHero from '~/components/global/MainHero.vue'
import CallToAction from '~/components/global/CallToAction.vue'
import ProductsSection from '~/components/global/ProductsSection.vue'
import TestimonialSlides from '~/components/global/TestimonialSlides.vue'
import ImageCarousel from '~/components/global/ImageCarousel.vue'
import CertificationBar from '~/components/global/CertificationBar.vue'
export default {
  components: { MainHero, TestimonialSlides, ProductsSection, CallToAction, ImageCarousel, CertificationBar },}
</script>
