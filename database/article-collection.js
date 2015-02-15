Schemas ={};

Article = new Mongo.Collection('article');
Article.friendlySlugs('title');
Schemas.Article = new SimpleSchema({
   title:{
       type:String,
       optional:false,
       label:"Article Title"
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
        type:String,
        optional:false,
        label:"Created Date"
    },
    summary:{
        type:String,
        optional:false,
        label:"Home page summary"
    },
    featured:{
        type:Boolean,
        optional:false,
        label:"A flag for header articles"

    }
});


Article.attachSchema(Schemas.Article);


