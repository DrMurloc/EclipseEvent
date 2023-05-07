import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'

import App from './App.vue'

const app = createApp(App);

const arrowEclipseTheme = {
    dark: false,
    colors: {
        background: '#000000',
        surface: '#000000',
        primary: '#66a4cb',
        secondary: '#03DAC6',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    }
}

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'arrowEclipseTheme',
        themes: {
            arrowEclipseTheme,
        }
    }
});

app.use(vuetify);

app.mount('#app');