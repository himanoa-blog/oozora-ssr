<template>
  <div>
    <Header/>
    <nuxt/>
    <Footer />
  </div>
</template>
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
<script>
import Vue from 'vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default Vue.extend({
  components: {
    Header,
    Footer
  }
})
</script>
