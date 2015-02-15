

Template.homeBodyTemplate.rendered = function(){
    //Pages = new Meteor.Pagination("article");
    Session.set('headerArticle',true);

};

Meteor.autorun(function(){
    Meteor.subscribe('articles',Session.get('fromArticleNo'));
});


Template.allArticlesTemplate.rendered =function(){
    Session.set("noOfArticles",Article.find({featured:false}).count());

}



