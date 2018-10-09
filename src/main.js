// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  data: {
    name: 'Pujan',
    job: 'Ninja',
    website: 'http://thapapujan.com.np',
    websiteTag: '<a href="http://thapapujan.com.np">Site</a>',
    age: 25
  },
  methods: {
    greet: function (time) {
      return 'Good ' + time + ' ' + this.name
    },
    add: function () {
      this.age++
    },
    subtract: function () {
      this.age--
    }
  }
})
