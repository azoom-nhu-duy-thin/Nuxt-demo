import { resolve } from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    // '@' : resolve(__dirname, '/')
    assets: '/<rootDir>/assets'
  },
  css: ['~/assets/css/main.scss'],
  postcss: {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    },
  },
  $production: { // Cấu hình cho môi trường product

  },
  $development: { // Cấu hình cho môi trường develop
    devtools: {
      enabled: true
    }
  },
})
