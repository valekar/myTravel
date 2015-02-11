

Template.photosTemplate.events({
    'click #uploadme':function(e,templ){
        //  var url = $('fileMe').val();

        var file = $('#fileMe')[0].files[0];
        if(file){
            console.log(file.name);
        }


        var fileObj = new FS.File(file);



        Photo_Uploads.insert(fileObj,function(err,result){
           if(result._id.length>0){
               Session.set("fileId",result._id);
           }

        });




    },
    'click input[type="radio"]':function(e,templ) {

        Session.set('photoId', '');
        Session.set('photoId', e.target.value);

    },
    'click #remove':function(e,templ){
       // alert("asd");
        Photo_Uploads.remove({_id:Session.get('photoId')});
        Session.set('photoId','');
    },
    'click #setMapping':function(){
        var fileId = Session.get('fileId');
        var url = findUrl(fileId);
        var articleId = $('input[name=articleIdRadio]:checked').val();
        var photoCaption = $('#photoCaption').val();

        var photoId = Photo.insert({url:url,photo_uploader_id:fileId,caption:photoCaption});
        ArticlePhoto.insert({articleId:articleId,photoId:photoId,photoUrl:url});

    }
});

Template.photosTemplate.helpers({
    uploads:function(){
        return Photo_Uploads.find().fetch();
    },
    articles:function(){
        return Article.find().fetch();
    }

});

Template.adminBodyTemplate.helpers({
    isAdmin:function(){
        return Session.get("isAdmin");
    }
})

//console.log("Inserted !!");
//console.log(fileObj);
function findUrl(fileId){
    var url = Photo_Uploads.find({_id:fileId}).fetch()[0].url();

    console.log("URRLL :: "+url);
    return url;
}