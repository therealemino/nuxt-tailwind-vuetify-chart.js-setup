export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt - Tailwind -Vuetify Chart.js Setup',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [
      { src: "https://code.iconify.design/2/2.2.1/iconify.min.js" },
      // { src: '' },
    ]
  },

  css: [
    '~/assets/css/global.css'
  ],

  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],

  modules: [
    '@nuxtjs/axios',
    ['@nuxtjs/vuetify', { treeShake: true }]
  ],

  axios: {
    baseURL: '/',
  },

  vuetify: {
    treeShake: true
  },  

  googleFonts: {
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Inter: true,
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
    }
  },  

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
