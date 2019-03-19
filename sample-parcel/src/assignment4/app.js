new Vue({
  el: '#exercise',
  data: {
    highlight: false,
    currentEffect: {}
  },
  watch: {
    highlight: function() {
      this.currentEffect = {
        highlight: this.highlight,
        shrink: !this.highlight
      }
    }
  },
  methods: {
    startEffect: function() {
      var vm = this
      setInterval(() => {
        vm.highlight = !vm.highlight
      }, 1000)
    },
    startProgress: function() {}
  }
})
