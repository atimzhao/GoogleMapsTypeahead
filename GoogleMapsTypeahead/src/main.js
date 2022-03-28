import { createApp } from 'vue'
import App from './App.vue'

import SimpleTypeahead from 'vue3-simple-typeahead';
import 'vue3-simple-typeahead/dist/vue3-simple-typeahead.css';

import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      hoveredSelection: ["empty", 36.778261, -119.417932] // [nameOfState, latitude, longitude]
    }
  },
  mutations: {
    updateSelection (state, payload) {
      state.hoveredSelection = payload
    }
  }
})

const app = createApp(App)
app.use(SimpleTypeahead);
app.use(store)
app.mount('#app')


