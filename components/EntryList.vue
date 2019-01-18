<template>
  <div class="flex flex-wrap justify-center item-start flex-col">
    <EntryCard
      v-for="entry in entries"
      :key="entry.id"
      :title="entry.title"
      :body="entry.body"
    />
  </div>
</template>
<script>
import EntryCard from './EntryCard.vue'

export default {
  components: { EntryCard },
  props: {
    entries: {
      type: Array,
      default: () => []
    }
  }
}
</script>
