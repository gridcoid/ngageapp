import Vue from 'vue'
import * as icons from 'ico' // your local dependency

Object.entries(icons).forEach(([name, component]) => {
  Vue.component(name, component)
})
