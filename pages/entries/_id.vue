<template>
  <Entry
    :title="title"
    :body="html"
    :updated-at="updatedAt"
  />
</template>
<script lang="ts">
import Vue from 'vue'
import axios from '~/plugins/axios'
import Entry from '~/components/Entry.vue'

export default Vue.extend({
  components: { Entry },
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
  asyncData({ params }) {
    return axios.get(`/entries/${params.id}`).then(res => {
      return res.data
    })
  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.body },
        { property: 'og-title', content: this.title },
        { property: 'og-site_name', content: '遺言書' },
        { property: 'og-description', content: this.body },
        { property: 'og-locale', content: 'ja_JP' },
        { property: 'og:type', content: 'article' },
        {
          property: 'og:url',
          content: `https://blog.himanoa.net${
            this.$router.history.current.fullPath
          }`
        }
      ]
    }
  }
})
</script>
