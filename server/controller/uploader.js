Meteor.startup(function() {

 /*   Photo_Uploads = new FS.Collection("photo_uploads", {
        stores: [new FS.Store.FileSystem("photo_uploads", {path: "~/projectUploads"})]
    });
*/
    Photo_Uploads.allow({
        insert:function(userId,doc){
            //console.log(userId);
            //if(userId === Houston._admins.find().fetch()[0].user_id)
            return true;
            //else
            //  return false;
        },
        update:function(userId,doc){
            console.log(userId);
            if(userId === Houston._admins.find().fetch()[0].user_id)
                return true;
            else
                return false;
        },
        remove:function(userId,doc){
           // console.log(userId);
           // if(userId === Houston._admins.find().fetch()[0].user_id)
                return true;
           // else
               // return false;
        },
        download:function(userId,doc){
            console.log(userId);

            return true;
        }
    });

});

/*Uploads = new FS.Collection("photo_uploads", {
    stores: [new FS.Store.FileSystem("photo_uploads", {path: "~/projectUploads"})]
});*/

/*
Meteor.publish('uploads',function(){
    return Photo_Uploads.find();
});*/

