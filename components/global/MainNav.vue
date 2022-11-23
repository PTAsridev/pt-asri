<template>
    <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease"
    role="banner" class="navbar w-nav">
        <div class="nav-container">
        <div class="navigation-left">
            <div class="brand-wrapper">
            <a href="/" aria-current="page" class="brand w-nav-brand w--current">
                <img src="~/assets/images/Logo.png" loading="lazy" alt="" class="logo" />
                <div class="logo-text">PT Asri</div>
            </a>
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
            <nav class="dropdown-list w-dropdown-list" @mouseover="hover = true" @mouseleave="hover = false" :class="{ active: hover }">
                <div class="dropdown-link-wrapper">
                    <a href="/services/kitchen" class="dropdown-link w-dropdown-link">Kitchen &amp; Laundry Exhaust Cleaning Services</a>
                    <a href="/services/building" class="dropdown-link w-dropdown-link">Building Services</a>
                    <a href="/services/drainage" class="dropdown-link w-dropdown-link">Drainage Maintenance</a>
                    <a href="/services/residential" class="dropdown-link w-dropdown-link">Residential Maintenance</a>
                </div>
            </nav>
            </div>
            <a href="/company" class="nav-link w-inline-block">
                <div>Products</div>
            </a>
            <a href="/company" class="nav-link w-inline-block">
                <div>Company</div>
            </a>
            <a href="https://wa.me/+6287733733030" class="navigation-button w-button">Contact Us</a>
        </nav>
        <div class="menu-button w-nav-button">
            <div class="w-icon-nav-menu"></div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
    return {
      hover: false,
    };
  }
}
</script>

<style scoped>
.active {
    display: block;
}
</style>