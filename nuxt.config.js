const pkg = require('./package')
require('dotenv').config()
const axios = require('axios')

module.exports = {
  mode: 'universal',

  router: {
    routes: [{ name: 'root', path: '/', component: 'pages/entries/index' }]
  },

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    script: [
      { src: 'https://platform.twitter.com/widgets.js', id: 'twitter-wjs' }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['~/assets/css/tailwind.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~/plugins/hljs'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/dotenv',
    '~/modules/typescript.js',
    '@nuxtjs/feed'
  ],
  feed: [
    {
      path: '/rss', // The route to your feed.
      async create(feed) {
        feed.options = {
          title: '遺言書',
          link: 'https://blog.himanoa.net/rss',
          description: '遺言を書きます'
        }

        const posts = (await axios.get(
          `${process.env.apiUrl}/entries?offset=0&limit=15`
        )).data.entries
        posts.forEach(post => {
          feed.addItem({
            title: post.title,
            id: post.id,
            link: `https://blog.himanoa.net/entries/${post.id}`,
            description: post.html,
            content: post.html
          })
        })

        feed.addContributor({
          name: 'himanoa',
          email: 'matsunoappy@gmail.com',
          link: 'https://blog.himanoa.net'
        })
      },
      cacheTime: 1000 * 60 * 15, // How long should the feed be cached
      type: 'rss2' // Can be: rss2, atom1, json1
    }
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
