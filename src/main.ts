import './assets/main.css'
// TODO: This import breaks some of the SIX Web Components styles
//import 'vuetify/styles'
import '@six-group/ui-library/dist/ui-library/ui-library.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { ComponentLibrary } from '@six-group/ui-library-vue'
import { createVuetify } from 'vuetify'

// Styles
import '@mdi/font/css/materialdesignicons.css'

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
