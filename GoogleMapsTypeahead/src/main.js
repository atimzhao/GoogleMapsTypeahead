import { createApp } from 'vue'
import App from './App.vue'
// import VueTypeaheadBootstrap from 'vue-typeahead-bootstrap';
import SimpleTypeahead from 'vue3-simple-typeahead';
// Required dependency of bootstrap css/scss files
//import 'bootstrap/scss/bootstrap.scss';

const app = createApp(App)
//app.component('vue-typeahead-bootstrap', VueTypeaheadBootstrap)
app.use(SimpleTypeahead);
app.mount('#app')


