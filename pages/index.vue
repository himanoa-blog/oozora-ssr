<template>
  <div>
    <Header/>
    <section class="container">
      <div>
        <logo/>
        <h1 class="title">
          oozora-ssr
        </h1>
        <h2 class="subtitle">
          Blog SSR Server
        </h2>
        <div class="links">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            class="button--green">Documentation</a>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            class="button--grey">GitHub</a>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script lang="ts">
import Logo from '~/components/Logo.vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import axios from '~/plugins/axios'

export default {
  components: {
    Logo,
    Header,
    Footer
  },
  data() {
    return {
      offset: 0,
      entries: []
    }
  },
  asyncData({ params }) {
    const offset = params.offset || 0
    const limit = 15
    return axios.get(`/entries?offset=0&limit=${limit}`).then(res => {
      return {
        offset: offset + limit,
        entries: res.data
      }
    })
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
