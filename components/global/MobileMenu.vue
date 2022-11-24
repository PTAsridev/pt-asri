<template>
    <div class="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0" v-show="showMobileMenu" @closeMobileMenu="showMobileMenu = false">
        <nav role="navigation" class="nav-menu home-page w-nav-menu"
          style="transform: translateY(0px) translateX(0px); transition: transform 400ms ease 0s;"
          data-nav-menu-open="">
          <a href="/" aria-current="page" class="nav-link w-inline-block w--current">
            <div>Home</div>
          </a>
          <div data-hover="false" data-delay="0" class="dropdown w-dropdown w--nav-dropdown-open" style="z-index: 901;">
            <div class="nav-link-dropdown w-dropdown-toggle w--nav-dropdown-toggle-open w--open"
              id="w-dropdown-toggle-0" aria-controls="w-dropdown-list-0" aria-haspopup="menu" aria-expanded="true"
              role="button" tabindex="0">
              <div class="icon w-icon-dropdown-toggle" aria-hidden="true"></div>
              <div>Services</div>
            </div>
            <nav class="dropdown-list w-dropdown-list w--nav-dropdown-list-open w--open" id="w-dropdown-list-0"
              aria-labelledby="w-dropdown-toggle-0">
              <div class="dropdown-link-wrapper"><a href="/services/kitchen" class="dropdown-link w-dropdown-link"
                  tabindex="0">Kitchen &amp; Laundry Exhaust Cleaning Services</a>
                <a href="/services/building" class="dropdown-link w-dropdown-link" tabindex="0">Building Services</a><a
                  href="/services/drainage" class="dropdown-link w-dropdown-link" tabindex="0">Drainage Maintenance</a>
                <a href="/services/resedential" class="dropdown-link w-dropdown-link" tabindex="0">Residential Maintenance</a>
              </div>
            </nav>
          </div>
          <a href="/company" class="nav-link w-inline-block">
            <div>Products</div>
          </a>
          <a href="/company" class="nav-link w-inline-block">
            <div>Company</div>
          </a>
          <a href="#" class="navigation-button w-button">Contact Us</a>
        </nav>
      </div>
</template>