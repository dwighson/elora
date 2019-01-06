const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'},
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' }

    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/main.css',
    '@/assets/css/simple-grid.min.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-cname-module', { baseUrl: 'eloracleaning-mt.co.uk' }],
    [
      'storyblok-nuxt',
      {
        accessToken:
          process.env.NODE_ENV == 'production'
            ? 'LoEh1rBr2XTqXP9tVvtGwwtt'
            : 'IGNnQXBa2xwHC35TY9c2tQtt',
        cacheProvider: 'memory'
      }]
  ],
  router: { base: '/elora/' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
