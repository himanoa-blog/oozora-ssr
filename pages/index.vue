<template>
  <div>
    <section>
      <EntryList :entries="entries"/>
    </section>
  </div>
</template>

<script lang="ts">
import EntryList from '~/components/EntryList.vue'
import axios from '~/plugins/axios'
import Vue from 'vue'

export default Vue.extend({
  layout: 'default',
  components: {
    EntryList
  },
  data() {
    return {
      offset: 0,
      entries: [],
      entriesCount: 0
    }
  },
  asyncData({ params }) {
    const offset = params.offset || 0
    const limit = 15
    return axios.get(`/entries?offset=0&limit=${limit}`).then(res => {
      return {
        offset: offset + limit,
        entries: res.data.entries,
        entriesCount: res.data.count
      }
    })
  }
})
</script>

<style>
</style>
