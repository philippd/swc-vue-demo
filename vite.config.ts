import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        transformAssetUrls,
        compilerOptions: {
          // treat all tags starting with six- as custom elements
          isCustomElement: (tag) => tag.startsWith('six-')
        }
      }
    }),
    vuetify({
      autoImport: true
      // TODO: add import of styles configFile?
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue']
  }
})
