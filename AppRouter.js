Router.configure({
    layoutTemplate: "mainLayout",
    loadingTemplate: "loading"
    //notFoundTemplate: "missing"
});

Router.map(function(){

    this.route('home', {
        path: '/',
        waitOn: function(){
            Meteor.subscribe('elems');
        }
    });

});