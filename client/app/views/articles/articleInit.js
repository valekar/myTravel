Template.headerArticleTemplate.rendered = function(){

    if(headerArticles){
        $('.post-content > div').addClass("herotext");
    }

};

Template.photosTemplate.rendered=function(){
  Session.set('fileObj',false);
};