<template>
  <div class="text-orange-darker">
    <Header/>
    <nuxt class="leading-normal content"/>
    <Footer />
  </div>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
.content {
  min-height: calc(100vh - 100px);
  margin-bottom: 20px;
}
html,
body {
  height: 100%;
  padding: 0;
  margin: 0;
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
