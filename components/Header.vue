<template>
  <nav class="flex items-center justify-between flex-wrap bg-green-darkest p-6">
    <div class="flex items-center flex-no-shrink text-white mr-6">
      <nuxt-link
        to="/"
        class="no-underline text-white visited"><span class="font-bold text-xl tracking-wide hover:text-green-light">遺言書</span></nuxt-link>
    </div>
    <div
      class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
        @click="toggleExpand">
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <HeaderItems class="w-full block lg:flex lg:items-center lg:w-auto justify-end hidden sm:hidden tablet:block laptop:block desktop:block" />
    <HeaderItems
      v-show="isExpand"
      class="w-full block lg:flex lg:items-center lg:w-auto justify-end"/>
  </nav>
</template>
<style scoped>
.visited:visited {
  color: #fff;
}
</style>
<script lang="ts">
import TwitterLogo from './TwitterLogo.vue'
import HeaderItems from './HeaderItems.vue'
export default {
  components: { TwitterLogo, HeaderItems },
  data() {
    return {
      isExpand: false
    }
  },
  methods: {
    toggleExpand() {
      this.isExpand = !this.isExpand
    }
  }
}
</script>
