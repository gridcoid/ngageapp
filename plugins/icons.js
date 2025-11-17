import Vue from 'vue'
import * as Icons from 'ico'  // imports your ico library

// Optional: register only in production to speed up dev
if (process.env.NODE_ENV === 'production') {
  Object.keys(Icons).forEach(name => {
    Vue.component(name, Icons[name])
  })
}
