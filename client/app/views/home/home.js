Template.homeBodyTemplate.helpers({
   'headerArticle':function(){
       return Session.get("headerArticle");
   },'showArticle':function(){
        return Session.get("showArticle");
    }
});

Template.showArticleTemplate.events({


});