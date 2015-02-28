Meteor.methods({

    'insertPhoto':function(userId,url,fileId,photoCaption){
        if(userId === Houston._admins.find().fetch()[0].user_id){
           var photoId = Photo.insert({url:url,photo_uploader_id:fileId,caption:photoCaption});
            return photoId;
        }
        else{
            throw new Error("Could not insert the photo");
        }

    },
    'insertArticlePhoto':function(userId,articleId,photoId,url,created_at){
        if(userId === Houston._admins.find().fetch()[0].user_id){
            var id = ArticlePhoto.insert({articleId:articleId,photoId:photoId,photoUrl:url,created_at:created_at});
            return id;
        }
        else{
            throw new Error("Could not insert the ArticlePhoto");
        }
    },
    'insertDummyArticle':function(userId){
        if(userId === Houston._admins.find().fetch()[0].user_id){
           var id =  Article.insert({title:"dummy",content:"dummy",
                featured:false,summary:"dummy",created_by:"admin",timestamp:"date"});
            return id;
        }
        else{
            throw new Error("Could not insert the dummy article");
        }
    },
    'insertComment':function(comment){
      if(Meteor.user()){
         var comment= Comment.insert(
             {
                 userId:comment.userId,
                 userName:comment.userName,
                 userPictureUrl: comment.userPictureUrl,
                 articleId:comment.articleId,
                 repliedToId:comment.repliedToId,
                 commentContent:comment.commentContent,
                 created_at:comment.created_at
             });

          return comment;
      }
        else{
          throw new Error("Couldnt insert the comment ");
      }
    }

});