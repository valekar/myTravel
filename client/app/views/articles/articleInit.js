Template.headerArticleTemplate.rendered = function(){

    if(headerArticles){
        $('.post-content > div').addClass("herotext");
    }

};

Template.photosTemplate.rendered=function(){
  Session.set('fileObj',false);
};

Template.showArticleTemplate.rendered=function(){
    Meteor.subscribe('articleComments');
    Session.set('nextComments',0);
}

Meteor.autorun(function(){
    //console.log(Session.get('nextComments'));
    Meteor.subscribe('articleComments',Session.get('nextComments'));
});



Template.articleTemplate.created = function () {

    // 1. Initialization

    var instance = this;

    // initialize the reactive variables
    instance.loaded = new ReactiveVar(0);
    instance.limit = new ReactiveVar(5);
    instance.ready = new ReactiveVar(false);

    // ...

    instance.autorun(function () {

        // get the limit
        var limit = instance.limit.get();

        //console.log("Asking for " + limit + " articles…")

        // subscribe to the articles publication
        var subscription = Meteor.subscribe('articles', limit);

        // if subscription is ready, set limit to newLimit
        if (subscription.ready()) {
            //console.log("> Received " + limit + " articles. \n\n")
            instance.loaded.set(limit);
            instance.ready.set(true);
        } else {
            instance.ready.set(false);
            //console.log("> Subscription is not ready yet. \n\n");
        }
    });

    instance.articles = function() {
        var articles = Article.find({}, {limit: instance.loaded.get()});
        return articles;
    }

};