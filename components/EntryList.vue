<template>
  <div class="flex flex-wrap flex-col justify-center items-stretch">
    <EntryCard
      v-for="entry in entries"
      :key="entry.id"
      :title="entry.title"
      :body="entry.body"
      :id="entry.id"
      class="my-4 item-center
      inline-block text-center
      w-full sm:w-full md:w-3/5 lg:w-1/2 xl:w-1/3 mx-auto"
    />
  </div>
</template>
<style scoped>
</style>
<script lang="ts">
import Vue from 'vue'
import EntryCard from './EntryCard.vue'

export default Vue.extend({
  components: { EntryCard },
  props: {
    entries: {
      type: Array,
      default: () => []
    }
  }
})
</script>
