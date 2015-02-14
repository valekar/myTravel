Template.homeBodyTemplate.helpers({
   'headerArticle':function(){
       return Session.get("headerArticle");
   },'showArticle':function(){
        return Session.get("showArticle");
    }
});

Template.showArticleTemplate.events({


});

// for pagination
Template.allArticlesTemplate.events({
    'click #articleNext':function(e,templ){

        var articlesCount = Article.find({featured:false}).count();
        $("#articlePrevious").parent().removeClass("disabled");

        if(articlesCount ==1){
            $("#articleNext").parent().addClass("disabled");
            Session.set('fromArticleNo',1);
        }else{
            // this has been set in the iron router
            Session.set('fromArticleNo',Session.get('fromArticleNo')+1);
        }

    },'click #articlePrevious':function(e,templ){

        var articlesCount = Article.find({featured:false}).count();
        $("#articleNext").parent().removeClass("disabled");
        //console.log(articlesCount);
        if(Number(Session.get("noOfArticles")) ==articlesCount){
            //console.log("asdads");
            //Session.set('fromArticleNo',0);
            $("#articlePrevious").parent().addClass("disabled");

        }else{
            Session.set('fromArticleNo',Session.get('fromArticleNo')-1);
        }

    }
})