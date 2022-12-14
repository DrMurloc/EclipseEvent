import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'

import App from './App.vue'

const app = createApp(App);

const vuetify = createVuetify({
    components,
    directives,
});

app.use(vuetify);

app.mount('#app');