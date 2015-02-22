
/*Meteor.autorun(function(){
    Meteor.subscribe('otherArticles');
});*/


Template.allArticlesTemplate.rendered =function(){
    Session.set("noOfArticles",Article.find({featured:false}).count());

}



