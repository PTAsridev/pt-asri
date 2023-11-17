<template>
  <div class="testimonial-slider">
    <div class="container">
      <div
        data-w-id="a2a600f4-d8ef-f683-ff91-a6bdb723d09e"
        class="sm:text-center mb-2"
      >
        <h3>Testimonials from our customers</h3>
      </div>
      <VueSlickCarousel v-bind="settings" class="container">
        <div class="slide w-slide">
          <div class="w-layout-grid testimonial-grid">
            <div class="testimonial-cards">
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/631ec895f35401c665573bfc/631ec895f354013c3e573c3b_Quote%20Right.svg"
                alt=""
                class="quote"
              />
              <div class="quote-text">
                During this time, Simon and his team have proven professional
                and thorough in their work. Photograph reports were presented to
                us after completion of each kitchen cleaning showing direct
                results and quality of works
              </div>
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/631ec895f35401c665573bfc/631ec895f3540115a8573c69_Quote%20Left.svg"
                alt=""
                class="quote"
              />
              <div>
                <div class="testimonial-name">Sean Flakelar</div>
                <div class="testimonial-role">
                  Executive Chef of Amanusa Resorts - Bali
                </div>
              </div>
            </div>
            <div class="testimonial-cards">
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/631ec895f35401c665573bfc/631ec895f354013c3e573c3b_Quote%20Right.svg"
                alt=""
                class="quote"
              />
              <div class="quote-text">
                Their work throughout this project was meticulously carried out,
                with attention to details
              </div>
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/631ec895f35401c665573bfc/631ec895f3540115a8573c69_Quote%20Left.svg"
                alt=""
                class="quote"
              />
              <div>
                <div class="testimonial-name">Fabrice Garrigues</div>
                <div class="testimonial-role">
                  General Manager, Novotel Coralia Lombok
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-slide">
          <div class="w-layout-grid testimonial-grid">
            <div class="testimonial-cards">
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/631ec895f35401c665573bfc/631ec895f354013c3e573c3b_Quote%20Right.svg"
                alt=""
                class="quote"
              />
              <div class="quote-text">
                We have certainly taken note of the high standards of cleaning
                and fire safety procedures carried out by your team of
                professional staff during your last two years of service with us
              </div>
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/631ec895f35401c665573bfc/631ec895f3540115a8573c69_Quote%20Left.svg"
                alt=""
                class="quote"
              />
              <div>
                <div class="testimonial-name">I Made Sukada</div>
                <div class="testimonial-role">Chief Engineer of Aston Bali</div>
              </div>
            </div>
            <div class="testimonial-cards">
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/631ec895f35401c665573bfc/631ec895f354013c3e573c3b_Quote%20Right.svg"
                alt=""
                class="quote"
              />
              <div class="quote-text">
                Their work were meticulously carried out by their team of
                professional crew, led by their Technical Advisor.
              </div>
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/631ec895f35401c665573bfc/631ec895f3540115a8573c69_Quote%20Left.svg"
                alt=""
                class="quote"
              />
              <div>
                <div class="testimonial-name">I Wayan Widhiada</div>
                <div class="testimonial-role">
                  Director of Engineering, Ritz Carlton Bali
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-slide">
          <div class="w-layout-grid testimonial-grid">
            <div class="testimonial-cards">
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/631ec895f35401c665573bfc/631ec895f354013c3e573c3b_Quote%20Right.svg"
                alt=""
                class="quote"
              />
              <div class="quote-text">
                We have employed their services since 2002 and found that they
                have been diligently conforming to our standard requirement.
                Detail of their work were professionally recorded and documented
              </div>
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/631ec895f35401c665573bfc/631ec895f3540115a8573c69_Quote%20Left.svg"
                alt=""
                class="quote"
              />
              <div>
                <div class="testimonial-name">Benny Raj</div>
                <div class="testimonial-role">
                  Director of F&amp;B - Four Seasons Resorts Jimbaran Bali
                </div>
              </div>
            </div>
            <div class="testimonial-cards">
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/631ec895f35401c665573bfc/631ec895f354013c3e573c3b_Quote%20Right.svg"
                alt=""
                class="quote"
              />
              <div class="quote-text">
                Their job were delivered to meet the fire and life safety
                procedures.
              </div>
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/631ec895f35401c665573bfc/631ec895f3540115a8573c69_Quote%20Left.svg"
                alt=""
                class="quote"
              />
              <div>
                <div class="testimonial-name">I Ketut Wirasutejo</div>
                <div class="testimonial-role">
                  Director of Engineering, Sheraton Laguna Nusa Dua
                </div>
              </div>
            </div>
          </div>
        </div>
        <template #prevArrow="arrowOption">
            <div class="custom-arrow">
                {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
            </div>
        </template>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        arrows: true,
        dots: true,
        autoplay: true,
      },
    };
  },
};
</script>
<style>
.slick-prev:before,
.slick-next:before {
    opacity: 1;
    color: black;
}
</style>
