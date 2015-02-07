

Template.photosTemplate.events({
    'click #uploadme':function(e,templ){
        //  var url = $('fileMe').val();

        var file = $('#fileMe')[0].files[0];
        if(file){
            console.log(file.name);
        }

        var fileObj = new FS.File(file);

        console.log(fileObj);

        Photo_Uploads.insert(fileObj,function (err, fileObj) {

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
    }
});

Template.photosTemplate.helpers({
    uploads:function(){
        return Photo_Uploads.find().fetch();
    }

});

Template.adminBodyTemplate.helpers({
    isAdmin:function(){
        return Session.get("isAdmin");
    }
})

