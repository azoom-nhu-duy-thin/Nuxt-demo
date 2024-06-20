import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// console.log('process.env.API_BASE_URL', process.env.API_BASE_URL);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    tsConfig: {
      compilerOptions: {
        types: ["unplugin-icons/types/vue"],
      },
    },
  },
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
  modules: [
    '@nuxt/content',
    "@pinia/nuxt",
    "@ant-design-vue/nuxt"
  ],
  antd: {
    
  },
  content: {
    // ... options
  },
  pinia: {
    // storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  vite: {
    plugins: [
      Components({
        // add option {resolveIcons: true} as parameter for resolving problem with icons
        resolvers: [
          AntDesignVueResolver({
            importStyle: 'less',
            resolveIcons: true
          })
        ]
      }),
      // vue({
      //   template: {
      //     compilerOptions: {
      //       isCustomElement: (tag) => ['md-linedivider'].includes(tag),
      //     }
      //   }
      // })
    ],
    ssr: {
      noExternal: ['moment', 'compute-scroll-into-view', 'ant-design-vue','@ant-design/icons-vue'],
    },  
  },
  runtimeConfig: {
    // The private keys which are only available within server-side
    // apiSecret: '123',
    // Keys within public, will be also exposed to the client-side
    // API_BASE_URL: 'https://pokeapi.co/api/v2',
    public: {
      // apiBase: `${process.env.API_BASE_URL}`,
      API_BASE_URL: `https://pokeapi.co/api/v2`,
      // API_BASE_BROWSER_URL: `${process.env.API_BASE_BROWSER_URL}`
    }
  }
})