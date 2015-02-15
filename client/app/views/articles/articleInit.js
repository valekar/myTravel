Template.headerArticleTemplate.rendered = function(){

    if(headerArticles){
        $('.post-content > div').addClass("herotext");
    }

};

Template.photosTemplate.rendered=function(){
  Session.set('fileObj',false);
};

Template.showArticleTemplate.rendered=function(){
    Meteor.subscribe('articleComments');
    Session.set('nextComments',0);
}

Meteor.autorun(function(){
    //console.log(Session.get('nextComments'));
    Meteor.subscribe('articleComments',Session.get('nextComments'));
});