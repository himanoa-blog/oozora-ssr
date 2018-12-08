<template>
  <h1 class="text-blue-dark">Hello {{ name }}</h1>
</template>
<script lang="ts">
export default {
  asyncData(context) {
    return { name: 'World' }
  },
  head() {
    return {
      title: 'poepoe',
      meta: [
        { hid: 'description', name: 'description', content: 'テストです' },
        { property: 'og-title', content: 'poepoe' },
        { property: 'og-site_name', content: '遺言書' },
        { property: 'og-description', content: 'テストです' },
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
}
</script>
