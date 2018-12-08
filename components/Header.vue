<template>
  <nav class="flex items-center justify-between flex-wrap bg-green-darkest p-6">
    <div class="flex items-center flex-no-shrink text-white mr-6">
      <nuxt-link
        to="/"
        class="no-underline text-white visited"><span class="font-bold text-xl tracking-wide hover:text-green-light">遺言書</span></nuxt-link>
    </div>
    <div class="w-full block lg:flex lg:items-center lg:w-auto justify-end">
      <div class="text-sm lg:flex-grow">
        <a
          href="https://himanoa.net"
          class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-light mr-4 tracking-wide no-underline text-lg">
          About
        </a>
        <a
          href="https://twitter.com/h1manoa"
          class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-light mr-4 tracking-wide no-underline text-lg">
          Twitter
        </a>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.visited:visited {
  color: #fff;
}
</style>
<script lang="ts">
import TwitterLogo from './TwitterLogo.vue'
export default {
  components: { TwitterLogo }
}
</script>
