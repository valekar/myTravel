Schemas ={}

Article = new Mongo.Collection('article');


Schemas.Article = new SimpleSchema({
   title:{
       type:String,
       optional:false,
       label:"Article Title"
   },

    photos_ids :{
        type:[Object],
        label:"Article's Photos!!",
        optional:false
    },
    content:{
        type:String,
        label:"Article content",
        optional:false
    },
    created_by:{
        type:String,
        optional:false,
        label:"Article Creator!!"
    },
    timestamp:{
        type:Date,
        optional:false,
        label:"Created Date"
    }
});


Article.attachSchema(Schemas.Article);


//Post = new Mongo.Collection('post');