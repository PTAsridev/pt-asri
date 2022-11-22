<template>
  <div>
    <main-nav></main-nav>
     <Nuxt />
     <main-footer></main-footer>
  </div>
</template>

<script>
import MainNav from '~/components/global/MainNav.vue'
import MainFooter from '~/components/global/MainFooter.vue'
export default {
  components: 
  {
    MainNav,
    MainFooter
  }
}
</script>
