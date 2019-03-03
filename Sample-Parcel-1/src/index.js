if (module.hot) {
  module.hot.accept(function() {
    window.location.reload()
  })
}

new Vue({
  el: '#app',
  data: {
    name: 'Thomas ',
    finishedLink: '<a href="http://www.google.com">Google</a>',
    counter: 0,
    x: 0,
    y: 0,
    otherCounter: 0
  },
  computed: {
    output: function() {
      console.log('computed')
      return this.otherCounter > 5 ? 'Greater than 5' : 'Smaller than 5'
    }
  },
  methods: {
    increase: function(step, event) {
      this.counter += step
    },
    result: function() {
      console.log('method')
      return this.otherCounter > 5 ? 'Greater than 5' : 'Smaller than 5'
    },
    updateCoordinates: function(event) {
      this.x = event.clientX
      this.y = event.clientY
    },
    alertMe: function() {
      alert('Alert!')
    }
  }
})
