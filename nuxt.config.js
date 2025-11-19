export default {
  ssr: true,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'n-gage',
    meta: [
      { charset: 'utf-8' },
      { title: 'n-gage' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Made with n-gage. Copyright Ⓒ 2023 Kompas Gramedia',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/icon.svg' }],
  },
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
  },
  css: ['@/assets/css/main.scss'],
  layoutTransition: {
    name: 'fade-transform',
  },
  pageTransition: {
    name: 'fade-transform',
  },
  googleFonts: {
    families: {
      Cabin: true,
    },
  },
  styleResources: {
    scss: ['./assets/css/*.scss'],
  },
  plugins: [
    '~/plugins/notifier.js',
    '~/plugins/repository.js',
    '~/plugins/persistedState.client.js',
    '~/plugins/datepicker.js',
    '~/plugins/filterData.js',
    '~/plugins/icons.js',
    { src: '~/plugins/chart.js', mode: 'client' },
    { src: '~/plugins/select.js', mode: 'client' },
    { src: '~/plugins/table.js', mode: 'client' },
    { src: '~/plugins/jsonForm.js', mode: 'client' },
    { src: '~/plugins/imageEditor.js', mode: 'client' },
    { src: '~/plugins/password.js', mode: 'client' },
    { src: '~/plugins/codemirror', ssr: false },
  ],
  components: true,
  buildModules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/moment',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxt/content',
    '@nuxtjs/auth-next',
    '@nuxtjs/sentry',
  ],
  sentry: {
    // dsn: 'https://ac3229f38bf6456e88f80dd4e00b8836@o4504495035580416.ingest.sentry.io/4504495039250432',
    dsn: '',
    config: {},
  },
  moment: {
    // locales: ['id']
  },
  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
  },
  router: {
    middleware: ['auth'],
  },
  auth: {
    redirect: {
      login: '/login',
      logout: '/login',
      callback: '/login',
      home: false,
    },
    strategies: {
      local: {
        scheme: 'refresh',
        token: {
          property: 'data.token',
          maxAge: 60 * 60 * 24 * 1,
          global: true,
        },
        refreshToken: {
          property: 'data.refreshToken',
          data: 'requestToken',
          maxAge: 60 * 60 * 24 * 1,
        },
        endpoints: {
          login: {
            url: 'auth/login',
            method: 'post',
          },
          refresh: {
            url: 'auth/refresh',
            method: 'post',
          },
          logout: false,
          user: false,
        },
        autoLogout: true,
      },
    },
    plugins: ['~/plugins/auth.js'],
  },
  content: {},
  build: {
    transpile: ['ico'],
  },
  telemetry: false,
  target: 'static',
}
