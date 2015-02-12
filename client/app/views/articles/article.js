/*Show the list all the articles*/
Template.articleTemplate.helpers({
   articles:function(){

       var articles  = Article.find().fetch();

       for(var i=0;i<articles.length;i++){
           //var article =  articles[i];
           //articles[i]= $.extend(articles[i],article);

           //console.log("ulala");
           //var photoUrl = ArticlePhoto.find({articleId:articles[i]._id}).fetch()[0].photoUrl;
           var arPhArray =ArticlePhoto.find({articleId:articles[i]._id}).fetch();
           var photoUrl =arPhArray[arPhArray.length-1].photoUrl;
            console.log(articles[i]);
           articles[i].photoUrl = photoUrl;

       }


       return articles
   }

});




Template.headerArticleTemplate.helpers({


});

/*used in single page showArticle */
Template.showArticleTemplate.events({
   'click #goBacktoHome':function(e,templ){
       //got back to the root
        Session.set("headerArticle",true);
       Session.set("showArticle",false);
        Router.go("/");
   },
    'click #commentSubmit':function(e,templ){
        /*use the session userComment across templates to get the userComment*/
        e.preventDefault();
        // alert("alasd");
        var userComment = $("#userComment").val();

        if(userComment.length<=0){
            alert("please write your valuable comment");
        }
        else{
            if(!Meteor.user()){
                if(!Session.get('commentLogin')){
                    //this session is used to show/hide the login block
                    Session.set('commentLogin',true);
                    //used to set the user comment
                    Session.set('userComment',userComment);

                }else{
                    Session.set('commentLogin',false);
                    Session.set('userComment',userComment);
                }
            }else{
                Session.set('userComment',userComment);
                //var userComment = Session.get('userComment');
                //alert("submitting" + userComment);
                commentLogic();

            }

        }


    },
    'click #facebookLogin':function(e,templ){
        Meteor.loginWithFacebook({
            requestPermission:['user','email']
        },function(err){
            if(err){

            }else{
                //got the userComment from commitSubmit event
                //var userComment = Session.get('userComment');
                //alert("submiiting your comment :: "+ userComment);

                commentLogic();

            }
        });
    }
});


Template.showArticleTemplate.helpers({
   'commentLogin':function(){
       return Session.get("commentLogin");
   },
    'notLoggedIn':function(){
        var flag = true;
        if(Meteor.user()){
            flag = false;
        }
        return flag;
    },
    'articleComments':function(){
        //Sesion.get('articleid') is set in iron router
        var comments = Comment.find({articleId:Session.get('articleId')}).fetch();

       /* for(var i = 0;i<comment.length;i++){
            var user = Meteor.users.find({_id:comment.userId}).fetch()[0];
            comment[i].userName = user.username;
            comment[i].userPicture =
        }*/

        return comments;
    }
});


function commentLogic(){
    var userComment = Session.get('userComment');
    var user = Meteor.user();
    var comment = Comment.insert({userId:user._id,userName:user.profile.name,
        userPictureUrl: user.profile.picture,articleId:Session.get('articleId'),
        repliedToId:null,commentContent:userComment,created_at:new Date()+""});
    alert("commentId"+ comment);
}