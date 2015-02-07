Schemas = {};
Genre = new Mongo.Collection('genre');

Schemas.Genre = new SimpleSchema({
   name :{
       type:String,
       label:"Genre Type",
       optional:false
   } ,
    timestamp:{
        type:String,
        label:"created at",
        optional:false
    },
    created_by:{
        type:String,
        label:"created by",
        optional:false
    }
});

Genre.attachSchema(Schemas.Genre);

