

/*

AdminConfig = {
   name: 'sendMeMeal',
   adminEmails: ['srinivas.valekar@gmail.com'],
   collections: {
      Food: {},
      Uploads:{}
   }
};

AdminConfig = {
   collections: {
      Food: {}
   }
};




*/


/************************USER*********************************/
/**
 * User Schema Not required as it is created by accounts_password package
 * name:String
 * phone_number:number
 * company:String
 * */
/************************USER*********************************/

/**************************/
Photo_Uploads = new FS.Collection("uploads", {
   stores: [new FS.Store.FileSystem("uploads", {path: "~/projectPhotoUploads"})]
});
/**************************/




//Post = new Mongo.Collection('post');