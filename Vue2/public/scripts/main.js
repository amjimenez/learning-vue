new Vue({
    el: '#main',
    data: {
        counter: 0,
        x: 0,
        y: 0
    },
    methods:{
        increase: function(){
            this.counter+=2;
        },
        updateCoordinates: function(event){
            this.x = event.clientX;
            this.y = event.clientY;
        }
    }
});