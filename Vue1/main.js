new Vue({
    el: '#main',
    data:{
        title: 'Hello World'
    },
    methods: {
        changeTitle: function(event){
            this.title = event.target.value;
        }
    }
});


new Vue({
    el: '#second',
    data:{
        title: 'You have accessed an attribute on data'
    },
    methods: {
        sayHello: function(){
            return this.title
        }
    }
});