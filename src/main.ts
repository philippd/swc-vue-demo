import { ComponentLibrary } from '@six-group/ui-library-vue'
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import App from './App.vue'
import router from './router'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '@six-group/ui-library/dist/ui-library/ui-library.css'
import './assets/main.css'

const vuetify = createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6'
        }
      }
    }
  }
})

const app = createApp(App)

app.use(ComponentLibrary)
app.use(vuetify)
app.use(router)

app.mount('#app')
