Template.articleTemplate.helpers({
   articles:function(){
       return Article.find().fetch();
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