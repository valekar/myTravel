Schemas = {};

Photo = new Meteor.Collection("photo");


Schemas.Photos = new SimpleScehma({
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


/**************************/
Photo_Uploads = new FS.Collection("photo_uploads", {
    stores: [new FS.Store.FileSystem("photo_uploads", {path: "~/projectPhotoUploads"})]
});
/**************************/
