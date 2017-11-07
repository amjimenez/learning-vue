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
        header: 'Playing with Vue',
        title: 'You have accessed an attribute on data',
        link: 'http://google.com',
        completeLink: '<a href="google.com.mx">Google</a>'
    },
    methods: {
        sayHello: function(){
            return this.title
        },
        newHeader: function(){
            this.header = "Playing With Vue Again";
            return this.header
        }
    }
});