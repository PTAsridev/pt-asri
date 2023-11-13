<template>
  <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease"
    role="banner" class="navbar w-nav">
    <div class="nav-container">
      <div class="navigation-left">
        <div class="brand-wrapper">
          <nuxt-link to="/" aria-current="page" class="brand w-nav-brand w--current">
            <img src="~/assets/images/Logo.png" loading="lazy" alt="" class="logo" />
            <div class="logo-text">PT ASRI INDONESIA</div>
          </nuxt-link>
          <div class="navigation-line"></div>
        </div>
      </div>
      <nav role="navigation" class="nav-menu home-page w-nav-menu"><a href="/" aria-current="page"
          class="nav-link w-inline-block w--current">
          <div>Home</div>
        </a>
        <div data-hover="false" data-delay="0" class="dropdown w-dropdown">
          <div class="nav-link-dropdown w-dropdown-toggle" @mouseover="hover = true" @mouseleave="hover = false">
            <div class="icon w-icon-dropdown-toggle"></div>
            <a href="/services">Services</a>
          </div>
          <nav class="dropdown-list w-dropdown-list" @mouseover="hover = true" @mouseleave="hover = false"
            :class="{ active: hover }">
            <div class="dropdown-link-wrapper">
              <a href="/services/kitchen" class="dropdown-link w-dropdown-link">Kitchen &amp; Laundry Exhaust Cleaning
                Services</a>
              <a href="/services/building" class="dropdown-link w-dropdown-link">Building Services</a>
              <a href="/services/drainage" class="dropdown-link w-dropdown-link">Drainage Maintenance</a>
              <a href="/services/residential" class="dropdown-link w-dropdown-link">Residential Maintenance</a>
            </div>
          </nav>
        </div>
        <a href="/services" class="nav-link w-inline-block">
          <div>Products</div>
        </a>
        <a href="/company" class="nav-link w-inline-block">
          <div>Company</div>
        </a>
        <a href="https://wa.me/+6287733733030" class="navigation-button w-button">Contact Us</a>
      </nav>
      <div class="menu-button w-nav-button" @click="showMenu = !showMenu">
        <div class="w-icon-nav-menu"></div>
      </div>
      <div class="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0" :class="showMenu ? 'w-nav-overlay-open' : 'hidden'">
        <nav role="navigation" class="nav-menu home-page w-nav-menu"
          style="transform: translateY(0px) translateX(0px); transition: transform 400ms ease 0s;"
          data-nav-menu-open="">
          <a href="/" aria-current="page" class="nav-link w-inline-block w--current">
            <div>Home</div>
          </a>
          <div data-hover="false" data-delay="0" class="dropdown w-dropdown w--nav-dropdown-open" style="z-index: 901;">
            <div class="nav-link-dropdown w-dropdown-toggle w--nav-dropdown-toggle-open" id="w-dropdown-toggle-0"  aria-controls="w-dropdown-list-0" aria-haspopup="menu" aria-expanded="true"
              role="button" tabindex="0" @click="showSubMenu = !showSubMenu" :class="showSubMenu ? 'w--open' : 'hidden'">
              <div class="icon w-icon-dropdown-toggle" aria-hidden="true"></div>
              <div>Services</div>
            </div>
            <nav class="dropdown-list w-dropdown-list w--nav-dropdown-list-open" id="w-dropdown-list-0" 
              aria-labelledby="w-dropdown-toggle-0" :class="showSubMenu ? 'w--open' : 'hidden'">
              <div class="dropdown-link-wrapper"><a href="/services/kitchen" class="dropdown-link w-dropdown-link"
                  tabindex="0">Kitchen &amp; Laundry Exhaust Cleaning Services</a>
                <a href="/services/building" class="dropdown-link w-dropdown-link" tabindex="0">Building Services</a><a
                  href="/services/drainage" class="dropdown-link w-dropdown-link" tabindex="0">Drainage Maintenance</a>
                <a href="/services/resedential" class="dropdown-link w-dropdown-link" tabindex="0">Residential Maintenance</a>
              </div>
            </nav>
          </div>
          <a href="/services" class="nav-link w-inline-block">
            <div>Products</div>
          </a>
          <a href="/company" class="nav-link w-inline-block">
            <div>Company</div>
          </a>
          <a href="#" class="navigation-button w-button">Contact Us</a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        hover: false,
         showMenu: false,
         showSubMenu: false,
      };
    }
  }

</script>

<style scoped>
  .active {
    display: block;
  }

</style>
