<template>
  <div class="over-flow-hidden border border-grey-ligh mx-24 my-4">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">
        {{ title }}
      </div>
      <p class="text-grey-darker text-base">{{ body.slice(0, 140) }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      default: ''
    },
    body: {
      type: String,
      default: ''
    }
  }
})
</script>
