Template.articleTemplate.helpers({
   articles:function(){
       return Article.find().fetch();
   }
});