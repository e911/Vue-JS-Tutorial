// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
var one = new Vue({
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
    b: 0,
    dynamic: true,
    available: false,
    nearby: false,
    error: false,
    success: false,
    whatis: ['Pujan', 'Thapa', 'Katunje', 'Bhaktapur'],
    whatisnot: [
      {name: 'Pujan', age: 20},
      {name: 'Thapa', age: 18},
      {name: 'Josh', age: 20}
    ]
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
    },
    dynaClasses: function () {
      return {available: this.available, nearby: this.nearby}
    }
  }
})

var two = new Vue({
  el: '#new-instance',
  data:{
    title: 'New Vue Instance'
  },
  computed: {
    fromOne: function () {
      return one.name
    }
  }
})
