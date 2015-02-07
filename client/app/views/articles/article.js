Template.articleTemplate.helpers({
   articles:function(){
       return Article.find().fetch();
   }

});

Template.headerArticleTemplate.helpers({

    headerArticle:function(){
    return Article.findOne();
}

});