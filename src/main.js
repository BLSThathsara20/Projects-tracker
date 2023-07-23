import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";

// Set the base URL for Axios requests
axios.defaults.baseURL = "http://localhost:5002"; // Update the port if your server is running on a different port

// Make Axios globally available in Vue components
const app = createApp(App);
app.config.globalProperties.$http = axios;

// Add Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

// Add Stylesheet
import './assets/css/style.css'

// Add Smooth Scrolling
import VueScrollTo from 'vue-scrollto';

app.use(store)
app.use(router)
app.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: -60,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
}).mount('#app')
