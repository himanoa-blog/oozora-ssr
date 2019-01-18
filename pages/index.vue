<template>
  <div>
    <Header/>
    <section>
      <EntryList :entries="entries"/>
    </section>
    <Footer />
  </div>
</template>

<script lang="ts">
import Logo from '~/components/Logo.vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import EntryList from '~/components/EntryList.vue'
import axios from '~/plugins/axios'
import Vue from 'vue'

export default Vue.extend({
  components: {
    Logo,
    Header,
    Footer,
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
html,
body {
  height: 100%;
}
* {
  letter-spacing: 0.1em;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', YuGothic,
    'ヒラギノ角ゴ ProN W3', Hiragino Kaku Gothic ProN, Arial, 'メイリオ', Meiryo,
    sans-serif;
}
</style>
