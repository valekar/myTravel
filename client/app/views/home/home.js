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
       // $("#articlePrevious").parent().removeClass("disabled");
        console.log("clicked articleNext");
        if(articlesCount <25){
            //$("#articleNext").parent().addClass("disabled");
            Session.set('fromArticleNo',0);
        }else{
            // this has been set in the iron router
            Session.set('fromArticleNo',Session.get('fromArticleNo')+25);
        }

    }
});