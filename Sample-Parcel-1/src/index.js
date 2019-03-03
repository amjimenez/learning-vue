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
    y: 0
  },
  methods: {
    increase: function(step, event) {
      this.counter += step
    },
    updateCoordinates: function(event) {
      this.x = event.clientX
      this.y = event.clientY
    },
    dummy: function(event) {
      event.stopPropagation()
    }
  }
})
