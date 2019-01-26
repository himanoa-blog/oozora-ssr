<template>
  <div class="over-flow-hidden border border-grey-ligh">
    <div class="px-6 py-4 text-left">
      <div class="font-bold text-xl mb-2">
        {{ title }}
      </div>
      <p class="text-base truncate">{{ body.slice(0, 140) }}</p>
    </div>
    <nuxt-link
      :to="entryPath"
      class="bg-green text-center text-bold border-t border-style w-full block p-2 text-white no-underline hover:bg-green-dark"
    >続きを読む</nuxt-link>
  </div>
</template>
<style>
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    id: {
      type: Number,
      default: null
    },
    title: {
      type: String,
      default: ''
    },
    body: {
      type: String,
      default: ''
    }
  },
  computed: {
    entryPath() {
      return `/entries/${this.id}`
    }
  }
})
</script>
