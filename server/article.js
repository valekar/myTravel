Article.allow({
    remove:function(id){
        //if(Meteor.userId() == id){
        return true;
        //}else{
        //  return false;
        // }
    },
    update:function(){
        return true;
    },
    insert:function(){
        return true;
    }
});


Houston.methods("article",{
    "UpdateDate":function(article){
        //console.log(article);
        Article.update(article._id,{$set:{timestamp:moment().format('MMMM Do YYYY, h:mm:ss a')+""}});
        return article.title+" update successfully";
    }
})


Meteor.smartPublish('articles', function(fromArticle,xx) {
    console.log("rom Articlr no :; "+ fromArticle);
    return [Article.find({featured:true}),
        Article.find({featured:false},{skip:fromArticle})];
});


Meteor.publish('articlePhotos',function(){
   return ArticlePhoto.find();
});

Meteor.publish('photos',function(){
    return Photo.find();
});

Meteor.publish('articleComments',function(){
    return Comment.find();
});

Meteor.publish('adminUser',function(userId){
    return Houston._admins.find({user_id:userId});
});

Meteor.publish('photoUploads',function(){
   return Photo_Uploads.find();
});
