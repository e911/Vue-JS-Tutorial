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
    age: 25,
    x: 0,
    y: 0,
    newName: '',
    newAge: 30,
    a: 0,
    b: 0
  },
  methods: {
    greet: function (time) {
      return 'Good ' + time + ' ' + this.name
    },
    add: function (inc) {
      this.age += inc
    },
    subtract: function (dec) {
      this.age -= dec
    },
    updateXY: function (event) {
      this.x = event.offsetX
      this.y = event.offsetY
    },
    clickME: function () {
      alert('Event modifier: Prevent Default!')
    },
    inputName: function () {
      alert('Entered name!')
    },
    inputAge: function () {
      alert('Entered Age!')
    }
  },
  computed: {
    addToA: function () {
      return this.a + this.newAge
    },
    addToB: function () {
      return this.b + this.newAge
    }
  }
})
