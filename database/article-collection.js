Schemas ={};

Article = new Mongo.Collection('article');
//Article = new Meteor.Pagination("article");
//var xx = Article.insert({title:"dummy",photos_ids:[],content:"dummy",created_by:"dummy",timestamp:"dummy",summary:"dummy",featured:true})
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


//Post = new Mongo.Collection('post');