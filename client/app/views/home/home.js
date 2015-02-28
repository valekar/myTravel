/*
* This js mainly contains logic for article.html
* (article Template which lists all the templates after headerArticle)
*
* */

Template.homeBodyTemplate.helpers({
   'headerArticle':function(){
       return Session.get("headerArticle");
   },'showArticle':function(){
        return Session.get("showArticle");
    }
});


/*// for pagination
Template.allArticlesTemplate.events({
    'click #articleNext':function(e,templ){

        var articlesCount = Article.find({featured:false}).count();

            // this has been set in the iron router
            Session.set('fromArticleNo',Session.get('fromArticleNo')+25);


    }
});*/






Template.headerArticleTemplate.helpers({
    'headerNotImageLoaded':function(){

        return Session.get("headerNotSet");
    }
});