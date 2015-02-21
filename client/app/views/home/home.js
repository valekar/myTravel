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

            // this has been set in the iron router
            Session.set('fromArticleNo',Session.get('fromArticleNo')+25);


    }
});

/*Show the list all the articles*/
Template.articleTemplate.helpers({
    articles:function(){

        var articles  = Article.find({featured:false},{sort:{created_at:-1},
            limit:Session.get('fromArticleNo')}).fetch();

        for(var i=0;i<articles.length;i++){
            var arPhArray =ArticlePhoto.find({articleId:articles[i]._id}).fetch();
            var photoUrl =arPhArray[arPhArray.length-1].photoUrl;
            //  console.log(articles[i]);
            articles[i].photoUrl = photoUrl;

        }


        return articles
    }

});







Template.headerArticleTemplate.helpers({
    'headerNotImageLoaded':function(){

        return Session.get("headerNotSet");
    }
});