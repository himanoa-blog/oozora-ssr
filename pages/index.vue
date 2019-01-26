<template>
  <div>
    <section>
      <EntryList
        :entries="entries"
      />
      <Spinner v-show="loading"/>
    </section>
  </div>
</template>

<script lang="ts">
import EntryList from '~/components/EntryList.vue'
import Spinner from '~/components/Spinner.vue'
import axios from '~/plugins/axios'
import Vue from 'vue'

const limit = 15
export default Vue.extend({
  layout: 'default',
  components: {
    EntryList,
    Spinner
  },
  data() {
    return {
      offset: 0,
      entries: [],
      entriesCount: 0,
      loading: false
    }
  },
  mounted() {
    document.addEventListener('scroll', async e => {
      const scrollingPosition =
        document.documentElement.scrollTop + window.innerHeight
      const bottomPosition = document.documentElement.offsetHeight

      if (
        this.entriesCount !== this.entries.length &&
        !this.loading &&
        scrollingPosition >= bottomPosition
      ) {
        this.loading = true
        await this.fetchData()
        this.loading = false
      }
    })
  },
  beforeDestroy() {
    console.dir('beforeDestroy')
  },
  methods: {
    fetchData() {
      return axios
        .get(`/entries?offset=${this.offset}&limit=${limit}`)
        .then(res => {
          this.offset = this.offset + res.data.entries.length
          this.entries = [...this.entries, ...res.data.entries]
          this.entriesCount = res.data.count
        })
    }
  },
  asyncData({ params }) {
    const offset = params.offset || 0
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
