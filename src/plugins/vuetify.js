import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#5746ea',
        secondary: '#56c1e5',
        orange: '#fe8a64',
        error: '#fe5e7d',
        info: '#7235d1',
        success: '#4bcf82',
        warning: '#f0c65b',
        blackblue: '#0f1424',
        darkblue: '#1c1f4a',
        lightviolet: '#6f76c8',
        paleblue: '#bdc1ff'
      },
    },
  },
});

/**
 * ### Primary

- Blue: hsl(246, 80%, 60%)

- Light red (work): hsl(15, 100%, 70%)
- Soft blue (play): hsl(195, 74%, 62%)
- Light red (study): hsl(348, 100%, 68%)
- Lime green (exercise): hsl(145, 58%, 55%)
- Violet (social): hsl(264, 64%, 52%)
- Soft orange (self care): hsl(43, 84%, 65%)

### Neutral

- Very dark blue: hsl(226, 43%, 10%)
- Dark blue: hsl(235, 46%, 20%)
- Desaturated blue: hsl(235, 45%, 61%)
- Pale Blue: hsl(236, 100%, 87%)

 */