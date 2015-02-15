Comment = new Meteor.Collection('comment');
Schemas = {};

Schemas.comment = new SimpleSchema({
    userId:{
        type:String,
        optional:false
    },
    repliedToId:{
        type:String,
        optional:true
    },
    commentContent:{
        type:String,
        optional:false
    },
    created_at:{
        type:String,
        optional:false
    },
    articleId:{
        type:String,
        optional:false
    },
    userName:{
        type:String,
        optional:false
    },
    userPictureUrl:{
        type:String,
        optional:false
    }
});

Comment.attachSchema(Schemas.comment);

