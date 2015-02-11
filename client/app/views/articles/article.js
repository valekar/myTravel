Template.articleTemplate.helpers({
   articles:function(){

       var articles  = Article.find().fetch();

       for(var i=0;articles.length();i++){
           //var article =  articles[i];
           //articles[i]= $.extend(articles[i],article);

               console.log("ulala");
               var photoUrl = ArticlePhoto.find({articleId:articles[i]._id}).fetch()[0].photoUrl;
               articles[i].photoUrl = photoUrl;

       }


       return articles
   }

});




Template.headerArticleTemplate.helpers({

/*
    'headerArticle':function(){




        //HeaderArticle = $.extend(HeaderArticle,)

        return HeaderArticle;
    }
*/


});

Template.showArticleTemplate.events({
   'click #goBacktoHome':function(e,templ){
        Session.set("showArticle",false);
        Router.go("/");
   }
});