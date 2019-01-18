<template>
  <div
    class="text-sm lg:flex-grow">
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
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  props: {
    hidden: {
      type: Boolean,
      default: false
    }
  }
})
</script>
