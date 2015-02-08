Schemas = {};
ArticlePhoto = new Mongo.Collection("articlePhotos");


Schemas.ArticlePhoto = new SimpleSchema({
   articleId:{
       type:String,
       optional:false
   } ,
    photoId:{
        type:String,
        optional:false
    },
    photoUrl:{
        type:String,
        optional:false
    }
});

ArticlePhoto.attachSchema(Schemas.ArticlePhoto);
