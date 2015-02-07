Schemas = {};

Photo = new Mongo.Collection("photo");


Schemas.Photos = new SimpleSchema({
   caption :{
       type:String,
       optional:false,
       label:"Photo caption!!"
   } ,
    url:{
        type:String,
        optional:false,
        label:"Url of the photo"
    },
    photo_uploader_id:{
        type:String,
        optional:false,
        label:"Uploader ID"
    }
});


Photo.attachSchema(Schemas.Photos);


